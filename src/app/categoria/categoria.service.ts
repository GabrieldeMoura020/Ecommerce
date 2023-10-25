import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public url: string = '/categoria/'; 

  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  salvar(fd:any){
    return this.requisicao_service.post(fd,this.url + 'salvar');
  }

  editar(fd:any,id:number){
    return this.requisicao_service.put(fd,this.url + 'editar/' + id);
  }

  load(id:number){
    return this.requisicao_service.get(this.url +'load/' + id);
  }

  listar(){
    return this.requisicao_service.get(this.url + 'listar');
  }

  excluir(_id:number){
    return this.requisicao_service.del(this.url + 'excluir/' + _id);
  }
}