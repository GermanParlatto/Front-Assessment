import {EventEmitter, Injectable} from '@angular/core';


/**
 * App service
 */
@Injectable()
export class AppService {

  filterEvent = new EventEmitter<any>();

}
