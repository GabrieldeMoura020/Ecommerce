import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormapagamentoComponent } from './formapagamento/formapagamento.component';
import { FormapagamentoFormularioComponent } from './formapagamento/formapagamento-formulario/formapagamento-formulario.component';
import { FormapagamentoListarComponent } from './formapagamento/formapagamento-listar/formapagamento-listar.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormularioComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormularioComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoFormComponent } from './produto/produto-formulario/produto-formulario.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { GuardService } from './service/guard.service';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';


const routes: Routes = [

  { path: '', component:HomeComponent, canActivate: [GuardService]},
  { path: 'home', component: HomeComponent },
  {
    path: 'categoria',
    component: CategoriaComponent,
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full'},
      { path: 'listar', component: CategoriaListarComponent },
      { path: 'formulario', component: CategoriaFormComponent },
      { path: 'formulario/:indice', component:CategoriaFormComponent}
    ]
  },
  {
    path: 'formapagt',
    component: FormapagamentoComponent,
    children: [
      {path: '', redirectTo: 'listar', pathMatch: 'full'},
      {path: 'listar', component: FormapagamentoListarComponent},
      {path: 'formulario', component: FormapagamentoFormularioComponent},
      {path: 'formulario/:indice', component: FormapagamentoFormularioComponent}
    ]
  },
  {
    path: 'subcategoria',
    component: SubcategoriaComponent,
    children: [
      {path: '', redirectTo: 'listar', pathMatch: 'full'},
      {path: 'listar', component: SubcategoriaListarComponent},
      {path: 'formulario', component: SubcategoriaFormularioComponent},
      {path: 'formulario/:indice', component: SubcategoriaFormularioComponent}
    ]
    
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {path: '', redirectTo: 'listar', pathMatch: 'full'},
      {path: 'listar', component: UsuarioListarComponent},
      {path: 'formulario', component: UsuarioFormularioComponent},
      {path: 'formulario/:indice', component: UsuarioFormularioComponent}
    ]
    
  },
  {
    path: 'fornecedor',
    component: FornecedorComponent,
    children: [
      {path: '', redirectTo: 'listar', pathMatch: 'full'},
      {path: 'listar', component: FornecedorListarComponent},
      {path: 'form', component: FornecedorFormComponent},
      {path: 'form/:indice', component: FornecedorFormComponent}
    ]
    
  },
  { 
    path:'produto',
    component:ProdutoComponent,
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:ProdutoListarComponent},
      {path:'form', component:ProdutoFormComponent},
      {path:'form/:indice', component:ProdutoFormComponent}
    ]
  },
  {
    path:'login',component:AutenticacaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }