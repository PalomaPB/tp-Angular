import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasCursoComponent } from './disciplinas-curso/disciplinas-curso.component';
import { DisciplinaDetalhesComponent } from './disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinasCursadasComponent } from './disciplinas-cursadas/disciplinas-cursadas.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'curso', component: DisciplinasCursoComponent},
      {path: 'cursadas', component: DisciplinasCursadasComponent},
      {path: 'curso/:index', component: DisciplinaDetalhesComponent}
    ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasCursoComponent, DisciplinaDetalhesComponent, DisciplinasCursadasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
