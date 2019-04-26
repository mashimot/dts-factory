import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessagesModule } from './messages/messages.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MessagesModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
