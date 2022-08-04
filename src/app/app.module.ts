import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ComentariosComponent} from './comentarios/comentarios.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {ComentarioService} from './comentarios/comentario.service';
import {FormComponent} from './comentarios/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  //{path: '', redirectTo: '/comentarios',pathMatch: 'full'},
  {path: '', component: ComentariosComponent},
  {path: 'comentarios/form', component: FormComponent},
  {path: 'comentarios/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComentariosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ComentarioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
