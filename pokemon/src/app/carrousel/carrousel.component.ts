import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  @Input()
images: string[]=[
//   'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png',
//   'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/regular.png',
//   'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/regular.png'
];
index:number = 0
currentImage:string=this.images[this.index]; 
prev(){
 this.index--;
 if(this.index<0){
   this.index=this.images.length-1;
 }
 this.currentImage=this.images[this.index];   
}
next(){
  this.index++;
  if(this.index>=this.images.length){
    this.index=0;
  }
   this.currentImage=this.images[this.index]; 
}
}
