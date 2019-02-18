import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GlobalVariableProvider } from '../../providers/globalVariableProvider';

import { PartialSetupSchedule} from './partial_setupSchedule/partial_setupSchedule';
import { Care } from './care';

@Component({
  selector: 'page-addPet',
  templateUrl: 'addPet.html'
})

export class AddPetPage {
  private addPetData : {};
  private breedTypes : {};
  public selectedBreed : string = '';
  private careDetails : Care[] =[];
  selectedCareDetail: Care;
  today : string;

  constructor(public navCtrl: NavController, public navParams : NavParams, public globalVariableProvider : GlobalVariableProvider ) {
    this.today = new Date().toISOString();
  }

  ngOnInit() {
    this.addPetData = this.globalVariableProvider.getMainContentData('addPet');
    this.breedTypes = this.globalVariableProvider.getBreedTypesData();
    let careOptions = this.addPetData['careOptions'];
    for (let _i=0; _i < careOptions.length; _i++){
      this.careDetails.push(
        { id : _i, 
          name: careOptions[_i].name, 
          value: careOptions[_i].value, 
          selected: false, 
          frequencyOnOff: false,
          repeatsOnOff: false
        });
    }
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

  onCheckCare(selectedCareDetail:Care): void {
    this.selectedCareDetail = selectedCareDetail;
  }

  // saveDateOptions(event,selectedOption) {
  //   let targetId =  event.currentTarget.id;
  //   if(this.selectedRepeatDateList && this.selectedRepeatDateList[targetId]) {
  //     let temp =  this.selectedRepeatDateList[targetId];
  //     temp.push(selectedOption);
  //     this.selectedRepeatDateList[targetId] = temp;
  //   } else {
  //     this.selectedRepeatDateList[targetId] = [selectedOption];
  //   }
  // }

  savePetInfo() {
    //need to add delete all information
    this.navCtrl.pop();
  }
}