import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  sender: string;

  @Column()
  receiver: string;

  @CreateDateColumn()
  createdAt: Date;
}
