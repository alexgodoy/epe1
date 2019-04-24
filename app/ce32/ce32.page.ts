import { Component, OnInit } from '@angular/core';

import { ToastController} from '@ionic/angular';
import { async } from '@angular/core/testing';

import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-ce32',
  templateUrl: './ce32.page.html',
  styleUrls: ['./ce32.page.scss'],
})
export class Ce32Page implements OnInit {
  eva1: number;
  eva2: number;
  EPE1: number;
  EPE2: number;
  EPE3: number;
  Total: number;
  Total2: number;
  Total3: number;
  examen:number;
  notaminima=40;
  daexamen:boolean;
  alertCtrl: any;
  

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }
  async ngOnInit() {
  const alert = await this.alertCtrl.create({
    header: 'Calculo de notas',
    subHeader: '96 horas',
    message: ' <p>Seleccione si desea calcular las notas con o sin <strong>Examen</strong>.</p>'+
    '<p>Tenga en cuenta que para <strong>no</strong> rendir examen nesecita:</p>'+
    '<ul>'+
    '<li align="left">Minimo <strong>70%</strong>  de asistencia.</li>'+
    '<li align="left">Ninguna <strong>EPE</strong> menor a 4.</li>'+
    '<li align="left">Promedio de <strong>EVA(s)</strong> mayor a 4.</li>'+
    '<li align="left">Para no rendir examen tu promedio debe ser mayor a <strong>5.5</strong>.</li>'+
    '</ul>'+'<p>Para ingresar las notas debes hacerlo con puntos <strong>EJ: 5.5</strong>.</p>',
    buttons: [ {
      text: 'Calcular con examen',
      handler: () => {
        console.log('da');
        this.daexamen = true;
        document.getElementById("titulo").innerHTML = "<ion-title id='titulo'>96 Hrs CON Examen</ion-title>";
      }
    },,  {
      text: 'Calcular sin examen',
      handler: () => {
        console.log('no');
        this.daexamen = false;
        this.examen =1;
        document.getElementById("divex").innerHTML = "";
      
        document.getElementById("titulo").innerHTML = "<ion-title id='titulo'>96 Hrs SIN Examen</ion-title>";
      }
    }]
  });

   await alert.present();
  }

  cal() {
    /* Este es el calculo para sacar promedio Actual*/

      let prom=(this.eva1 * 0.14)+ (this.eva2 * 0.14)+ (this.EPE1 * 0.07) + (this.EPE2 * 0.14)+ (this.EPE3 * 0.21);
      this.Total=prom;

}



cal2(){
    /* Este es el calculo para nota presentación*/
   let prom2=(this.Total -this.notaminima) * 0.3;
  
   this.Total2=prom2;
}
/*--
cal3() {
      

  let prom2=(this.eva1 * 0.14)+ (this.eva2 * 0.14)+ (this.EPE1 * 0.07) + (this.EPE2 * 0.14)+ (this.EPE3 * 0.21);
  this.Total2=prom2;
}*/


volver() {
  this.navCntrl.navigateForward('cex');
 }
 

}