import { Component } from '@angular/core';

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
  data: any;

  public point = {
    moc: 0,
    zloto: 0,
    sila: 12,
    wytrzymalosc: 0
  }

  public feature = {
    moc: "moc",
    zloto: "złoto",
    sila: "siła",
    wytrzymalosc: "wytrzymałość"
  }

  constructor() {
    this.data = this.getUserData();
    console.log("this.data.user", this.data.poszukiwacz);
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
    var userCard = [
      {
        "sila": sila,
        "moc": moc,
        "wytrzymalosc": wytrzymalosc,
        "zloto": zloto
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
