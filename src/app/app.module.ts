import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule } from '@angular/forms';
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
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormapagamentoComponent,
    FormapagamentoFormularioComponent,
    FormapagamentoListarComponent,
    SubcategoriaComponent,
    SubcategoriaFormularioComponent,
    UsuarioComponent,
    UsuarioFormularioComponent,
    UsuarioListarComponent,
    SubcategoriaListarComponent,
    ProdutoComponent,
    ProdutoListarComponent,
    ProdutoFormComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    PedidoComponent,
    PedidoFormComponent,
    PedidoListarComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorListarComponent,
    EstadoComponent,
    EstadoFormComponent,
    EstadoListarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCRyeS7tMcWBXPXXnadzIW_dmbJv7VEik0",
      authDomain: "e-commerce-ads-2023-4-2.firebaseapp.com",
      projectId: "e-commerce-ads-2023-4-2",
      storageBucket: "e-commerce-ads-2023-4-2.appspot.com",
      messagingSenderId: "13459026214",
      appId: "1:13459026214:web:8021907e86a79fe70f11e7",
      measurementId: "G-VJERXGF4K3"
    }),
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }