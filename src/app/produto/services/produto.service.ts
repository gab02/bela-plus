import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/shared';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produtos';
import { CrudComponent, ProdutoComponent } from '..';
import { Produto1 } from '../models/produto1';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


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
    carregarRegistro(): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH2 +"length=10000&search="+localStorage['search']+"&start=0", this.httpUtil.headers());
    }

    
  //   carregarRegistro1(id: string): Observable<any> {
    
  //     return this.http.get(env.baseApiUrl + this.PATH2 +"userId="+localStorage['id'],this.httpUtil.headers());
  //   }
  //   deleteRegistro(vaga: Opoortunity): Observable<any> {
  //   return this.http.delete(env.baseApiUrl +this.PATH3+"userId="+localStorage['id'],this.httpUtil.headers());
  // }
}