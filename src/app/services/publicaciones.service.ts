import { Injectable } from '@angular/core';
import { Post } from '../intercaces/post.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  arrPosts: Post[]
  constructor() {
    this.arrPosts = [
      {
        titulo: "No",
        texto: "Por  ",
        autor: 'vanessa',
        fecha: 'enero 2022',
        imagen: "https://i.pinimg.com/564x/fd/a7/4b/fda74b1d6679cc4421015a7d0ff0a8ea.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Culpes",
        texto: "Tus ",
        autor: "Juan Pérez",
        fecha: 'marzo 2022',
        imagen: "https://i.pinimg.com/564x/db/e6/6d/dbe66dd6b07ac27e739d7740a42948dd.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Al",
        texto: "Interminables",
        autor: "Laura Gómez",
        fecha: 'febrero 2022',
        imagen: "https://i.pinimg.com/564x/1a/60/4c/1a604cbe03f2f5a354fc2c9cb2f5f2ee.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Karma",
        texto: "  bucles infinitos.",
        autor: " Ana Rodríguez",
        fecha: ' abril 2022',
        imagen: "https://i.pinimg.com/236x/a7/b1/5f/a7b15f5f1dac973beae79b851cf354e5.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "De",
        texto: "No hay",
        autor: "Javier López",
        fecha: 'diciembre 2022',
        imagen: "https://i.pinimg.com/564x/c0/01/3f/c0013f9c6ad74fba50d2d21ee24a1757.jpg",
        categoria: "Autoestima"
      }, {
        titulo: "Lo",
        texto: " No",
        autor: " Ana García",
        fecha: ' enero 2023',
        imagen: "https://i.pinimg.com/564x/3c/b8/d6/3cb8d6e5fba2920e586edc1a31e3a27a.jpg",
        categoria: "Autoestima"
      }, {
        titulo: "Que",
        texto: "Se  ",
        autor: "Juan García",
        fecha: 'febrero 2023',
        imagen: "https://i.pinimg.com/564x/a0/5f/c2/a05fc26b74a77a833a6ae80822fd5c41.jpg",
        categoria: "Autoestima"
      }, {
        titulo: ",",
        texto: "saca ",
        autor: "Juan García",
        fecha: 'febrero 2023',
        imagen: "https://us.123rf.com/450wm/kapongza/kapongza1212/kapongza121200023/16953361-flor.jpg?ver=6",
        categoria: "Autoestima"
      }, {
        titulo: "Te",
        texto: " Que te falle ",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://images.unsplash.com/photo-1559656389-e2cde75ddec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXp1bCUyMHklMjBuYXJhbmphfGVufDB8fDB8fHww&w=1000&q=80",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Pasa",
        texto: "El código ",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://st3.depositphotos.com/14568452/35252/i/600/depositphotos_352525316-stock-photo-fluid-art-texture-background-with.jpg",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Por",
        texto: " Entero",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://us.123rf.com/450wm/naskami/naskami2004/naskami200400169/145070850-rebanadas-jugosas-frescas-de-naranja-y-cubitos-de-hielo-sobre-el-fondo-azul-brillante-cubierto-de.jpg?ver=6",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Gilipollas",
        texto: " Por un punto ",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://cdn.pixabay.com/photo/2020/01/03/23/20/sunset-4739375_1280.jpg",
        categoria: "El colmo de un programador"
      }
    ]
  }

  getAll() {
    return this.arrPosts
  }

  createPosts(newPost: any) {
    /*   this.arrPosts=(this.storeService)
   */
    this.arrPosts.push(newPost)
  }

  getByCategoria(pCategoria: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === pCategoria)

  }

}