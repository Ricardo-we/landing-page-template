import { IUser } from "@/src/domain/entities/user/user.d";
import { IUserRepository } from "@/src/domain/repositories/user.repository";

export class UserFirebaseRepository implements IUserRepository {
  constructor(private readonly auth: any) {}

  login = (user: Partial<IUser>) => {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  };

  register = (user: Partial<IUser>) => {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  };
}
