import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public mostrar_form_denuncia : boolean = true;

  constructor(private http: HttpClient){

    this.title = 'MunicipioPlantilla';

  }

ngOnInit(): void {
}

}


