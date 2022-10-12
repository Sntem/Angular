import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {UserModel} from "./user.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  users: UserModel[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe(users => {
      this.users = users
    })
  }

}
