import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  public indice: string='';
  public nome: string='';
  public cpf: string='';
  public dtnas: string='';
  public celular: string=''; 
  public email: string='';

  constructor(

    public cliente_service: ClienteService,
    public activated_route: ActivatedRoute
  ){

    this.activated_route.params.subscribe(

      (params: any) => {

        if(params.indice == undefined) return;

        this.cliente_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {

          let dado: any = snapshot.val();
          this.indice = params.indice;
          this.nome = dado.nome;
          this.cpf = dado.cpf;
          this.dtnas = dado.dtnas;
          this.celular = dado.celular;
          this.email = dado.email;
        })
      })
  }

  salvar() {

    let validacoes_campos = this.validar_campos();
    
    if (this.indice == "") {

      if (validacoes_campos.get("nome_valido") == true && validacoes_campos.get("cpf_valido") == true && validacoes_campos.get("dtnas_valido") == true && validacoes_campos.get("celular_valido") && validacoes_campos.get("email_valido") == true) {

        this.cliente_service.salvar({
          nome: this.nome,
          cpf: this.cpf,
          dtnas: this.dtnas,
          celular: this.celular,
          email: this.email
        })

        alert("Cliente cadastrado");

        this.nome = "";
        this.cpf = "";
        this.dtnas = "";
        this.celular= "";
        this.email = "";
      }
    }
  
    else {
      
      if (validacoes_campos.get("nome_valido") == true && validacoes_campos.get("cpf_valido") == true && validacoes_campos.get("dtnas_valido") == true && validacoes_campos.get("celular_valido") && validacoes_campos.get("email_valido") == true){
        
        this.cliente_service.editar(this.indice, {nome: this.nome, cpf: this.cpf, dtnas: this.dtnas, celular: this.celular, email: this.email})

        alert("Alterações salvas");
      }
    }

  }

  validar_campos(){

    let validacoes = new Map();

    if(this.nome == ""){
      document.querySelector("#nome")?.classList.add('has-error');
      validacoes.set("nome_valido", false);
    }

    else {
      document.querySelector("#nome")?.classList.remove('has-error');
      validacoes.set("nome_valido", true);
    }

    if(this.cpf == ""){
      document.querySelector("#cpf")?.classList.add('has-error');
      validacoes.set("cpf_valido", false);
    }

    else {
      document.querySelector("#cpf")?.classList.remove('has-error');
      validacoes.set("cpf_valido", true);
    }

    if(this.dtnas == ""){
      document.querySelector("#dtnas")?.classList.add('has-error');
      validacoes.set("dtnas_valido", false);
    }

    else {
      document.querySelector("#dtnas")?.classList.add('has-error');
      validacoes.set("dtnas_valido", true);
    }

    if(this.celular == ""){
      document.querySelector("#celular")?.classList.add('has-error');
      validacoes.set("celular_valido", false);
    }

    else {
      document.querySelector("#celular")?.classList.remove('has-error');
      validacoes.set("celular_valido", true);
    }

    if (this.email == "") {
      document.querySelector("#email")?.classList.add('has-error');
      validacoes.set("email_valido", false);
    }

    else {
      document.querySelector("#email")?.classList.add('has-error');
      validacoes.set("email_valido", true);
    }

    return validacoes;

  }

}
