import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Ideia } from '../app/models/ideia';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {

  url = 'https://apicip.herokuapp.com/ideia/';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getIdeias(): Observable<Ideia> {
    return this.httpClient.get<Ideia>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  saveIdeia(ideia: Ideia): Observable<Ideia> {
    return this.httpClient.post<Ideia>('https://apicip.herokuapp.com/ideia/newideia', JSON.stringify(ideia), this.httpOptions)
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