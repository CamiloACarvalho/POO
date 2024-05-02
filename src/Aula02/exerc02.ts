// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - assignmentsGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente 
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from './exerc01';

// Conforme solicitado no exercício a classe estudantes herdou a classe pessoa, então de cara teremos nome e aniversário como atributos
export default class Students extends Person {
  private _enrollment: string;
  // Porque já lancei um array vazio? porque o estado inicial da notas das provas é zerado. O mesmo vale para as notas dos trabalhos
  private _examsGrades: number[] = [];
  private _assignmentGrades: number[] = [];

  // Conforme solicitado no exercício, vamos criar um constructor que vai receber o nome e o aniversário
  constructor(name: string, birthDate: Date) {
    // Construtores para classes derivadas devem conter uma chamada 'super'.
    super(name, birthDate);
    // A matrícula é gerada automaticamente
    this._enrollment = this.generateEnrollment(birthDate);
  }

  // Queria ter criado uma função que fizesse ano aaaa mais 3 número começando do 001 até 999, mas não consegui pensar numa lógica pra isso
  private generateEnrollment(birthDate: Date): string {
    let id = '0';
    while (id.length > 15) {
      const year = new Date().getFullYear().toString();
      const birth = new Date(birthDate).getMilliseconds().toString();
      const num  = Math.floor(Math.random() * 10000).toString()
      id = year+birth+num;
    }
    return id;
  }

  getExamsGrades(): number[] {
    return this._examsGrades;
  }

  setExamsGrades(arrValues: number[]) {
    if (arrValues.length > 4) {
      throw new Error('O estudante só pode ter no máximo 4 notas de provas');
    }
    this._examsGrades = arrValues;
  }

  getAssignmentGrades(): number[] {
    return this._assignmentGrades
  }

  setAssignmentGrades(arrValues: number[]) {
    if (arrValues.length > 2) {
      throw new Error('O estudante só pode ter no máximo 2 notas de trabalhos');
    }
    this._assignmentGrades = arrValues;
  }

  sumGrades(): number {
    const examsSum = this._examsGrades.reduce((acc, grade) => acc + grade, 0);
    const assignmentSum = this._assignmentGrades.reduce((acc, grade) => acc + grade, 0);
    return examsSum + assignmentSum;
  }

  sumAverageGrade(): number {
    const divider = this._assignmentGrades.length + this._examsGrades.length;

    return Math.round(this.sumGrades()/divider);
  }
}