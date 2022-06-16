import { Component, OnInit } from '@angular/core';
import { LucaTaskService } from '../luca-task.service';

@Component({
  selector: 'app-luca-home',
  templateUrl: './luca-home.component.html',
  styleUrls: ['./luca-home.component.css'],
})
export class LucaHomeComponent implements OnInit {
  constructor(public task: LucaTaskService) {}

  ngOnInit() {}
}
