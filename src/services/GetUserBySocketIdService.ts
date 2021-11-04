import { User } from "../schemas/User";
import { injectable } from "tsyringe";

@injectable()
class GetUserBySocketIdService {
  async execute(socket_id: string) {
    const user = await User.findOne({ socket_id });
    return user;
  }
}

export { GetUserBySocketIdService };
