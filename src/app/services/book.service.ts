import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from '../models/Book';

const Api_Url = 'https://localhost:44305';
//changes to http from https

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private router: Router) { }

  getBooks() {
    return this.http.get(`${Api_Url}/api/book/AllBooks`, { headers: this.getHeaders() });
  }

  getBook(id) {
    return this.http.get(`${Api_Url}/api/book/${id}`, { headers: this.getHeaders() });
  }

  createBook(book : Book) {
    return this.http.post(`${Api_Url}/api/book/CreateBook`, book, { headers: this.getHeaders() });
  }

  editBook(book : Book) {
    return this.http.put(`${Api_Url}/api/book/EditBook`, book, { headers: this.getHeaders() })
  }

  deleteBook(id) {
    return this.http.delete(`${Api_Url}/api/book/DeleteBook/${id}`, { headers: this.getHeaders() })
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
