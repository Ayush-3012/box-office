import mongoose from "mongoose";

const showSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    show: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Show = mongoose.model("Show", showSchema);
