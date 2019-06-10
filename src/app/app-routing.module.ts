import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FilmsItemComponent } from './films-item/films-item.component';
import { FilmsDataComponent } from './films-data/films-data.component';

export const routes: Routes = [
  {
    path:'',
    component: FilmsItemComponent
  },
  {
    path: 'filmsData/:id',
    component: FilmsDataComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
