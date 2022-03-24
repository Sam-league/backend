import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  product_price: {
    type: Number,
    required: true,
    min: 100,
    max: 10000,
  },
  color: String,
});

export default new mongoose.model("products", productSchema);
