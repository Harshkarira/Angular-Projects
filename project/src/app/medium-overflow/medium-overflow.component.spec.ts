import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediumOverflowComponent } from './medium-overflow.component';

describe('MediumOverflowComponent', () => {
  let component: MediumOverflowComponent;
  let fixture: ComponentFixture<MediumOverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumOverflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
