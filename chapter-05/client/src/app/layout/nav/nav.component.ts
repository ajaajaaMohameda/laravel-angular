import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// App imports
import { AuthService } from 'src/app/pages/auth/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title,
    public auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.auth.getToken()) {
      this.auth.getUser().subscribe();
    }
  }

  onLogout() {
    this.auth.onLogout().subscribe();
  }

  setTitle(pageTitle: string) {
    this.titleService.setTitle(pageTitle);
  }
}
