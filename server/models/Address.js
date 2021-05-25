import { Schema, model } from "mongoose";

/* User Address */
const userAddressesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: {
      city: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
      barangay: { type: String, required: true, trim: true },
    },
  },
  { timestamps: true }
);

export default model("UserAddress", userAddressesSchema);
