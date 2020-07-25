import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Problema } from '../app/models/problema';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  url = 'https://apicip.herokuapp.com/problema/';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getProblemas(): Observable<Problema> {
    return this.httpClient.get<Problema>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  saveProblema(problema: Problema): Observable<Problema> {
    return this.httpClient.post<Problema>('https://apicip.herokuapp.com/problema/newproblema', JSON.stringify(problema), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}