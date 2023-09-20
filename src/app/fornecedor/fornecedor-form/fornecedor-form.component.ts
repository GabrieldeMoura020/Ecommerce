import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent {

  public indice:string = '';
  public nomefant:string = '';
  public logradouro:string = '';
  public razaosocial:string = '';
  public complemento:string = '';
  public cnpj:string = '';
  public bairro:string = '';
  public contato:string = '';
  public cidade:string = '';
  public email:string = '';
  public estado:Array<any> = [];
  public is_desabilitado:boolean = true;

  constructor(
    public activated_route:ActivatedRoute,
    public estado_service:EstadoService
  ){
    this.listarEstado();
    this.activated_route.params
    .subscribe(
      (params:any) => {
        if (params.indice == undefined) return;

        this.estado_service.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any = snapshot.val();
          this.indice = params.indice;
          this.nomeestado = dado.nomeestado;
        });
      });
  }

  salvar(){
    let dados = {
      nomeestado:this.nomeestado
    };

    if(dados.nomeestado == ''){
      document.querySelector('#nomeestado')
      ?.classList.add('has-error');
      return;
    }

    if(this.indice == ''){
      this.estado_service.salvar(dados);
    } else {
      this.estado_service.editar(this.indice, dados);
    }
  }

  listarEstado(){
    this.estado_service.listar()
    .once('value', (snapshot:any) => {

      let response = snapshot.val();

      if(response == null) return;

      Object.values(response)
      .forEach(
        (e:any,i:number) => {
          this.estado.push({
            nomeestado: e.nomeestado,
            indice: Object.keys(snapshot.val())[i]
          });
        });
    });
  }
}
