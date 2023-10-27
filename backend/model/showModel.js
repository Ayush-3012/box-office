import mongoose from "mongoose";

const showSchema = {
  id: {
    type: String,
    required: true,
  },
  show: {
    type: Object,
    required: true,
  },
};

export const Show = mongoose.model("Show", showSchema);
