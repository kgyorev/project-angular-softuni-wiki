import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {AuthModule} from './auth/auth.module';
import {CustomFormsModule} from 'ng2-validation';
import { HomeComponent } from './home/home.component';
import { AllArticleComponent } from './article/all-article/all-article.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    ToastrModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
