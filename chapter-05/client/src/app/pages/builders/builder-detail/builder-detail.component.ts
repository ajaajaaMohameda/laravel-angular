import { Component, OnInit } from '@angular/core';


// App imports
import { Builder } from './../builder';
import { BuildersService } from '../_services/builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-builder-detail',
  templateUrl: './builder-detail.component.html',
  styleUrls: ['./builder-detail.component.scss']
})
export class BuilderDetailComponent implements OnInit {

  builder: Builder = new Builder;
  isLoading: boolean = false;

  constructor(private builderService: BuildersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBuilderDetail();
  }

  getBuilderDetail(): void {
    this.isLoading = true;
    const idParam = this.route.snapshot.paramMap.get('id');;

    if(!idParam) {
      return;
    }

    const id = +idParam;

    this.builderService.getBuilderDetail(id).subscribe(builder => {
      this.isLoading = false;

      this.builder = builder['data'];
    })
  }

}