import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/';

@Injectable ()
export class peticionesService {
public url:string;
constructor(
  public _http: HttpClient
)
{
  this.url="http://localhost:60000/"
}

getDenuncia()
{
  return this._http.get(this.url+'api/Denuncias/');
}

}
