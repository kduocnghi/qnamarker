import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKBComponent } from './create-kb.component';

describe('CreateKBComponent', () => {
  let component: CreateKBComponent;
  let fixture: ComponentFixture<CreateKBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
