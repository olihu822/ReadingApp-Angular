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

  book: Book;
  review : Review;
  reviewForm: FormGroup;
  datasource: MatTableDataSource<Review>;
  model = true;

  constructor(
    private form: FormBuilder, 
    private reviewService: ReviewService, private bookService: BookService,
    private router: Router, private activatedRoute: ActivatedRoute) 
    { 
      console.log();
      this.createForm();    
    }
    
    ngOnInit() {     
       
    }

    createForm() {    
      this.reviewForm = this.form.group({
        ReviewId: new FormControl,
        ReviewedBookId: new FormControl,
        MyRating: new FormControl,
        MyHeadline: new FormControl,
        MyReview: new FormControl
      });
      //this.bookService.getBooks().subscribe(() => { 
     //   this.book.BookId = this.review.ReviewedBookId
   //  });
    }

//Could't figure out this foreign key code. 
//It seems to be connecting and displaying 
//the appropriate number of reviews 
//based on the number of books, 
//but I can't get the reviews to show on the page...

  onSubmit() {
    this.reviewService.createReview(this.reviewForm.value).subscribe(() => {
      this.router.navigate(['review/AllReviews']);
    });
  }
}
