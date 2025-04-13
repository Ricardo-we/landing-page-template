import { IUser } from "@/src/domain/entities/user/user.d";
import { IUserRepository } from "@/src/domain/repositories/user.repository";

export class UserFirebaseRepository implements IUserRepository {
  db: any;
  constructor() {
    // this.db = getFirestore();
    this.db = {};
  }

  login = (user: Partial<IUser>) => {
    return this.db.signInWithEmailAndPassword(user.email, user.password);
  };

  register = (user: Partial<IUser>) => {
    return this.db.createUserWithEmailAndPassword(user.email, user.password);
  };
}
