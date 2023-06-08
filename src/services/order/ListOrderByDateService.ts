import prismaClient from "../../prisma";

interface OrderRequest{
    Order_Data:string;
    Order_Time:string;
}

class ListOrderByDateService {    
    async execute({Order_Data,Order_Time}:OrderRequest){
        let OrderDateTime = "";
        if(Order_Data != null){
            OrderDateTime = Order_Data
        }
        console.log(OrderDateTime + "aqui");
        if(Order_Time != null)
        {
            OrderDateTime += "T" + Order_Time + "Z";
        }
        else{
            return {Erro: "informe uma data valida"}
        }
        console.log(OrderDateTime);

        const order = await prismaClient.pedido.findMany({
           select: {
            id:true,
            nome: true,
            criado_em:true
           },
           where:
           {
                criado_em:
                {
                    //gte: new Date(Order_Data).                    
                    gte: new Date(OrderDateTime)
                    //gte: new Date("2023-05-23T22:22:52.031Z").toISOString()
                }
           }
                      
        })
        return order;
    }
}
export {ListOrderByDateService}
