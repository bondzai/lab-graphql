import { Request, Response } from 'express';
import itemService from '../services/item.service';

class ItemController {
    async create(req: Request, res: Response) {
        try {
            const item = await itemService.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const items = await itemService.findAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Implement other CRUD methods
}

export default new ItemController();
