import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledisplayingComponent } from './singledisplaying.component';

describe('SingledisplayingComponent', () => {
  let component: SingledisplayingComponent;
  let fixture: ComponentFixture<SingledisplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledisplayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledisplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
