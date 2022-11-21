import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Feedback')
export class FeedbackEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        unique: true,
        nullable: false
    })
    email: string;

    @Column({
        unique: true,
        nullable: false
    })
    phone: string;

    @Column({
        nullable: false
    })
    message: string;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

}
