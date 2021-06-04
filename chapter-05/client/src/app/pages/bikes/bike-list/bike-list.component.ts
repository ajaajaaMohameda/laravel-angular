import { Component, OnInit } from '@angular/core';

// App imports
import { Bike } from '../bike';
import { BikeService } from '../_services/bike.service';
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {

  bikes: Bike[];
  isLoading: boolean = false;
  public searchText: string;

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void {
    this.isLoading = true;
    this.bikeService.getBikes()
      .subscribe(response => this.handleResponse(response),
        error => this.handleError(error))
  }

  protected handleResponse(response: Bike[]) {
    this.isLoading = false;
    this.bikes = response;
  }

  protected handleError(error: any) {
    this.isLoading = false;
    console.log(error);
  }
}
