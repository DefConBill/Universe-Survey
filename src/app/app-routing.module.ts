import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './layout/home/home.component';
import { SummaryComponent } from './summary/summary.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey/:id', component: MainComponent },
  { path: 'surveyresults/655506e8bd412b4a7e6387612', component: SummaryComponent },
  { path: '655506e8bd412b4a7e6387612/result/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
