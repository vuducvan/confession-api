import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;
const ModelName = 'user';

const PermissionSchema = {
  canCreate: Number,
  canRead: Number,
  canUpdate: Number,
  canDelete: Number,
  canApprove: Number,
  url: String,
};

const UserSchema = new Schema({
  fullName: String,
  email: String,
  dateOfBirth: String,
  class: String,
  facebookLink: String,
  username: String,
  password: String,
  role: String,
  permission: PermissionSchema,
  isDelete: Number,
  createdBy: String,
  createdAt: Date,
  updatedBy: String,
  updatedAt: Date,
});

UserSchema.plugin(mongoosePaginate);

export { UserSchema, ModelName };
