import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {

  constructor(public navCtrl: NavController) {

  }
  backtoprofile(){
    this.navCtrl.push(ProfilePage);
   }

}
