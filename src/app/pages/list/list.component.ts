import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from './task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public listName?: string;
  public tasks: Task[] = [
    {
      id: 1,
      title: 'Complete frontend',
    },
    {
      id: 2,
      title: 'Complete backend',
    },
    {
      id: 3,
      title: 'Connect telegram bot',
    },
  ];
  public constructor(private readonly route: ActivatedRoute) {
    this.listName = this.route.snapshot.queryParams['name'];
  }
}
