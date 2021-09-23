import { Component, HostBinding, OnInit } from '@angular/core';
import { Registro } from 'src/app/model/Registro';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';


  registro: Registro = {
    id: "0",
    name: '',
    lastname: '',
    password: '',
    email: ""
  };


  edit: boolean = false;

  constructor() { }

  ngOnInit() {
   
  }
}




