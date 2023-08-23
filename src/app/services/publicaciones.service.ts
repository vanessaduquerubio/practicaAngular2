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
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: 'vanessa',
        fecha: 'enero 2022',
        imagen: "https://i.pinimg.com/564x/ce/93/2c/ce932c7298a6b15c43534d3b05534e21.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: "Juan Pérez",
        fecha: 'marzo 2022',
        imagen: "https://i.pinimg.com/564x/c6/c6/f6/c6c6f6298eef2bc30c35e10b1752091b.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: "Laura Gómez",
        fecha: 'febrero 2022',
        imagen: "https://i.pinimg.com/564x/9b/94/eb/9b94eba8d231500c67cc0999ba9d90c6.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " Ana Rodríguez",
        fecha: ' abril 2022',
        imagen: "https://i.pinimg.com/564x/77/2f/d4/772fd49ad35889413a7f22ff0444d01a.jpg",
        categoria: "Responsabilidad"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: "Javier López",
        fecha: 'diciembre 2022',
        imagen: "https://i.pinimg.com/564x/b0/17/3a/b0173a81a7fdf4c9de3048488bb00198.jpg",
        categoria: "Autoestima"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " Ana García",
        fecha: ' enero 2023',
        imagen: "https://i.pinimg.com/564x/be/98/46/be984600eb7ccb50add3d5d2d7c5b747.jpg",
        categoria: "Autoestima"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: "Juan García",
        fecha: 'febrero 2023',
        imagen: "https://huegahhome.com/cdn/shop/products/image_32417937-1ca2-4482-b148-f678bd334881-667469_540x.jpg?v=1683900270",
        categoria: "Autoestima"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: "Juan García",
        fecha: 'febrero 2023',
        imagen: "https://i.pinimg.com/564x/bb/57/f3/bb57f3122c15391db15ae709a0fadf35.jpg",
        categoria: "Autoestima"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://i.pinimg.com/564x/dd/e0/e7/dde0e768b78ab4a7d958bd31070cace5.jpg",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://i.pinimg.com/564x/a8/a4/cb/a8a4cb0fa491917d22c0c9c852b4cac2.jpg",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://i.pinimg.com/564x/3a/31/33/3a3133be5a19a2a5e14287e6c2f4d279.jpg",
        categoria: "El colmo de un programador"
      }, {
        titulo: "Título",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repellendus ullam veniam ipsam sequi perferendis enim officiis unde soluta provident ex numquam officia animi dolore maxime eius voluptas, praesentium est dolor in aspernatur? Itaque maiores quidem veritatis quis nisi optio, ipsa doloremque officiis voluptatem ea sit quasi a esse odit",
        autor: " María López",
        fecha: ' 2022',
        imagen: "https://i.pinimg.com/564x/67/e3/ea/67e3ea53a742d2a4a38a3e1acd083070.jpg",
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