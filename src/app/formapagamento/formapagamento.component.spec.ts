import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagamentoComponent } from './formapagamento.component';

describe('FormapagtComponent', () => {
  let component: FormapagamentoComponent;
  let fixture: ComponentFixture<FormapagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormapagamentoComponent]
    });
    fixture = TestBed.createComponent(FormapagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});