import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';
import { MatTableDataSource } from '@angular/material';
import { MatFormFieldControl } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  columnNames = ['Title', 'Author', 'BookGenre', 'Owned', 'Reviewed'];
  dataSource: MatTableDataSource<Book>;

  book: Book;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[])=>{
      this.dataSource = new MatTableDataSource<Book>(books);
    });
  }

  goToDetailPage(clickedBook : Book) {
    this.router.navigate(['book/BookDetail', clickedBook.BookId]);
  }
}