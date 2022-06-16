import { Component, OnInit } from '@angular/core';
import { LucaTaskService } from '../luca-task.service';

@Component({
  selector: 'app-luca-tasks',
  templateUrl: './luca-tasks.component.html',
  styleUrls: ['./luca-tasks.component.css'],
})
export class LucaTasksComponent implements OnInit {
  constructor(public task: LucaTaskService) {}

  ngOnInit() {}
}
