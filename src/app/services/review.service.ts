import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Review } from '../models/Review';

const Api_Url = 'https://localhost:44305';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    constructor(private http: HttpClient, private router: Router) { }
    
    getReviews() {
        return this.http.get(`${Api_Url}/api/book/AllBooks`, { headers: this.getHeaders() });
      }

     getReview(id) {
        return this.http.get(`${Api_Url}/api/review/${id}`, { headers: this.getHeaders() });
      }
    
      createReview(review : Review) {
        return this.http.post(`${Api_Url}/api/review/CreateReview`, review, { headers: this.getHeaders() });
      }
    
      editReview(review : Review) {
        return this.http.put(`${Api_Url}/api/review/EditReview`, review, { headers: this.getHeaders() })
      }
    
      deleteReview(id) {
        return this.http.delete(`${Api_Url}/api/review/DeleteReview/${id}`, { headers: this.getHeaders() })
      }
    
      private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
      }
}