import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../shared/layout/layout/layout.module';

@NgModule({
  declarations: [ListsComponent, ListsViewComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LayoutModule,
  ],
})
export class ListsModule {}
