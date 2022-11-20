import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Testimonial')
export class TestimonialEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column()
    testimonialText: string;

    @Column({
        nullable: true
    })
    customerName: string;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

}
