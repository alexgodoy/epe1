import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'acercade', loadChildren: './acercade/acercade.module#AcercadePageModule' },
  { path: 'calculodatos', loadChildren: './calculodatos/calculodatos.module#CalculodatosPageModule' },
  { path: 'cex', loadChildren: './cex/cex.module#CexPageModule' },
  { path: 'sex', loadChildren: './sex/sex.module#SexPageModule' },
  { path: 'se32', loadChildren: './se32/se32.module#Se32PageModule' },
  { path: 'se64', loadChildren: './se64/se64.module#Se64PageModule' },
  { path: 'se96', loadChildren: './se96/se96.module#Se96PageModule' },
  { path: 'se128', loadChildren: './se128/se128.module#Se128PageModule' },
  { path: 'ce128', loadChildren: './ce128/ce128.module#Ce128PageModule' },
  { path: 'ce96', loadChildren: './ce96/ce96.module#Ce96PageModule' },
  { path: 'ce64', loadChildren: './ce64/ce64.module#Ce64PageModule' },
  { path: 'ce32', loadChildren: './ce32/ce32.module#Ce32PageModule' },
  { path: 'se96', loadChildren: './se96/se96.module#Se96PageModule' },
  { path: 'se96', loadChildren: './se96/se96.module#Se96PageModule' },
  { path: 'se32', loadChildren: './se32/se32.module#Se32PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
