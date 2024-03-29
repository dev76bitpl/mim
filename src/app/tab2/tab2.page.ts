import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HelperService } from '../service/helper.service';
import { Toast } from '@ionic-native/toast/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userData: FormGroup;
  vuser: string;
  vuserplaceholder: string;
  verror: string;
  data: any;

  constructor(public formBuilder: FormBuilder, public helper: HelperService, private toast: Toast, public platform: Platform, public alertController: AlertController) {
    this.vuser = "pole musi mieć minmimum 3 znaki oraz max 32 znaki";
    this.vuserplaceholder = "podaj swój nick";
    this.verror = "pole wymagane!";

    this.data = this.helper.getUserData();
    this.userData = formBuilder.group({
      //nick: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      poszukiwacz: [this.data.poszukiwacz, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      charakter: [this.data.charakter],
      start: [this.data.start],
      start_sila: [this.data.start_sila, Validators.compose([Validators.required, Validators.min(1), Validators.max(32)])],
      start_moc: [this.data.start_moc, Validators.compose([Validators.required, Validators.min(1), Validators.max(32)])],
      opis: [this.data.opis]
    });

    console.log(this.platform.platforms());
  }

  async saveUser() {
    console.log("this.userData", this.userData);
    var card = [
      {
        "uzytkownik": this.userData.value.nick,
        "poszukiwacz": this.userData.value.poszukiwacz,
        "charakter": this.userData.value.charakter,
        "start": this.userData.value.start,
        "start_sila": this.userData.value.start_sila,
        "start_moc": this.userData.value.start_moc
      }
    ]
    if (this.userData.status === "VALID") {
      localStorage.setItem("card", JSON.stringify(card));
      this.cardSuccess();
      //this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      //toast => {
      //console.log(toast);
      //}
      //);
    }
  }

  async cardSuccess() {
    const alert = await this.alertController.create({
      header: 'Karta poszukiwacza',
      subHeader: '',
      message: 'Karta została utworzona. Mozesz rozpocząć grę.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'alertSuccessBtn',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }],
      cssClass: 'alertSuccess',
      mode: 'ios',
    });
    await alert.present();
  }
}
