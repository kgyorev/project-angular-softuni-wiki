import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleModel} from '../models/article.model';
import {CreateArticleModel} from '../models/create-article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  bindingModel: ArticleModel;

  constructor(private route: ActivatedRoute, private articleService: ArticleService,
              private toastr: ToastrService, private router: Router) {
    this.bindingModel = new ArticleModel('', '', '');
  }

  ngOnInit() {
    this.articleService.getArticleDetails(this.route.snapshot.params['id']).subscribe(data => {
      this.bindingModel._id = data.article._id;
      this.bindingModel.title = data.article.title;
      this.bindingModel.content = data.article.lastEdit.content;
    });
  }

  edit() {
    this.articleService.editArticleById(this.bindingModel._id, this.bindingModel).subscribe(() => {
      this.toastr.success('Edited Furniture', 'Success!');
      this.router.navigate(['/article/all']);
    });
  }
}
