import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListeComponent },
  { path: 'type', component: ListeComponent },
  { path: 'type/:id', component: ListeComponent },
  { path: 'add', component: AddComponent },
  { path: 'search/:search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
