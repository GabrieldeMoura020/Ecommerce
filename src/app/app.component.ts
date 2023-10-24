import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  public is_logged:boolean = false;
  
  constructor(
    
    public autenticacao_service:AutenticacaoService
    ){

      this.autenticacao_service.verifyToken().subscribe({next:() => {
        console.log('Token Verificado ...');
      },
      error:() => {
        console.log('Token Inválido');
      }
      });
    }
}