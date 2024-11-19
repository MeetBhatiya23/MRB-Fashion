import mongoose from "mongoose";

const ProductData = new mongoose.Schema(
  {
    title: { type: String, require: true },
    details: {
      type: Array,
      require: true,
    },
    description: {
      type: Array,
      require: true,
    },
    fashionType: {
      type: String,
      require: true,
    },
    ClothesType: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    offer: {
      type: Number,
      require: true,
      default: 0,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    themes: {
      type: String,
      require: true,
    },
    Material: {
      type: Array,
      require: true,
    },
    colour: {
      type: Map,
      of: {
        sizes: {
          type: Map,
          of: Number,
        },
        images: {
          type: Array,
          require: true,
        },
      },
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductData);
