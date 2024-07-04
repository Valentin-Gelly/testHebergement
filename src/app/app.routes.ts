import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoadingImgComponent } from './loading-img/loading-img.component';
import { PrintingPageComponent } from './printing-page/printing-page.component';
import { PrepaidTariffsTelefonicaComponent } from './prepaid-tariffs-telefonica/prepaid-tariffs-telefonica.component';


export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  {path: 'loading', component: LoadingImgComponent},
  {path : 'printing', component: PrintingPageComponent},
  { path: 'prepaid-tariffs-telefonica', component: PrepaidTariffsTelefonicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }