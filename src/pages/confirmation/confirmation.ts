import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController) {

  }
  backtonotification(){
    this.navCtrl.push(NotificationPage);
   }

   gotlist(){
    this.navCtrl.push(ListPage);
   }
}
