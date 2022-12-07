import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViagensComponent } from './form-viagens.component';

describe('FormViagensComponent', () => {
  let component: FormViagensComponent;
  let fixture: ComponentFixture<FormViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
