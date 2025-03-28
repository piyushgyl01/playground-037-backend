const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1885,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid", "other"],
      default: "petrol",
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic", "cvt"],
      default: "manual",
    },
    mileage: {
      type: Number,
      default: 0,
      min: 0,
    },
    features: {
      type: [String],
      default: [],
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "pg37User"
    // },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pg37Car", carSchema);
