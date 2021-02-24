import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenlistComponent } from './komponenlist.component';

describe('KomponenlistComponent', () => {
  let component: KomponenlistComponent;
  let fixture: ComponentFixture<KomponenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
