// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas 
// em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Classe estudantes, dentro de estudantes teremos suas particularidades, que são instâncias das classe ou Objetos
export class Student {
  // Private só permite alteração dentro da classe student. Para altera-las fora dessa classe usamos o setters e para cirar módulos usamos o getters
  // Aqui estão os atributos por se tratar de typeScript, estamos tipando para receber os valores corretos
  private _name: string;
  private _id: number;
  private _test: number[];
  private _homework: number[];

  constructor(id: number, name: string) {
    // Aqui os atributos "recebem" os valores
    this._id = id;
    this._name = name;
    this._test = [];
    this._homework = [];
  }

  // Agora vamos criar os métodos. O que são métodos, são as funções que executarão as ações, neste casso, editar/criar informações das classes

  // Conforme mencionado acima os GETTERS são responsáveis por criar módulos (funções)
  get id(): number {
    return this._id;
  }
  // Já os SETTERS são resposnáveis por editar/ alterar as informações dos atributos. Vale ressaltar que SETTERS não RETORNAM valores
  set id(value: number){
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    // Caso tente inserir um valor no name com menos de 3 caracteres irá aparecer uma msg de erro. Lembrando que os SETTERS não retornam nada
    if (value.length < 3) {
      throw new Error('O "nome" deve ter no mínimo 3 caracteres');
    }
    this._name = value;
  }

  get test(): number[] {
    return this._test;
  }

  set test(arrValues: number[]) {
    if (arrValues.length > 4) {
      throw new Error('O estudante só pode ter no máximo 4 notas de provas');
    }
    this._test = arrValues;
  }

  get homework(): number[] {
    return this._homework;
  }

  set homework(arrValues: number[]) {
    if (arrValues.length > 2) {
      throw new Error('O estudante só pode ter no máximo 2 notas de trabalhos');
    }
    this._homework = arrValues;
  }
};