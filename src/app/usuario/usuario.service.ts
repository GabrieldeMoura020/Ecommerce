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

  salvar(fd:FormData){
    return this.requisicao_service.post(fd, 'usuario');
  }

  listar() {
    return this.ref();
  }

  excluir(indice: string){
    return this.ref().child("/" + indice).remove().then();
  }

  editar(indice:string, dados:any) {

    this.ref().child('/' + indice).update(dados).then();
  }
}