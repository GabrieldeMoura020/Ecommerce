import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoFormularioComponent } from './formapagamento-formulario.component';

describe('FormapagtFormularioComponent', () => {
  let component: FormapagamentoFormularioComponent;
  let fixture: ComponentFixture<FormapagamentoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapagamentoFormularioComponent]
    });
    fixture = TestBed.createComponent(FormapagamentoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});