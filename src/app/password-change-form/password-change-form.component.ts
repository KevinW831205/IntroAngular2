import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {
  form;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword:[],
      newPassword:[],
      confirmPassword:[]
    });
  }
  ngOnInit() {
  }

}
