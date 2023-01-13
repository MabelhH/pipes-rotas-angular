import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarComponent } from './mostar.component';

describe('MostarComponent', () => {
  let component: MostarComponent;
  let fixture: ComponentFixture<MostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
