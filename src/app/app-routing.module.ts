import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-post/lista-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: ListaPostsComponent },
  { path: 'allposts', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', component: ListaPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
