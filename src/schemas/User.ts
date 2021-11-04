import mongoose, { Document, Schema } from "mongoose";

type User = Document & {
  email: String;
  socket_id: String;
  name: String;
  avatar: String;
};

const UserShema = new Schema({
  email: String,
  socket_id: String,
  name: String,
  avatar: String,
});

const User = mongoose.model<User>("Users", UserShema);

export { User };
