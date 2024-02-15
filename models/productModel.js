import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategory: {
      type: mongoose.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    discount: {
      type: Number,
      required: true,
    },
    photo:[ {
      data: Buffer,
      contentType: String,
    }],
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);