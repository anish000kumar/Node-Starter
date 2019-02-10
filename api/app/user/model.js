import { Schema, model } from 'mongoose';

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  email: String,
  age: Number,
});

export default model('User', userSchema);
