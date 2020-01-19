import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  columnNames = ['Title', 'Author', 'BookGenre', 'Owned', 'Reviewed'];
  dataSource: MatTableDataSource<Book>;

  book: Book;
  //books = BOOKS;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[])=>{
      this.dataSource = new MatTableDataSource<Book>(books);
    });
  }
}