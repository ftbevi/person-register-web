import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCalcModalComponent } from './people-calc-modal.component';

describe('PeopleCalcModalComponent', () => {
  let component: PeopleCalcModalComponent;
  let fixture: ComponentFixture<PeopleCalcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleCalcModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleCalcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
