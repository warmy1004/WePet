import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVariableProvider {
    public mainContentObj: {};
    public breedTypesObj: {};

    public getMainContentData(elmtId) {
        return this.mainContentObj[elmtId];
    }

    public setMainContentData(data, elmtId) {
        this.mainContentObj[elmtId] = data;
    }

    public getEntireMainContentData() {
        return this.mainContentObj;
    }

    public setEntireMainContentData(data) {
        this.mainContentObj = data;
    }

    public getBreedTypesData() {
        return this.breedTypesObj;
    }

    public setBreedTypesData(data, elmtId) {
        this.breedTypesObj = data[elmtId];
    }
}