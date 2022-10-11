import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditandoLembreteComponent } from './dialog-editando-lembrete.component';

describe('DialogEditandoLembreteComponent', () => {
  let component: DialogEditandoLembreteComponent;
  let fixture: ComponentFixture<DialogEditandoLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditandoLembreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditandoLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
