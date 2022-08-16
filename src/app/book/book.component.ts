import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone:true,
  imports:[MatCardModule]
})
export class BookComponent {

  constructor(private router :Router){}

  navigateToBook(){
    this.router.navigate(['/'])
  }

}
