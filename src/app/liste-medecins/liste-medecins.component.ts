// import { MedecinService } from './../servicesSRNRV/medecin.service';
// import { Component } from '@angular/core';
// // import { ArticleService } from '../servicesSRNRV/article.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-liste-medecins',
//   templateUrl: './liste-medecins.component.html',
//   styleUrls: ['./liste-medecins.component.css']
// })
// export class ListeMedecinsComponent {
//   // medecin: any;
//   filterValue: string = '';
//   // originalarticles: Article[] = [];
//   errorMessage: string = "Ce article n'existe pas.";
//   location: any;
//   medecins: any[] = [];
//   constructor(
//     private medecinService: MedecinService,
//     private router : Router,
//     ) {}
//   ngOnInit(): void {
//     // this.loadarticles();
//     this.listerDesMedecin();
//   }

//     // lister  produits
//     // listerDesArticles() {
//     //   // console.log(this.tabListProduit);
//     //   this.articleService.getArticle().subscribe((data) => {
//     //     console.log('listeArticle', data);
//     //     this.articles= data.Articles;
//     //     console.log("new data",data.Articles);
//     //   });
//     // }

//     listerDesMedecin(): void {
//     this.medecinService.getAllMedecin()
//     .subscribe(medecin => {
//       this.medecins = medecin;
//       console.log(this.medecins);
//       });
//   }

// }

import { Component, OnInit } from '@angular/core';
import { MedecinService } from './../servicesSRNRV/medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  medecin: any;
  filterValue: string = '';
  // errorMessage: string = "Ce médecin n'existe pas.";

  constructor(
    private medecinService: MedecinService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.listerDesMedecins();
  }

  listerDesMedecins(): void {
    this.medecinService.getAllMedecin().subscribe(
      (medecins) => {
        this.medecin = medecins.medecins;
        console.log(this.medecin);
      }
      // (error) => {
      //   console.log('Erreur lors de la récupération des médecins :', error);
      // }
    );

    // listerDesMedecin(): void {
      //     this.medecinService.getAllMedecin()
      //     .subscribe(medecin => {
      //       this.medecins = medecin;
      //       console.log(this.medecins);
      //       });
  }
}
