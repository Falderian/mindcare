import { Repository } from "typeorm";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import { AppDataSource } from "../typeorm.config";

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findUser(username: string, email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async createUser(
    username: string,
    email: string,
    password: string
  ): Promise<User> {
    const hashedPassword = await this.hashPassword(password);
    const newUser = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }
}
