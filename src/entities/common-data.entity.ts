import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CommonData')
export class CommonDataEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;

    @Column()
    headerContent: string;

    @Column()
    contactsSection: string;

    @Column()
    footerContent: string;

    @Column()
    pricingSection: string;

    @Column()
    testimonialsSection: string;

}
