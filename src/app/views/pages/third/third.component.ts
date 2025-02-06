import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-third',
  imports: [NgFor],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  standalone: true
})
export class ThirdComponent {

  constructor(
    private nav: Router
  ) { }
  pic: string[] = Array.from({ length: 60 }, (_, i) => `assets/story/as (${60 - i}).jpg`);

  nav_to() {
    this.nav.navigateByUrl('fourth')
  }
}