import { Message } from "../schemas/Message";
import { injectable } from "tsyringe";

interface CreateMessageDTO {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {
  async execute({ to, text, roomId }: CreateMessageDTO) {
    const message = await Message.create({
      to,
      text,
      roomId,
    });
    return message;
  }
}

export { CreateMessageService };
