import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, FormModule, SpinnerComponent } from '@coreui/angular';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { sleep } from '../../myViews/setSleep'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [NgFor, FormsModule, NgIf,SpinnerComponent
    // ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle
  ]
})
export class LoginComponent {
  number_pad: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  number_zero: number = 0;
  password: string = ''

  pass_ticket: string = '090624';
  numpad_state: boolean = true;
  go_btn_state: boolean = false;

  constructor(
    private nav: Router
  ) { }

  btn_nums(get_nums: number) {
    this.password = this.password + get_nums.toString();
  }

  btn_state(state: boolean) {
    if (state != true) {
      this.password = ''


    } else {
      if (this.password === this.pass_ticket) {
        sessionStorage.setItem("status", 'pass')
        this.numpad_state = false;
        this.go_btn_state = true;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "รหัสถูกต้องค้าบบบบ",
          showConfirmButton: false,
          timer: 1000
        });
      } else {

        this.password = ''

        Swal.fire({
          position: "center",
          icon: "error",
          title: "รหัสยังไม่ถูกกก นึกดีดีย์",
          showConfirmButton: false,
          timer: 100
        });
      }
    }
  }
  spinner: boolean = false
  async nav_to(path: string) {
    this.spinner = true
    await sleep(2000);
    this.nav.navigateByUrl('myViews/HomePage')


  }











}
