import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule
  ],
})
export class MaterialModule { }
