import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PricingCardEntity } from './pricing-card.entity';

@Entity('PricingCardOption')
export class PricingCardOptionEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column()
    optionText: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

    @ManyToOne(() => PricingCardEntity, (card) => card.cardOptionsList)
    card: PricingCardEntity;
}
