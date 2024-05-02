// Exercício 03
// 3.2 - Crie uma classe que represente um pedido (03-class-order.ts)
  // 3.2.1 O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual 

import Client from './03-class-client';
import OrderItem from './03-class-orderItem';

export default class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client, 
    items: OrderItem[], 
    paymentMethod: string, 
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }
}