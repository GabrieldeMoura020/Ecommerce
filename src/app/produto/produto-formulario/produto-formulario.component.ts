import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-formulario.component.html',
  styleUrls: ['./produto-formulario.component.css']
})

export class ProdutoFormComponent {
	
  	public id: number = 0;
	public nome: string   = '';
	public preco: number  = 0;
	public descricao: string = '';
	public categoria: string = '';
	public subcategoria: string = '';
	public categorias: Array<any> = [];
	public subcategorias: Array<any> = [];
	public is_desabilidado: boolean = true;

  constructor(
    public produto_service: ProdutoService,
    public activated_route:ActivatedRoute,
    public categoria_service:CategoriaService,
    public subcategoria_service:SubcategoriaService
  ) {

		this.categoria_service.listar().subscribe((snapshot: any) => {

			let response = snapshot.val();

			if (response == null) return;

			Object.values(response).forEach((e: any, i: number) => {
				this.categoria.push({
					descricao: e.descricao,
					indice: Object.keys(snapshot.val())[i]
				});
			}
		);
	});
    
		this.activated_route.params.subscribe((params: any) => {

			if (params.indice == undefined) return;

				this.produto_service.load(params.indice)
				.subscribe((_dado: any) => {
            	this.id          	 = _dado.id;
				this.nome            = _dado.nome;
				this.preco           = _dado.preco;
				this.descricao       = _dado.descricao;
				this.categoria       = _dado.categoria;
				this.is_desabilidado = false;
            	this.listarSubcategoria(_dado.categoria);
            	this.subcategoria    = _dado.subcategoria;
		   	   });
			}
		);
	}

	salvar() {
      let dados = {
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao,
        categoria: this.categoria,
        subcategoria: this.subcategoria
      };  
		
		if (dados.descricao == '') {
			document.querySelector('#descricao')
			?.classList.add('has-error');
			return;
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
						let _id = Object.keys(snapshot.val())[i];
							if (_categoria == e.categoria) {
								this.subcategorias.push({
									descricao: e.descricao,
									categoria: e.categoria,
									id: _id
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