import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnAKbComponent } from './qn-a-kb.component';

describe('QnAKbComponent', () => {
  let component: QnAKbComponent;
  let fixture: ComponentFixture<QnAKbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnAKbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnAKbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
