import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GlobalVariableProvider } from '../../providers/globalVariableProvider';

import { AddPetPage } from '../addPet/addPet';

@Component({
  selector: 'page-myPets',
  templateUrl: 'myPets.html'
})
export class MyPetsPage {
  private myPetsData : {};
  private passedData: string;

  constructor(public navCtrl: NavController, public navParams : NavParams, public globalVariableProvider : GlobalVariableProvider ) {
  }

  ngOnInit() {
    this.myPetsData = this.globalVariableProvider.getEntireMainContentData();
  }

  async ionViewWillEnter() {
    this.passedData = this.navParams.get('title');

    const receivedPetInfo = this.navParams.get('addedPet');
    if(receivedPetInfo) {
      console.log(receivedPetInfo + ' added');
    }
  }

  addPet() {
    this.navCtrl.push(AddPetPage);
  }
}
