import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKbComponent } from './list-kb.component';

describe('ListKbComponent', () => {
  let component: ListKbComponent;
  let fixture: ComponentFixture<ListKbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
