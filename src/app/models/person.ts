export class Person {
    name: string;
    birthdate: Date;
    cpf: string;
    gender: string;
    height: number;
    weight: number;

    constructor(
      name: string,
      birthdate: Date,
      cpf: string,
      gender: string,
      height: number,
      weight: number
    ) {
      this.name = name;
      this.birthdate = birthdate;
      this.cpf = cpf;
      this.gender = gender;
      this.height = height;
      this.weight = weight;
    }
  }
