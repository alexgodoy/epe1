import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-se96',
  templateUrl: './se96.page.html',
  styleUrls: ['./se96.page.scss'],
})
export class Se96Page implements OnInit {

    eva1: number;
    eva2: number;
    eva3: number;
    EPE1: number;
    EPE2: number;
    EPE3: number;
    Total: number;
    
    constructor(public toastctrl: ToastController, public navCntrl: NavController) {}

        
        cal() {
            /* Este es el calculo para la pagina que no da examen */

              let prom=(this.eva1 * 0.1)+ (this.eva2 * 0.1)+ (this.eva3 * 0.2)+(this.EPE1 * 0.1) + (this.EPE2 * 0.2) + (this.EPE3 * 0.3);
              this.Total=prom;
        }

        volver() {
             this.navCntrl.navigateForward('sex');

        }

        ngOnInit() {
        }

}