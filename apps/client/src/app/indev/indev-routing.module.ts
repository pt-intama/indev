import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { LandingComponent } from '../landing/landing.component';
import { ContainerComponent } from './components/layouts/container/container.component';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { ActivityModule } from './components/pages/activity/activity.module';
import { CreateAppComponent } from './components/pages/create-app/create-app.component';
import { CreateDbComponent } from './components/pages/create-db/create-db.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeModule } from './components/pages/home/home.module';
import { MatricsComponent } from './components/pages/matrics/matrics.component';
import { MatricsModule } from './components/pages/matrics/matrics.module';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { SettingsModule } from './components/pages/settings/settings.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auth', component: AuthModule },
  {
    path: 'indev',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'matrics',
        component: MatricsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'create-app',
        component: CreateAppComponent,
      },
      {
        path: 'create-db',
        component: CreateDbComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    ActivityModule,
    MatricsModule,
    SettingsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    HomeModule,
    ActivityModule,
    MatricsModule,
    SettingsModule,
  ],
})
export class IndevRoutingModule {}
