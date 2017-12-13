import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material'
import {Gnome} from '../gnome';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';


@Injectable()
export class GnomeService {

  public gnomeList: Gnome[] = [];

  constructor(private http: HttpClient,
              private matSnackBar: MatSnackBar) {
  }

  /** GET gnomes from the server */
  getGnomes() {
    return this.http.get<Map<string, Array<Gnome>>>(url)
      .toPromise()
      .catch(error => {
        this.matSnackBar.open(error, 'Ok', {duration: 2000});
      });
  }

  getGnomeById(gnomeId: number): Gnome {
    let result = null;
    this.getGnomes()
      .then((response: Map<string, Array<Gnome>>) => {
        const gnomes = response['Brastlewark'];
        result = _.find(gnomes, 'id', gnomeId);
      });
    return result;
  }

}
