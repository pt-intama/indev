import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatricsComponent } from './matrics.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'matrics',
    component: MatricsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class MatricsModule {}
