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
    constructor(private navParams: NavParams) {
   
    }

    ngOnInit() {
        this.name = this.navParams.get('userName');
    }
   
}