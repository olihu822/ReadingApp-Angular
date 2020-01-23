import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private bookService: BookService) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.bookService.getBook(params.get('id')).subscribe((book : Book) => {
        this.book = book;
      });
    });
  }

  onDelete() {
    this.bookService.deleteBook(this.book.BookId).subscribe(() => {
      this.router.navigate(['/book/AllBooks'])
    })
  }
}
