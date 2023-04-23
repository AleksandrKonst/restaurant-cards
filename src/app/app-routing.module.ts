import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelCardsComponent} from "./Panel/panel-cards/panel-cards.component";
import {FoodCardComponent} from "./Panel/food-card/food-card.component";

const appRoutes: Routes =[
  { path: '', component: PanelCardsComponent},
  { path: 'food', component: FoodCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
