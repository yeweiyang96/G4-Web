import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenomeBrowseComponent } from './genome-browse.component';

describe('GenomeBrowseComponent', () => {
  let component: GenomeBrowseComponent;
  let fixture: ComponentFixture<GenomeBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenomeBrowseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenomeBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
