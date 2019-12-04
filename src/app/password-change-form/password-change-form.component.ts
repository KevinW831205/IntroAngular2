import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validators';


@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent implements OnInit {
  form: FormGroup;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: [
        '',
        Validators.required,
        PasswordValidator.cannotBeOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidator.notTheSamePassword
    });
  }

  ngOnInit() {
  }

  get oldPassword() {
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

  changePassword() {
    console.log("1")
  }

}
