import {Component, Directive, OnInit} from '@angular/core';
import {Comentario} from './comentario';
import {HttpClient} from '@angular/common/http';
import {endpoint} from "../../environments/environment";
import {NgForm, NgModel} from "@angular/forms";
import {ComentarioService} from "./comentario.service";
import {Region} from "./region";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [NgModel]
})
export class FormComponent implements OnInit {

  private titulo: string = "Crear Comentario"
  title = '';
  regiones: any;
  delete: Comentario[] =[];

  constructor(private http: HttpClient, private service: ComentarioService) {
  }

  ngOnInit() {
    this.listarRegiones();
  }

  crear(form: NgForm) {
    let c: Comentario = new Comentario();
    c.correo = form.value.email;
    c.region = new Region(form.value.region.codigo, form.value.region.nombre);
    c.contenido = form.value.contenido;
    this.service.create(c);
    form.reset();
  }
  
  listarRegiones() {
    this.http.get(endpoint.regiones + '/listar', {responseType: 'json'}).subscribe((resp: any) => {
      this.regiones = resp as Region[];
      return this.regiones;
    }),
      (error: any) => {
        console.log(error)
      }
  }
  
  
}

