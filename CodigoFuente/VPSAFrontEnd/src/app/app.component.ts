import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDenuncia } from './models/Denuncia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'VPSA';

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:58086/api/Denuncias').subscribe((response: IDenuncia) => {
      console.log(response);
    }, error =>{
      console.log(error);
    });
  }

}
