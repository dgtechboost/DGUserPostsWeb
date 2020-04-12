import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavMenuComponent
    ],
    providers: [
    ],
    exports: [
        NavMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class MenuModule { } 