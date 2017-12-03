import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction, Status, User, AccountInfo } from '../../models/user';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { UserService } from '../../providers/api/user-service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  queryText: string = "";
  user: User;
  pending: Transaction[] = new Array<Transaction>();
  posted: Transaction[] = new Array<Transaction>();
  accountInfo: AccountInfo;
  amount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, private loadingController: LoadingController) {
    this.amount = 3200.06;
    this.setTransactions();
  }

  ionViewDidLoad() {
    this.getAccounts();
  }

  searchTransactions() {
    this.queryText = this.queryText.toLowerCase().replace(/,|\.|-/g, ' ');
    let queryWords = this.queryText.split(' ').filter(w => !!w.trim().length);
    this.filterTransactions(queryWords);
  }

  filterTransactions(words: string[]) {
    if (words != null && words.length > 0) {
      this.pending = this.filterTransactionHelper(this.pending, words);
      this.posted = this.filterTransactionHelper(this.posted, words);
    } else {
      this.makeList();
    }
  }

  private makeList() {
    this.pending = [];
    this.posted = [];
    this.getAccounts();
  }

  private filterTransactionHelper(transactions: Array<Transaction>, words: Array<string>): Array<Transaction> {
    let currentTransactions: Set<Transaction> = new Set<Transaction>();
    let result: Array<Transaction> = new Array<Transaction>();

    transactions.forEach((transaction) => {
      words.forEach((word) => {
        // let transactionString = this.toString(transaction).toLowerCase();
        // if (transactionString.indexOf(word) > -1) {
        //   currentTransactions.add(transaction);
        // }
      });
    });
    currentTransactions.forEach((transaction) => {
      result.push(transaction);
    });
    return result;
  }

  getAccounts(){
    let loading = this.loadingController.create();
    loading.present();
    this.userService.getUser()
      .map(response => response.json())
      .subscribe((response) => {
      let result = response;
      this.userService.getAccountListAndBalances(result.LegalParticipantIdentifierList[0])
        .map(response => response.json())
        .subscribe(response => {
          loading.dismiss().then(() => {
            this.user = response;
            console.log(result);
            this.getAccountDetails(this.user);
          })
        })
    }, error => {
      loading.dismiss().then(() => {
        console.log("Error occured");
      })
    })
  }

  getAccountDetails(user: User): any {
    const accountDetails = {
        operatingCompanyIdentifier: user.AccessibleAccountDetailList[7].OperatingCompanyIdentifier,
        productCode: user.AccessibleAccountDetailList[7].ProductCode,
        primaryIdentifier: user.AccessibleAccountDetailList[7].PrimaryIdentifier
      }

    this.userService.getAccountDetails(accountDetails)
      .map(response => response.json())
      .subscribe(result => {
        console.log(result);
        this.accountInfo = result;
        console.log(result);
      }, error => {
        console.log("An error occured on this request");
      });
  }

  onclick() {

  }

  setTransactions() {
    this.posted = [
      {amount: 80.05, date: new Date("November 30, 2017 11:35:00"), state: "Posted", type: "Card" },
      {amount: 90.40, date: new Date("November 29, 2017 07:24:00"), state: "Posted", type: "ACH"},
      {amount: 130.50, date: new Date("November 28, 2017 09:11:00"), state: "Posted", type: "Card"},
      {amount: 120.30, date: new Date("November 26, 2017 12:15:00"), state: "Posted", type: "ACH"}
    ];

    this.pending = [
      {amount: 80.05, date: new Date("December 1, 2017 10:13:00"), state: "Posted", type: "Card" },
      {amount: 90.40, date: new Date("December 2, 2017 07:43:00"), state: "Posted", type: "ACH"},
    ];
  }
}
