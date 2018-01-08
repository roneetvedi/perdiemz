import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RatePage } from '../rate/rate';

@Component({
  selector: 'page-hospitaldetail',
  templateUrl: 'hospitaldetail.html'
})
export class HospitaldetailPage {

  constructor(public navCtrl: NavController, public menu: MenuController, public modalCtrl: ModalController) {
    this.menu.swipeEnable(false);
  }

  bktolist(){
    this.navCtrl.push(ListPage);
   }

   modelrate() {
    let modal = this.modalCtrl.create(RatePage);
    modal.present();
  }
}