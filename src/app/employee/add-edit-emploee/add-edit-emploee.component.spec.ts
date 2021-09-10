import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmploeeComponent } from './add-edit-emploee.component';

describe('AddEditEmploeeComponent', () => {
  let component: AddEditEmploeeComponent;
  let fixture: ComponentFixture<AddEditEmploeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmploeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmploeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
