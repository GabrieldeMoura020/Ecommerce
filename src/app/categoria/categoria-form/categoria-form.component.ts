import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {

  public indice: string = '';
  public descricao:string = '';
  public valor:string = '';

  constructor (
    public categoria_service:CategoriaService,
    public activated_route:ActivatedRoute
  ){

    this.activated_route.params.subscribe(
      
      (params: any) => {

        //Caso seja um registro novo interromper o método
        if(params.indice == undefined) return;

        this.categoria_service.
        ref().child('/' + params.indice).on('value', (snapshot: any) => {

          let dado:any = snapshot.val();
          this.indice = params.indice;
          this.descricao = dado.descricao;
          this.valor = dado.valor;
        })
      })

  }

  salvar() {

    let validacoes_campos = this.validar_campos(); //Valida todos os campos do formulário

    if(this.indice == '') {
   
      
      if(validacoes_campos.get("descricao_valido") == true && validacoes_campos.get("valor_valido") == true) {

        this.categoria_service.salvar({

        descricao: this.descricao,
        valor: this.valor
        })

        alert("Produto cadastrado")

        this.descricao = '';
        this.valor = '';

      }
    }

    else {


      if(validacoes_campos.get("descricao_valido") == true && validacoes_campos.get("valor_valido") == true) {

        this.categoria_service.editar(this.indice, {descricao: this.descricao, valor: this.valor})

        alert("Alterações salvas")
      }
    }
  }

  validar_campos() {

    let validacoes = new Map();

    if(this.descricao == "") {
      document.querySelector("#descricao")?.classList.add('has-error');
      validacoes.set("descricao_valido", false);
    }

    else {
      document.querySelector("#descricao")?.classList.remove('has-error');
      validacoes.set("descricao_valido", true);

    }


    if(this.valor == "") {
      document.querySelector("#valor")?.classList.add('has-error');
      validacoes.set("valor_valido", false);
    }


    else {
      document.querySelector("#valor")?.classList.remove('has-error');
      validacoes.set("valor_valido", true);

    }

    return validacoes;
  }
  
}