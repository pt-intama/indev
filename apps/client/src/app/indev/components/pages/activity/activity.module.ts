import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';

const routes: Routes = [
  {
    path: 'activity',
    component: ActivityComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class ActivityModule {}
