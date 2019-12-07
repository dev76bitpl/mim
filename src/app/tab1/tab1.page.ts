import { Component } from '@angular/core';
import { HelperService } from '../service/helper.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sizelg: number = 6;
  sizemd: number = 6;
  sizesm: number = 12;
  sizexs: number = 12;
  type: string;
  userData = {};
  pointsData = {}
  data: any;
  points: any;

  public point = {
    moc: 0,
    zloto: 0,
    sila: 0,
    wytrzymalosc: 0
  }

  public feature = {
    moc: "moc",
    zloto: "złoto",
    sila: "siła",
    wytrzymalosc: "wytrzymałość"
  }

  constructor(public helper: HelperService, public alertController: AlertController) {

    if (localStorage.getItem("card") === null || localStorage.getItem("points") === null)
      this.initDb();
    this.data = this.helper.getUserData();
    this.points = this.helper.getUserPoints();
    this.starterPoints();
    //console.log("this.data.user", this.data.poszukiwacz);

    if (!this.data.poszukiwacz) {
      this.noCardAlert();
    }
  }


  async noCardAlert() {
    const alert = await this.alertController.create({
      header: 'Karta poszukiwacza',
      subHeader: '',
      message: 'Nie posiadasz karty poszukiwacza. Idź do zakładki Ustawienia karty i stwórz ją.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'alertErrorBtn',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }],
      cssClass: 'alertError',
      mode: 'ios',
    });

    await alert.present();
  }

  starterPoints() {
    this.point.sila = this.data.start_sila + this.points.sila;
    this.point.moc = this.data.start_moc + this.points.moc;
    this.point.wytrzymalosc = this.points.wytrzymalosc;
    this.point.zloto = this.points.zloto;
  }

  pointPicker(i: number, type: string) {
    switch (type) {
      case "moc":
        this.point.moc = this.point.moc + i;
        console.log("this.point.moc: ", this.point.moc);
        break;
      case "sila":
        this.point.sila = this.point.sila + i;
        console.log("this.point.sila: ", this.point.sila);
        break;
      case "wytrzymalosc":
        this.point.wytrzymalosc = this.point.wytrzymalosc + i
        console.log("this.point.wytrzymalosc: ", this.point.wytrzymalosc);
        break;
      case "zloto":
        this.point.zloto = this.point.zloto + i
        console.log("this.point.zloto: ", this.point.zloto);
        break;
      default:
        console.log("default type: ", type);
        break;
    }
    this.updatePoints(this.point.sila - this.data.start_sila, this.point.moc - this.data.start_moc, this.point.wytrzymalosc, this.point.zloto);
  }

  test() {
    var employees = [
      {
        "id": "1",
        "firstName": "Tom",
        "lastName": "Cruise"
      },
      {
        "id": "2",
        "firstName": "Maria",
        "lastName": "Sharapova"
      },
      {
        "id": "3",
        "firstName": "James",
        "lastName": "Bond"
      }
    ]

    localStorage.setItem("myemps", JSON.stringify(employees));
  }

  updatePoints(sila: number, moc: number, wytrzymalosc: number, zloto: number) {
    var points = [
      {
        "sila": sila,
        "moc": moc,
        "wytrzymalosc": wytrzymalosc,
        "zloto": zloto
      }
    ]

    localStorage.setItem("points", JSON.stringify(points));
  }

  initDb() {
    var card = [
      {
        "uzytkownik": "",
        "poszukiwacz": "",
        "charakter": "",
        "start": "",
        "start_sila": "",
        "start_moc": ""
      }
    ];
    localStorage.setItem("card", JSON.stringify(card));
    var points = [
      {
        "sila": 0,
        "moc": 0,
        "wytrzymalosc": 0,
        "zloto": 0
      }
    ]

    localStorage.setItem("points", JSON.stringify(points));
  }
}
