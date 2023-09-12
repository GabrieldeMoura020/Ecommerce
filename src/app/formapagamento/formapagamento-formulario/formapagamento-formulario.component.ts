import { Component } from '@angular/core';
import { FormapagamentoService } from '../formapagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formapagt-formulario',
  templateUrl: './formapagamento-formulario.component.html',
  styleUrls: ['./formapagamento-formulario.component.css']
})
export class FormapagamentoFormularioComponent {

  public indice: string='';
  public nome: string='';
  public obs: string = '';

  constructor (
    public formapagamento_service: FormapagamentoService,
    public activated_route: ActivatedRoute
  ) {


    this.activated_route.params.subscribe(

      (params: any) => {

        //Caso seja um registro novo interromper o método
        if(params.indice == undefined) return;


        this.formapagamento_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {

          let dado: any = snapshot.val();
          this.indice = params.indice;
          this.nome = dado.nome;
          this.obs = dado.obs;
        })
      })

  }


  salvar() {

    let validacoes_campos = this.validar_campos(); //Valida todos os campos do formulário

    if (this.indice == "") {

      if(validacoes_campos.get("nome_valido") == true && validacoes_campos.get("obs_valido") == true) {
        this.formapagamento_service.salvar({
          nome: this.nome,
          obs: this.obs
        })
    
        alert("Forma de pagamento cadastrada");

        this.nome = "";
        this.obs = "";
      }
    }

    else {

      if (validacoes_campos.get("nome_valido") == true && validacoes_campos.get("obs_valido") == true) {
        this.formapagamento_service.editar(this.indice, {nome: this.nome, obs: this.obs})

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


    if(this.obs == "") {
      document.querySelector("#obs")?.classList.add('has-error');
      validacoes.set("obs_valido", false);
    }


    else {
      document.querySelector("#obs")?.classList.remove('has-error');
      validacoes.set("obs_valido", true);

    }

    return validacoes;
  }








}