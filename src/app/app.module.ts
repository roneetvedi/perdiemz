import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonProvider } from '../providers/common/common';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    SignupPage,
    SigninPage,
    ForgetpasswordPage,
    ResetpasswordPage,
    ProfilePage,
    EditprofilePage,
    FilterPage,
    HospitaldetailPage,
    FavouritePage,
    NotificationPage,
    ConfirmationPage,
    ProcessPage,
    CalendarPage,
    ReferralcodePage,
    RatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage,
    SignupPage,
    SigninPage,
    ForgetpasswordPage,
    ResetpasswordPage,
    ProfilePage,
    EditprofilePage,
    FilterPage,
    HospitaldetailPage,
    FavouritePage,
    NotificationPage,
    ConfirmationPage,
    ProcessPage,
    CalendarPage,
    ReferralcodePage,
    RatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage,
    GooglePlus,
    TwitterConnect,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider
  ]
})
export class AppModule {}
