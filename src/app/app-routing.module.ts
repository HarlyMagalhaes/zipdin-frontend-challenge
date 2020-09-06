import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { animation: 'Home' }
  },
  {
    path: ':id',
    component: BookDetailsComponent,
    data: { animation: 'BookDetails' }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
