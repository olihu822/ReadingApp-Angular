import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-delete',
  templateUrl: './review-delete.component.html',
  styleUrls: ['./review-delete.component.css']
})
export class ReviewDeleteComponent implements OnInit {

  review: Review;
  dataSource: MatTableDataSource<Review>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.reviewService.getReview(params.get('id')).subscribe((review : Review) => {
        this.review = review;
      });
    });
  }

  onDelete() {
    console.log(this.review);
    this.reviewService.deleteReview(this.review.ReviewId).subscribe(() => {
      this.router.navigate(['/review/AllReviews'])
    })
  }

}
