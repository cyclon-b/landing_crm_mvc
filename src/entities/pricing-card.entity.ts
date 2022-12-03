import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PricingCardOptionEntity } from './pricing-card-option.entity';

@Entity('PricingCard')
export class PricingCardEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column()
    pricingTypeText: string;

    @Column()
    priceText: string;

    @Column({
        nullable: true
    })
    cardButtonText: string;

    @Column({
        nullable: true
    })
    isFocused: boolean;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

    @OneToMany(() => PricingCardOptionEntity, (option) => option.card)
    cardOptionsList: PricingCardOptionEntity[];

}
