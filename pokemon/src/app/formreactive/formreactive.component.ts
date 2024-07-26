import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { motsInterdits } from '../home/home.component';




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
        Validators.maxLength(10),
        motsInterdits,
       // Validators.pattern('^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$')
        //^ : indique le début de la chaîne.
        // [a-zA-Z0-9!@#\$%\^\&*\)\(+=._-] : ensemble de caractères acceptés :
        // a-z : toutes les lettres minuscules.
        // A-Z : toutes les lettres majuscules.
        // 0-9 : tous les chiffres.
        // !@#\$%\^\&*\)\(+=._- : liste des caractères spéciaux acceptés. 
        
        // + : indique que l'ensemble de caractères précédents peut apparaître une ou plusieurs fois.
        // $ : indique la fin de la chaîne.
    ]}
    ),
     
    email: new FormControl('',{validators:[Validators.required,Validators.email, motsInterdits]}),
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