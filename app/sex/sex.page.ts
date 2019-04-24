import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.page.html',
  styleUrls: ['./sex.page.scss'],
})
export class SexPage implements OnInit {

  
  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }

  se32() {
    this.navCntrl.navigateForward('se32');
   }

   se64() {
    this.navCntrl.navigateForward('se64');
   }
   se96() {
    this.navCntrl.navigateForward('se96');
   }

   se128() {
    this.navCntrl.navigateForward('se128');
   }

   volver() {
    this.navCntrl.navigateForward('calculodatos');
   }

   verhome() {
    this.navCntrl.navigateForward('home');
   }
   
  ngOnInit() {
  }

}
