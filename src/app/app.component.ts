import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { GuardService } from './service/guard.service';
import { Router,UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  public is_logged:boolean = false;
  
  constructor(
    
    public autenticacao_service:AutenticacaoService,
    public router:Router,
    public guard_service:GuardService
    ){
      guard_service.isLogged();

      this.guard_service.is_logged.subscribe(
        (_islogged:any) => {
          this.is_logged = _islogged ? true : false;
        }
      );
  }
}
