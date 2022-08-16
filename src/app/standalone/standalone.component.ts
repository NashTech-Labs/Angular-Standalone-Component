import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone:true,
  imports:[ MatCardModule],
})
export class StandaloneComponent {

  constructor(private router :Router){}

  navigateToBook(){
    this.router.navigate(['/',"book"])
  }

}
