import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/servicesSRNRV/article.service';

@Component({
  selector: 'app-dash-medecin',
  templateUrl: './dash-medecin.component.html',
  styleUrls: ['./dash-medecin.component.css']
})
export class DashMedecinComponent  implements OnInit{
  articles: any[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    // this.getArticle();
    // let user = JSON.parse(localStorage.getItem("token") || "")
    // console.log(user);
    // console.log(JSON.parse(localStorage.getItem("token") ?? '{}').access_token )
    // this.filteredProduit=this.tabListProduit
    // this.modifierArticle();
    // this.ajout();
    this.listerDesArticles();
  }




  /** fonction pour lister les produits */



  // lister  produits
  listerDesArticles() {
    // console.log(this.tabListProduit);
    this.articleService.getArticle().subscribe((response) => {
      console.log('listeArticle',response );
      this.articles= response.Articles;
      console.log("new data",this.articles);
    });
  }
}
