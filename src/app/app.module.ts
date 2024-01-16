import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyTableComponent } from './family-table/family-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FamilySearchComponent } from './family-search/family-search.component';
import { MatTableModule } from '@angular/material/table';
import { ModifyFamilyComponent } from './modify-family/modify-family.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyTableComponent,
    FamilySearchComponent,
    ModifyFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
