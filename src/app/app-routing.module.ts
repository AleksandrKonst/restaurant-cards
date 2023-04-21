import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelCardsComponent} from "./Panel/panel-cards/panel-cards.component";

const appRoutes: Routes =[
  { path: '', component: PanelCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
