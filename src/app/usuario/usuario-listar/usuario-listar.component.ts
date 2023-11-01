import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent {

  public dados: Array<any> = [];

  constructor(
    public usuario_service: UsuarioService,
    public router: Router
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.listar();
  }

  excluir(_id: number) {
    return this.usuario_service.excluir(_id)
    .subscribe(() =>{
      this.listar();
    });
  }

  listar(){
    this.usuario_service.listar()
    .subscribe((_dados:any) => {
      this.dados = _dados;
      console.log(_dados);
    }
    );
  }

  editar(key: string) {
    this.router.navigate(['usuario/formulario/' + key])   
  }

  pesquisar(){
    let _termo = this.termo;
    if (_termo == '') {
      this.listar();
      return;
    }
    this.usuario_service.pesquisar().subscribe();
  }
}