import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';
import { NgwWowService } from 'ngx-wow';

import { LoginService } from '../..';
import { Login } from '../../models';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private wowService: NgwWowService,
    private loginService: LoginService,
    public app: AppComponent
    ) { 
      this.wowService.init();
    }

  ngOnInit(): void {
    this.gerarForm();
    this.wowService.init();

    this.app.valorLogin = true; 
    this.app.valorInserir = false
    this.app.valorList = false;  }

  gerarForm() {
    this.form = this.fb.group({    
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

validate(){
  let a = this.form.get('username').value;
  let b = this.form.get('password').value

  if((a === 'joao')&&(b === '123456')){
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Confira seu usuário e senha!'
    });
  }

}


produto(){
  console.log('click');
  this.router.navigate(['produto']);

}
logar(){
  if(this.form.get('username')!.value === ''|| this.form.get('password')!.value === ''
  ){
  console.log('erro')
  }
  else{

    const login: Login = this.form.value;
console.log(login)
    this.loginService.logar(login)
      .subscribe(
        data => {
          console.log(data)

          localStorage['token'] = data['accessToken']
          this.produto();
          console.log(localStorage['token']);
  
        },
        err => {
        
          let msg: string = "Tente novamente"
          Swal.fire({
            position: 'bottom-end',
            backdrop: 'true',
            icon: 'error',
            title: 'Oops...',
            text: 'Confira seu usuário e senha!'
           // footer: '<a href="">Why do I have this issue?</a>'
          });
          // this.snackBar.open(msg, "Erro", { duration: 5000 } )
  
        }
      );
  
    }
  
}

}