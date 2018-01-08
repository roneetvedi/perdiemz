import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HospitaldetailPage } from '../hospitaldetail/hospitaldetail';

@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class RatePage {

  constructor(public navCtrl: NavController) {

  }


  hosptldtl(){
    this.navCtrl.push(HospitaldetailPage);
   }


   backtohosptldtl(){
    this.navCtrl.push(HospitaldetailPage);
   }
 
}
