import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgTile } from './rpg-tile';

describe('RpgTile', () => {
  let component: RpgTile;
  let fixture: ComponentFixture<RpgTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
