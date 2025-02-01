import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent implements OnInit {
  


  day_now: number = 0
  ngOnInit(): void {
    this.get_days()
  }

  constructor() { }


  get_days() {
    const isoTime = new Date().toISOString();
    const targetDate = new Date('2024-06-09');
    const currentDate = new Date(isoTime);  // Convert isoTime to a Date object
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    const dayDifference = timeDifference / (1000 * 3600 * 24);
    this.day_now = Math.floor(dayDifference)
    return

  }


}
