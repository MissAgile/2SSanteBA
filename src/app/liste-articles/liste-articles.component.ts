import { Component } from '@angular/core';
import { Article } from '../modelSRS/Articles';
import { ArticleService } from '../servicesSRNRV/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {
  articles: any;
  filterValue: string = '';
  originalarticles: Article[] = [];
  errorMessage: string = "Ce article n'existe pas.";
  location: any;
  titre: any;
  description: any;
  image: any;

  constructor(
    private articleService: ArticleService,
    private router : Router,
    ) {}
  ngOnInit(): void {
    // this.loadarticles();
    this.listerDesArticlesPublie();
  }

    // lister  produits
    // listerDesArticles() {
    //   // console.log(this.tabListProduit);
    //   this.articleService.getArticle().subscribe((data) => {
    //     console.log('listeArticle', data);
    //     this.articles= data.Articles;
    //     console.log("new data",data.Articles);
    //   });
    // }

    listerDesArticlesPublie(): void {
    this.articleService.getAllArticles()
    .subscribe(articles => {
      this.articles = articles.articles;
      console.log(this.articles);
      });
  }
  afficherDetailsArticle(article: any): void {
    this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
      this.titre = response.titre;
      this.description = response.description;
      this.image = response.image;

      // Ouvrir la fenêtre modale des détails de l'article
      // $('#exampleModal-details').modal('show');
    });
  }
    // categorie_id: this.categorie_id,

    //  pour recuperer un produit
    articleSelectionner: any = {};

    // getArticle() {
    //   this.articleService.getArticle().subscribe((reponse:any)=>{
    //     console.log(reponse.Articles.data);
    //     this.articles=reponse.Articles.data;
    //     console.log(this.articles)
    //   })
    // }
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
  // showMentors() {
  //   this.router.navigate(['/listes-mentor']);
  //   this.location.reload();
  // }
}
