import mongoose, { Document, Schema } from 'mongoose';

interface ItemModel extends Document {
    name: string;
    description: string;
    // Add other fields as needed
}

const ItemSchema = new Schema<ItemModel>({
    name: String,
    description: String,
});

export default mongoose.model<ItemModel>('Item', ItemSchema);
