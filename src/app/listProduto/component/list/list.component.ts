import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { LazyLoadEvent } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { Produto1 } from 'src/app/produto/models/produto1';
import { Produto } from 'src/app/produto/models/produtos';
import Swal from 'sweetalert2';
import { ListProdutoService } from '../../services/list-produto.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  blocked: boolean;

  display: boolean = false;
 
  Produto: Produto;


  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 15;
  pageSizes = [15, 20, 25];




  loading: boolean;

  first = 0;

  rows = 10;
  produto: Array<Produto> = [];
  form: FormGroup;
  formPut: FormGroup;
  formGet: FormGroup;
  dataSource;
value;
  constructor(public app: AppComponent,
    public service: ListProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder, private wowService: NgwWowService,
    ){      this.wowService.init();   
      
   
  }
  pageChange(newPage: number) {
    this.router.navigate(['list'], { queryParams: { page: newPage } });
  }
  ngOnInit(): void {

    console.log( localStorage['rows'])
    this.app.valorList = true;
    this.app.valorLogin = false;
    this.app.valorInserir = false;
        console.log(localStorage['token']);
    this.gerarFormGet();
    this.gerarFormCrud();
    this.carregarRegistros();
    this.wowService.init();  
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
      id:['',[]],
      weight: ['', []],
      packageHeight: ['', []],
      packageLength: ['', []],
      packageWidth: ['', []],
      fiscalNcm: ['', []],
      fiscalSource: ['', []],
      condition: ['NEW', []],
        });
  }
  carregarEntity(id) { 
    
    this.service.carregaro(id).subscribe(data => {

    
      this.Produto = data;
console.log(this.Produto)
      this.form.patchValue({
        sku: this.Produto.sku,
        name: this.Produto.name,
        model: this.Produto.model,
        packageHeight: this.Produto.packageHeight,
        packageLength: this.Produto.packageLength,
        packageWidth: this.Produto.packageWidth,
        price: this.Produto.price,
        weight: this.Produto.weight,
        fiscalNcm: this.Produto.fiscalNcm,
        fiscalSource: this.Produto.fiscalSource,
        description: this.Produto.description,
        id: this.Produto.id
        

      });

    },
      err => {
        const msg: string = "Erro obtendo Itens.";
      });
      this.showDialog();
  }  
  
  onRowEditSave() {
    // let product: Produto;
    // product.productId = this.form.get('id').value;
    // product.condition = this.form.get('condition').value;
    // product.description = this.form.get('description').value;
    // product.name = this.form.get('name').value;
    // product.model = this.form.get('model').value;
    // product.packageHeight = this.form.get('packageHeight').value;
    // product.packageLength = this.form.get('packageLength').value;
    // product.packageWidth = this.form.get('packageWidth').value;
    // product.price = this.form.get('price').value;
    // product.weight = this.form.get('weight').value;
    // product.sku = this.form.get('sku').value;
    // product.fiscalNcm = this.form.get('fiscalNcm').value;
    // product.fiscalSource = this.form.get('fiscalSource').value;
  
    const product: Produto = this.form.value; 
    product.productId = this.form.get('id').value;

    console.log(product);
  
    this.service.put(product.productId, product).subscribe(
        data => {
          this.form.reset();
          this.display = false;
  Swal.fire({
    icon: 'success',
    title: 'Sua atualização foi salva!',
    showConfirmButton: false,
    timer: 1500
  })
           console.log(data)
        },
        err => {
          let a = 
          console.log(JSON.stringify(err));
          let msg: string = "Tente novamente"
          this.display = false;
          Swal.fire({
            backdrop: 'true',
            icon: 'error',
            title: 'Oops...',
            text: 'Ocorreu um erro, confira os dados inserido',
            footer: '<a href="./login" >Tente se logar novamente</a>'
          });
        });
     
  }
  getRequestParams(length, search, start) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (length) {
      params[`length`] = this.pageSize;
    }

    if (search) {
      params[`search`] = this.formGet.get('search')?.value;
    }

    if (start) {
      params[`start`] = this.page;
    }

    return params;
  }
  showDialog() {
    this.display = true;
    this.blocked = true;
 
    console.log(this.form.value)
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

//1 passo de desenvovimento = chamar o maximo possível de forma chumbada
//2 passo de desenvovimento = colocar o search em um local storage para chamar quando necessário 
//3 passo de desenvovimento = listar tudo dentro da tabela e passar para modelo

  async carregarRegistros() {
    this.loading = true;

    this.gerarFormPut();


const params = this.getRequestParams(this.pageSize, this.formGet.get('search')?.value , this.page);
console.log(params)
    this.service.carregarRegistro(params)
    .subscribe(
      response => {
        const { rows, total } = response;
        this.tutorials = rows;
        console.log(this.tutorials)
        this.count = total;

     
        console.log(response);
    console.log(this.tutorials)
      },
      error => {
        console.log(error);
      });
    }
    
    handlePageChange(event) {
      this.page = event;
      this.carregarRegistros();
    }
  
    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.carregarRegistros();
    }

}
