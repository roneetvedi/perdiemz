import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcessPage } from '../process/process';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  constructor(public navCtrl: NavController) {

  }

  backtoprocess(){
    this.navCtrl.push(ProcessPage);
   }
}
