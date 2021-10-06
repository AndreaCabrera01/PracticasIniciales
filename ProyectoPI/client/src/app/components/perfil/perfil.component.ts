import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  registros: any = [];

  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.loginService.getRegister(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.registros = res;
          },
          err => console.log(err)
        )
    }

  }

  getComentarios() {
    this.loginService.getRegisters()
      .subscribe(
        res => {
          this.registros = res;
        },
        err => console.error(err)
      );
  }

}
