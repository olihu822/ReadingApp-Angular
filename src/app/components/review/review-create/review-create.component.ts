import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Book } from 'src/app/models/Book';
import { Review } from 'src/app/models/Review';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  review : Review;
  BookId: Book;
  reviewForm: FormGroup;
  datasource: MatTableDataSource<Review>;
  model = true;

  constructor(
    private form: FormBuilder, 
    private reviewService: ReviewService, private bookService: BookService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log();
    this.createForm();    
    console.log();
  }

  createForm() {    
    this.activatedRoute.paramMap.subscribe(params => {
    this.reviewForm.setControl("ReviewedBookId", new FormControl(this.review.ReviewedBookId));

    this.reviewForm = this.form.group({
      ReviewId: new FormControl(this.review.ReviewId),
      ReviewedBookId: new FormControl(this.review.ReviewedBookId),
      MyRating: new FormControl(this.review.MyRating),
      MyHeadline: new FormControl(this.review.MyHeadline),
      MyReview: new FormControl(this.review.MyReview)
      });
    });
  }

  onSubmit() {
    this.reviewService.createReview(this.reviewForm.value).subscribe(() => {
      this.router.navigate(['review/AllReviews']);
    });
  }
}
