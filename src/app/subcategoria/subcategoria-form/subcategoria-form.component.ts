import { Component } from '@angular/core';
import { SubcategoriaService } from '../subcategoria.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-subcategoria-formulario',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.css']
})
export class SubcategoriaFormularioComponent {
  public descricao: string='';
  public indice: string='';

  public categorias: Array<any> = ["alimento", "bebida", "roupa"];


  constructor(
    public subcategoria_service: SubcategoriaService,
    public categoria_service: CategoriaService,
    public activated_route: ActivatedRoute
  ) {

    //this.addCategoria();


    this.activated_route.params.subscribe(


      (params: any) => {

        if(params.indice == undefined) return;


        this.subcategoria_service.ref().child('/' + params.indice).on('value', (snapshot: any) => {

          let dado: any = snapshot.val();
          this.indice = params.indice;
          this.descricao = dado.descricao;
        })
      }


    )

    
  }

  salvar() {

    let validacoes_campos = this.validar_campos(); //Valida todos os campos do formulário

    if(this.indice == "") {

      
      if(validacoes_campos.get("descricao_valido") == true) {
        this.subcategoria_service.salvar({
          descricao: this.descricao
        })

        alert("Sub-categoria cadastrada");

        this.descricao = '';
      }

      
  }

  else {

    if(validacoes_campos.get("descricao_valido") == true) {
      this.subcategoria_service.editar(this.indice, {descricao: this.descricao})
      alert("Alterações salvas");
    }
  }
   
  }


  validar_campos() {

    let validacoes = new Map();

    if(this.descricao == "") {
      document.querySelector("#descricao")?.classList.add('has-error');
      validacoes.set("descricao_valido", false);
    }

    else {
      document.querySelector("#descricao")?.classList.remove('has-error');
      validacoes.set("descricao_valido", true);

    }

    return validacoes;
  }


  addCategoria() {
    let i = 0;
    for(i=1; i<3; i++) {
      let option = document.createElement('option');

      option.value = "" + i;
      option.innerHTML = "" + i;

      document.getElementById('categoria')?.append(option);
    }
    }
  }
