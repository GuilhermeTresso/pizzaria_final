import prismaClient from "../../prisma";

interface OrderRequest{
    id_Order: string;
}

class ListItembyOrderService{

    async execute({id_Order}: OrderRequest){
        const OrderRequest = await prismaClient.item.findMany({
            where: {
                id_pedido: id_Order
            }
        })

        return OrderRequest;
    }
}

export {ListItembyOrderService}