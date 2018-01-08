import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { FilterPage } from '../pages/filter/filter';
import { HospitaldetailPage } from '../pages/hospitaldetail/hospitaldetail';
import { FavouritePage } from '../pages/favourite/favourite';
import { NotificationPage } from '../pages/notification/notification';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ProcessPage } from '../pages/process/process';
import { CalendarPage } from '../pages/calendar/calendar';
import { ReferralcodePage } from '../pages/referralcode/referralcode';
import { RatePage } from '../pages/rate/rate';
import { TwitterConnect } from '@ionic-native/twitter-connect';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'List', component: ListPage},
      { title: 'Notification', component: NotificationPage},
      { title: 'Favourite', component: FavouritePage},
      { title: 'Share this App', component: ReferralcodePage},
      { title: 'Edit profile', component: EditprofilePage },
      { title: 'Forget Password', component: ForgetpasswordPage},
      { title: 'Logout', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
   list(){
    this.nav.push(ListPage)
  }

  notification(){
    this.nav.push(NotificationPage)
  }

  fav(){
    this.nav.push(FavouritePage)
  }

  code(){
    this.nav.push(ReferralcodePage)
  }

  edit(){
    this.nav.push(EditprofilePage)
  }

  forget(){
    this.nav.push(ForgetpasswordPage)
  }

  exit(){
    this.nav.push(HomePage)
  }
  gotoprofile(){
    this.nav.push(ProfilePage)
  }
}
