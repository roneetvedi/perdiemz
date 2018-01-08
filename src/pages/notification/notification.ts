import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public menu: MenuController, public modalCtrl: ModalController) {
    this.menu.swipeEnable(false);
  }

   modelcnfrmatn() {
    let modal = this.modalCtrl.create(ConfirmationPage);
    modal.present();
  }
  
}