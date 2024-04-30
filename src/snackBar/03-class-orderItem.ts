// Exercício 03
// 3.3 - Crie uma classe que represente um item do pedido (03-class-orderItem.ts)
  // 3.3.1 - O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;

export default class OrderItem {
  // Conforme o enunciado, criando os atributos dos itens dentro do pedido
  private _name: string;
  private _price: number;

  // "construindo" os atributos declarados
  constructor(name: string, price:number) {
    this._name = name;
    this._price = price;
  }

  // Mais uma vez utilizando GETTERS para criar módulos (funções) e SETTERS para editar/modificar atributos
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O "nome" deve contar no mínimo 3 caracteres');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser um valor maior que zero')
    }
    this.price = value;
  }
}