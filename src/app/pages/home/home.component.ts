import { isNgTemplate } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  input:any=[];
  

constructor(private datos:DatosService,private router:Router){}

ngOnInit(): void {
  //this.datos.getAll().subscribe(datos =>console.log(datos));
  this.datos.getAll().subscribe(datos =>this.input=datos);
}

mostrar(id:number){
this.router.navigate(['/mostar',id])

}
}

