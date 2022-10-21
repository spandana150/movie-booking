import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledisplayComponent } from './singledisplay.component';

describe('SingledisplayComponent', () => {
  let component: SingledisplayComponent;
  let fixture: ComponentFixture<SingledisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
