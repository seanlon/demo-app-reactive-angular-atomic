import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialOrganismComponent } from './credential-organism.component';

describe('CredentialOrganismComponent', () => {
  let component: CredentialOrganismComponent;
  let fixture: ComponentFixture<CredentialOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
