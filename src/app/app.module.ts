import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Globalization } from '@ionic-native/globalization';

import { DataReaderProvider } from '../providers/dataReaderProvider';
import { GlobalVariableProvider } from '../providers/globalVariableProvider';

import { WePetApp } from './app.component';
import { MyPetsPage } from '../pages/myPets/myPets';
import { AddPetPage } from '../pages/addPet/addPet';
import { ListPage } from '../pages/list/list';
import { PartialSetupSchedule} from '../pages/addPet/partial_setupSchedule/partial_setupSchedule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    WePetApp,
    MyPetsPage,
    AddPetPage,
    ListPage, 
    PartialSetupSchedule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Globalization,
    DataReaderProvider,
    GlobalVariableProvider
  ]
})
export class AppModule {}
