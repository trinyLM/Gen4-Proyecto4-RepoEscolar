import { Component } from '@angular/core';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';

@Component({
  selector: 'app-tipos-de-publicacion',
  templateUrl: './tipos-de-publicacion.component.html',
  styleUrls: ['./tipos-de-publicacion.component.css']
})
export class TiposDePublicacionComponent {
  constructor(private service: ServicePeticionesService) {
    this.service.getTiposDePublicacion();
   }
   get tiposDePublicacion(){
    return this.service.tiposDePublicacion;
   }

}
