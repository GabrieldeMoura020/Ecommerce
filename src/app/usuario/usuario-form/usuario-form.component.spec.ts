import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormularioComponent } from './usuario-form.component';

describe('UsuarioFormularioComponent', () => {
  let component: UsuarioFormularioComponent;
  let fixture: ComponentFixture<UsuarioFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioFormularioComponent]
    });
    fixture = TestBed.createComponent(UsuarioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});