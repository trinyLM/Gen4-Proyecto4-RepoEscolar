import { Injectable } from '@angular/core';
import { HttpClient,HttpEventType } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServicePeticionesService {
  public archivos: any[];

  public autores: any[];
  public carreras: any[];
  public campus: any[];
  public tiposDePublicacion: any[];
  public archivo: any[];

  public borrado: boolean;

  constructor(private http: HttpClient,private route:Router) {
    this.archivos = [];
    this.autores = [];
    this.carreras = [];
    this.tiposDePublicacion = [];
    this.campus = [];
    this.archivo = [];

    this.borrado = false;
  }

  //listar
  getArchivos(): void {
    this.http.get('http://127.0.0.1:8080/api/archivo').subscribe((res: any) => {
      this.archivos = res.contenido;
    });
  }
  saveArchivo(formData:FormData){
    this.http.post("http://127.0.0.1:8080/api/archivo", formData).subscribe((res: any) => {
      console.log(res);
    });
  }
  
  //obtener por id
  getArchivoById(id: String): void {
    this.http
      .get(`http://127.0.0.1:8080/api/archivo/${id}`)
      .subscribe((res: any) => {
        this.archivo = [res];
        console.log(this.archivo);
      });
  }
  //eliminar
  deleteArchivoById(id: String): void {
    this.http
      .delete(`http://127.0.0.1:8080/api/archivo/${id}`)
      .subscribe((res: any) => {
        if (res.status === 'OK') {
          Swal.fire('Borrado!', `${res.msg}`, 'success').then(()=>{
            location.reload();

          });
          
        }else{
          Swal.fire('Error!', `${res.msg}`, 'warning');

        }
        console.log(res);
      });
  }





  getAutores(): void {
    this.http.get('http://127.0.0.1:8080/api/autor').subscribe((res: any) => {
      this.autores = res.contenido;
    });
  }
  getCarreras(): void {
    this.http
      .get('http://127.0.0.1:8080/api/carreras')
      .subscribe((res: any) => {
        this.carreras = res.contenido;
      });
  }
  getTiposDePublicacion(): void {
    this.http
      .get('http://127.0.0.1:8080/api/tiposDePublicacion')
      .subscribe((res: any) => {
        this.tiposDePublicacion = res.contenido;
      });
  }

  getCampus(): void {
    this.http.get('http://127.0.0.1:8080/api/campus').subscribe((res: any) => {
      this.campus = res.contenido;
    });
  }
  deleteCampusById(id: String): void {
    this.http
      .delete(`http://127.0.0.1:8080/api/campus/${id}`)
      .subscribe((res: any) => {
        if (res.status === 'OK') {
          Swal.fire('Borrado!', `${res.msg}`, 'success').then(()=>{
            location.reload();
          });
          
        }else{
          Swal.fire('Error!', `${res.msg}`, 'warning');

        }
        console.log(res);
      });
  }


  deleteTiposPublicacionById(id: String): void {
    this.http
      .delete(`http://127.0.0.1:8080/api/tiposDePublicacion/${id}`)
      .subscribe((res: any) => {
        if (res.status === 'OK') {
          Swal.fire('Borrado!', `${res.msg}`, 'success').then(()=>{
            location.reload();
          });
          
        }else{
          Swal.fire('Error!', `${res.msg}`, 'warning');

        }
        console.log(res);
      });
  }


}
