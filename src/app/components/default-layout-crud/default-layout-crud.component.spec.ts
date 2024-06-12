import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLayoutCrudComponent } from './default-layout-crud.component';

describe('DefaultLayoutCrudComponent', () => {
  let component: DefaultLayoutCrudComponent;
  let fixture: ComponentFixture<DefaultLayoutCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLayoutCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLayoutCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
