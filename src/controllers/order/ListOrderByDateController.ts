import { parse } from 'dotenv';
import {Request, Response} from 'express'
import { ListOrderByDateService } from '../../services/order/ListOrderByDateService'

class ListOrderByDateController{
    async handle(req: Request, res:Response){
        const {Order_Data,Order_Time} = req.body;
        console.log(Order_Data);
        const ListOrder = new ListOrderByDateService();
        const Order = await ListOrder.execute({Order_Data,Order_Time});
        return res.json(Order);
    }
}

export {ListOrderByDateController}