import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseReactiveFormComponent } from './practise-reactive-form.component';

describe('PractiseReactiveFormComponent', () => {
  let component: PractiseReactiveFormComponent;
  let fixture: ComponentFixture<PractiseReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiseReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
