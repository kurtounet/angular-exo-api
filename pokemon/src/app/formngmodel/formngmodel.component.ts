import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-formngmodel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formngmodel.component.html',
  styleUrl: './formngmodel.component.css'
})
export class FormngmodelComponent {
//Avec ngModel
// VERSION 1 avec les variables
// username!:string;
// password:string="";
//VERSION 2 sans les variables juste ngModel
// username!:string;
// password:string="";
//Avec NgModel
onSubmit(form: NgForm ){
  console.log(form.value);
}
}
