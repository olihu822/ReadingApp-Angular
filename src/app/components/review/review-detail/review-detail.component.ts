import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  review : Review;
  dataSource : MatTableDataSource<Review>;

  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.reviewService.getReview(routeData.get('id')).subscribe((review : Review) => {
        this.review = review;
      });
    });
  }
}
