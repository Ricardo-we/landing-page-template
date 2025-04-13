export enum Goal {
  LoseWeight = "lose_weight",
  GainWeight = "gain_weight",
  MaintainWeight = "maintain_weight",
}

export enum ActivityLevel {
  Sedentary = "sedentary",
  LightlyActive = "lightly_active",
  ModeratelyActive = "moderately_active",
  VeryActive = "very_active",
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  height: number;
  gender: string;
  activityLevel: ActivityLevel;
  goal: Goal;
  historialPeso: IHistorialPeso[];
  password: string;
}


export interface IHistorialPeso {
  id: number;
  userId: number;
  peso: number;
  fecha: Date;
}
