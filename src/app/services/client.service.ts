import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlApi: string = `${environment.api}/api/clients`;

  constructor(private http: HttpClient) { }

  /**
   * Find Client
   * @param typeDni Type of DNI
   * @param dni Number of identified
   * @returns Observable IClient
   */
  findByTypeDni(typeDni: string, dni: number): Observable<IClient> {   
    return this.http.get<IClient>(`${this.urlApi}/findByTypeDni/${typeDni}/${dni}`);
  }

}
