import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUrls } from './list-of-urls';

describe('ListOfUrls', () => {
  let component: ListOfUrls;
  let fixture: ComponentFixture<ListOfUrls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfUrls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfUrls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
