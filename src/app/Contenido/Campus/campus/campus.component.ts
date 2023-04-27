import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css'],
})
export class CampusComponent {
  constructor(
    private service: ServicePeticionesService,
    private route: Router
  ) {
    this.service.getCampus();
  }

  get campus() {
    return this.service.campus;
  }
  get borrado() {
    return this.service.borrado;
  }

  deleteCampus(id: String) {
    Swal.fire({
      title: 'Esta seguro que quiere eliminar este elemnto?',
      text: 'quiere eleminar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteCampusById(id);
      }
    });

    //this.route.navigate(["/campus"]);
  }
}
