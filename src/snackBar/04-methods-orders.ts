// Exercício 04

// Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. 
// A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.
import Order from './03-class-order';

export namespace exer04 {

  export function calValue(object: Order): number {
    const { items } = object
    return items.reduce((previousPrice, item) => {
      const totalBill = previousPrice + item.price;

      return totalBill;
    }, 0);
  }

  export function calDiscount(object: Order): number {
    return calValue(object)*(1 - object.discount);
  }
}