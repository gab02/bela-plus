import { Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgwWowService } from 'ngx-wow';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';
import { Produto } from '../../models/produtos';
import { ProdutoService } from '../../services';



@Component({
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  styles: [`
  :host ::ng-deep .p-cell-editing {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
  }
`]
})
export class CrudComponent implements OnInit {
 @ViewChild('sku') sku:ElementRef; 

  produto: Array<Produto> = [];
  form: FormGroup;
  formPut: FormGroup;
  formGet: FormGroup;
  dataSource;
value;
  constructor(public app: AppComponent,
    public service: ProdutoService,
    public fb: FormBuilder, private wowService: NgwWowService,
    ){      this.wowService.init();   
  }

  ngOnInit(): void {
    this.app.valorList = false;
    this.app.valorLogin = false;
    this.app.valorInserir = true;    console.log(localStorage['token']);
    this.gerarFormGet();
    this.gerarFormCrud();
    this.wowService.init();  
  }
  onRowEditInit(product: Produto) {
    // this.clonedProducts[product.id] = {...product};
}

onRowEditSave(product: Produto) {
  product.productId = this.formPut.get('id').value;
  product.condition = this.formPut.get('condition').value;
  product.description = this.formPut.get('description').value;
  product.name = this.formPut.get('name').value;
  product.model = this.formPut.get('model').value;
  product.packageHeight = this.formPut.get('packageHeight').value;
  product.packageLength = this.formPut.get('packageLength').value;
  product.packageWidth = this.formPut.get('packageWidth').value;
  product.price = this.formPut.get('price').value;
  product.weight = this.formPut.get('weight').value;
  product.sku = this.formPut.get('sku').value;
  product.fiscalNcm = this.formPut.get('fiscalNcm').value;
  product.fiscalSource = this.formPut.get('fiscalSource').value;

  console.log(product);

  this.service.put(product.productId, product).subscribe(
      data => {
        this.formPut.reset();
Swal.fire({
  icon: 'success',
  title: 'Sua atualiza????o foi salva!',
  showConfirmButton: false,
  timer: 1500
})
         console.log(data)
      },
      err => {
        let a = 
        console.log(JSON.stringify(err));
        let msg: string = "Tente novamente"
        Swal.fire({
          backdrop: 'true',
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro, confira os dados inserido',
          footer: '<a href="./login" >Tente se logar novamente</a>'
        });
      });
   
}

onRowEditCancel(product: Produto) {
    // this.products2[index] = this.clonedProducts[product.id];
    // delete this.clonedProducts[product.id];
}
  
  gerarFormCrud() {
    this.form = this.fb.group({ 
      categoryId: [1, []],
      brand: ['', []],
      description: ['', []],
      name: ['', []],
      model: ['', []],
      price: ['', []],
      sku: ['', []],
      weight: ['', []],
      packageHeight: ['', []],
      packageLength: ['', []],
      packageWidth: ['', []],
      fiscalNcm: ['', []],
      fiscalSource: ['', []],
      condition: ['NEW', []],
        });
  }

  
  gerarFormGet() {
    this.formGet = this.fb.group({ 
      search: [' ', []]
        });
  }
  gerarFormPut() {
    this.formPut = this.fb.group({ 
      description: ['', []],
      name: ['', []],
      model: ['', []],
      price: ['', []],
      sku: ['', []],
      weight: ['', []],
      packageHeight: ['', []],
      packageLength: ['', []],
      packageWidth: ['', []],
      fiscalNcm: ['', []],
      id: ['', []],
      fiscalSource: ['', []],
      condition: ['', []],
      
    
    });
    console.log(this.formPut.value)

  }

//1 passo de desenvovimento = chamar o maximo poss??vel de forma chumbada
//2 passo de desenvovimento = colocar o search em um local storage para chamar quando necess??rio 
//3 passo de desenvovimento = listar tudo dentro da tabela e passar para modelo

Post(){
  const entity: Produto = this.form.value;
  console.log(entity);
  this.produto.push(entity);

  this.service.salvar(entity).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Sua inser????o foi salva!',
          showConfirmButton: false,
          timer: 1500
        })
        this.app.listar();
        // this.carregarRegistros();
        this.form.reset();
         console.log(data)
      },
      err => {
        let a = 
        console.log(JSON.stringify(err));
        let msg: string = "Tente novamente"
        Swal.fire({
          backdrop: 'true',
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro, confira os dados inserido',
          footer: '<a href="./login" >Tente se logar novamente</a>'
        });
      });
  }



}
