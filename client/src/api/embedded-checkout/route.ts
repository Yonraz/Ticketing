import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest) {
  try {
    const { orderId, orderPrice, name } = request.body;

    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: orderPrice * 100,
      product_data: {
        name,
      },
    });
    const paymentData = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      metadata: {
        orderId,
      },
      mode: "payment",
      return_url: `${request.headers.origin}/orders?session_id={CHECKOUT_SESSION_ID}`,
      success_url: `${request.headers.origin}/orders/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: paymentData.id,
      client_secret: paymentData.client_secret,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
