import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitInputFilesGroupComponent } from './kit-input-files-group.component';

describe('KitInputFilesGroupComponent', () => {
  let component: KitInputFilesGroupComponent;
  let fixture: ComponentFixture<KitInputFilesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitInputFilesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitInputFilesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
