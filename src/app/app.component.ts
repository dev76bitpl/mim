import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.darkTheme();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  darkTheme() {
    console.log("darkTheme()");
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark.matches);
    //toggleDarkTheme(prefersDark.matches);
    toggleDarkTheme(true);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

    // Add or remove the "dark" class based on if the media query matches
    function toggleDarkTheme(shouldAdd: boolean) {
      document.body.classList.toggle('dark', shouldAdd);
    }
  }

}
