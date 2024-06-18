import {
  BadRequestError,
  NotFoundError,
  OrderStatus,
  UnauthorizedAccessError,
  requireAuth,
} from "@yonraztickets/common";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Order } from "../models/order";
import { stripe } from "../stripe";
import { Payment } from "../models/payment";
import { PaymentCreatedProducer } from "../events/producers/PaymentCreatedProducer";
import { kafkaWrapper } from "../kafka-wrapper";

const router = express.Router();

router.post(
  "/api/payments",
  requireAuth,
  [body("token").not().isEmpty(), body("orderId").not().isEmpty()],
  async (req: Request, res: Response) => {
    const { token, orderId } = req.body;
    const order = await Order.findById(orderId).populate("vinyl");
    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new UnauthorizedAccessError();
    }
    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError("Order is cancelled");
    }

    // const paymentData = await stripe.charges.create({
    //   currency: "usd",
    //   amount: order.price * 100,
    //   source: token,
    // });
    const paymentData = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: order.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    const payment = Payment.build({
      orderId,
      stripeId: paymentData.id,
    });
    await payment.save();

    const producer = new PaymentCreatedProducer(kafkaWrapper.client);
    await producer.produce({
      id: payment.id,
      orderId: payment.orderId,
      stripeId: payment.stripeId,
    });

    res
      .status(201)
      .send({ id: payment.stripeId, client_secret: paymentData.client_secret });
  }
);

export { router as createChargeRouter };
