import {Request, Response} from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService'

class FinishOrderController{
    async handle(req: Request, res: Response){
        const id_Order = req.query.id_Order as string;
        const FinishOrder = new FinishOrderService();
        const product = await FinishOrder.execute({
            id_Order
        });
        return res.json(product);
    }
}
export{FinishOrderController}