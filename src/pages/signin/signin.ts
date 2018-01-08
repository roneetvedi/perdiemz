import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword';
import { ProfilePage } from '../profile/profile';
import {Http} from '@angular/http';
import {CommonProvider} from '../../providers/common/common';
import { GooglePlus } from '@ionic-native/google-plus';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
    public data ='';
 public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public http:Http, private fb: Facebook,public nativeStorage: NativeStorage,
        public common : CommonProvider,private toastCtrl: ToastController,private googlePlus: GooglePlus, public loadingCtrl:LoadingController) {

  }

  sgnup(){
    this.navCtrl.push(SignupPage);
   }

   frgt(){
    this.navCtrl.push(ForgetpasswordPage);
   }

  signin_form(signin){
  	
this.Loading.present();

var data={
  email:signin.value.email,
  password:signin.value.password,
}
//alert(JSON.stringify(data))
var Serialized = this.serializeObj(data);
console.log(this.common.options);
var optionss = this.common.options;
this.http.post(this.common.base_url +'users/login', Serialized, optionss).map(res=>res.json()).subscribe(data=>{
    console.log(data);
    this.Loading.dismiss();
    if(data.error == 0){
      //alert(data.msg);
      console.log(data);
      console.log(data.user.id)
     
      
      let toast = this.toastCtrl.create({
    message: data.message,
    duration: 3000,
    position: 'middle'
  });
   toast.present();


       this.navCtrl.push(ProfilePage);
    }else{
      //alert(data.msg)
      let toast = this.toastCtrl.create({
    message: data.message,
    duration: 3000,
    position: 'middle'
  });
   toast.present();
    }
  },err => {
       this.Loading.dismiss();
     let toast = this.toastCtrl.create({
    message: "Invalid Credentials",
    duration: 3000,
    position: 'middle'
  });
   toast.present();
  })
  
} 
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  facebook(){
      alert('faceboo');
       
    let permissions = new Array<string>();
    let nav = this.navCtrl;

    //the permissions your facebook app needs from the user
    permissions = ['public_profile', 'user_friends', 'email'];

    this.fb.login(permissions)
    .then((response) => {
      // alert("response");
      // alert(response);
      //  alert(JSON.stringify(response));
      let userId = response.authResponse.userID;
      let params = new Array<string>();

      //Getting name and gender properties
      this.fb.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
      .then((user) => {
        // alert("user");
        // alert(user);
        // alert(JSON.stringify(user));
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('user',
        {
          email: user.email,
          username: user.name,
          image: user.picture
        })

        .then(() => {
          // alert( user.email);
          var url: string = this.common.base_url + 'user_register_fb_app';
          this.Loading.present();
var fb_data = {
      username:user.name,
      role:"user",
      facebook_id:user.id,
      profile_picture:user.picture,
      email:user.email,
      phone : '',
      password : '12345'
     
}
    
 alert(JSON.stringify(fb_data))
var Serialized = this.serializeObj(fb_data);
console.log(this.common.options);
var optionss = this.common.options;
this.http.post(url, Serialized, optionss).map(res=>res.json()).subscribe(data=>{
  // alert('data');
   alert(JSON.stringify(data));
    console.log(data);
//     localStorage.setItem('USERID',data.data._id);
//      localStorage.setItem('FBdata',data.data);
//       localStorage.setItem('USER_EMAIL',data.data.email);
//     this.navCtrl.push(TabsPage); 
//     this.app.getRootNav().setRoot(TabsPage);
 if(data.error == 0){
       this.Loading.dismiss();
       this.navCtrl.push(ProfilePage);
       let toast = this.toastCtrl.create({
     message: data.message,
     duration: 3000,
     position: 'middle'
   });
    toast.present();
   
      
    
    
     }else{
       //alert(data.msg)
       let toast = this.toastCtrl.create({
     message: data.message,
     duration: 3000,
     position: 'middle'
   });
    toast.present();
     }
  })

     


        },(error) => {
          console.log(error);
        })
      })
    }, (error) => {
      console.log(error);
    });

  }
  googleplus(){
      alert('google+');
      this.googlePlus.login({}).then(res =>{
    console.log(res);


    var data_google = {
             //username : res.displayName,
           // name : this.name_google,
            google_id : res.userId,
            // image : res.imageURL,
            email : res.email,
            firstname: res.givenName,
            lastname: res.familyName

          }
          // alert('google data');
           alert(JSON.stringify(data_google));
            console.log(this.common.options);
            var optionss = this.common.options;
          var serialized_google = this.serializeObj(data_google);
          console.log(serialized_google);
          this.http.post(this.common.base_url +'users/googlelogin', serialized_google, optionss).map(res => res.json()).subscribe(datarestgoogle => {
          this.Loading.dismiss();
        
           // alert('api');
         //  alert(JSON.stringify(datarestgoogle));
          // alert(datarestgoogle);
          if(datarestgoogle.status == true){
            alert(JSON.stringify(datarestgoogle));

                    let toast = this.toastCtrl.create({
                    message: datarestgoogle.msg,
                    duration: 3000
                  });
                  toast.present();

//                      this.navCtrl.push(LocationPage);
          }else{
            let toast = this.toastCtrl.create({
                    message: datarestgoogle.msg,
                    duration: 3000
                  });
                  toast.present();
                       this.googlePlus.logout()
                    .then(function (response) {
                  localStorage.removeItem("GOOGLEUSERID");
                  localStorage.clear();
             
                    })
          }
        })
  },  
  error => {
            this.Loading.dismiss();
            alert('error');
            alert(JSON.stringify(error));
    
          });
        // }
        // , error => {
        //  this.Loading.dismiss();
        //  alert('error');
        //   alert(JSON.stringify(error));
        // });

  }
}
