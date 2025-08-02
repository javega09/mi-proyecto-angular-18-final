import { Component, signal } from '@angular/core';

@Component({
  //selector: 'app-hero-page.component',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {

name=signal("iron man");
age=signal(45);


  getHeroDescription() {
   return `${this.name()} - ${this.age()}`;
  }
  changeHero() {
    this.name.set('Spiderman')
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60);
  }
  resetForm() {
    this.name.set('Iroman') 
    this.age.set(45);
  }
}
