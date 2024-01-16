import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { PasswordSuggestionComponent } from './password-suggestion/password-suggestion.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
export interface LoginData {
  userName: string;
  password: string;
}
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordSuggestionComponent,
    InputTextModule,
    InputSwitchModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  registrationMode!: boolean;
  @Output() loginCertificate!: {userName: string, password: string};
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      registrationMode: false,
    });
  }

  switchMode(): void {
    this.registrationMode = !this.registrationMode;
  }

  onSubmit() {
    if (this.registrationMode) {
      const formValues: LoginData = this.loginForm.value;
      this.loginCertificate = { userName: formValues.userName, password: formValues.password};
     
      alert('sikeres regisztráció');
    } else {
      alert('Sikeres bejelentkezés')
    }
  }
}
