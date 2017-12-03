import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserService } from '../../providers/api/user-service';
import { StatusBar } from '@ionic-native/status-bar';
import { Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public userService: UserService) {

  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    // this.userService.getUser()
    //   .subscribe((response) => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   })

    //   this.userService.getAccountListAndBalances("000995928731567433")
    //     .subscribe(response => {
    //       console.log(response);
    //     }, error => {
    //       console.log(error);
    //     })

    //     const accountDetails = {
    //       operatingCompanyIdentifier: "815",
    //       productCode: "DDA",
    //       primaryIdentifier: "00000000000000822943114"
    //     }

    //     this.userService.getAccountDetails(accountDetails)
    //       .subscribe(result => {
    //         console.log(result);
    //       }, error => {
    //         console.log("An error occured on this request");
    //       });
  }

}
