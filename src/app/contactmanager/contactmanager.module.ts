import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../shared/material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    ContactmanagerRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
