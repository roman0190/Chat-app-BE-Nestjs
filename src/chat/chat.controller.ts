import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('send')
  async sendMassage(@Body() msgobj) {
    return this.chatService.sendMassage(msgobj)
  }

  @Post('messages')
  async findMessages(@Body() body: { sender: string; receiver: string }) {
    const { sender, receiver } = body;
    const messages = await this.chatService.findMessagesBySenderAndReceiver(
      sender,
      receiver,
    );
    return messages;
  }

  @Post('list')
  async list(@Body() body: { sender: string; receiver: string }) {
    const { sender, receiver } = body;
    const messages = await this.chatService.list(sender, receiver);
    return messages;
  }
}
