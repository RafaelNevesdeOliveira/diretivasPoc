import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgelseComponent } from './ngelse.component';

describe('NgelseComponent', () => {
  let component: NgelseComponent;
  let fixture: ComponentFixture<NgelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
