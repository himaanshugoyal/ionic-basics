import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  constructor(private navCtrl: NavController) {
        
  }

  onBuy(productData: {name: string, quantity: number}) {
      this.navCtrl.push(BuyoutPage, productData);
  }
}
