import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    sendMassage(msgobj: any): Promise<import("./entities/chat.entity").Chat[]>;
    findMessages(body: {
        sender: string;
        receiver: string;
    }): Promise<import("./entities/chat.entity").Chat[]>;
    list(body: {
        sender: string;
        receiver: string;
    }): Promise<import("./entities/chat.entity").Chat[]>;
}
