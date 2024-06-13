import { Genre } from "@/types/genre";

export interface Vinyl {
  id: number;
  price: number;
  title: string;
  genre: Genre;
  imageUrl: string;
  description: string;
}

export const vinyls: Vinyl[] = [
  {
    id: 1,
    price: 19.99,
    title: "Thriller",
    genre: Genre.Pop,
    imageUrl: "https://example.com/thriller.jpg",
    description: "Michael Jackson's iconic album",
  },
  {
    id: 2,
    price: 14.99,
    title: "Abbey Road",
    genre: Genre.Rock,
    imageUrl: "https://example.com/abbeyroad.jpg",
    description: "The Beatles' classic album",
  },
  {
    id: 3,
    price: 9.99,
    title: "Back in Black",
    genre: Genre.Rock,
    imageUrl: "https://example.com/backinblack.jpg",
    description: "AC/DC's iconic album",
  },
  {
    id: 4,
    price: 12.99,
    title: "The Dark Side of the Moon",
    genre: Genre.Rock,
    imageUrl: "https://example.com/darksideofthemoon.jpg",
    description: "Pink Floyd's masterpiece",
  },
  {
    id: 5,
    price: 8.99,
    title: "Nevermind",
    genre: Genre.Rock,
    imageUrl: "https://example.com/nevermind.jpg",
    description: "Nirvana's breakthrough album",
  },
  {
    id: 6,
    price: 7.99,
    title: "Purple Rain",
    genre: Genre.Pop,
    imageUrl: "https://example.com/purplerain.jpg",
    description: "Prince's iconic album",
  },
  {
    id: 7,
    price: 11.99,
    title: "The Joshua Tree",
    genre: Genre.Rock,
    imageUrl: "https://example.com/joshuatree.jpg",
    description: "U2's classic album",
  },
  {
    id: 8,
    price: 6.99,
    title: "Rumours",
    genre: Genre.Rock,
    imageUrl: "https://example.com/rumours.jpg",
    description: "Fleetwood Mac's timeless album",
  },
  {
    id: 9,
    price: 10.99,
    title: "The Wall",
    genre: Genre.Rock,
    imageUrl: "https://example.com/thewall.jpg",
    description: "Pink Floyd's epic concept album",
  },
  {
    id: 10,
    price: 13.99,
    title: "Born to Run",
    genre: Genre.Rock,
    imageUrl: "https://example.com/borntorun.jpg",
    description: "Bruce Springsteen's classic album",
  },
  {
    id: 11,
    price: 15.99,
    title: "Hotel California",
    genre: Genre.Rock,
    imageUrl: "https://example.com/hotelcalifornia.jpg",
    description: "Eagles' iconic album",
  },
  {
    id: 12,
    price: 9.99,
    title: "The Eminem Show",
    genre: Genre.HipHop,
    imageUrl: "https://example.com/eminemshow.jpg",
    description: "Eminem's critically acclaimed album",
  },
  {
    id: 13,
    price: 12.99,
    title: "Appetite for Destruction",
    genre: Genre.Rock,
    imageUrl: "https://example.com/appetitefordestruction.jpg",
    description: "Guns N' Roses' debut album",
  },
  {
    id: 14,
    price: 8.99,
    title: "The Chronic",
    genre: Genre.HipHop,
    imageUrl: "https://example.com/thechronic.jpg",
    description: "Dr. Dre's influential album",
  },
  {
    id: 15,
    price: 7.99,
    title: "Led Zeppelin IV",
    genre: Genre.Rock,
    imageUrl: "https://example.com/ledzeppeliniv.jpg",
    description: "Led Zeppelin's classic album",
  },
  {
    id: 16,
    price: 11.99,
    title: "Nevermind",
    genre: Genre.Rock,
    imageUrl: "https://example.com/nevermind.jpg",
    description: "Nirvana's breakthrough album",
  },
  {
    id: 17,
    price: 6.99,
    title: "The Velvet Underground & Nico",
    genre: Genre.Rock,
    imageUrl: "https://example.com/velvetunderground.jpg",
    description: "The Velvet Underground's influential album",
  },
  {
    id: 18,
    price: 10.99,
    title: "Pet Sounds",
    genre: Genre.Rock,
    imageUrl: "https://example.com/petsounds.jpg",
    description: "The Beach Boys' masterpiece",
  },
  {
    id: 19,
    price: 13.99,
    title: "OK Computer",
    genre: Genre.Rock,
    imageUrl: "https://example.com/okcomputer.jpg",
    description: "Radiohead's groundbreaking album",
  },
  {
    id: 20,
    price: 15.99,
    title: "The Queen Is Dead",
    genre: Genre.Rock,
    imageUrl: "https://example.com/queenisdead.jpg",
    description: "The Smiths' classic album",
  },
  {
    id: 21,
    price: 9.99,
    title: "The Miseducation of Lauryn Hill",
    genre: Genre.RnB,
    imageUrl: "https://example.com/miseducation.jpg",
    description: "Lauryn Hill's critically acclaimed album",
  },
  {
    id: 22,
    price: 12.99,
    title: "The Beatles (The White Album)",
    genre: Genre.Rock,
    imageUrl: "https://example.com/whitealbum.jpg",
    description: "The Beatles' iconic album",
  },
];
