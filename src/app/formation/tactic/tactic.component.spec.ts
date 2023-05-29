import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticComponent } from './tactic.component';

describe('TacticComponent', () => {
  let component: TacticComponent;
  let fixture: ComponentFixture<TacticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacticComponent]
    });
    fixture = TestBed.createComponent(TacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
