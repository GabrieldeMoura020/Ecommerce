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

      this.dados.splice(0, this.dados.length);

      let response= snapshot.val();
    })

  }

}
