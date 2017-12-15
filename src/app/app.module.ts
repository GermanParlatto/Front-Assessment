import {BrowserModule} from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTableModule,
  MatListModule,
  MatDialogModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GnomeListComponent} from './gnomes/gnome-list/gnome-list.component';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AvatarModule} from 'ngx-avatar';
import { DialogDetailComponent } from './gnomes/shared/dialog-detail/dialog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GnomeListComponent,
    DialogDetailComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    AvatarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDetailComponent
  ]
})
export class AppModule {
}
