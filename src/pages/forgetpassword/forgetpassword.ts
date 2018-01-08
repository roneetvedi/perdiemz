import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html'
})
export class ForgetpasswordPage {

  constructor(public navCtrl: NavController) {

  }
  snin(){
    this.navCtrl.push(SigninPage);
   }

   reset(){
    this.navCtrl.push(ResetpasswordPage);
   }
}
