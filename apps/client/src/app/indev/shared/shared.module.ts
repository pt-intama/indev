import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/layouts/header/header.component';
import { NavBarComponent } from '../components/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from '../components/layouts/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from '../components/pages/home/home.module';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent, FooterComponent],
  imports: [NgbModule, CommonModule, HomeModule],
  exports: [HeaderComponent, NavBarComponent, FooterComponent, HomeModule],
})
export class SharedModule {}
