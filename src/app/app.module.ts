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
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';



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
    SubcategoriaFormComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }