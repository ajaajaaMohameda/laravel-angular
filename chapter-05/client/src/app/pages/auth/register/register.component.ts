import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  error: any;
  registerForm: FormGroup = new FormGroup({}) ;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: [this.user.name, Validators.compose([Validators.required])],
      email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit(): void {
    if(!this.registerForm) return
    this.authService.onRegister(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(['bikes']);
      }, (response) => {
        if(response.statuts === 422) {
          Object.keys(response.error).map(err => {
            this.error = `${response.error[err]}`
          })
        } else {
          this.error = response.error;
        }
      }
    )
  }
}
