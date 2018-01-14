import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOrganismComponent } from './summary-organism.component';

describe('SummaryOrganismComponent', () => {
  let component: SummaryOrganismComponent;
  let fixture: ComponentFixture<SummaryOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
