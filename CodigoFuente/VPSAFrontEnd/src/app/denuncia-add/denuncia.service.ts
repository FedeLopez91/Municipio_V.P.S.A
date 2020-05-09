import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDenuncia } from '../models/Denuncia';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DenunciaService {
  baseUrl = 'http://localhost:60000/api';

  constructor(private httpClient: HttpClient) {}

  getDenuncias() {
    this.httpClient.get<IDenuncia>(this.baseUrl + '/Denuncias');
  }

  addDenuncias(denuncia): Observable<IDenuncia> {
    console.log(denuncia);
    return this.httpClient
      .post<IDenuncia>(this.baseUrl + '/Denuncias', denuncia)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // addDenuncias(TipoDenuncia, Descripcion) {
  // const Idenuncia ={
  //   Id:0,
  //   Fecha : "",
  //   Calle : "",
  //   Numero:0,
  //   EntreCalles1:"",
  //   EntreCalles2:"",
  //   Descripcion,
  //   TipoDenunciaId: +TipoDenuncia,
  //   EstadoDenunciaId : "",
  //   Legajo:"",
  //   IpDenunciante:""
  //   }

  // console.log(Idenuncia);
  // this.http.post(`${this.baseUrl}Denuncias`, Idenuncia)
  //     .subscribe(() => console.log('Done'));
  // }
}
