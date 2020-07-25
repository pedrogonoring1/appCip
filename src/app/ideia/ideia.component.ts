import { Component, OnInit } from '@angular/core';
import { Ideia } from '../models/ideia';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {

  ideias: Ideia[] = [];

  constructor() { 

    this.ideias.push(new Ideia('Pedro Lindo', 'Formulario Online', 'Colaboradores compartilhar ideias por form online'));
    this.ideias.push(new Ideia('Maria', 'App Vistoria', 'App para realizar vistorias eficazes'));

  }

  ngOnInit(): void {
  }

}
