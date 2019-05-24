import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class UserService {
  public url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public createUser(user): Observable<any> {
    return this.http.post<any>(`${this.url}/user`, user)
  }
}
