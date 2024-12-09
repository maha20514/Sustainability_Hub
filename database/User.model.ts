import { Schema, model, models, Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  image: string;
  password?: string;
  role: 'user' | 'admin';
  dateJoined: Date;

}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  dateJoined: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;
