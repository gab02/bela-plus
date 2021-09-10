import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { ListProdutoComponent } from './component/listProduto.component';


export const ListProdutoRoutes: Routes = [
    {
        path: 'list',
        component: ListProdutoComponent,
        children: [{ path:'', component: ListComponent }]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(ListProdutoRoutes) ],
    exports: [ RouterModule ]
})
export class ListProdutoRoutingModule { }
