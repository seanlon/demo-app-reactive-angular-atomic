import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderOrganismComponent } from './loader-organism.component';

describe('LoaderOrganismComponent', () => {
  let component: LoaderOrganismComponent;
  let fixture: ComponentFixture<LoaderOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
