// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  // Declarando os atributos
  private _name: string;
  private _birthDate: Date;

  // Vai "construir" a partir do nome e da data passado quando tiver uma instância
  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  // Get apenas retorna, ou seja, é uma forma de console.log dentro da classe para saber algumas informações
  // Por tanto não precisa de parâmetro
  getName() {
    return this._name
  }
  // O Set não, o Set precisa de parâmetro. Porque a função dele é atualizar os atributos existentes dentro da classe
  setName(value: string) {
    if (value.length < 3) {
      throw new Error('O "nome" deve ter no mínimo 3 caracteres');
    }
    this._name = value;
  }

  getBirthDate() {
    return this._birthDate
  }

  setBirthDate(value: Date) {
    const birthDay = new Date(value).getFullYear();
    const today = new Date().getFullYear();

    if (today - birthDay > 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos');
    }

    if (birthDay > today) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }

    this._birthDate = value;
  }
}