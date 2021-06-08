import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  error: any;
  returnUrl: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  onSubmit(loginForm: NgForm): void {
    this.authService.onLogin(this.user).subscribe(() => {
      this.router.navigate([this.returnUrl]);
    }, (error) => {
      this.error = error.error;
    });

    loginForm.reset();
  }

}
