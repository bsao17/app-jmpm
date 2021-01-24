import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAgencyComponent } from './web-agency.component';

describe('WebAgencyComponent', () => {
  let component: WebAgencyComponent;
  let fixture: ComponentFixture<WebAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
