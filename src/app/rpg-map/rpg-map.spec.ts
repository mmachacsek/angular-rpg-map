import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgMap } from './rpg-map';

describe('RpgMap', () => {
  let component: RpgMap;
  let fixture: ComponentFixture<RpgMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
