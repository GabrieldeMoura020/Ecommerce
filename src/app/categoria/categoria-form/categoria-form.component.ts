import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {

  public id: number = 0;
  public categoria: string = '';
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

        this.categoria_service.load(params.indice)
        .subscribe((_dado: any) => {
          this.id = _dado.id;
          this.descricao = _dado.descricao;
          this.valor = _dado.valor;
        });
      });
  }

  salvar() {

    if(this.categoria == '') {

      document.querySelector('#categoria')?.classList.add('has-error');
      return;
    }

    let dados = {
      categoria: this.categoria
    };

    if (this.id == 0) {
      this.categoria_service.salvar(dados).subscribe();
      this.categoria_service.listar();
    } else {
      this.categoria_service.editar(dados, this.id).subscribe();
    }
  } 
}