import {Request, Response} from 'express'
import {RemoveItemOrderService} from '../../services/order/RemoverItemOrderService'

class RemoveItemOrderController{

    async handle (req: Request, res: Response){
        console.log(req.query.id_Item);
        const id_Item = req.query.id_Item as string;      
        const removeItemOrderService = new RemoveItemOrderService();
        const order = await removeItemOrderService.execute({id_Item});
        return res.json(order);
    }
}

export {RemoveItemOrderController}