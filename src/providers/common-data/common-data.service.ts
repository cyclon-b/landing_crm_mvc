import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { CommonDataEntity } from './../../entities/common-data.entity';

@Injectable()
export class CommonDataService {

    public fetchCommonData(): Observable<CommonDataEntity[]> {
       return from(CommonDataEntity.find());
    }

}
