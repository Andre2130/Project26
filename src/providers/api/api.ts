import {Headers, RequestOptions,  Http} from '@angular/http';
import { Injectable } from '@angular/core';

const config = {
  apiKey: "AIzaSyDiavBrq95u5tYaMbnVHpDXyzmnVHwg7OQ",
  authDomain: "payments-pro.firebaseapp.com",
  databaseURL: "https://payments-pro.firebaseio.com",
  projectId: "payments-pro",
  storageBucket: "payments-pro.appspot.com",
  messagingSenderId: "566905745104"
};

@Injectable()
export class ApiProvider {

  public static MEMBER_ID = "memberId";
  public static US_BANK_URL = "http://localhost:8080/api";

  public static createOptions() {
    let headers = new Headers({
        "Content-Type": "application/json",
    });
    return new RequestOptions({ headers: headers });
  }

}
