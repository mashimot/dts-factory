import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DBOperation } from '../../shared/enum';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  messageId: number;
  showSpinner: boolean = true;
  dbOps: DBOperation;
  subjects: Array<{
    id: number,
    value: string
  }> = [{
    id: 1,
    value: "Orçamento"
  },{
    id: 2,
    value: "Dúvida"
  },{
    id: 3,
    value: "Elogio"
  },{
    id: 4,
    value: "Reclamação"
  }];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.messageForm = this.fb.group({
      userId: [''],
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phoneNumber: ['', [

      ]],
      post: this.fb.group({
        title: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [
          Validators.required,
          Validators.maxLength(500)
        ]]
      })
    });  
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.messageId = params.id;
        if (!this.messageId){
          this.showSpinner = false;
          return;
        }
        
        this.messageService.getMessageById(this.messageId).subscribe(post => {
          this.userService.getUser(post.userId).subscribe(user => {
            this.messageForm.patchValue({
              userId: user.id,
              name: user.name,
              email: user.email,
              phoneNumber: user.phone,
              post: {
                title: post.title,
                subject: Math.floor(Math.random() * 4 + 1),
                message: post.body
              }
            });
            this.showSpinner = false;
          });
        });
      }  
    );
  }

  onSubmit(){
    let formValue = this.messageForm.value;
    if (formValue.userId){
      this.messageService.updateMessage(this.messageId, formValue).subscribe(result => {
          this.router.navigate(['messages']);
      });
    } else {
      this.messageService.updateMessage(this.messageId, formValue).subscribe(result => {
          //resultado de sucesso
          this.resetForm();
      });
    }
  }

  resetForm(){
    this.f.reset();
    this.f.patchValue({
      post: {
        message: ''
      }
    });
  }

  get f(){
    return this.messageForm;
  }
}
