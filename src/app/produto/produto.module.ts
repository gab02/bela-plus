// import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './services';
import { CrudComponent, ProdutoComponent } from './component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';

// import {DialogModule} from 'primeng/dialog';




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
    ListboxModule,
    TableModule,
    ButtonModule

  ],
  declarations: [
    CrudComponent,
    ProdutoComponent,
    
  ],
  providers: [
    ProdutoService
]

})
export class ProdutoModule { }