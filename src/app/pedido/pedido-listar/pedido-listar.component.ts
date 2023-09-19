import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent {
  public dados:Array<any> = [];
  constructor(
    public categoria_service:CategoriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this
  }
}