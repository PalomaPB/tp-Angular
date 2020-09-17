import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo6 } from '../ciclo6';

@Component({
  selector: 'app-detalhes6',
  templateUrl: './detalhes6.component.html',
  styleUrls: ['./detalhes6.component.css']
})
export class Detalhes6Component implements OnInit {
  data;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo6[param.get('index')];
      }
    );
  }

}