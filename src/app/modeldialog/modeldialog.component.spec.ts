import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldialogComponent } from './modeldialog.component';

describe('ModeldialogComponent', () => {
  let component: ModeldialogComponent;
  let fixture: ComponentFixture<ModeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
