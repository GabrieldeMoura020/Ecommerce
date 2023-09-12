import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriaFormularioComponent } from './subcategoria-form.component';

describe('SubcategoriaFormComponent', () => {
  let component: SubcategoriaFormularioComponent;
  let fixture: ComponentFixture<SubcategoriaFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriaFormularioComponent]
    });
    fixture = TestBed.createComponent(SubcategoriaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});