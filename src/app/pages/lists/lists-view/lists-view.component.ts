import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from './list.interface';

@Component({
  selector: 'app-lists-view',
  templateUrl: './lists-view.component.html',
  styleUrls: ['./lists-view.component.scss'],
})
export class ListsViewComponent {
  public lists: List[] = [
    {
      id: 1,
      name: 'day list',
    },
    {
      id: 2,
      name: 'week list',
    },
    {
      id: 3,
      name: 'mounth list',
    },
  ];

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}
  public handleListClick(list: List): void {
    void this.router.navigate([list.id], {
      relativeTo: this.route,
      queryParams: { name: list.name },
    });
  }
}
