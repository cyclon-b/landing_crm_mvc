import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PricingCard')
export class PricingCardEntity {
    @PrimaryGeneratedColumn() id:string;
}
