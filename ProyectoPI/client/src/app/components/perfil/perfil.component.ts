import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Registro } from 'src/app/model/Registro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  registros: any = [];

  registro: Registro = {
    id: '0',
    name: '',
    lastname: '',
    password: '',
    email: ""
  };

  
  constructor(private loginService: RegisterService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.loginService.getRegister(params.id)
        .subscribe(
          res => { 
            this.registro = res;
            this.registros = res;
          },
          err => console.log(err)
        )
    }

  }

  getRegistros() {
    this.loginService.getRegisters()
      .subscribe(
        res => {
          this.registro = res;
        },
        err => console.error(err)
      );
  }
  
  /*updateRegister() {
    const params = this.activatedRoute.snapshot.params;

    this.loginService.updateRegister(params.id, this.registro)
      .subscribe(
        res => { 
          console.log(res);
        },
        err => console.error(err)
      )
  }*/


  deletePerfil(id: string) {
    this.loginService.deleteRegistern(id)
      .subscribe(
        res => {
          console.log(res);
          this.getRegistros();
        },
        err => console.error(err)
      )

      this.loginService.saveRegister(this.registro)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

  saveNewRegister() {
    this.loginService.saveRegister(this.registro)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

  //updateRegister(id: string) {
   // this.loginService.deleteRegistern(id)
    //.subscribe(
    //  res => {
     //   console.log(res);
       /* this.getRegistros();
      },
      err => console.error(err)
    )

      this.loginService.saveRegister(this.registro)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/register']);
        },
        err => console.error(err)
      )
  }*/


}
