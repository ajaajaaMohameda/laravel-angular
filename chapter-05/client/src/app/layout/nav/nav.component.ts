import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  setTitle(title:any) {
    console.log(title);
  }
}
