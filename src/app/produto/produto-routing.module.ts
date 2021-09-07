import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {CrudComponent, ProdutoComponent} from './component';

export const ProdutoRoutes: Routes = [
    {
        path: 'produto',
        component: ProdutoComponent,
        children: [{ path:'', component: CrudComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(ProdutoRoutes) ],
    exports: [ RouterModule ]
})
export class ProdutoRoutingModule { }
