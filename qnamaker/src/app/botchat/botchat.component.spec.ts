import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotchatComponent } from './botchat.component';

describe('BotchatComponent', () => {
  let component: BotchatComponent;
  let fixture: ComponentFixture<BotchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
