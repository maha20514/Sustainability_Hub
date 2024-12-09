import { Schema, model, models, Document, Types } from 'mongoose';

export interface IChallenge extends Document {
  title: string;
  description: string;
  duration: number; // Challenge duration in days
  difficulty?: 'Easy' | 'Medium' | 'Hard'; // Optional field
  reward?: string; // e.g., "Earn a bronze badge!"
  participants: Types.ObjectId[]; // Array of user IDs
}

const ChallengeSchema = new Schema<IChallenge>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  reward: { type: String },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Challenge = models.Challenge || model<IChallenge>('Challenge', ChallengeSchema);

export default Challenge;
