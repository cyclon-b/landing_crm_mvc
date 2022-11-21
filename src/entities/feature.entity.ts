import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Feature')
export class FeatureEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id:number;

    @Column()
    featureTitle: string;

    @Column()
    featureDescription: string;

    @Column()
    callToActionLinkUrl: string;

    @Column()
    callToActionText: string;

    @Column()
    featureIconName: string;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    updated: string;

}
