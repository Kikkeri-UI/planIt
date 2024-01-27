import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryComponent } from './create-itinerary.component';

describe('CreateItineraryComponent', () => {
  let component: CreateItineraryComponent;
  let fixture: ComponentFixture<CreateItineraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateItineraryComponent]
    });
    fixture = TestBed.createComponent(CreateItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
