import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers() { 
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (localStorage['token']) {
      httpHeaders = httpHeaders.set(
        'Authorization', localStorage['token']
      );
    }

    httpHeaders = httpHeaders.set('Content-Type', 'application/json;charset=UTF-8');
    return { headers : httpHeaders };
  }

  obterIdUsuario(): string {
      if (!localStorage['id']){
        return '';
      }
      const dadosUsuario = localStorage['id']
    return localStorage['id']; 
  }

  obterDadosUsuario() {
    if (!localStorage['token']){
      return '';
    }
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }
}