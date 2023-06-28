import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListapetPage } from './listapet.page';

describe('ListapetPage', () => {
  let component: ListapetPage;
  let fixture: ComponentFixture<ListapetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListapetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
