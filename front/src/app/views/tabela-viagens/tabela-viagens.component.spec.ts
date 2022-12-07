import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaViagensComponent } from './tabela-viagens.component';

describe('TabelaViagensComponent', () => {
  let component: TabelaViagensComponent;
  let fixture: ComponentFixture<TabelaViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
