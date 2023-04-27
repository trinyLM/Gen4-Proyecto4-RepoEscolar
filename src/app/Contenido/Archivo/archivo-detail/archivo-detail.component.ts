import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivo-detail',
  templateUrl: './archivo-detail.component.html',
  styleUrls: ['./archivo-detail.component.css'],
})
export class ArchivoDetailComponent {
  id: String;

  constructor(
    private route: ActivatedRoute,
    private routs:Router,
    private service: ServicePeticionesService
  ) {
    this.id = route.snapshot.params['id'];
    this.service.getArchivoById(this.id);
  }

  get archivo() {
    return this.service.archivo;
  }
  deleteArchivo(id: string) {
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
        this.service.deleteArchivoById(id);
        this.routs.navigateByUrl("/archivos");
      }
    });

    
    
  }
}
