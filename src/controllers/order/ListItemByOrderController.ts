import {Request, Response} from 'express';
import { ListItembyOrderService } from '../../services/order/ListItembyOrderService'

class ListItemByOrderController{
    async handle(req: Request, res: Response){
        const id_Order = req.query.id_Order as string;
        const listByCategory = new ListItembyOrderService();
        const product = await listByCategory.execute({
            id_Order
        });
        return res.json(product);
    }
}
export{ListItemByOrderController}