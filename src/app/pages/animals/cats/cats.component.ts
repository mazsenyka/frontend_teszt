import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats = [
    { id: 1, name: 'Macska 1', image: 'assets/images/macska1.jpg' },
    { id: 2, name: 'Macska 2', image: 'assets/images/macska2.jpg' },
    { id: 3, name: 'Macska 3', image: 'assets/images/macska1.jpg' },
    { id: 4, name: 'Macska 4', image: 'assets/images/macska2.jpg' },
    { id: 5, name: 'Macska 5', image: 'assets/images/macska1.jpg' },
    { id: 6, name: 'Macska 6', image: 'assets/images/macska2.jpg' },
    { id: 7, name: 'Macska 7', image: 'assets/images/macska1.jpg' },
    { id: 8, name: 'Macska 8', image: 'assets/images/macska2.jpg' },
    { id: 9, name: 'Macska 9', image: 'assets/images/macska1.jpg' },
    { id: 10, name: 'Macska 10', image: 'assets/images/macska2.jpg' },
    { id: 11, name: 'Macska 11', image: 'assets/images/macska1.jpg' },
    { id: 12, name: 'Macska 12', image: 'assets/images/macska2.jpg' },
    { id: 13, name: 'Macska 13', image: 'assets/images/macska1.jpg' },
    { id: 14, name: 'Macska 14', image: 'assets/images/macska2.jpg' },
    { id: 15, name: 'Macska 15', image: 'assets/images/macska1.jpg' },
    { id: 16, name: 'Macska 16', image: 'assets/images/macska2.jpg' },
  ];

  constructor(private router: Router) {}

  goToProfile(catId: number) {
    console.log('Kattintott macska ID:', catId); 
    this.router.navigate(['/animals/cats', catId]);
  }
}
