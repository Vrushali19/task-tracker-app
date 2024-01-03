import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListHightlightDirective } from './directive/task-list-highlight.directive';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: TaskAddComponent },
  { path: 'edit/:id', component: TaskEditComponent },
  { path: 'details/:id', component: TaskDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskListHightlightDirective,
    TaskAddComponent,
    HeaderComponent,
    TaskEditComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
