import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bela-plus';
  valorInserir: boolean = false;
  valorLogin: boolean = true;
  valorList: boolean = false;

  constructor(private router: Router,
        private wowService: NgwWowService,
    ){      this.wowService.init();
  }
  ngOnInit(): void {
    console.log(this.valorInserir);
    console.log(this.valorList);
    console.log(this.valorLogin);
    
    
    this.wowService.init();

  }

  sair(){
    this.router.navigate(['login']);
    this.valorLogin = true; 
    this.valorInserir = false
    this.valorList = false;

  }
  inserir(){
    this.router.navigate(['produto']);
    this.valorList = false;
    this.valorLogin = false;
    this.valorInserir = true;

  }  
  listar(){
    this.router.navigate(['list']);
    this.valorList = true;
    this.valorLogin = false;
    this.valorInserir = false


  }
}
