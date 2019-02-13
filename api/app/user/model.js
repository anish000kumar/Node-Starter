import { Schema, model } from 'mongoose';
import uniqueValidator  from 'mongoose-unique-validator';
import { email } from "@helpers/validations"

const userSchema = Schema({
  firstName: {
    required: [true, "firstName is required"],
    type: String
  },
  lastName: String,
  email: {
    required: [true, "email is required"],
    type: String,
    unique: true,
    validate: email
  },
  password: {
    required: true,
    type: String
  },
  age: Number,
});

userSchema.plugin(uniqueValidator);
export default model('User', userSchema);
