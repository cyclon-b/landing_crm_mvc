import { Injectable } from '@nestjs/common';
import { CommonDataEntity } from './../../entities/common-data.entity';

@Injectable()
export class CommonDataService {

    public async fetchCommonData(): Promise<any> {
       return await CommonDataEntity.find();
    }

}
