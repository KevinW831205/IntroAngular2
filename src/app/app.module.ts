import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { from } from 'rxjs';
import { SummaryPipe } from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTitleComponent } from './input-title/input-title.component';
import { TitleCasePipe } from './title-case.pipe';
import { TestgroundComponent } from './testground/testground.component';
import { PanelComponent } from './panel/panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponentComponent } from './zippy-component/zippy-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { AppError } from './common/app-error';
import { GithubLikeComponent } from './github-like/github-like.component';
import { GithubLikeService } from './services/github-like.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoritesComponent,
    InputTitleComponent,
    TitleCasePipe,
    TestgroundComponent,
    PanelComponent,
    LikeButtonComponent,
    InputFormatDirective,
    ZippyComponentComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    PasswordChangeFormComponent,
    PostComponentComponent,
    GithubLikeComponent,
    NavbarComponent,
    HomeComponentComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponentComponent},
      { path:'followers/:userid/:username', component: GithubProfileComponent},
      { path:'followers', component: GithubLikeComponent},
      { path:'posts', component: PostComponentComponent},
      { path:'**', component: NotFoundComponent},

  ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubLikeService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
