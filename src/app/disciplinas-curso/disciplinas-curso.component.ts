import { Component, OnInit } from '@angular/core';
import { ciclo1 } from '../ciclo1';
import { ciclo2 } from '../ciclo2';
import { ciclo3 } from '../ciclo3';
import { ciclo4 } from '../ciclo4';
import { ciclo5 } from '../ciclo5';
import { ciclo6 } from '../ciclo6';

@Component({
  selector: 'app-disciplinas-curso',
  templateUrl: './disciplinas-curso.component.html',
  styleUrls: ['./disciplinas-curso.component.css']
})
export class DisciplinasCursoComponent implements OnInit {
  ciclo1 = ciclo1;
  ciclo2 = ciclo2;
  ciclo3 = ciclo3;
  ciclo4 = ciclo4;
  ciclo5 = ciclo5;
  ciclo6 = ciclo6;

  constructor() { }

  ngOnInit() {
  }

}