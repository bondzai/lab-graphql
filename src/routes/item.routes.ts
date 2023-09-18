import express from 'express';
import itemController from '../controllers/item.controller';

const router = express.Router();

router.post('/items', itemController.create);
router.get('/items', itemController.findAll);
// router.get('/items/:id', itemController.findById);
// router.put('/items/:id', itemController.update);
// router.delete('/items/:id', itemController.delete);

export default router;
