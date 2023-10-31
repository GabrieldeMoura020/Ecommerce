import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RequisicaoService } from '../requisicao.service'; 

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    public firebase_service:FirebaseService, private requisicao_service: RequisicaoService
  ) { }

  ref(){
    return this.firebase_service.ref().child('/produto');
  }

  salvar(fd:any){
    return this.requisicao_service.post(fd, 'produto');
  }

  listar(){
    return this.requisicao_service.get('/produto/listar');
  }

  excluir(_id: number){
    return this.requisicao_service.del("/produto" + _id);
  }

  editar(id:number, fd:any){
    return this.requisicao_service.put(fd, 'produto' + id);
  }

  load(id:number){
    return this.requisicao_service.get('/produto/load' + id);
  }

  get(){
    this.requisicao_service.get();
  }
}