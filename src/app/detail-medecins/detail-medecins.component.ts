import { Component } from '@angular/core';
import { MedecinService } from '../servicesSRNRV/medecin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-medecins',
  templateUrl: './detail-medecins.component.html',
  styleUrls: ['./detail-medecins.component.css']
})
export class DetailMedecinsComponent {
  medecin: any;
  filterValue: string = '';
  medecinChoisi: any;
  // errorMessage: string = "Ce médecin n'existe pas.";

  constructor(
    private medecinService: MedecinService,
    private router : Router,
    private route:ActivatedRoute
  ) {}
  idMedecinChoisi=this.route.snapshot.params['id']

  ngOnInit(): void {
    this.listerDesMedecins();
  }

  listerDesMedecins(): void {
    this.medecinService.getAllMedecin().subscribe(
      (medecins) => {
        this.medecin = medecins.medecins;
        console.log(this.medecin);
        this.medecinChoisi=this.medecin.find((element: any) => element.id==this.idMedecinChoisi)
        console.log(this.medecinChoisi)
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
  prendreRendezVous(): void {
    // Vérifier si le patient est connecté
    const patientConnecte = false; // Vous devez implémenter la logique pour vérifier si le patient est connecté

    if (!patientConnecte) {
      // Afficher un Sweet Alert pour demander au patient de se connecter
      Swal.fire({
        icon: 'warning',
        title: 'Vous devez vous connecter',
        text: 'Veuillez vous connecter pour prendre un rendez-vous',
        showCancelButton: true,
        confirmButtonText: 'Se connecter',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.isConfirmed) {
          // Rediriger vers la page de connexion
          // Remplacez '/connexion' par le chemin de votre page de connexion
          window.location.href = '/connexion';
        }
      });
    } else {
      // Le patient est connecté, rediriger vers la page de prise de rendez-vous
      // Remplacez '/priseRV' par le chemin de votre page de prise de rendez-vous
      // window.location.href = '/priseRV';
    }
  }

}
