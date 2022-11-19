import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Navigation')
export class NavigationEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    linkText: string;

    @Column()
    linkUrl: string;

}
