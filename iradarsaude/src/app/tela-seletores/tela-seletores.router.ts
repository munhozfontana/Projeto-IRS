import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TelaSeletoresComponent } from './tela-seletores.component';

const TelaSeletoresRoutes = [
    { path: '', component: TelaSeletoresComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(TelaSeletoresRoutes)
    ],
    exports: [RouterModule]
})
export class TelaSeletoresRoutingModule {}
