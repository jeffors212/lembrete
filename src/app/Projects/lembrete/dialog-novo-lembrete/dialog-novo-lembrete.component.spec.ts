import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoLembreteComponent } from './dialog-novo-lembrete.component';

describe('DialogNovoLembreteComponent', () => {
  let component: DialogNovoLembreteComponent;
  let fixture: ComponentFixture<DialogNovoLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoLembreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovoLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
