import { Component, OnInit } from '@angular/core';
import {faHomeLg, faSignIn, faPager, faUsers} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

faHomeLg1= faHomeLg;
  faUsers = faUsers
  faPost = faPager
  faSignIn = faSignIn;
  constructor() { }

  ngOnInit(): void {
  }

}
