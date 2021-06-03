import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/pages/auth/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title, auth: AuthService) { }

  ngOnInit(): void {
  }

  setTitle(title:any) {
    console.log(title);
  }
}
