import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 usrPage = UsersPage;

 /**
  *
  */
 constructor(private navCtrl: NavController) {
   
 }

 onGoToUsers() {
this.navCtrl.push(this.usrPage)
.catch(( error) => console.log("Value returned false"));
 }
}
