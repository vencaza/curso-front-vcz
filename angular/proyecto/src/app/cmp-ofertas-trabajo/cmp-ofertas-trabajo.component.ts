import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';

@Component({
  selector: 'app-cmp-ofertas-trabajo',
  templateUrl: './cmp-ofertas-trabajo.component.html',
  styleUrls: ['./cmp-ofertas-trabajo.component.css']
})
export class CmpOfertasTrabajoComponent implements OnInit {


  ofertas: Array<Oferta> = [
     new Oferta(1,'Full Stack Developer en Madrid','Teknei es una empresa líder en soluciones informáticas y sistemas complementarios de sistemas IT con especial enfoque en ECM (Enterprise Content Manager), Business Intelligence y RPA (Robotic Process Automation).','https://cdn-yams.schibsted.com/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/82/8226a42b-be27-406e-9350-cd27f4b239bc?rule=largeDevice155',true),
     new Oferta(2,'BUSINESS DEVELOPER MANAGER','Our customer is a global group with more than 385 skilled and dedicated employees, subsidiaries and sales offices in more than 20 countries. ','https://cdn-yams.schibsted.com/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/66/66841d44-cd5c-48b8-a04f-a5af5f1122ed?rule=largeDevice155',false),
     new Oferta(3,'Desarrollador/a .Net - Programador/a .Net','Grupo Empresarial Electromédico, multinacional perteneciente al sector hospitalario, precisa incorporar en sus oficinas de San Sebastian de los Reyes (Madrid) a dos Desarrolladores/as con experiencia en .Net, con al menos dos años de experiencia en puestos de programación/desarrollo.','https://cdn-yams.schibsted.com/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/c3/c378061d-c30a-4516-b795-b883eba0f22a?rule=largeDevice155',false)
    ];
  constructor() { }

  ngOnInit() {
  }

  cambiarInscripcion(event){
    let ofertaInscrita = this.ofertas.find(oferta => oferta.id == event);
    ofertaInscrita.inscrito = !ofertaInscrita.inscrito;

  }

}
