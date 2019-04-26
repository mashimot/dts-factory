import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from '../shared/ui/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent, 
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule, HomeComponent],
    declarations: [HomeComponent]
})
export class HomeModule {}