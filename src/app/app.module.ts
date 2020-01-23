import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { BookComponent } from './components/book/book.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';


const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book', children: [
    { path: 'AllBooks', component: BookComponent },
    { path: 'CreateBook', component: BookCreateComponent },
    { path: 'BookDetail/:id', component: BookDetailComponent },
    { path: 'BookEdit/:id', component: BookEditComponent },
    { path: 'BookDelete/:id', component: BookDeleteComponent}
  ]},
  { path: '**', component: BookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailComponent,
    BookEditComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
