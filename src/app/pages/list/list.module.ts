import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { LayoutModule } from '../../shared/layout/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    LayoutModule,
  ],
  exports: [ListComponent],
})
export class ListModule {}
