import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private form: FormBuilder, 
    private bookService: BookService, 
    private router: Router) {

    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.bookForm = this.form.group({
      Title: new FormControl,
      Author: new FormControl,
      Genre: new FormControl,
      Owned: new FormControl,
      Reviewed: new FormControl
    });
  }

  onSubmit() {
    this.bookService.createBook(this.bookForm.value).subscribe(() => {
        this.router.navigate(['/book/AllBooks'])
    });
  }
}

