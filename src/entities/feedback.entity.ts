import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Feedback')
export class FeedbackEntity {
    @PrimaryGeneratedColumn() id:string;
}
