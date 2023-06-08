import prismaClient from "../../prisma";

interface ItemRequest{
    id_Item: string;
}

class RemoveItemOrderService{

    async execute({id_Item}:ItemRequest){

        const order = await prismaClient.item.delete({
            where:{
                id:id_Item
            }
        })
        return order;
    }
}
export {RemoveItemOrderService}