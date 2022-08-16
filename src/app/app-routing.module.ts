import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadComponent: ()=> import('./standalone/standalone.component').then(m=>m.StandaloneComponent)
  } ,
  {
    path:"book",
    loadComponent: ()=> import('./book/book.component').then(m=>m.BookComponent)


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
