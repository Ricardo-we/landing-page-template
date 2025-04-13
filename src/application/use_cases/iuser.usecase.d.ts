export interface IUserUseCase {
  register(userData: Partial<IUser>): Promise<User>;
  login(userData: Partial<IUser>): Promise<User>;
}
