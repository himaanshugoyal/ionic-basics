import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

/**
 *
 */
constructor(private navCtrl: NavController) {
  
}
onLoadUser(name: string){
  //Note: Pushing the page on the stack and also adding some data
  this.navCtrl.push(UserPage, {userName: name});
}
}
