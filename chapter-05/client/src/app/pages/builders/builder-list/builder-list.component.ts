import { Component, OnInit } from '@angular/core';
import { Builder } from '../builder';
import { BuildersService } from '../_services/builder.service';

@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.scss']
})
export class BuilderListComponent implements OnInit {

  builders: Builder[];
  isLoading: boolean = false;

  constructor(private builderService: BuildersService) { }

  ngOnInit(): void {
    this.getBuilders();
  }

  getBuilders(): void {
    this.isLoading = true;
    this.builderService.getBuilders().
      subscribe(response => this.handleResponse(response),
        error => this.handleError(error))
  }

  protected handleResponse(response: Builder[]) {
    this.isLoading = false;
    this.builders = response;
  }

  protected handleResponse(error: any) {
    this.isLoading = false;
    console.log(error);
  }
}
