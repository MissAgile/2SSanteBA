import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicesSRNRV/users.service';
import { Users } from './../../modelSRS/users';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {

  constructor(private userService: UsersService) { }

  dtOptions: DataTables.Settings = {};
  Users: Users[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
    this.listerDesUtilisateurs();
  }

  listerDesUtilisateurs() {
    this.userService.getUsers().subscribe((response) => {
      this.Users = response.users;
    });
  }

  validerCompteMedecin(userId: number) {
    this.userService.validerCompteMedecin(userId).subscribe(
      (response) => {
        console.log('Validation réussie !', response);
        this.listerDesUtilisateurs(); // Actualiser la liste après validation
      },
      (error) => {
        console.error('Erreur lors de la validation', error);
      }
    );
  }

  refuserCompteMedecin(userId: number) {
    this.userService.refuserCompteMedecin(userId).subscribe(
      (response) => {
        console.log('Refus réussi !', response);
        this.listerDesUtilisateurs(); // Actualiser la liste après refus
      },
      (error) => {
        console.error('Erreur lors du refus', error);
      }
    );
  }
}



// import { Component, OnInit } from '@angular/core';
// import { UsersService } from 'src/app/servicesSRNRV/users.service';
// import { Users } from './../../modelSRS/users';

// @Component({
//   selector: 'app-gestion-utilisateur',
//   templateUrl: './gestion-utilisateur.component.html',
//   styleUrls: ['./gestion-utilisateur.component.css']
// })
// export class GestionUtilisateurComponent implements OnInit {

//   constructor(private userService: UsersService) { }

//   dtOptions: DataTables.Settings = {};
//   user: Users = new Users();
//   Users: any[] = [];
//   listeUsers: any[] = [];

//   ngOnInit(): void {
//     this.dtOptions = {
//       searching: true,
//       lengthChange: false,
//       paging: true,
//       info: false,
//       language: {
//         url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
//       }
//     };
//     this.listerDesUtilisateurs();
//   }

//   listerDesUtilisateurs() {
//     this.userService.getUsers().subscribe((response) => {
//       this.Users = response.users;
//     });
//   }
//   // acceptRendezVous(id: number) {
//   //   this.rendezVousService.acceptRendezVous(id).subscribe(
//   //     (response: any) => {
//   //       console.log("Rendez-vous accepté : ", response);
//   //       // Retirer le rendez-vous accepté de la liste des rendez-vous en attente
//   //       this.rendezVousEnAttente = this.rendezVousEnAttente.filter(rendezVous => rendezVous.id !== id);
//   //     },
//   //     (error: any) => {
//   //       console.error("Erreur lors de l'acceptation du rendez-vous : ", error);
//   //     }
//   //   );
//   // }

//   // refuseRendezVous(id: number) {
//   //   this.rendezVousService.refuseRendezVous(id).subscribe(
//   //     (response: any) => {
//   //       console.log("Rendez-vous refusé : ", response);
//   //       // Retirer le rendez-vous refusé de la liste des rendez-vous en attente
//   //       this.rendezVousEnAttente = this.rendezVousEnAttente.filter(rendezVous => rendezVous.id !== id);
//   //     },
//   //     (error: any) => {
//   //       console.error("Erreur lors du refus du rendez-vous : ", error);
//   //     }
//   //   );
//   // }

//   validerCompteMedecin(id: number) {
//     this.userService.validerCompteMedecin(id).subscribe(
//       (response) => {
//         console.log('Validation réussie !', response);
//         // Réactualiser la liste des utilisateurs après validation réussie
//         this.listerDesUtilisateurs();
//       },
//       (error) => {
//         console.error('Erreur lors de la validation', error);
//         // Gérer l'erreur ici
//       }
//     );
//   }

//   refuserCompteMedecin(id: number) {
//     this.userService.refuserCompteMedecin(id).subscribe(
//       (response) => {
//         console.log('Refus réussi !', response);
//         // Réactualiser la liste des utilisateurs après refus réussi
//         this.listerDesUtilisateurs();
//       },
//       (error) => {
//         console.error('Erreur lors du refus', error);
//         // Gérer l'erreur ici
//       }
//     );
//   }
// }




// // import { UsersService } from 'src/app/servicesSRNRV/users.service';
// // import { Users } from './../../modelSRS/users';
// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-gestion-utilisateur',
// //   templateUrl: './gestion-utilisateur.component.html',
// //   styleUrls: ['./gestion-utilisateur.component.css']
// // })
// // export class GestionUtilisateurComponent implements OnInit {

// //   constructor(private userService: UsersService) { }

// //   dtOptions: DataTables.Settings = {};
// //   // users: any[] = [];
// //   user: Users = new Users();
// //   Users:any[] = [];
// //   listeUsers:any[]=[];

// //   ngOnInit(): void {
// //     this.dtOptions = {
// //       searching: true,
// //       lengthChange: false,
// //       paging: true,
// //       info: false,
// //       language: {
// //         url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
// //       }
// //     };
// //     // this.getUsers();
// //     this.listerDesUtilisateurs();
// //   }


// //   listerDesUtilisateurs() {
// //     // console.log(this.tabListProduit);
// //     this.userService.getUsers().subscribe((response) => {
// //       console.log('listeUsers',response );
// //       this.Users= response.users;
// //       console.log("new data",this.Users);
// //     });
// //   }



// // }
