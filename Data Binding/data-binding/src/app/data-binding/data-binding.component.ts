import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {

  }

  ngOnInit() {

  }
}
