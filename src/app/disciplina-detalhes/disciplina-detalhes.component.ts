import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo1 } from '../ciclo1';

@Component({
  selector: 'app-disciplina-detalhes',
  templateUrl: './disciplina-detalhes.component.html',
  styleUrls: ['./disciplina-detalhes.component.css']
})
export class DisciplinaDetalhesComponent implements OnInit {
  data;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo1[param.get('index')];
      }
    );
  }

}