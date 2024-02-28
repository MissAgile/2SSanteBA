import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/servicesSRNRV/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-conttout',
  templateUrl: './navbar-conttout.component.html',
  styleUrls: ['./navbar-conttout.component.css']
})
export class NavbarConttoutComponent implements OnInit{
  constructor(private authservice: AuthentificationService, private router: Router) { }
  userConnecte:any;
  ngOnInit(): void {
    // Initialisation des données...
  }

  deconnexion(): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, se déconnecter',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Suppression des informations de l'utilisateur connecté du localStorage
        localStorage.removeItem('userData');

        // Redirection vers la page d'accueil ou la page de connexion
        this.router.navigate(['/accueil']); // Modifiez cette ligne en fonction de votre structure de navigation
      }
    });
  }
}
