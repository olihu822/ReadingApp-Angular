import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book : Book;
  editForm : FormGroup;
  dataSource: MatTableDataSource<Book>;
  model = true;

  constructor(private form: FormBuilder, private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {    
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookService.getBook(params.get('id')).subscribe((book: Book) => {
        this.book = book;
        this.createForm();
      });
    });
  }

  createForm() {
    this.editForm = new FormGroup({
      BookId: new FormControl(this.book.BookId),
      Title: new FormControl(this.book.Title),
      Author: new FormControl(this.book.Author),
      BookGenre: new FormControl(this.book.BookGenre),
      Owned: new FormControl(this.book.Owned),
      Reviewed: new FormControl(this.book.Reviewed)
    });
  }

  onSubmit() {
    const updatedBook: Book = {
      BookId: this.editForm.value.BookId,
      Title: this.editForm.value.Title,
      Author: this.editForm.value.Author,
      BookGenre: this.editForm.value.BookGenre,
      Owned: this.editForm.value.Owned,
      Reviewed: this.editForm.value.Reviewed
    };
    this.bookService.editBook(updatedBook).subscribe(() => {
      this.router.navigate(['/BookDetail/:id']);
    });
  }
}
