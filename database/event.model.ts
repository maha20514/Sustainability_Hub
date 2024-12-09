import { Schema, model, models, Document, Types } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  organizer: Types.ObjectId; // Reference to the user/organization
  participants: Types.ObjectId[]; // List of user IDs
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: {
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  },
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Event = models.Event || model<IEvent>('Event', EventSchema);

export default Event;
