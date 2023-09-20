import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.css']
})
export class FornecedorListarComponent {
  public dados:Array<any> = [];
  constructor(
    public estado_service:EstadoService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.estado_service.listar()
    .on('value', (snapshot:any) => {

      this.dados.splice(0, this.dados.length);

      let response = snapshot.val();

      if(response == null) return;

      Object.values(response)
      .forEach(
        (e:any, i:number) => {
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        });
    });
  }

  excluir(key:string){
    this.estado_service.excluir(key);
  }

  editar(key:string){
    this
    .router
    .navigate(['/fornecedor/form/' + key]);
  }
}
