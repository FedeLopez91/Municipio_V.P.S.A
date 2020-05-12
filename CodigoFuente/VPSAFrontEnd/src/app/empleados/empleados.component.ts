import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { peticionesService } from '../service/peticiones.service';
import { Observable } from 'rxjs/';
import { IDenuncia } from '../Models/Denuncia';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [peticionesService],
})
export class EmpleadosComponent implements OnInit {
  
  editField: string;

  public Denuncia: any;

  add() {
    if (this.Denuncia.length > 0) {
      const Odenuncia = this.Denuncia[0];
      this.Denuncia.push(Odenuncia);
      this.Denuncia.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.Denuncia[id][property] = editField;
  }

  remove(id: any) {
    this.Denuncia.splice(id, 1);
  }
  
  constructor(private _peticionesService: peticionesService) {}

  ngOnInit() {
    this._peticionesService.getDenuncia().subscribe(
      (result) => {
        this.Denuncia = result;
        console.log(result);
      },
      (error) => {
        console.log('Falla la conexion por la siguiente razon' + (error as any));
      }
    );
  }
}
