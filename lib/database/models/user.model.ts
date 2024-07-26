import { models, model, Schema, Document } from "mongoose";

export interface IUser extends Document {
    clerkId, email, username, photo, firstname, lastname, planid, creditbalance

    title: string;
    transformation: string;
    publicId: string;
    secureUrl: string; // Using string instead of URL
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string; // Using string instead of URL
    aspectRatio?: number;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
        // Schema.Types.ObjectId;
    }
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true }, 
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: { type: URL },
    aspectRatio: { type: Number },
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image