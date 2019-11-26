import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Pregunta1Component } from './components/pregunta1/pregunta1.component';
import { Pregunta2Component } from './components/pregunta2/pregunta2.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/pregunta1', component: Pregunta1Component },
  { path: 'home/pregunta2', component: Pregunta2Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
