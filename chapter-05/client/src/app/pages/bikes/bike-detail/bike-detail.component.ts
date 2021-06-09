import { Component, OnInit, ViewChild } from '@angular/core';

// App imports
import { Bike } from '../bike';

import { AuthService } from '../../auth/_services/auth.service';
import { BikeService } from '../_services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {
@ViewChild('nav') nav: any;

  bike: Bike = new Bike;
  isLoading: Boolean = false;
  userVote: number = 0;
  builders: Array<any> = [
    { id: 1, name: 'Diamond Atelier' },
    { id: 2, name: 'Deus Ex Machina\'s' },
    { id: 3, name: 'Rough Crafts' },
    { id: 4, name: 'Roldand Sands' },
    { id: 5, name: 'Chopper Dave' }
  ];
  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getBikeDetail();
  }

  getBikeDetail(): void {
    this.isLoading = true;
    const idParam = this.route.snapshot.paramMap.get('id');
    if(!idParam) {
      return;
    }

    const id = +idParam;
    this.bikeService.getBikeDetail(id).subscribe(bike => {
      this.isLoading = true;
      if(!bike) {
        return;
      }
      this.bike = bike;
    })
  }

  onVote(rating: number): void {
    if (this.checkUserVote(this.bike.ratings)) {
      alert('You already vote on this bike');
      return;
    }
    const paramsId = this.route.snapshot.paramMap.get('id');
    if(!paramsId) {
      return;
    }

    this.bikeService.voteOnBike(rating, +paramsId)
      .subscribe(response => {
        this.userVote = response.data.rating;
        this.bike['average_rating'] = response.data.average_rating;

        this.bike.ratings.push(response.data);
      })
  }

  checkUserVote(ratings: any[]): boolean {
    const currentUserId = this.auth.currentUser.id;
    let ratingUserId: number = 0;

    Object.keys(ratings).forEach((val, index) => {
      ratingUserId = ratings[index].user_id;
    });

    return currentUserId === ratingUserId ? true : false;
  }

  onSubmit(bike: NgForm) {
    this.isLoading = true;
    const idParam = this.route.snapshot.paramMap.get('id');
    if(!idParam) {
      return;
    }

    const id = +idParam;
    this.bikeService.updateBike(bike.value, id)
      .subscribe(response => {
        this.isLoading = false;
        this.bike = response;
      })
  }

  checkBikeOwner(): boolean {

    return this.auth.currentUser.id === this.bike.user?.id ? true : false;
  }
}
