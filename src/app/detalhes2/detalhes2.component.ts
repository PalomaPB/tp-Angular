import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo2 } from '../ciclo2';

@Component({
  selector: 'app-detalhes2',
  templateUrl: './detalhes2.component.html',
  styleUrls: ['./detalhes2.component.css']
})
export class Detalhes2Component implements OnInit {
  data;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo2[param.get('index')];
      }
    );
  }
}