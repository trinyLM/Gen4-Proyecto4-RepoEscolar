import { Component } from '@angular/core';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent {
  constructor(private service: ServicePeticionesService) {
    this.service.getCarreras();
   }

   get carreras(){
    return this.service.carreras;
   }

}
