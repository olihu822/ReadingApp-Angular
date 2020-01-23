import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book : Book;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.bookService.getBook(routeData.get('id')).subscribe((book : Book) => {
        this.book = book;
        console.log(book);
      });
    });
  }

}
