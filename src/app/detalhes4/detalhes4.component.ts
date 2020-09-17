import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ciclo4 } from '../ciclo4';

@Component({
  selector: 'app-detalhes4',
  templateUrl: './detalhes4.component.html',
  styleUrls: ['./detalhes4.component.css']
})
export class Detalhes4Component implements OnInit {
  data;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.data = ciclo4[param.get('index')];
      }
    );
  }

}