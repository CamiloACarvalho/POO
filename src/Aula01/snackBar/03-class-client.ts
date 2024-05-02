// Exercício 03

// 3.1 - Crie uma classe que represente uma pessoa cliente da lanchonete (03-class-client.ts)
  // 3.1.1 - A pessoa cliente deverá conter o nome;
// 3.2 - Crie uma classe que represente um pedido (03-class-order.ts)
  // 3.2.1 O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual 
    // em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
// 3.3 - Crie uma classe que represente um item do pedido (03-class-orderItem.ts)
  // 3.3.1 - O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;

// Nos exercícios anteriores acabei trabalhando com a exportação e importação de classes
export default class Client {
  // Declarando os atributos de cliente
  private _name: string;

  // "Construindo" os atributos
  constructor(name: string) {
    this._name = name;
  }

  // Utilizando GETTERS para criar módulos e SETTERS para editar/modificar os atributos
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O "nome" deve contar no mínimo 3 caracteres');
    }
    this._name = value;
  }
}