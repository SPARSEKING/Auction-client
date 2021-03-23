import { getters } from "./getters";

export const state = {
  contact: {
    title: "Car Auction - Contact",
    text: `We will answer all your questions. Remember that you can always
    receive a quote without any obligation. Don't wait, contact our
    customer service department now!`,
    street: "19 Lenina street, Minsk, 222160",
    telephone: "tel. +375299102000",
    email: "gavrilchikkirill@gmail.com"
  }
};

export const contact = {
  state,
  getters
};
