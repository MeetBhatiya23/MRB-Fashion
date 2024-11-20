import mongoose, { Schema } from "mongoose";
import { User } from "./user.models";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    title: {
      type: String,
      require: true,
      trim: true,
      maxlength: [100, "Title cannot exceed 5000 characters"],
    },
    discription: {
      type: String,
      require: true,
      trim: true,
      maxlength: [5000, "Discription cannot exceed 5000 characters"],
    },
    duration: {
      type: Number,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
