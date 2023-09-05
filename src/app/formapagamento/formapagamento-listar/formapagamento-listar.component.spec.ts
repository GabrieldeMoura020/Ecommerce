import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoListarComponent } from './formapagamento-listar.component';

describe('FormapagtListarComponent', () => {
  let component: FormapagamentoListarComponent;
  let fixture: ComponentFixture<FormapagamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapagamentoListarComponent]
    });
    fixture = TestBed.createComponent(FormapagamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});