import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Review } from 'src/app/models/Review';
import { reviewService } from 'src/app/services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  columnNames = ['details', 'booktitle', 'rating', 'headline', 'review' ,'buttons'];
  dataSource: MatTableDataSource<Review>;

  review: Review;

  constructor(private reviewService: reviewService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe((reviews: Review[])=>{
      this.dataSource = new MatTableDataSource<Review>(reviews);
    });
  }

  goToDetailPage(clickedReview : Review) {
    this.router.navigate(['review/ReviewDetail', clickedReview.ReviewId]);
  }
}
