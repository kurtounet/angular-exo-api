import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormngmodelComponent } from './formngmodel.component';

describe('FormngmodelComponent', () => {
  let component: FormngmodelComponent;
  let fixture: ComponentFixture<FormngmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormngmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
