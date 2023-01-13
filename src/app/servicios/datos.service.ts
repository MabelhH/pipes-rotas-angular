import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlApi= 'https://jsonplaceholder.typicode.com/todos';

  constructor(private https:HttpClient) {}

  getAll():Observable<string[]>{
    return this.https.get<string[]>(this.urlApi)
  }
}
