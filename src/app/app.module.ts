import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule } from './login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {DockModule} from 'primeng/dock';
import { NgwWowModule } from 'ngx-wow';
import {MenubarModule} from 'primeng/menubar';
import { ProdutoModule, ProdutoRoutingModule } from './produto';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    LoginRoutingModule,
    LoginModule,
ProdutoModule,
ProdutoRoutingModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    MenubarModule,
  DockModule,
  NgwWowModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
