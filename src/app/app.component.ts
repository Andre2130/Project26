import { Component, ViewChild } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular/components/nav/nav';
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { ApiProvider } from '../providers/api/api';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { AccountsPage } from '../pages/accounts/accounts';
import { AgentsPage } from '../pages/agents/agents';
import { FaqPage } from '../pages/faq/faq';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  private rootPage:any = HomePage;

  private pages: Page[] = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.setStartPage();
    });

    this.pages = [
      { title: "Acounts", tabComponent: AccountsPage, component: TabsPage, icon: "cash", index: 0 },
      { title: "About Us", tabComponent: AboutPage, component: TabsPage, icon: "information-circle", index: 1 },
      { title: "Agents", tabComponent: AgentsPage, component: TabsPage, icon: "globe", index: 2 },
      { title: "Faq", tabComponent: FaqPage, component: TabsPage, icon: "help-circle", index: 3 }
    ];
  }

  setStartPage() {
    const member = localStorage.getItem(ApiProvider.MEMBER_ID);
    if(member !== null) {
      this.rootPage = LoginPage;
    }else{
      this.rootPage = SplashPage;
    }
  }

  isActive(page: Page) {
    let childNavs: any[] = this.nav.getActiveChildNavs();

    // Tabs are a special case because they have their own navigation
    let childNav: any = childNavs != null && childNavs.length > 0 ? childNavs[0] : null;

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return 'secondary';
    }

    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return 'secondary';
  }

  openPage(page) {
    if (page.index) {
        this.nav.setRoot(page.component, { tabIndex: page.index }).then(() => { });
    } else {
      this.nav.setRoot(page.component).then(() => { });
    }
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
}
