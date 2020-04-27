import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaAddComponent } from './denuncia-add.component';

describe('DenunciaAddComponent', () => {
  let component: DenunciaAddComponent;
  let fixture: ComponentFixture<DenunciaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
