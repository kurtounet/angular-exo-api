import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formreactive.component.html',
  styleUrl: './formreactive.component.css'
})
export class FormreactiveComponent{

  public form:FormGroup=new FormGroup({
    password: new FormControl('',{ 
      validators:[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
    ]}
    ),
     
    email: new FormControl('',{validators:[Validators.required,Validators.email]}),
  });
  onSubmit() {
    //TEST DE VALIDATION
    if(this.form.valid) {
      const formData = this.form.value;
      // remet a zero 
      this.form.reset();      
    }
    
  }
  // onSubmit(){
  //   console.log(this.form.get('name')?.value);
  //   console.log(this.form.get('email')?.value);
  // }

}