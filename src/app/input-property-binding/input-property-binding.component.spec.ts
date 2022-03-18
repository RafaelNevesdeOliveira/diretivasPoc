import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyBindingComponent } from './input-property-binding.component';

describe('InputPropertyBindingComponent', () => {
  let component: InputPropertyBindingComponent;
  let fixture: ComponentFixture<InputPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
