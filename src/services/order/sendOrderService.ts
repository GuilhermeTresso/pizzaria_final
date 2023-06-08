import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class sendOrderService{

    async execute({id_pedido}:OrderRequest){

        const order = await prismaClient.pedido.update({
            data:{
                rascunho: false,
                status: true
            },
            where:{
                id:id_pedido
            },
            select:{
                id:true
            }
        })

        if(order != null)
        {
            return {ok:"Enviado com sucesso"}
        }
        else{
            return {Erro:"Falha ao enviar pedido"}
        }
    }
}
export {sendOrderService}