import itemRepository from '../repositories/item.repository';

class ItemService {
    async create(itemData: any): Promise<any> {
        return await itemRepository.create(itemData);
    }

    async findAll(): Promise<any[]> {
        return await itemRepository.findAll();
    }

    async findById(id: string): Promise<any | null> {
        return await itemRepository.findById(id);
    }

    async update(id: string, itemData: any): Promise<any | null> {
        return await itemRepository.update(id, itemData);
    }

    async delete(id: string): Promise<any | null> {
        return await itemRepository.delete(id);
    }
}

export default new ItemService();
