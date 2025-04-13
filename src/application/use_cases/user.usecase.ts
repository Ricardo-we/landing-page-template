import { User } from "@/src/domain/entities/user/user";
import { IUser } from "@/src/domain/entities/user/user.d";
import { IUserRepository } from "@/src/domain/repositories/user.repository";

export class UserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async register(userData: Partial<IUser>): Promise<User> {
    const user = await this.userRepository.register(userData);
    return new User(user as IUser);
  }

  async login(userData: Partial<IUser>): Promise<User> {
    const user = await this.userRepository.login(userData);
    return new User(user as IUser);
  }
}
