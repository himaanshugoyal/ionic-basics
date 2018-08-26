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

//addional to ionic component life cycle ionic calls its own views, these are loaded by the NavController
ionViewCanEnter(): boolean | Promise<void> {
console.log('ionViewCanEnter');
const rnd = Math.random();
return rnd > 0.5;
}

ionViewDidLoad() {
  console.log('ionViewDidLoad');
}

ionViewWillEnter(){
  console.log('ionViewWillEnter');
}

ionViewDidEnter(){
  console.log('ionViewDidEnter');
}

ionViewCanLeave(): boolean | Promise<void> {
  const promise = new Promise((resolve, reject) => {
    setTimeout(resolve(), 1000);
  })
  return promise;
}
ionViewWillLeave(){
  console.log('ionViewWillLeave');
}

ionViewDidLeave() {
  console.log('ionViewDidLeave');
}
}
