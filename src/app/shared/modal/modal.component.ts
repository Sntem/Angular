import {Component, EventEmitter, Output} from "@angular/core";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
  faUser = faUser;
  faLock = faLock;
  @Output() close = new EventEmitter<void>();

  email: string = "";
  password: string = "";

  constructor(private authService:AuthService) {
  }

  onClose() {
    this.close.emit();
  }

  onSubmit(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    this.authService.logIn({email:this.email,password:this.password}).subscribe(data=>{
      console.log(data)
    })
  }
}
