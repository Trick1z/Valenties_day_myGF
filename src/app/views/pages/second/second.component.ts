import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms'; // ✅ Use ReactiveFormsModule
import { BrowserModule } from '@angular/platform-browser';
import {
  AvatarComponent,
  FormCheckLabelDirective, FormLabelDirective,
  SpinnerComponent,
  SpinnerModule,
  TextColorDirective
} from '@coreui/angular';

import { sleep } from '../../myViews/setSleep'
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [SpinnerModule,SpinnerComponent,NgIf, TextColorDirective, AvatarComponent, FormsModule,],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
  , standalone: true
})
export class SecondComponent implements OnInit {
  run_time = 0
  show_model: Boolean = true;
  spinner:boolean = false;
  ngOnInit(): void {

  }

  show_btn_next:boolean= false;
  constructor(
    private nav : Router
  ) { }

  async sendMsg() {
    this.show_model = false;
    this.spinner = true
    while (this.run_time != 100) {
      this.run_time += 1
      console.log(this.run_time);

      if (this.run_time == 27) {
        this.spinner = false
        this.show_btn_next = true
        return
      }
      
     await sleep(2000)
    }
    

  }

  nav_to(){
  this.nav.navigateByUrl('third')

  }
}
