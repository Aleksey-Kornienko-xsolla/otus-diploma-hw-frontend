import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lists',
    loadChildren: () =>
      import('./pages/lists/lists.module').then(m => m.ListsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'lists',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
