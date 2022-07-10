import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:``,component: LoginComponent
  },
  {
    path:`dashboard`,component: DashboardComponent
  },
  {
    path:'card',component: CardComponent
  },
  {
    path:'list',component: ListComponent
  },
  {
    path:'dummy',component: DummyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
