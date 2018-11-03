import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataReaderProvider {
    constructor(public http:Http) {}

    getData(region) {
        return this.http.get('/assets/data/'+region+'.json').map(res => res.json());
    }
}