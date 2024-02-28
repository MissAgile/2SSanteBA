import { Medecin } from './../../modelSRS/medecin';
import { ArticleService } from 'src/app/servicesSRNRV/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modelSRS/Articles';
import Swal from 'sweetalert2';
import { AuthentificationService } from 'src/app/servicesSRNRV/authentification.service';
import { MedecinService } from 'src/app/servicesSRNRV/medecin.service';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent  implements OnInit {
  // variables pour les noms des variables
  article: Article = new Article();

  titre: string = '';
  description: string = '';
  image: any = '';
  creatAt = '';
  updateAt = '';

  // liste article
  articles:any;
  listeArticle: any[]=[];

  constructor(
     private authentification : AuthentificationService,
    private MedecinService: MedecinService,
    private articleService : ArticleService,
  ) {}

  // inserer l'image
  getFile(event: any) {
    console.log('img', this.image);
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }

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


  //methode pour ajouter des prduits
  ajout(): void {
    {
      let formData = new FormData();
      formData.append('titre', this.titre);
      formData.append('description', this.description);
      formData.append('image', this.image);
      console.log('article', formData);

      this.articleService.ajoutArticle(formData).subscribe(
        (rep) => {
          console.log('réussi POOOOOOOO', rep);
          localStorage.setItem('userConnect', rep.token);
          this.listerDesArticles();
        },
        (error) => {
          console.error('erreur', error);
        }
      );
    }
    this.verifierChamps('Félicitation!', 'Produit ajouté', 'success');

    this.viderChamps();
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

  afficherDetailsArticle(article: any): void {
    this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
      this.titre = response.titre;
      this.description = response.description;
      this.image = response.image;

      // Ouvrir la fenêtre modale des détails de l'article
      // $('#exampleModal-details').modal('show');
    });
  }

  // Méthode pour charger les détails de l'article
// afficherDetailsArticle(article: any): void {
//   this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
//       // Afficher les détails de l'article dans une boîte de dialogue modale
//       // Swal.fire({
//       //     title: article.titre,
//       //     html: `
//       //         <p>Description: ${article.description}</p>
//       //         <p>Date de création: ${article.createdAt}</p>
//       //         <p>Date de mise à jour: ${article.updatedAt}</p>
//       //         <img src="http://127.0.0.1:8000/storage/${article.image}" alt="Image de l'article" style="max-width: 100%;">
//       //     `,
//       //     confirmButtonText: 'Fermer'
//       // });
//   });
// }
// afficherDetailsArticle(article: any): void {
//   this.articleService.getArticleDetails(article.id).subscribe((response: any) => {
//     this.titre = response.titre;
//     this.description = response.description;
//     this.image = response.image;
// console.log(response);

//     // Ouvrir la fenêtre modale des détails de l'article
//     // $('#exampleModal-details').modal('show');
//   });
// }

  // listerDesArticles() {
  //   console.log(this.listeArticle);
  //   this.articleService.getArticle().subscribe(
  //     (responses) => {
  //       console.log(responses);

  //       this.listeArticle = responses.articles;
  //       console.log(responses.articles);
  //     }
  //   )
  // }

  // categorie_id: this.categorie_id,

  //  pour recuperer un produit
  // articleSelectionner: any = {};

  // getArticle() {
  //   this.articleService.getArticle().subscribe((reponse:any)=>{
  //     console.log(reponse);
  //     this.articles=reponse.article.data;
  //     console.log(this.articles)
  //   })
  // }

  // fonction pour modifier
  //  variable
  // modifarticle: any;

  modifierarticle() {
    let formData = new FormData();
      formData.append('titre', this.titre,);
      formData.append('image', this.image,);
      console.log('image', this.image);

      formData.append('description', this.description,);
    this.articleService.updateArticle(this.id, formData).subscribe((response) => {
        console.log('modifArticle', response);
        this.listerDesArticles();
        this.viderChamps();

      });
      // this.ngOnInit();
      // this.listerDesArticles();
      // this.articles;

  }
  // declare id
  id: number = 0;
  chargerInfosArticle(article: any) {
    console.log(article);
    this.id = article.id;
    console.warn('lid de vv', this.id);
    this.titre = article.titre;
    this.description = article.description;
    this.image = article.image;
    console.log('changer', this.chargerInfosArticle);
  }

  // methode pour supprimer

  supprimerArticle(id:number): void{

    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez supprimer le article",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1A6060",
      cancelButtonColor: "#2FA7A7",
      confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.deleteArticle(id).subscribe((response) => {
          console.log('suparticle', response);
        });
      }
    });

    // supprimerArticle(id: number): void {
    //   this.articleService.deleteArticle(id)
    //     .subscribe(() => {
    //       // Supprimer l'article de la liste
    //       this.articles = this.articles.filter(article => article.id !== id);
    //     });
    // }
  }




  //Pour faire la recherche
  filterValue = '';
  filteredArticle: any;

  // onSearch() {
  //   // Recherche se fait selon le nom ou le prenom
  //   this.filteredarticle = this.tabListArticle.filter((elt: any) =>
  //     elt?.nomProduit.toLowerCase().includes(this.filterValue.toLowerCase())
  //   );
  // }


  // Pagination
    //  Attribut pour la pagination
    //  itemsParPage = 3;
    //  Nombre d'articles par page
    //  pageActuelle = 1;
      // Page actuelle
     tabMessages: any[] = [];
     tabMessagesFilter: any[] = [];
  // Méthode pour déterminer les articles à afficher sur la page actuelle
  //   getItemsPage(): any[] {
  //     console.log('pagi',this.getItemsPage)
  //     if (Array.isArray(this.tabMessagesFilter)) {
  //     const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
  //     const indexFin = indexDebut + this.itemsParPage;
  //     return this.tabMessagesFilter.slice(indexDebut, indexFin);
  //   } else {
  //     return [];
  //   }
  // }

  // Méthode pour générer la liste des pages
  // get pages(): number[] {
  //   const totalPages = Math.ceil(this.tabMessagesFilter.length / this.itemsParPage);
  //   return Array(totalPages).fill(0).map((_, index) => index + 1);
  // }

  // Méthode pour obtenir le nombre total de pages
  // get totalPages(): number {
  //   return Math.ceil(this.tabMessagesFilter.length / this.itemsParPage);
  // }

  // Methode pour vider les champs
  viderChamps() {
    this.titre= '';
    // this.prix = '';
    // this.quantiteTotale = '';
    this.description = '';
    this.image = '';
  }

  // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}

// bienSelectionner:any = "";
// console.log(this.bienSelectionner);
// console.log(data)

// this.getAllBiens();

