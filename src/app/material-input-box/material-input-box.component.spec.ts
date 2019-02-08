import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInputBoxComponent } from './material-input-box.component';

describe('MaterialInputBoxComponent', () => {
  let component: MaterialInputBoxComponent;
  let fixture: ComponentFixture<MaterialInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
