import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { MessageFormComponent } from "./message-form/message-form.component";
import { LoadingSpinnerComponent } from '../shared/ui/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: 'messages',
      component: MessagesComponent, 
      pathMatch: 'full'
    },{
      path: 'messages/:id/edit',
      component: MessageFormComponent
    },{
      path: 'messages/create',
      component: MessageFormComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule, MessagesComponent],
    declarations: [MessagesComponent, MessageFormComponent, LoadingSpinnerComponent]
})
export class MessagesModule {}