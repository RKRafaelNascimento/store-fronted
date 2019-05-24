import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class ProductService {
  public url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public products(): Observable<any> {
    return this.http.get<any>(`${this.url}/product`)
  }
}
