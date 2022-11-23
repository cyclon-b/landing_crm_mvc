import { Injectable } from '@nestjs/common';
import { FeatureEntity } from 'src/entities/feature.entity';
import { Feature } from 'src/models/app-data.model';

@Injectable()
export class FeaturesService {


    public async fetchFeatures(): Promise<Feature[]>{
        return await FeatureEntity.find()
    }

}
