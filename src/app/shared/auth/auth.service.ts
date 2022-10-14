import {AuthModel} from "./auth.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

constructor(private http: HttpClient) {
}
  logIn(authData:AuthModel) {
  return this.http.post('http://localhost:3000/auth/login',authData)
  }
}
