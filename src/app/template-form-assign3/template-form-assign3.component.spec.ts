import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormAssign3Component } from './template-form-assign3.component';

describe('TemplateFormAssign3Component', () => {
  let component: TemplateFormAssign3Component;
  let fixture: ComponentFixture<TemplateFormAssign3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormAssign3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormAssign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
