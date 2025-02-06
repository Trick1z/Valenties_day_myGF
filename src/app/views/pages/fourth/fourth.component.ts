import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth',
  imports: [],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss'
})
export class FourthComponent {
constructor(
  private nav : Router
){}
  nav_to(){
this.nav.navigateByUrl('fifth')

  }
}
