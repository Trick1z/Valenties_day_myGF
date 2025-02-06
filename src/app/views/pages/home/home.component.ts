import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { AvatarComponent, SpinnerModule, TextColorDirective } from '@coreui/angular';
import {sleep} from '../../myViews/setSleep'
@Component({
  selector: 'app-home',
  imports: [NgIf,TextColorDirective, AvatarComponent, SpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
run_time: boolean = false
  day_now: number = 0
  ngOnInit(): void {
    this.get_days()
    this.get_time()
    setInterval(() => this.get_time(), 1000);
  }

  constructor(

    private nav: Router
  ) { }

  time_Hour: any;
  time_minutess: any;
  time_seconds: any;

  get_time() {
    const isoTime = new Date().toISOString();
    const time = new Date(isoTime);
    this.time_Hour = time.getHours()
    this.time_minutess = time.getMinutes()
    this.time_seconds = time.getSeconds()

    return
  }

  async nav_to() {
    this.next_page_state = !this.next_page_state
    await sleep(1000);
    
    this.nav.navigateByUrl('second')


  }


  get_days() {
    const isoTime = new Date().toISOString();
    const targetDate = new Date('2024-06-09');
    const currentDate = new Date(isoTime);  // Convert isoTime to a Date object
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    const dayDifference = timeDifference / (1000 * 3600 * 24);
    this.day_now = Math.floor(dayDifference)
    return

  }



  next_page_state:boolean =false;

}
