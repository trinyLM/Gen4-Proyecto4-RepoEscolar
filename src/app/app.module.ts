import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { ContenidoComponent } from './Contenido/contenido/contenido.component';
import { CarrerasComponent } from './Contenido/Carreras/carreras/carreras.component';
import { TiposDePublicacionComponent } from './Contenido/TiposPublicacion/tipos-de-publicacion/tipos-de-publicacion.component';
import { CampusComponent } from './Contenido/Campus/campus/campus.component';
import { AutorComponent } from './Contenido/Autor/autor/autor.component';
import { ArchivoComponent } from './Contenido/Archivo/archivo/archivo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArchivoDetailComponent } from './Contenido/Archivo/archivo-detail/archivo-detail.component';
import { ArchivoEditComponent } from './Contenido/Archivo/archivo-edit/archivo-edit.component';
import { FormsModule } from '@angular/forms';
import { ArchivoCreateComponent } from './Contenido/Archivo/archivo-create/archivo-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContenidoComponent,
    CarrerasComponent,
    TiposDePublicacionComponent,
    CampusComponent,
    AutorComponent,
    ArchivoComponent,
    ArchivoDetailComponent,
    ArchivoEditComponent,
    ArchivoCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
