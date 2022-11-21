import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CommonData')
export class CommonDataEntity extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;

    @Column('simple-json')
    headerContent: {
        pageTitleText: string,
        logoText: string,
        mainAdvertiseText: string,
        meinDescriptionText: string,
        leftButton: {
            linkText: string,
            linkUrl: string,
        }

    };
    @Column('simple-json')
    contactsSection: {
        contactsSectionHeader: string,
        contactsSectionDescription: string,
        formText: {
            fullNameControlLabel: string,
            emailControlLabel: string,
            phoneControlLabel: string,
            messageControlLabel: string,
            submitButtonText: string,
        }
    }

    @Column('simple-json')
    footerContent: {
        copyRightName: string;
    }

    @Column('simple-json')
    pricingSection: {
        pricingHeaderText: string;
        pricingDescriptionText: string;
    }

    @Column('simple-json')
    testimonialsSection: {
        testimonialsHeaderText: string;
        testimonialsDescriptionText: string;
    }




}
