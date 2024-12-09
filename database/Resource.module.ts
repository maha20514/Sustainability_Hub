import { Schema, model, models, Document } from 'mongoose';

export interface IResource extends Document {
  name: string;
  type: string; // e.g., "Recycling Center", "Eco-Friendly Store"
  mapUrl: string; // URL of the map location
  description: string;
  location: string;
  
}

const ResourceSchema = new Schema<IResource>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  mapUrl: { type: String, required: true }, // Store the map URL
  description: { type: String, required: true },
  location: { type: String, required: true },
 
});

const Resource = models.Resource || model<IResource>('Resource', ResourceSchema);

export default Resource;
