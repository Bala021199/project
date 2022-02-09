import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './master/role/role.component';
import { AddEditComponent } from './master/role/add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenderTimelineComponent } from './Master/Tender/tender-timeline/tender-timeline.component';
import { UsersComponent } from './Master/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    AddEditComponent,
    TenderTimelineComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

   
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
