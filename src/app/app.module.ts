import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CardComponent } from './card/card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListComponent } from './list/list.component';
import { DummyComponent } from './dummy/dummy.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CardComponent,
    FilterPipe,
    ListComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCheckboxModule,
    Ng2SearchPipeModule
    
    
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
