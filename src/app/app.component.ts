import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Globalization } from '@ionic-native/globalization';

import { DataReaderProvider } from '../providers/dataReaderProvider';
import { GlobalVariableProvider } from '../providers/globalVariableProvider';

import { MyPetsPage } from '../pages/myPets/myPets';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class WePetApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyPetsPage;

  pages: Array<{title: string, component: any}>;

  public appData : any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public global: GlobalVariableProvider, private dataReaderProvider: DataReaderProvider, private globalization: Globalization) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MyPetsPage },
      { title: 'List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      //window.navigatior.language
      this.globalization.getPreferredLanguage()
        .then(preferredLanguage => {
          console.log(preferredLanguage.value);
          this.retrieveData(preferredLanguage.value);
        })
        .catch(e => {
          console.log(e);
          let preferredLanguage = {value:'en-US'};
          this.retrieveData(preferredLanguage.value);
        });
    });
  }

  retrieveData(preferredLanguage) {
    //Content Data
    this.dataReaderProvider.getData(preferredLanguage).subscribe(
      data=> {
        this.global.setEntireMainContentData(data);
        this.appData = data; 
        console.log(this.global.getEntireMainContentData());

        this.dataReaderProvider.getData('catBreed').subscribe(
          catBreedsData => {
            console.log('Cat Breed data is retrieved.');
            this.global.setBreedTypesData(catBreedsData, preferredLanguage);
            
            this.nav.setRoot(this.pages[0].component, {title: this.pages[0].title});
          }, 
          error => {
            console.log('Error in retrieving cat breed data');
          }
        )
      }, 
      error=> {
        console.log('Error in retrieving the entire content date');
      });
  }

  openPage(page) {
    this.nav.setRoot(page.component, {title: page.title});
  }
}