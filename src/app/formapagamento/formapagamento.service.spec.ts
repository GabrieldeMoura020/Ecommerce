import { TestBed } from '@angular/core/testing';

import { FormapagamentoService } from './formapagamento.service';

describe('FormapagtService', () => {
  let service: FormapagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormapagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});