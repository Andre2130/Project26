import {Response, Http} from '@angular/http';
import { User, AccountDetails } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './api';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  public getUser(): Observable<Response> {
    return this.http.get(ApiProvider.US_BANK_URL + "/users", ApiProvider.createOptions());
  }

  public getAccountListAndBalances(id: string): Observable<Response>{
    return this.http.get(ApiProvider.US_BANK_URL + "/accounts/" + id, ApiProvider.createOptions());
  }

  public getAccountDetails(accountDetails: AccountDetails): Observable<Response>{
      return this.http.post(ApiProvider.US_BANK_URL + "/accounts/details", JSON.stringify(accountDetails), ApiProvider.createOptions());
  }

}
