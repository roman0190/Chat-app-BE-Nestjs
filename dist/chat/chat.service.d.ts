import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';
export declare class ChatService {
    private chatRepository;
    constructor(chatRepository: Repository<Chat>);
    sendMassage(createChatDto: any): Promise<Chat[]>;
    findMessagesBySenderAndReceiver(sender: string, receiver: string): Promise<Chat[]>;
    list(sender: string, receiver: string): Promise<Chat[]>;
}
