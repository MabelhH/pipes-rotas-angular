import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-mostar',
  templateUrl: './mostar.component.html',
  styleUrls: ['./mostar.component.css']
})
export class MostarComponent {

  input:any=[];
  enviar:string|null='';
  descripcion:number=0;

constructor(private datos:DatosService,private route :ActivatedRoute){}

ngOnInit(): void {
  //this.datos.getAll().subscribe(datos =>console.log(datos));
  this.datos.getAll().subscribe(datos =>this.input=datos);
  this.enviar=this.route.snapshot.paramMap.get('id'); 
  if(this.enviar!=null){
    this.descripcion=parseInt(this.enviar);
  }
}
back(){
 
}
}
