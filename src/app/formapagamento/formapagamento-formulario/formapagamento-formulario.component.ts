import { Component } from '@angular/core';
import { FormapagamentoService } from '../formapagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formapagamento-formulario',
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
    if (this.indice == undefined) {
    this.formapagamento_service.salvar({
      nome: this.nome,
      obs: this.obs
      })
    
    

    alert("Forma de pagamento cadastrada");

    }

    else {
      this.formapagamento_service.editar(this.indice, {nome: this.nome, obs: this.obs})

      alert("Alterações salvas");
    }


    this.nome = "";
    this.obs = "";
  }








}