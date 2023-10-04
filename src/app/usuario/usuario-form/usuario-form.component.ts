import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormularioComponent {

  public indice: string='';
  public nome: string='';
  public email: string='';
  public login: string='';
  public senha: string='';

  

  constructor(
    public usuario_service: UsuarioService,
    public activated_route: ActivatedRoute
  ){


    this.activated_route.params.subscribe(

     (params: any) => {

      if(params.indice == undefined) return;

      this.usuario_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {


      })
     })
  }

  salvar() {

    if(this.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    let dados = {

      indice:this.indice,
      nome:this.nome,
      email:this.email,
      senha:this.senha
      
    }

    const fd = new FormData();
    fd.append('nome',this.nome)
    fd.append('email',this.email)
    fd.append('login',this.login)
    fd.append('senha',this.senha)

    if (this.indice == "") {
  
      this.usuario_service.salvar(dados).subscribe();
      
      }

  else {

    this.usuario_service.editar(this.indice, dados);


    }
  }

}


