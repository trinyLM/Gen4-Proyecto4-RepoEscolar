import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';

@Component({
  selector: 'app-archivo-create',
  templateUrl: './archivo-create.component.html',
  styleUrls: ['./archivo-create.component.css'],
})
export class ArchivoCreateComponent {
  /* uploadForm:FormGroup; */
  constructor(
    private formBuilder:FormBuilder,
    private service: ServicePeticionesService,
    private router: Router
  ) {
    /* this.uploadForm=this.formBuilder.group({profile:['']}); */
    this.service.getAutores();
    this.service.getTiposDePublicacion();
  }

  get autores() {
    return this.service.autores;
  }
  get tiposDePublicacion() {
    return this.service.tiposDePublicacion;
  }

  file:any;
  onFileSelect(event: any){
    this.file=event.target.files[0];
    console.log(this.file);

  }

  imgFile:any;
  onImgSelect(event: any){
    this.imgFile=event.target.files[0];
    console.log(this.imgFile);

  }

  autor:number=0;
  getAutor(autor:number) {
    this.autor=autor;
  }
  titulo:String="";
  gettitulo(titulo:String) {
    this.titulo=titulo;
  }
 /*  autor:number=0;
  getAutor(autor:number) {
    this.autor=autor;
  }
  autor:number=0;
  getAutor(autor:number) {
    this.autor=autor;
  }
  autor:number=0;
  getAutor(autor:number) {
    this.autor=autor;
  } */
  onSubmit(){
    let data= new FormData();
    data.set("pdf",this.file);
    data.set("imagen",this.imgFile);
    
    this.service.saveArchivo(data);

  }

  /* onFileSelect(event: any){
    if(event.target.files.length>0)
    {
      const file=event.target.files[0];
      this.uploadForm.get('profile')?.setValue(file);
    }
    } */

   /*  onSubmit(){
      const formData=new FormData();
      formData.append('pdf',this.uploadForm.get('profile')?.value);
      formData.append('imagen',this.uploadForm.get('profile')?.value);
      this.service.saveArchivo(formData);
    } */
}

