import { Component, Input } from '@angular/core';

import { GlobalVariableProvider } from '../../../providers/globalVariableProvider';

import { Care } from '../care';

@Component({
  selector: 'partial-setup-schedule',
  templateUrl: 'partial_setupSchedule.html'
})

export class PartialSetupSchedule {
  private setupScheduleData: {};
  @Input() care: Care;
  selectedCare: Care;

  constructor(public globalVariableProvider : GlobalVariableProvider ) {
  }

  ngOnInit() {
    this.setupScheduleData = this.globalVariableProvider.getMainContentData('addPet').setupSchedule;
  }

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
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
}