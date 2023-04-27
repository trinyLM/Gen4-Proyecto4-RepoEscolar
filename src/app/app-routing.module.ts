import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasComponent } from './Contenido/Carreras/carreras/carreras.component';
import { TiposDePublicacionComponent } from './Contenido/TiposPublicacion/tipos-de-publicacion/tipos-de-publicacion.component';
import { CampusComponent } from './Contenido/Campus/campus/campus.component';
import { AutorComponent } from './Contenido/Autor/autor/autor.component';
import { ArchivoComponent } from './Contenido/Archivo/archivo/archivo.component';
import { ArchivoDetailComponent } from './Contenido/Archivo/archivo-detail/archivo-detail.component';
import { ArchivoEditComponent } from './Contenido/Archivo/archivo-edit/archivo-edit.component';
import { ArchivoCreateComponent } from './Contenido/Archivo/archivo-create/archivo-create.component';

const routes: Routes = [
  {
    path: 'carreras',
    component: CarrerasComponent,
  },
  {
    path: 'tiposDePublicacion',
    component: TiposDePublicacionComponent,
  },
  {
    path: 'campus',
    component: CampusComponent,
  },
  {
    path: 'autores',
    component: AutorComponent,
  },
  {
    path: 'archivos',
    component: ArchivoComponent,
  },
  {
    path: 'archivos/:id',
    component: ArchivoDetailComponent,
  },
  {
    path: 'archivos/edit/:id',
    component: ArchivoEditComponent,
  },
  {
    path:'archivos/create/new',
    component: ArchivoCreateComponent,
  },
  {
    path: '',
    redirectTo: '/archivos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
