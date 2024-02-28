import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modelSRS/Articles';
import { ArticleService } from 'src/app/servicesSRNRV/article.service';

@Component({
  selector: 'app-gestion-contenue',
  templateUrl: './gestion-contenue.component.html',
  styleUrls: ['./gestion-contenue.component.css']
})
export class GestionContenueComponent  implements OnInit {
  articles: Article[] = [];
  filterValue: string = '';
  originalarticles: Article[] = [];
  errorMessage: string = "Ce article n'existe pas.";
  location: any;

  constructor(
    private articleService: ArticleService,
    private router : Router,
    ) {}
  ngOnInit(): void {
    // this.loadarticles();
    this.listerDesArticles();
  }

    // lister  produits
    listerDesArticles() {
      // console.log(this.tabListProduit);
      this.articleService.getArticle().subscribe((data) => {
        console.log('listeArticle', data);
        this.articles= data.Articles;
        console.log("new data",data.Articles);
      });
    }

    // categorie_id: this.categorie_id,

    //  pour recuperer un produit
    articleSelectionner: any = {};

    getArticle() {
      this.articleService.getArticle().subscribe((reponse:any)=>{
        console.log(reponse.Articles.data);
        this.articles=reponse.Articles.data;
        console.log(this.articles)
      })
    }
  onSearch() {
    if (this.filterValue.trim() === '') {
      this.articles = [...this.originalarticles];
    } else {
      this.articles = this.originalarticles.filter(element =>
        element.nomArticle.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
    if (this.articles.length === 0) {
      this.errorMessage = "Ce article n'existe pas.";
    } else {
      this.errorMessage = '';
    }
  }
}
