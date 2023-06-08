import {Request, Response} from 'express'
import {sendOrderService} from '../../services/order/sendOrderService'

class sendOrderController{

    async handle (req: Request, res: Response){
        
        const id_pedido = req.query.id_pedido as string;
        const sendService = new sendOrderService();
        const order = await sendService.execute({id_pedido});
        return res.json(order);
    }
}

export {sendOrderController}