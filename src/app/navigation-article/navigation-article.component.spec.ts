import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationArticleComponent } from './navigation-article.component';

describe('NavigationArticleComponent', () => {
  let component: NavigationArticleComponent;
  let fixture: ComponentFixture<NavigationArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
