import { Component } from '@angular/core';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent {
  constructor(private servicio:ServicePeticionesService) {
    this.servicio.getArchivos();
   }
   

   get archivos(){
    return this.servicio.archivos;
   }
   deleteArchivo(id:String){
    Swal.fire({
      title: 'Esta seguro que quiere eliminar este elemento?',
      text: 'se eliminaran!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteArchivoById(id);
      }
    });

    

   }
}
