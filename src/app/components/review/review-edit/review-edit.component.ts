import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ReviewService } from 'src/app/services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  review : Review;
  editForm : FormGroup;
  dataSource: MatTableDataSource<Review>;
  model = true;

  constructor(private form: FormBuilder, private reviewService: ReviewService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.reviewService.getReview(params.get('id')).subscribe((review : Review) => {
        this.review = review;
        this.createForm();
      });
    });
  }

  createForm() {
    this.editForm = new FormGroup({
      ReviewId: new FormControl(this.review.ReviewId),
      ReviewedBookId: new FormControl(this.review.ReviewedBookId),
      MyRating: new FormControl(this.review.MyRating),
      MyHeadline: new FormControl(this.review.MyHeadline),
      MyReview: new FormControl(this.review.MyReview)
    });
  }

  onSubmit() {
    const updatedReview: Review = {
      ReviewId: this.editForm.value.ReviewId,
      ReviewedBookId: this.editForm.value.ReviewedBookId,
      MyRating: this.editForm.value.MyRating,
      MyHeadline: this.editForm.value.MyHeadline,
      MyReview: this.editForm.value.MyReview
    };
    this.reviewService.editReview(updatedReview).subscribe(() => {
      this.router.navigate(['/ReviewDetail/:id']);
    });
  }
}
