import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  public dados: Array<any> = [];

  constructor(
    public cliente_service: ClienteService,
    public router: Router
  ) {}

  ngOnInit(): void {
    
    this.cliente_service.listar()
    .on('value', (snapshot: any) =>{

      //Limpa a variável local com os dados
      this.dados.splice(0, this.dados.length);

      //Dados retornados do Firebase
      let response= snapshot.val();

      //Não setar valores caso não venha nenhum registro
      if(response==null) return;


      Object.values(response).forEach((e: any, i: number)=> {

        this.dados.push({

          nome: e.nome,
          cpf: e.cpf,
          dtnas: e.dtnas,
          celular: e.celular,
          email: e.email,
          indice: Object.keys(snapshot.val())[i]

        })




      })
    })
  }

  
    excluir(key: string){
      this.cliente_service.excluir(key)
    }

    editar(key: string){
      this.router.navigate(['cliente/form/' + key])
  }

}
