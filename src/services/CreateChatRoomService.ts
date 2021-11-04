import { ChatRoom } from "../schemas/ChatRoom";
import { injectable } from "tsyringe";

@injectable()
class CreateChatRoomService {
  async execute(idUsers: string[]) {
    const room = await ChatRoom.create({ idUsers });
    return room;
  }
}

export { CreateChatRoomService };
