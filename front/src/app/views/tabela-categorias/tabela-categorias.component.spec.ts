import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaCategoriasComponent } from './tabela-categorias.component';

describe('TabelaCategoriasComponent', () => {
  let component: TabelaCategoriasComponent;
  let fixture: ComponentFixture<TabelaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
