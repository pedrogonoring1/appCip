import { Component, OnInit, TemplateRef } from '@angular/core';
import { Ideia } from '../models/ideia';

import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IdeiaService } from '../ideia.service';

@Component({
  selector: 'app-ideia',
  templateUrl: './ideia.component.html',
  styleUrls: ['./ideia.component.css']
})
export class IdeiaComponent implements OnInit {

  ideias = null;
  modalRef: BsModalRef;

  constructor(private IdeiaService: IdeiaService, private fb: FormBuilder, private modalService: BsModalService) { 
    //this.ideiasPadrao.push(new Ideia('Pedro', 'Formulario Online', 'Colaboradores compartilhar ideias por form online'));
    //this.ideias.push(new Ideia('Maria', 'App Vistoria', 'App para realizar vistorias eficazes'));

    this.IdeiaService.getIdeias().subscribe(ideias => this.ideias = ideias);
    


    console.log(this.ideias);


  }

  ngOnInit(): void {
    console.log(this.ideias);
  }


  // Config Form Group
  ideiaForm = this.fb.group({ titleIdeia: ['', Validators.required],
                              descriptionIdeia: ['', Validators.required],
                              name: ['', Validators.required] });

  
  
  // Função para envio dos dados do input
  onSubmit(){
    var objIdeiaForm = this.ideiaForm.value;
    var ideiaFormValue = new Ideia(objIdeiaForm.name, objIdeiaForm.titleIdeia, objIdeiaForm.descriptionIdeia, null, null);

    console.log(ideiaFormValue);
    this.ideias.push(ideiaFormValue);

    this.saveIdeia(ideiaFormValue);

    console.log(this.ideias);

    this.ideiaForm.reset();
  }


  saveIdeia(ideia: Ideia) {
      this.IdeiaService.saveIdeia(ideia).subscribe(() => {});
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
