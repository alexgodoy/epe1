import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }
  ngOnInit() {
  }
  verhome() {
    this.navCntrl.navigateForward('home');
   }
 

}
