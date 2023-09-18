import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListarComponent } from './cliente-listar.component';

describe('ClienteListarComponent', () => {
  let component: ClienteListarComponent;
  let fixture: ComponentFixture<ClienteListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteListarComponent]
    });
    fixture = TestBed.createComponent(ClienteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
