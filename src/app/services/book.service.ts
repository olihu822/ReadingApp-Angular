import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from '../models/Book';

const Api_Url = 'https://localhost:44305';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private router: Router) { }

  getBooks() {
    return this.http.get(`${Api_Url}/api/book/AllBooks`, { headers: this.getHeaders() });
  }

  createBook(book: Book) {
    return this.http.post(`${Api_Url}/api/book/CreateBook`, book, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
