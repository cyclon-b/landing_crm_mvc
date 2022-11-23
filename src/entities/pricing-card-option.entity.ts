import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { PricingCardEntity } from './pricing-card.entity';

@Entity('PricingCardOption')
export class PricingCardOptionEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column()
    optionText: string;

    @Column({nullable: true})
    isActive: boolean;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

    @ManyToOne(() => PricingCardEntity, (card) => card.cardOptionsList)
    @JoinColumn({name: 'cardId'})
    card: PricingCardEntity;

    @Column({nullable: true})
    cardId: number;
}
