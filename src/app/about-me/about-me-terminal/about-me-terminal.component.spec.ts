import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeTerminalComponent } from './about-me-terminal.component';

describe('AboutMeTerminalComponent', () => {
  let component: AboutMeTerminalComponent;
  let fixture: ComponentFixture<AboutMeTerminalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
