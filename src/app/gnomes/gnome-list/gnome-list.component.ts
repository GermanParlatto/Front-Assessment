import {Component, OnInit} from '@angular/core';
import {GnomeService} from '../shared/gnome.service';
import {Gnome} from '../gnome';
import * as _ from 'lodash';
import {AppService} from '../../app.service';
import {GnomeFilter} from '../gnome-filter';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogDetailComponent} from '../shared/dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.scss'],
  providers: [GnomeService]
})
export class GnomeListComponent implements OnInit {

  public gnomePaginated: Array<Gnome>;
  public gnomeFiltered: Array<Gnome>;
  public filter: GnomeFilter;

  private gnomeList: Array<Gnome>;
  private page: {
    pageNumber: number;
    itemPerPage: number;
  };

  constructor(private gnomeService: GnomeService,
              private appServive: AppService,
              private router: Router,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.initializePagination();
    this.appServive.filterEvent.subscribe((data: GnomeFilter) => {
      this.filter = data;
      this.gnomePaginated = [];
      this.initializePagination();
      this.gnomeFiltered = this.applyFilter(this.gnomeList);
      this.getGnomesPaginated(this.page);
    });

    this.gnomeService.getGnomes()
      .then((response: Map<string, Array<Gnome>>) => {
          this.gnomeList = response['Brastlewark'];
          this.gnomePaginated = [];
          this.gnomeFiltered = this.applyFilter(this.gnomeList);
          this.getGnomesPaginated(this.page);
        }
      );
  }

  viewDetail(gnome: Gnome) {
    this.dialog.open(DialogDetailComponent, {
      data: {
        gnome: gnome
      }
    });
  }

  trackByFn(index, item) {
    return index;
  }

  onScroll() {
    this.page.pageNumber++;
    this.getGnomesPaginated(this.page);
    console.log(`Scroll!!! : ${this.page.pageNumber}`);
  }

  initializePagination() {
    this.page = {
      itemPerPage: 20,
      pageNumber: 1
    };

  }

  getGnomesPaginated(page: { pageNumber: number, itemPerPage: number }) {
    const end = (page.itemPerPage * page.pageNumber) - 1;
    const start = (page.pageNumber - 1) * page.itemPerPage;
    const gnomes = this.gnomeFiltered.slice(start, end);
    this.gnomePaginated = _.concat(this.gnomePaginated, gnomes);
  }

  applyFilter(list: Gnome[]): Gnome[] {
    const mapped = list.filter((gnome: Gnome) => {
      if (!isNullOrUndefined(this.filter)) {
        let condition1, condition2, condition3: boolean;
        if (this.filter.Age) {
          condition1 = this.filter.Age === gnome.age;
        } else {
          condition1 = true;
        }

        if (this.filter.Height) {
          condition2 = this.filter.Height === gnome.height;
        } else {
          condition2 = true;
        }

        if (this.filter.HairColor) {
          condition3 = this.filter.HairColor === gnome.hair_color;
        } else {
          condition3 = true;
        }
        return condition1 && condition2 && condition3;
      } else {
        return true;
      }
    });

    return mapped;
  }
}
