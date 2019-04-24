import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-calculodatos',
  templateUrl: './calculodatos.page.html',
  styleUrls: ['./calculodatos.page.scss'],
})
export class CalculodatosPage implements OnInit {

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }

  cex() {
    this.navCntrl.navigateForward('cex');
   }

   sex() {
    this.navCntrl.navigateForward('sex');
   }

  
   ngOnInit() {}
   verhome() {
     this.navCntrl.navigateForward('home');
    }
       EPE1 : number;
       EPE2 : number;
       EPE3 : number;
       eva1 : number;
       eva2 : number;
       examen :number;
       Total : number;


       cal() {
         /* Este es el calculo para la pagina que no da examen */
 
           let prom=(this.eva1 * 0.2)+ (this.eva2 * 0.2)+(this.EPE1 * 0.1) + (this.EPE2 * 0.2) + (this.EPE3 * 0.3);
  this.Total=prom;
 }


 
 
 }
