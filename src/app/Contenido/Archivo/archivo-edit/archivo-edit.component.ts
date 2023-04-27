import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePeticionesService } from 'src/app/Service/service-peticiones.service';

@Component({
  selector: 'app-archivo-edit',
  templateUrl: './archivo-edit.component.html',
  styleUrls: ['./archivo-edit.component.css']
})
export class ArchivoEditComponent {
  id: String;

  constructor(
    private route: ActivatedRoute,
    private routs:Router,
    private service: ServicePeticionesService
  ) {
    this.id = route.snapshot.params['id'];
    this.service.getArchivoById(this.id);
    this.service.getTiposDePublicacion();
    this.service.getAutores();
    
  }
  get archivo() {
    return this.service.archivo;
  }
  get tiposDePublicacion(){
    return this.service.tiposDePublicacion;
  }
  get autores(){
    return this.service.autores;
  }
  

}
