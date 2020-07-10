import mongoose, { Document, Schema } from "mongoose";

export interface IListing extends Document {
  title: String;
  image: String;
  address: String;
  price: Number;
  numOfGuests: Number;
  numOfBeds: Number;
  numbOfBath: Number;
  rating: Number;
}

const ListingSchema: Schema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  address: { type: String },
  price: { type: Number },
  numOfGuests: { type: Number },
  numOfBeds: { type: Number },
  numbOfBath: { type: Number },
  rating: { type: Number },
});

export const Listing = mongoose.model<IListing>("listings", ListingSchema);
