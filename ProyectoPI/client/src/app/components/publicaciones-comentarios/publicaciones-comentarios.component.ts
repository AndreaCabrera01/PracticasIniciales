import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Publicacion } from 'src/app/model/publicacione';


@Component({
  selector: 'app-publicaciones-comentarios',
  templateUrl: './publicaciones-comentarios.component.html',
  styleUrls: ['./publicaciones-comentarios.component.css']
})
export class PublicacionesComentariosComponent implements OnInit {

  publicaciones: any = [];
  
  constructor(private publicacionesService: PublicacionesService, private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.publicacionesService.getPublicacion(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.publicaciones = res;
          },
          err => console.log(err)
        )
    }
  }

  getPublicaciones() {
    this.publicacionesService.getPublicaciones()
      .subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      );
  }

  



}
