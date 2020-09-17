import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo5 } from '../ciclo5';

@Component({
  selector: 'app-detalhes5',
  templateUrl: './detalhes5.component.html',
  styleUrls: ['./detalhes5.component.css']
})
export class Detalhes5Component implements OnInit {
  data;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo5[param.get('index')];
      }
    );
  }

}