import {Component} from '@angular/core';
import {AppService} from './app.service';
import {GnomeFilter} from './gnomes/gnome-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public filter: GnomeFilter;

  constructor(private appService: AppService) {
    this.filter = {};
  }

  applyFilter() {
    this.appService.filterEvent.emit(this.filter);
  }

  clearFilter() {
    this.filter = {};
    this.applyFilter();
  }
}
