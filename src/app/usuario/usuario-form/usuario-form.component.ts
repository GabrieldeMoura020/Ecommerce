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
  public senha: string='';

  

  constructor(
    public usuario_service: UsuarioService,
    public activated_route: ActivatedRoute
  ){


    this.activated_route.params.subscribe(

     (params: any) => {

      if(params.indice == undefined) return;

      this.usuario_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {

        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.nome = dado.nome;
        this.email = dado.email;
        this.senha = dado.senha;
      })
     })
  }

  salvar() {

    let validacoes_campos = this.validar_campos(); //Valida todos os campos do formulário

    if (this.indice == "") {
     
      
      if(validacoes_campos.get("nome_valido") == true && validacoes_campos.get("email_valido") == true && validacoes_campos.get("senha_valido") == true) {
        this.usuario_service.salvar({
          nome: this.nome,
          email: this.email,
          senha: this.senha
        })

        alert("Usuário cadastrado");

        this.nome = "";
        this.email = "";
        this.senha = "";
      }

  }

  else {

    if(validacoes_campos.get("nome_valido") == true && validacoes_campos.get("email_valido") == true && validacoes_campos.get("senha_valido") == true) {
      this.usuario_service.editar(this.indice, {nome: this.nome, email: this.email, senha: this.senha});

      alert("Alterações salvas");
    }
  }

  }

  validar_campos() {

    let validacoes = new Map();

    if(this.nome == "") {
      document.querySelector("#nome")?.classList.add('has-error');
      validacoes.set("nome_valido", false);
    }

    else {
      document.querySelector("#nome")?.classList.remove('has-error');
      validacoes.set("nome_valido", true);

    }


    if(this.email == "") {
      document.querySelector("#email")?.classList.add('has-error');
      validacoes.set("email_valido", false);
    }


    else {
      document.querySelector("#email")?.classList.remove('has-error');
      validacoes.set("email_valido", true);

    }


    if (this.senha == "") {
      document.querySelector("#senha")?.classList.add('has-error');
      validacoes.set("senha_valido", false);

    }

    else {
      document.querySelector("#senha")?.classList.remove('has-error');
      validacoes.set("senha_valido", true);

    }


    return validacoes;
  }


  

}