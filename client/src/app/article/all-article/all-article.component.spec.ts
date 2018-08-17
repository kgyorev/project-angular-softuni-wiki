import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticleComponent } from './all-article.component';

describe('AllArticleComponent', () => {
  let component: AllArticleComponent;
  let fixture: ComponentFixture<AllArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
