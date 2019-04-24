import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-ce128',
  templateUrl: './ce128.page.html',
  styleUrls: ['./ce128.page.scss'],
})
export class Ce128Page implements OnInit {
  eva1: number;
  eva2: number;
  eva3: number;
  eva4: number;
  EPE1: number;
  EPE2: number;
  EPE3: number;
  EPE4: number;
  Total: number;
  Examen:number;
  

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }
  
  cal() {
    /* Este es el calculo para la pagina que no da examen */

      let prom=(this.eva1 * 0.035)+ (this.eva2 * 0.035)+(this.eva3 * 0.035)+(this.eva4 * 0.07)+(this.EPE1 * 0.07) + (this.EPE2 * 0.105) + (this.EPE3 * 0.175)+(this.EPE4 * 0.175)+(this.Examen * 0.3);
this.Total=prom;
}

volver() {
  this.navCntrl.navigateForward('cex');
 }
  ngOnInit() {
  }

}