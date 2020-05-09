import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDenuncia } from './models/Denuncia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public mostrar_form_denuncia :boolean=true;

  constructor(private http: HttpClient){

    this.title = 'MunicipioPlantilla';

  }

ngOnInit(): void {
  this.http.get('http://localhost:60000/api/Denuncias').subscribe((response: IDenuncia) => {
    console.log(response);
  }, error =>{
    console.log(error);
  });
}



}


