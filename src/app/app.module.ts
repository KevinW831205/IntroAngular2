import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
