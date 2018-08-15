import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryArticleComponent } from './history-article.component';

describe('HistoryArticleComponent', () => {
  let component: HistoryArticleComponent;
  let fixture: ComponentFixture<HistoryArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
