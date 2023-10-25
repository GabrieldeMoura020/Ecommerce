import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})

export class ProdutoListarComponent {
  public dados:Array<any> = [];

  constructor(
    public produto_service:ProdutoService,
    public categoria_service: CategoriaService,
    public subcategoria_service: SubcategoriaService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.produto_service.listar()
    .on('value',(snapshot:any) => {

      this.dados.splice(0,this.dados.length);
      let response = snapshot.val();
      if (response == null) return;

      Object.values( response )
      .forEach(
       async (e:any,i:number) => {

        let categoria: any = await this.getCategoria(e.categoria)
        let subcategoria: any = await this.getSubcategoria(e.subcategoria)

          this.dados.push({
            nome: e.nome,
            preco: e.preco,
            categoria: categoria.descricao,
            subcategoria: subcategoria.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  async getCategoria(key:string){
    let dado: any
    dado = await this.categoria_service.get(key);
    return dado;
  }

  async getSubcategoria(key:string){
    let dado: any
    dado = await this.subcategoria_service.get(key);
    return dado;
  }

  excluir(key:string){
    this.produto_service.excluir(key);
  }

  editar(key:string){
    this
    .router
    .navigate(['/produto/form/' + key]);
  }
}