import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrganismComponent } from './form-organism.component';

describe('FormOrganismComponent', () => {
  let component: FormOrganismComponent;
  let fixture: ComponentFixture<FormOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
