import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionOrganismComponent } from './version-organism.component';

describe('VersionOrganismComponent', () => {
  let component: VersionOrganismComponent;
  let fixture: ComponentFixture<VersionOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
