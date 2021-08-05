const mongoose = require("mongoose");
const { isURL } = require("validator");

const videoSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      validate: { validator: isURL },
    },
    duree: {
      type: Number,
      required: true,
    },

    comments: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const videoModel = mongoose.model("video", videoSchema);
module.exports = videoModel;
