import { Component, OnInit } from '@angular/core';
import { Problema } from '../models/problema';

import { FormBuilder, Validators } from '@angular/forms';
import { ProblemaService } from '../problema.service';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {

  problemas;

  constructor(private ProblemaService: ProblemaService, private fb: FormBuilder) { 
    //this.problemas.push(new Problema('Pedro Lindo', 'Formulario Online', 'Colaboradores compartilhar ideias por form online'));
    //this.problemas.push(new Problema('Maria', 'App Vistoria', 'App para realizar vistorias eficazes'));

    this.ProblemaService.getProblemas().subscribe(problemas => this.problemas = problemas); 

    console.log(this.problemas);



  }

  ngOnInit(): void {
    
  }


  // Config Form Group
  problemaForm = this.fb.group({  titleProblema: ['', Validators.required],
                                  descriptionProblema: ['', Validators.required],
                                  name: ['', Validators.required] });

  
  
  // Função para envio dos dados do input
  onSubmit(){
    var objProblemaForm = this.problemaForm.value;
    var problemaFormValue = new Problema(objProblemaForm.name, objProblemaForm.titleProblema, objProblemaForm.descriptionProblema, null, null);

    console.log(problemaFormValue);
    this.problemas.push(problemaFormValue);

    this.saveProblema(problemaFormValue);

    this.problemaForm.reset();

    console.log(this.problemas);
  }


  saveProblema(problema: Problema) {
      this.ProblemaService.saveProblema(problema).subscribe(() => {});
  }

}
