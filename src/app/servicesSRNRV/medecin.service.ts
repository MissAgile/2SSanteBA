import { Injectable } from '@angular/core';
import { Article } from '../modelSRS/Articles';
import { Observable } from 'rxjs';
import { baseUrl } from './api-url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  // ajouterArticle(articleData: FormData) {
  //   throw new Error('Method not implemented.');
  // }
constructor(private http: HttpClient){}
  // private articles: Article[] = [];

  // addArticle(titre: string, description: string, image: File) {
  //     this.articles.push({
  //       nomArticle: titre,
  //       description: description,
  //       image: image,
  //       id: '',
  //       details: '',
  //       estArchive: false,
  //       createdAt: '',
  //       updatedAt: '',
  //       createdBy: '',
  //       updatedBy: '',
  //       titre: undefined
  //     });
  // }

  // getAllArticles() {
  //     return this.articles;
  // }
  getAllMedecin(): Observable<any> {
    // return this.http.get<Article[]>(this.baseUrl);
    return this.http.get<any>(`${baseUrl}/home/detail-medecin`);
  }
}
