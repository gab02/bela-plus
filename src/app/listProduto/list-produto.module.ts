// import { MessagesModule } from 'primeng/messages';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import { NgwWowModule } from 'ngx-wow';
import { ListComponent } from './component/list/list.component';
import { ListProdutoComponent } from './component/listProduto.component';
import { ListProdutoService } from './services/list-produto.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {DropdownModule} from 'primeng/dropdown';

import {DialogModule} from 'primeng/dialog';
import {BlockUIModule} from 'primeng/blockui';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    ListboxModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    BlockUIModule,
    NgwWowModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    ListComponent,
    ListProdutoComponent,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ListProdutoService
]

})
export class ListProdutoModule { }
