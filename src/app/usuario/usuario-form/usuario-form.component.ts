import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormularioComponent {

  public id: number= 0;
  public nome: string='';
  public email: string='';
  public senha: string='';

  

  constructor(
    public usuario_service: UsuarioService,
    public activated_route: ActivatedRoute
  ){


    this.activated_route.params.subscribe(

     (params: any) => {

      if(params.id == undefined) return;

      this.usuario_service.load(params.id)
      .subscribe((_dado: any) => {
        this.id              = _dado.id;
        this.nome            = _dado.nome;
        this.email           = _dado.email;
        this.senha       = _dado.senha;
      });
    }
  );
}

  salvar() {

    if(this.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    let dados = {

      id:this.id,
      nome:this.nome,
      email:this.email,
      senha:this.senha
      
    };

    if (this.id == 0) {

      this.usuario_service.salvar(dados).subscribe();
      this.usuario_service.listar();      
      
    }

  else {

    this.usuario_service.editar(dados, this.id).subscribe();


    }
  }

}


