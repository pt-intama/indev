import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/layouts/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModule } from './components/pages/settings/settings.module';
import { MatricsComponent } from './components/pages/matrics/matrics.component';
import { IndevRoutingModule } from './indev-routing.module';
import { SharedModule } from './shared/shared.module';
import { CreateDbComponent } from './components/pages/create-db/create-db.component';
import { CreateAppsGitlabComponent } from './components/pages/create-apps-gitlab/create-apps-gitlab.component';
import { CreateAppComponent } from './components/pages/create-app/create-app.component';

@NgModule({
  declarations: [
    ContainerComponent,
    ActivityComponent,
    MatricsComponent,
    SettingsComponent,
    CreateDbComponent,
    CreateAppsGitlabComponent,
    CreateAppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SettingsModule,
    SharedModule,
    IndevRoutingModule,
  ],
  exports: [],
})
export class IndevModule {}
