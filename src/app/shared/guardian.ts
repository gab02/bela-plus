import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class Guardian implements CanActivate {

    constructor( private router: Router){

           }

    canActivate() {
        console.log("testando se pode acessar");
        if (!this.autenticado()){
            this.router.navigate(['/login']).then( (e) => {
                if (e) {
                  console.log("Navigation is successful!");
                } else {
                  console.log("Navigation has failed!");
                }
              });
              return false;
        }
        return this.autenticado();
    }

    autenticado(): boolean {
        return localStorage['token'];
      }
}