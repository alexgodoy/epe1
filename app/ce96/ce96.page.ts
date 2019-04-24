import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-ce96',
  templateUrl: './ce96.page.html',
  styleUrls: ['./ce96.page.scss'],
})
export class Ce96Page implements OnInit {
  eva1: number;
  eva2: number;
  eva3: number;
  EPE1: number;
  EPE2: number;
  EPE3: number;
  Total: number;
  Examen:number;
  
  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }
  
  cal() {
    /* Este es el calculo para la pagina que no da examen */

      let prom=(this.eva1 * 0.07)+ (this.eva2 * 0.07)+(this.eva3 * 0.14)+(this.EPE1 * 0.07) + (this.EPE2 * 0.14) + (this.EPE3 * 0.21)+(this.Examen * 0.3);
this.Total=prom;
}

volver() {
  this.navCntrl.navigateForward('cex');
 }
  ngOnInit() {
  }

}