import { CrudRepository } from "@/core/base-repository";
import { User, HistorialPeso } from "../entities/user/user";
import { IUser } from "../entities/user/user";

export interface IUserRepository {
    login: (user: Partial<IUser>) => Promise<IUser>
    register: (user: Partial<IUser>) => Promise<IUser>
}


export interface IHistorialPesoRepository extends CrudRepository<HistorialPeso> {}
