import { ActivityLevel, Goal, IHistorialPeso, IUser } from "./user.d";

export class User {
  id?: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  height: number;
  gender: string;
  activityLevel: ActivityLevel;
  goal: Goal;
  password: string;
  historialPeso: HistorialPeso[];

  constructor({
    id,
    name,
    email,
    phone,
    age,
    height,
    gender,
    activityLevel,
    goal,
    password,
    historialPeso,
  }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.age = age;
    this.height = height;
    this.gender = gender;
    this.activityLevel = activityLevel;
    this.goal = goal;
    this.password = password;
    this.historialPeso = historialPeso;
  }
}

export class HistorialPeso {
  id: number;
  peso: number;
  fecha: Date;

  constructor({ id, peso, fecha }: IHistorialPeso) {
    this.id = id;
    this.peso = peso;
    this.fecha = fecha;
  }
}
