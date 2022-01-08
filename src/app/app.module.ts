import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Activity1Component } from './activity1/activity1.component';
import { Activity2Component } from './activity2/activity2.component';
import { Activity3Component } from './activity3/activity3.component';
import { BakedGoodListComponent } from './activity1/list/list.component';
import { AddBakedGoodComponent } from './activity1/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Activity1Component,
    Activity2Component,
    Activity3Component,
    BakedGoodListComponent,
    AddBakedGoodComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
