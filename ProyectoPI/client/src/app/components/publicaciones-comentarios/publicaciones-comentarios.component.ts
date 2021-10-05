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
  @HostBinding('class') classes = 'row'
  
  publicacion: Publicacion = {
    id: 0,
    usuario: '',
    tipo: '',
    mensaje: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private publicacionService: PublicacionesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    

    const params = this.activatedRoute.snapshot.params;
    
    if (params.id) {
    this.publicacionService.getPublicacion(params.id)
       .subscribe(
        res => {
           this.publicacion = res;
           console.log(res);
          },
          err => console.log(err)
        )
    }
  }

 

  saveNewPublicacion() {
    delete this.publicacion.created_at;
    delete this.publicacion.id;
    this.publicacionService.savePublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/publicaciones']);
        },
        err => console.error(err)
      )
  }

  updatePublicacion() {
    delete this.publicacion.created_at;
    this.publicacionService.updatePublicacion("0", this.publicacion)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/publicaciones']);
        },
        err => console.error(err)
      )
  }

}
