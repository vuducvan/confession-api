import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ConfessionModelName = 'confession';

const ConfessionSchema = new Schema({
  userId: String,
  typeOf: String,
  content: String,
  imageLink: String,
  message: String,
  status: String,
  isDelete: Number,
  createdBy: String,
  createdAt: Date,
  updatedBy: String,
  updatedAt: Date,
});

ConfessionSchema.plugin(mongoosePaginate);

export { ConfessionModelName, ConfessionSchema };
