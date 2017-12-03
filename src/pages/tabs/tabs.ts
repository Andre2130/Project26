import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AccountsPage } from '../accounts/accounts';
import { AgentsPage } from '../agents/agents';
import { FaqPage } from '../faq/faq';
import { NavParams } from 'ionic-angular';

@Component({
  selector: "page-tabs",
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountsPage;
  tab2Root = AboutPage;
  tab3Root = AgentsPage;
  tab4Root = FaqPage

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
