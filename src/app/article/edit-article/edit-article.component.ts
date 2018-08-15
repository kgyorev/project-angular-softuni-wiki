import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModel} from '../models/article.model';
import {CreateArticleModel} from '../models/create-article.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  bindingModel: ArticleModel;
  lockedStatus: boolean;

  constructor(private route: ActivatedRoute, private articleService: ArticleService,
              private toastr: ToastrService, private router: Router, public authService: AuthService) {
    this.bindingModel = new ArticleModel('', '', '');
  }

  ngOnInit() {
    this.articleService.getArticleDetails(this.route.snapshot.params['id']).subscribe(data => {
      console.dir(data);
      this.bindingModel._id = data.article._id;
      this.bindingModel.title = data.article.title;
      this.bindingModel.content = data.article.lastEdit.content;
      this.lockedStatus = data.article.lockedStatus;
    });
  }

  edit() {
    this.articleService.editArticleById(this.bindingModel._id, this.bindingModel).subscribe(() => {
      this.toastr.success('Edited Furniture', 'Success!');
      this.router.navigate(['/article/details/' + this.bindingModel._id]);
    });
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.bindingModel._id).subscribe(() => {
      this.toastr.success('Deleted Article', 'Success!');
      this.router.navigate(['/article/all']);
    });
  }

  articleLock() {
    this.articleService.getArticleLock(this.bindingModel._id).subscribe(() => {
      this.toastr.success('Lock Article', 'Success!');
      this.router.navigate(['/article/details/' + this.bindingModel._id]);
    });
  }

  articleUnLock() {
    this.articleService.getArticleUnLock(this.bindingModel._id).subscribe(() => {
      this.toastr.success('Unlock Article', 'Success!');
      this.router.navigate(['/article/details/' + this.bindingModel._id]);
    });
  }
}