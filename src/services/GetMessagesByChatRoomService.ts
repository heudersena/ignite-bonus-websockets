import { Message } from "../schemas/Message";
import { injectable } from "tsyringe";

@injectable()
class GetMessagesByChatRoomService {
  async execute(roomId: string) {
    const messages = await Message.find({ roomId }).populate("to").exec();
    return messages;
  }
}

export { GetMessagesByChatRoomService };
