import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {ListPageComponent} from "./components/list-page/list-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'search-result', component: SearchResultComponent},
  { path: 'contact', component: ListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
