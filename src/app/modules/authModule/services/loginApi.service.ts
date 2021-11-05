import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) {}

  authUser(data: any): Observable<any> {
    return this.http.get(`${environment.url}/users/getUserList`, {params: { nickName: data.login, password: data.password }});
  }

}
