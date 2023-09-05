import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent {
  public indice:string    = '';
  public descricao:string = '';
  constructor(
    public categoria_service:CategoriaService,
    public activated_route:ActivatedRoute
  ){
    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.categoria_service.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.descricao  = dado.descricao;
        });
      }
    );
  }
  
  salvar(){
    let dados = {
      descricao:this.descricao
    };

    if (dados.descricao == ''){
      document.querySelector('#descricao')
      ?.classList.add('has-error');
      return;
    }

    if (this.indice == ''){    
      this.categoria_service.salvar(dados);
    }else{
      this.categoria_service.editar(this.indice,dados);
    }
    //this.descricao = '';
  }
}