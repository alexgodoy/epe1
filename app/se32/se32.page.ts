import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-se32',
  templateUrl: './se32.page.html',
  styleUrls: ['./se32.page.scss'],
})
export class Se32Page implements OnInit {
  eva1: number;
  eva2: number;
  EPE1: number;
  EPE2: number;
  EPE3: number;
  Total: number;
  Total2: number;
  Total3: number;
  Examen:number;
  notaminima=40;
  

  constructor(public toastctrl: ToastController, public navCntrl: NavController) { }
  
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
  this.navCntrl.navigateForward('sex');
 }
  ngOnInit() {
  }

}
