import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bela-plus';
  valorLogin: boolean = false;
  constructor(private router: Router){}

  sair(){
    this.router.navigate(['login']);

  }
}
