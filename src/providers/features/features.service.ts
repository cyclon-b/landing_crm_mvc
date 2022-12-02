import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { FeatureEntity } from 'src/entities/feature.entity';

@Injectable()
export class FeaturesService {


    public fetchFeatures(): Observable<FeatureEntity[]> {
        return from(FeatureEntity.find())
    }

}
