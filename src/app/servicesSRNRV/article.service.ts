// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ArticleService {
//   getArticle() {
//     throw new Error('Method not implemented.');
//   }

//   constructor() { }
// }

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  [x: string]: any;
  // getArticlesGestion() {
  //   throw new Error('Method not implemented.');
  // }
  // ajouterArticle(nouvelArticle: { nomarticle: string; description: string; }) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient) {}
  // modification et la suppression d'articles
  ajoutArticle(formData: FormData): Observable<any> {
    return this.http.post(`${baseUrl}/article`, formData);
  }

// modifier produit
updateArticle(id: number, articles:any): Observable<any> {
    return this.http.post(`${baseUrl}/update-article/${id}`, articles);
  }
  // const accessToken = localStorage.getItem('userData');
  //   return accessToken ?
  //     this.http.post<any>(`http://127.0.0.1:8000/api/update-article/${id}`, articles, {
  //     headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  //   }) : of(null);}

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/article/${id}`);
  }
  getArticle(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/article`);
  }
  // getArticle(): Observable<any> {
  //   const accessToken = localStorage.getItem('access_token.token');

  //     return accessToken ?
  //     this.http.get<any>(`${baseUrl}/article`,  {
  //         headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  //       }) : of(null);
  // }
// article.service.ts

  getAllArticles(): Observable<any> {
    // return this.http.get<Article[]>(this.baseUrl);
    return this.http.get<any>(`${baseUrl}/home`);
  }
  // Récupérer les détails d'un article par son ID
  getArticleDetails(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/article/${id}`);
  }

}



