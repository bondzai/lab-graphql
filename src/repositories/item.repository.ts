import ItemModel from '../models/item';

class ItemRepository {
    async create(itemData: any): Promise<any> {
        const item = new ItemModel(itemData);
        return await item.save();
    }

    async findAll(): Promise<any[]> {
        return await ItemModel.find().exec();
    }

    async findById(id: string): Promise<any | null> {
        return await ItemModel.findById(id).exec();
    }

    async update(id: string, itemData: any): Promise<any | null> {
        return await ItemModel.findByIdAndUpdate(id, itemData, { new: true }).exec();
    }

    async delete(id: string): Promise<any | null> {
        return await ItemModel.findByIdAndRemove(id).exec();
    }
}

export default new ItemRepository();
