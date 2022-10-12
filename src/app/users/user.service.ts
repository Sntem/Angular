import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserModel} from "./user.model";

const URI = 'http://localhost:3000'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  fetchUsers() {
    return this.http.get<UserModel[]>(URI + '/auth/getUsers')
  }
}

