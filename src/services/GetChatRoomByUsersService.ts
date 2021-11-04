import { ObjectId } from "mongoose";
import { ChatRoom } from "../schemas/ChatRoom";
import { injectable } from "tsyringe";

@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    const room = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers,
      },
    }).exec();

    return room;
  }
}

export { GetChatRoomByUsersService };
