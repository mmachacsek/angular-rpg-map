import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgGrid } from './rpg-grid';

describe('RpgGrid', () => {
  let component: RpgGrid;
  let fixture: ComponentFixture<RpgGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
