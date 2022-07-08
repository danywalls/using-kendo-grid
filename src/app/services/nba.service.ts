import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NbAService {

  constructor(private httpClient: HttpClient) {

  }

  getData(): Observable<any> {
    return this.httpClient.get('https://www.balldontlie.io/api/v1/players').pipe(
      map((response: any) => {

        return response.data;
      })
    );
  }

}
