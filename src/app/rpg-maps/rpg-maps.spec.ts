import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgMaps } from './rpg-maps';

describe('RpgMaps', () => {
  let component: RpgMaps;
  let fixture: ComponentFixture<RpgMaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgMaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgMaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
