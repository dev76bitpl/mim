import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getUserData(userdata: any) {
    const localData = localStorage.getItem('userCard');
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

}
