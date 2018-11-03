import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GlobalVariableProvider } from '../../providers/globalVariableProvider';

@Component({
  selector: 'page-addPet',
  templateUrl: 'addPet.html'
})

export class AddPetPage {
  private addPetData : {};
  breedTypes;
  public selectedBreed : string;
  today;
  bathCare: boolean;
  bathDate: string[];
  repeatsOptions;
  frequencyOptions;
  dentalCare: boolean;
  selectedRepeatDateList: {};

  constructor(public navCtrl: NavController, public navParams : NavParams, public globalVariableProvider : GlobalVariableProvider ) {
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    this.addPetData = this.globalVariableProvider.getMainContentData('addPet');
    this.breedTypes = this.globalVariableProvider.getBreedTypesData();
    this.selectedBreed = '';
    this.repeatsOptions = this.addPetData['repeatsOptions'];
    this.frequencyOptions = this.addPetData['frequencyOptions'];
  }

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
    //need to add delete all information
    this.navCtrl.getPrevious().data.addedPet = 'New pet is';
  }

  changeSelectedBreed(breed) {
    this.selectedBreed = breed;
  }

  saveDateOptions(event,selectedOption) {
    if(this.selectedRepeatDateList && this.selectedRepeatDateList[event.currentTarget.id]) {
      let temp =  this.selectedRepeatDateList[event.currentTarget.id];
      temp.push(selectedOption);
      this.selectedRepeatDateList[event.currentTarget.id] = temp;
    } else {
      this.selectedRepeatDateList[event.currentTarget.id] = selectedOption;
    }
  }

  savePetInfo() {
    //need to add delete all information
    this.navCtrl.pop();
  }
}