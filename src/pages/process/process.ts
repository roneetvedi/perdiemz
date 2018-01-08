import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ListPage } from '../list/list';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-process',
  templateUrl: 'process.html'
})
export class ProcessPage {

  constructor(public navCtrl: NavController) {

  }
  backtosigin(){
    this.navCtrl.push(SigninPage);
   }

   gotolist(){
    this.navCtrl.push(ListPage);
   }

   calndr(){
    this.navCtrl.push(CalendarPage);
   }

}
