import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of, observable} from 'rxjs';
import {Comentario} from './comentario';
import {endpoint} from "../../environments/environment";

@Injectable()
export class ComentarioService {
  private urlEndPoint: string = endpoint.comentarios;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {
  }



  create(comentario: Comentario) {
    return this.http.post(this.urlEndPoint + '/guardar', comentario, {headers: this.httpHeaders})
      .subscribe((response: any) => {
        return response
      });
  }

  update(comentario: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>(this.urlEndPoint + '/actualizar', comentario, {headers: this.httpHeaders})
  }

/*   delete(id: number): Observable<Comentario> {
    return this.http.delete<Comentario>(this.urlEndPoint + '/eliminar' + id, {headers: this.httpHeaders})
  } */
  delete(id: number): Observable<Comentario>{
    return this.http.delete<Comentario>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}

