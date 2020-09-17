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
import { Detalhes2Component } from './detalhes2/detalhes2.component';
import { Detalhes3Component } from './detalhes3/detalhes3.component';
import { Detalhes4Component } from './detalhes4/detalhes4.component';
import { Detalhes5Component } from './detalhes5/detalhes5.component';
import { Detalhes6Component } from './detalhes6/detalhes6.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'curso', component: DisciplinasCursoComponent},
      {path: 'cursadas', component: DisciplinasCursadasComponent},
      {path: 'curso/:index', component: DisciplinaDetalhesComponent},

      {path: 'curso2/:index', component: Detalhes2Component},
      {path: 'curso3/:index', component: Detalhes3Component},
      {path: 'curso4/:index', component: Detalhes4Component},
      {path: 'curso5/:index', component: Detalhes5Component},
      {path: 'curso6/:index', component: Detalhes6Component}
    ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasCursoComponent, DisciplinaDetalhesComponent, DisciplinasCursadasComponent, Detalhes2Component, Detalhes3Component, Detalhes4Component, Detalhes5Component, Detalhes6Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
