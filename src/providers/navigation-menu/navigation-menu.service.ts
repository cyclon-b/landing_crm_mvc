import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { NavigationEntity } from './../../entities/navigation.entity';

@Injectable()
export class NavigationMenuService {

    public fetchNavMenu(): Observable<NavigationEntity[]> {
        return from(NavigationEntity.find())

    }

}
