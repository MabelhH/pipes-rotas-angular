import { Component ,OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
input!:string[];

constructor(private datos:DatosService){}

ngOnInit(): void {
  //this.datos.getAll().subscribe(datos =>console.log(datos));
  this.datos.getAll().subscribe(datos =>this.input=datos);
}
}
