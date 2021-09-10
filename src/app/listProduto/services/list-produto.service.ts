import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto1 } from 'src/app/produto/models/produto1';
import { Produto } from 'src/app/produto/models/produtos';
import { HttpUtilService } from 'src/app/shared';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListProdutoService {

  private readonly PATH: string = 'products';//POST
  
  private readonly PATH2: string = 'products?';//GET
  
  constructor(private http: HttpClient, 
    private httpUtil: HttpUtilService,
 ) { }

    salvar(produto: Produto): Observable<any> {
      return this.http.post(env.baseApiUrl + this.PATH, produto, this.httpUtil.headers());
    }
    put(id: number, produto: Produto1): Observable<any> {
      return this.http.post(env.baseApiUrl + this.PATH+'/'+ id, produto, this.httpUtil.headers());
    }
    //Aqui para melhor visualização, eu coloquei o limite de lenght em 10k ou seja, até 10k ele me retorna tudo em cache. 

//como a aplicação não tem muitos lengths, não irá travar o computador caso liste tudo. 

// o search, setei como branco " "

// com o search a decisão foi tomada pensando em custo pois teriamos duas possibilidades
    // - colocar a função dentro do padrão input ou keyup, mas com isso seriam feitas diversas requisições, causando mais CUSTO ao mantentedor 
    // - trazer tudo de uma unica vez e tratar oque o usuário enxerga


// fazendo isso, todo o controle de demonstração de dados, fica a controle do front-end
    carregarRegistro(params): Observable<any> {
      let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set(
        'Authorization', localStorage['token']

      );
      return this.http.get(env.baseApiUrl + this.PATH2,  {params, headers:httpHeaders }, );

    // return this.http.get(env.baseApiUrl + this.PATH2 +"length=10000&search="+localStorage['search']+"&start=0", this.httpUtil.headers());
    }
    carregaro(id: number): Observable<any> {
     
      return this.http.get(env.baseApiUrl + this.PATH+"/"+id, this.httpUtil.headers() );

    // return this.http.get(env.baseApiUrl + this.PATH2 +"length=10000&search="+localStorage['search']+"&start=0", this.httpUtil.headers());
    }
    
  
}
