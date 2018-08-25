import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    
   name: string;
    /**
     * NavParams Allows to retreive the data
     */
    constructor(private navParams: NavParams, 
    private navCtrl: NavController) {
   
    }

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }

    onGoBack(){

       // this.navCtrl.pop(); // this will pop the current page
       this.navCtrl.popToRoot(); // this will pop and take to the root page
    }
   
}