import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciaService } from '../denuncia-add/denuncia.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'denuncia-add',
  templateUrl: './denuncia-add.component.html',
  styleUrls: ['./denuncia-add.component.css']
})
export class DenunciaAddComponent implements OnInit {
  denunciaForm: FormGroup;
  constructor(private fb: FormBuilder, private ds: DenunciaService) {
  }
  
  submitForm() {
    this.ds.addDenuncias(this.denunciaForm.value).subscribe(res => {
      alert('Guardado con Exito');
      this.denunciaForm.reset();
    });
  }

  ngOnInit(): void {
    this.denunciaForm = this.fb.group({
      Descripcion: ['', Validators.required],
      TipoDenunciaId: [null, Validators.required],
      Id: [0],
      Fecha : [''],
      Calle : [''],
      Numero: [0],
      EntreCalles1: [''],
      EntreCalles2: [''],
      EstadoDenunciaId : [null],
      Legajo: [''],
      IpDenunciante: ['']
    });
  }
}
