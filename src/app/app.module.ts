import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LucaHomeComponent } from './luca-home/luca-home.component';
import { LucaTasksComponent } from './luca-tasks/luca-tasks.component';
import { RouterModule } from '@angular/router';
import { LucaTaskService } from './luca-task.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LucaHomeComponent },
      { path: 'tarefa', component: LucaTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LucaHomeComponent,
    LucaTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LucaTaskService],
})
export class AppModule {}
