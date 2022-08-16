import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    standalone: true,
    imports: [CommonModule, InputTextModule, FormsModule, ReactiveFormsModule],
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
    regexNumPhone: any = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    regexPassword: any = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    signUpForm: FormGroup;
    signInForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.signUpForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            phoneNum: ['', [Validators.required, Validators.pattern(this.regexNumPhone)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.regexPassword)]],
            confirmPassword: ['', [Validators.required]],
        });

        this.signInForm = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {}

    onSignIn() {
        console.log(this.signInForm.value);
    }

    onSignUp() {
        console.log(this.signUpForm.value);
    }

    get name() {
        return this.signUpForm.get('name');
    }

    get phoneNum() {
        return this.signUpForm.get('phoneNum');
    }

    get signUpEmail() {
        return this.signUpForm.get('email');
    }

    get signUpPassword() {
        return this.signUpForm.get('password');
    }

    get confirmPassword() {
        return this.signUpForm.get('confirmPassword');
    }

    get signInEmail() {
        return this.signInForm.get('email');
    }

    get signInPassword() {
        return this.signInForm.get('password');
    }
}
