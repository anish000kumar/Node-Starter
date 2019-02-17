import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { email } from '@helpers/validations';

const userSchema = Schema(
  {
    firstName: {
      required: [true, 'firstName is required'],
      type: String,
    },
    lastName: String,
    email: {
      required: [true, 'email is required'],
      type: String,
      unique: true,
      validate: email,
    },
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    age: Number,
    resetPasswordHash: String,
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator);
export default model('User', userSchema);
