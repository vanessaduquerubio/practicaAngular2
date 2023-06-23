
import { Post } from 'src/app/intercaces/post.interfaces';
import { Component, inject } from '@angular/core';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostsComponent {
  AllPosts: Post[]

  //services
  publicacionesServices = inject(PublicacionesService)

  constructor() {
    this.AllPosts = []


  }

  ngOnInit() {
    this.AllPosts = this.publicacionesServices.getAll()
  }

  filtroCategoria($event: any) {
    console.log($event.target.value)
    if ($event.target.value === 'todos') {
      this.AllPosts = this.publicacionesServices.getAll()
    } else {
      this.AllPosts = this.publicacionesServices.getByCategoria($event.target.value)
    }
  }




}

