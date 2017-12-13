import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Gnome} from "../../gnome";

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})
export class DialogDetailComponent implements OnInit {

  public gnome: Gnome;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { gnome: Gnome }) {
  }

  ngOnInit() {
    this.gnome = this.data.gnome;
  }

}
