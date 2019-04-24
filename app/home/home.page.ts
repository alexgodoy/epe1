import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }

  acercade() {
    this.navCntrl.navigateForward('acercade');
   }

   calculodatos() {
    this.navCntrl.navigateForward('calculodatos');
   }

}
