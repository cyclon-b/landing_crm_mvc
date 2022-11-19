import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Testimonial')
export class TestimonialEntity {
    @PrimaryGeneratedColumn() id:string;
}
