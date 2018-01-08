import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword';

@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html'
})
export class ResetpasswordPage {

  constructor(public navCtrl: NavController) {

  }
 
  backtoforgt(){
    this.navCtrl.push(ForgetpasswordPage);
   }

}
