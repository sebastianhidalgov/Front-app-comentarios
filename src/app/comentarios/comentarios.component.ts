import { Component, OnInit } from '@angular/core';
import { Comentario } from './comentario';
import { ComentarioService } from './comentario.service';
import {HttpClient} from "@angular/common/http";
import {endpoint} from "../../environments/environment";
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html'
})
export class ComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];

  constructor(private http: HttpClient, private service: ComentarioService) { }

  ngOnInit() {
    this.http.get(endpoint.comentarios + '/listar', {responseType: 'json'}).subscribe((resp: any) => {
      this.comentarios = resp as Comentario[];
      return this.comentarios;
    }),
      (error: any) => {
        console.log(error)
      }
}
    delete(comentario:Comentario):void{
      this.http.delete(endpoint.comentarios + '/eliminar/').subscribe();
    }

}



