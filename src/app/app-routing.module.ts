import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointerComponent } from './pointer/pointer.component';

const routes: Routes = [
  { path : '' , component : PointerComponent},
  { path : '**' , component : PointerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
