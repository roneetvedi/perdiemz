import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';
import {Http, Headers, RequestOptions} from '@angular/http';
import {CommonProvider} from '../../providers/common/common';
import { NativeStorage } from '@ionic-native/native-storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {LoadingController, NavParams} from 'ionic-angular';
import { TwitterConnect } from '@ionic-native/twitter-connect';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
    userTwtid: string;
    userTwitterResp: any;
    userTwt: string;
 public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  public data='';
  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http:Http,private fb: Facebook,public nativeStorage: NativeStorage,private googlePlus: GooglePlus,
                public common : CommonProvider, public loadingCtrl:LoadingController,private twitter: TwitterConnect,private toastCtrl: ToastController) {

  }

  signn(){
    this.navCtrl.push(SigninPage);
   }
signup_form(signup)
        {
            alert('signup');
          this.Loading.present();
     if(signup.value.password=signup.value.cpassword){
        
        console.log(this.common.options);
        var optionss = this.common.options;
      
        var data1={
          username:signup.value.username,
          email:signup.value.email,
          password:signup.value.password,
          type : signup.value.type
        }
        console.log(data1);
       
        var Serialized = this.serializeObj(data1);
        console.log(Serialized);
       
        console.log(data1);
          this.http.post(this.common.base_url +'users/register',Serialized, optionss).map(res=>res.json()).subscribe(data=>{
          // alert(data);
          // alert(JSON.stringify(data));
          this.Loading.dismiss();
            console.log(data);
            console.log(data.data.phone);
           
            if(data.error == 0){
            this.navCtrl.push(ProfilePage);
                let toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
            }else{
              let toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
             
            }
          })
        }else{
             let toast = this.toastCtrl.create({
            message:"your password and Confirn password doesnot match",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }
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
   twitter_log(): void {
    this.Loading.present();
     alert("twitter");
     this.twitter.login().then(response => {
       alert(JSON.stringify(response));
       alert(JSON.stringify(response.userId));
       this.userTwt = response.userName;
         this.userTwtid = response.userId;
       alert(this.userTwt);
       //const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);
 
//       firebase.auth().signInWithCredential(twitterCredential).then(userTwitter => {
       
          // this.userTwitterResp = userTwitter;
           var url: string =  this.common.base_url + "twitterlogin";
           var data_tw = {
             username : response.userName,
             twitter_id :  this.userTwtid,
             password:'13221'
            
           }
        
            var serialized_tw = this.common.serializeObj(data_tw);
            console.log(serialized_tw);
           this.http.post(url, serialized_tw, this.common.options).map(res => res.json()).subscribe(datarestw => {
           this.Loading.dismiss();
        
           if(datarestw.isSuccess == true){ 
             localStorage.setItem('TWUSERID',datarestw.data.User.id);
             localStorage.setItem('USERID',datarestw.data.User.id);
                     let toast = this.toastCtrl.create({
                     message: datarestw.msg,
                     duration: 3000
                   });
                   toast.present();
 
                       this.navCtrl.push(ProfilePage);
           }else{
             this.Loading.dismiss();
             let toast = this.toastCtrl.create({
                     message: datarestw.msg,
                     duration: 3000
                   });
                   toast.present();
                   
           }
           })
       }, error => {
         this.Loading.dismiss();
         
         alert(JSON.stringify(error));
       });
     }
  }

