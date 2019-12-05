import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private userData: FormGroup;
  vuser: string;
  vuserplaceholder: string;
  data: any;

  constructor(public formBuilder: FormBuilder) {
    this.vuser = "nick musi mieć minmimum 3 znaki oraz max 32 znaki";
    this.vuserplaceholder = "podaj swój nick";
    this.data = this.getUserData();
    this.userData = formBuilder.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      start_sila: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(32)])],
      start_moc: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(32)])],
      opis: ['']
    });
  }

  saveUser() {
    console.log(this.userData.value);
    //this.updateUser(this.userData.value.firstname);
  }

  updateUser(uzytkownik: string, poszukiwacz: string, charakter: string, start: string, start_sila: number, start_moc: number) {
    var userCard = [
      {
        "uzytkownik": uzytkownik,
        "poszukiwacz": "złodziej",
        "charakter": "zły",
        "start": "miasto",
        "start_sila": 12,
        "start_moc": 3
      }
    ]

    localStorage.setItem("userCard", JSON.stringify(userCard));
  }

  getUserData() {
    const localData = localStorage.getItem('userCard');
    try {
      if (localData) {
        this.userData = JSON.parse(localData);
        //console.log('Data loaded', localData);
        console.log('Data loaded', this.userData[0]);
        return this.userData[0];
      }
    } catch (error) {
      console.log('error', error);
    }
  }

}
