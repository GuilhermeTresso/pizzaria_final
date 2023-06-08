import prismaClient from "../../prisma";

interface OrderRequest{
    id_Order: string;
}

class FinishOrderService{

    async execute({ id_Order }: OrderRequest) {
        const OrderRequest = await prismaClient.item.findMany({
          where: {
            id_pedido: id_Order
          }
        });
      
        let Finish = { "Valor Final": "", "Produtos": [] };
        let ValorFinal = 0.0;

        for (const value of OrderRequest) {
          const produto = await prismaClient.produto.findFirst({
            where: {
              id: value.id_produto
            }
          });
      
          Finish.Produtos.push({
            "Produto": produto.nome,
            "Quantidade": value.quantidade,
            "Valor Total": Number.parseFloat(produto.preco) * value.quantidade
          });

          ValorFinal = ValorFinal + Number.parseFloat(produto.preco)
          
        }
        Finish["Valor Final"] = ValorFinal.toString();

        console.log(Finish);
        return Finish;
    }
}

export {FinishOrderService}