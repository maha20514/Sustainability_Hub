import { Schema, model, models, Document, Types } from 'mongoose';

export interface IForum extends Document {
  title: string;
  description: string;
  user: Types.ObjectId; // User who created the forum
  replies: { user: Types.ObjectId; message: string; date: Date }[]; // List of replies
  dateCreated: Date;
}

const ForumSchema = new Schema<IForum>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  replies: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      message: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
  dateCreated: { type: Date, default: Date.now },
});

const Forum = models.Forum || model<IForum>('Forum', ForumSchema);

export default Forum;
