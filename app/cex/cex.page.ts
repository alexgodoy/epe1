import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-cex',
  templateUrl: './cex.page.html',
  styleUrls: ['./cex.page.scss'],
})
export class CexPage implements OnInit {

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }

  ngOnInit() {
  }
  verhome() {
    this.navCntrl.navigateForward('home');
   }
   ce32() {
    this.navCntrl.navigateForward('ce32');
   }
   ce64() {
    this.navCntrl.navigateForward('ce64');
   }
   ce96() {
    this.navCntrl.navigateForward('ce96');
   }
   ce128() {
    this.navCntrl.navigateForward('ce128');
   }
}
