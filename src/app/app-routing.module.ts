import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from 'src/app/pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { animation: 'Home' }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
