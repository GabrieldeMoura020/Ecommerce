import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { 
    path:'categoria', 
    component:CategoriaComponent,
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:CategoriaListarComponent},
      {path:'form', component:CategoriaFormComponent},
      {path:'form/:indice', component:CategoriaFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }