import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable(false);
  }
 
  edit(){
    this.navCtrl.push(EditprofilePage);
   }
  
   gtnotifctn(){
    this.navCtrl.push(NotificationPage);
   }
   

 
}
