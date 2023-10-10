import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public firebase_service:FirebaseService, private requisicao_service: RequisicaoService
  ) { }

  ref() {
    return  this.firebase_service.ref().child('/usuario');
  }

  salvar(fd:any){
    return this.requisicao_service.post(fd, 'usuario');
  }

  listar() {
    return this.requisicao_service.get('/usuario/listar');
  }

  excluir(_id: number){
    return this.requisicao_service.del("/usuario" + _id);
  }

  editar(indice:string, fd:any) {

    this.ref().child('/' + indice).update(fd).then();
  }

  get(){
    this.requisicao_service.get();
  }
}