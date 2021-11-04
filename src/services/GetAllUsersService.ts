import { User } from "../schemas/User";
import { injectable } from "tsyringe";

@injectable()
class GetAllUsersService {
  async execute() {
    const users = await User.find();
    return users;
  }
}

export { GetAllUsersService };
