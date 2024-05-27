import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  async sendMassage(createChatDto: any): Promise<Chat[]> {
    const chat = this.chatRepository.create(createChatDto);
    return await this.chatRepository.save(chat);
  }

  async findMessagesBySenderAndReceiver(
    sender: string,
    receiver: string,
  ): Promise<Chat[]> {
    return this.chatRepository.find({
      where: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
      order: { createdAt: 'ASC' }, 
    });
  }

  async list(sender: string, receiver: string): Promise<Chat[]> {
    return this.chatRepository.find({
      where: { sender: sender, receiver: receiver },
      order: { createdAt: 'ASC' },
    });
  }
}
