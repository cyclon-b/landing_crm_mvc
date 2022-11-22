import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { IndexController } from './controllers/index/index.controller';
import { CommonDataEntity } from './entities/common-data.entity';
import { FeatureEntity } from './entities/feature.entity';
import { FeedbackEntity } from './entities/feedback.entity';
import { NavigationEntity } from './entities/navigation.entity';
import { PricingCardOptionEntity } from './entities/pricing-card-option.entity';
import { PricingCardEntity } from './entities/pricing-card.entity';
import { TestimonialEntity } from './entities/testimonial.entity';


const DEFAULT_ADMIN = {
  email: 'aaa@aaa.net',
  password: '111',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      entities: [
        NavigationEntity,
        TestimonialEntity,
        FeatureEntity,
        FeedbackEntity,
        PricingCardEntity,
        PricingCardOptionEntity,
        CommonDataEntity,
      ],
      synchronize: true,
      migrations: ['./migrations/*{.ts, .js}'],
      migrationsTableName: 'migrations'
    }),
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          branding: {
            companyName: 'Simple Landing CRM',
            logo: ''
          },
          resources: [NavigationEntity,
            TestimonialEntity,
            FeatureEntity,
            FeedbackEntity,
            PricingCardEntity,
            PricingCardOptionEntity,
            CommonDataEntity,],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    }),
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule { }
