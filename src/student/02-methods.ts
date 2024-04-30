// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

import { Student } from './01-class-stundet';

// Resolvi "dividir" o exercício em arquivos. Então importei a classe criado anteriormente, agora vou criar os métodos de somar as notas e o cálculo da média

export namespace exer02 {
  // Se estive no mesmo arquivo, não precisaria de parâmetro, mas como importei o objeto, a função precisa saber o que ela vai calcular
  // Função que fará as somas de todas as notas (provas e trabalhos)
  export function sumNote(obj: Student): number {
    return [...obj.homework, ...obj.test].reduce((previousNote, note) => {
      const nextNote = note + previousNote;

      return nextNote;
    }, 0);
  }
  // Função que fará a média de todas as notas
  export function averageNote(obj: Student): number {
    const totalNote = sumNote(obj);
    const divider = obj.homework.length + obj.test.length;

    return Math.round(totalNote/divider);
  }
}