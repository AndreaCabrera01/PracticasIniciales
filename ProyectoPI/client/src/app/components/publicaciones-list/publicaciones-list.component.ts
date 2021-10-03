import { Component, OnInit } from '@angular/core';

import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.css']
})
export class PublicacionesListComponent implements OnInit {

  publicaciones: any = [];

  constructor(private publicacionesService: PublicacionesService) { }

  
  ngOnInit() {
    this.getPublicaciones();
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



  deletePublicacion(id: string) {
    this.publicacionesService.deletePublicacion(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPublicaciones();
        },
        err => console.error(err)
      )
  }

  añadirPublicacion(id: string){
    console.log(id);
  }

}
