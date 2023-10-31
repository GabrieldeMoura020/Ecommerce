import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})

export class ProdutoFormComponent {
	
  public categorias: Array<any> = [];
	public subcategorias: Array<any> = [];
  
  public indice: string = '';
	public nome: string   = '';
	public preco: string  = '';
	public descricao: string = '';
	public categoria: string = '';
	public subcategoria: string = '';
	public is_desabilidado: boolean = true;

  constructor(
    public produto_service: ProdutoService,
    public activated_route:ActivatedRoute,
    public categoria_service:CategoriaService,
    public subcategoria_service:SubcategoriaService
  ) {

		this.categoria_service.listar();
    
		this.activated_route.params.subscribe((params: any) => {

					if (params.indice == undefined) return;

					this.produto_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {
							let dados: any       = snapshot.val();
              this.indice          = params.indice;
							this.nome            = dados.nome;
							this.preco           = dados.preco;
							this.descricao       = dados.descricao;
							this.categoria       = dados.categoria;
              this.listarSubcategoria(dados.categoria);
              this.subcategoria    = dados.subcategoria;
						});

            this.is_desabilidado = false;
				});
	}

	salvar() {
    if(this.validarCampos()) {
      let dados = {
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao,
        categoria: this.categoria,
        subcategoria: this.subcategoria
      };  
    }
		
		if (this.indice == '') {
			this.produto_service.salvar(dados);
		}

		if (this.id == 0) {
			this.produto_service.salvar(dados).subscribe();
			this.produto_service.listar();
		} else {
			this.produto_service.editar(dados, this.id).subscribe();
		}
	}

	listarSubcategoria(_categoria: string) {

		this.subcategorias.splice(0, this.subcategorias.length);

		this.subcategoria_service.listar()
			.subscribe((snapshot: any) => {

				let response = snapshot.val();

				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							let _indice = Object.keys(snapshot.val())[i];
							if (_categoria == e.categoria) {
								this.subcategorias.push({
									descricao: e.descricao,
									categoria: e.categoria,
									id: _indice
								});
							}
						}
					);

				if (this.subcategorias.length > 0) {
					this.is_desabilidado = false;
				} else {
					this.is_desabilidado = true;
				}
			});
	}
}