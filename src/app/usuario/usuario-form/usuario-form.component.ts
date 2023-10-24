import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormularioComponent {

  public id: number= 0;
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

      if(params.id == undefined) return;

      this.usuario_service.ref().child('/' + params.id).on('value', (snapshot: any) => {


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

      id:this.id,
      nome:this.nome,
      email:this.email,
      senha:this.senha
      
    }

    const fd = new FormData();
    fd.append('nome',this.nome)
    fd.append('email',this.email)
    fd.append('login',this.login)
    fd.append('senha',this.senha)

    if (this.id == 0) {
  
      this.usuario_service.salvar(dados).subscribe();
      
      }

  else {

    dados.id = this.id;
    this.usuario_service.editar(dados, this.id).subscribe();


    }
  }

}


