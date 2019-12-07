import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getUserData() {
    const localData = localStorage.getItem('card');
    let userdata: any[];
    try {
      if (localData) {
        userdata = JSON.parse(localData);
        //console.log('Data loaded', localData);
        console.log('Data loaded', userdata[0]);
        return userdata[0];
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  getUserPoints() {
    const localData = localStorage.getItem('points');
    let points: any[];
    try {
      if (localData) {
        points = JSON.parse(localData);
        //console.log('Data loaded', localData);
        console.log('Points loaded', points[0]);
        return points[0];
      }
    } catch (error) {
      console.log('error', error);
    }
  }

}
