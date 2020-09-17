import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo3 } from '../ciclo3';

@Component({
  selector: 'app-detalhes3',
  templateUrl: './detalhes3.component.html',
  styleUrls: ['./detalhes3.component.css']
})
export class Detalhes3Component implements OnInit {
  data;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo3[param.get('index')];
      }
    );
  }

}