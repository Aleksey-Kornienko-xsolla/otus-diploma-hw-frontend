import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { ListComponent } from '../list/list.component';
import { ListsComponent } from './lists.component';

const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    children: [
      {
        path: '',
        component: ListsViewComponent,
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../list/list.module').then(m => m.ListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
