import { Component } from '@angular/core';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent {

  constructor(private service: ServicePeticionesService) {
    service.getAutores();
   }

   get Autores(){
    return this.service.autores;
   }
}
