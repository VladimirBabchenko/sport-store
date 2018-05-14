import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
    declarations: [
        StoreComponent,
        CounterDirective,
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})
export class StoreModule { };

