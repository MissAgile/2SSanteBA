import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/servicesSRNRV/rendez-vous.service';

@Component({
  selector: 'app-liste-rdven-attente',
  templateUrl: './liste-rdven-attente.component.html',
  styleUrls: ['./liste-rdven-attente.component.css']
})
export class ListeRDVEnAttenteComponent implements OnInit {
  rendezVousList: any[] = [];
  rendezVousAcceptes: any[] = [];
  rendezVousEnAttente: any[] = [];
  rendezVousRefuses: any[] = [];
  detailsRendezVous: any;
  detailsRendezVousVisible: boolean = false;
  rendezVousEnAttenteVisible: boolean = true;
  rendezVousAcceptesVisible: boolean = false;
  rendezVousRefusesVisible: boolean = false;
  selectedRendezVous: any;
  isModalOpen: boolean = false;

  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    // this.loadRendezVous();
    this.loadRendezVous();
  this.filterRendezVous();
  this.rendezVousList
  }

  loadRendezVous(): void {
    this.rendezVousService.getRendezVousList().subscribe((data: any) => {
      this.rendezVousList = data.consultations;
      console.log('vev',this.rendezVousList);
      
      this.filterRendezVous();
    });
  }
  
  filterRendezVous(): void {
    console.log('RV encore',this.rendezVousList);
    this.rendezVousAcceptes = this.rendezVousList.filter(rendezVous => rendezVous.status === 'accepter');
    this.rendezVousEnAttente = this.rendezVousList.filter(rendezVous => rendezVous.status === 'en_attente');
    this.rendezVousRefuses = this.rendezVousList.filter(rendezVous => rendezVous.status === 'refuser');

    console.log("Liste des RV en accepté", this.rendezVousAcceptes);
    console.log("Liste des RV en attente", this.rendezVousEnAttente);
    console.log("Liste des RV en refusés", this.rendezVousRefuses);
  }

  acceptRendezVous(id: number) {
    this.rendezVousService.acceptRendezVous(id).subscribe(
      (response: any) => {
        console.log("Rendez-vous accepté : ", response);
        this.filterRendezVous();
        // Retirer le rendez-vous accepté de la liste des rendez-vous en attente
        this.rendezVousEnAttente = this.rendezVousEnAttente.filter(rendezVous => rendezVous.id !== id);

      },
      (error: any) => {
        console.error("Erreur lors de l'acceptation du rendez-vous : ", error);
      }
    );
  }

  refuseRendezVous(id: number) {
    this.rendezVousService.refuseRendezVous(id).subscribe(
      (response: any) => {
        console.log("Rendez-vous refusé : ", response);
        this.filterRendezVous();
        // Retirer le rendez-vous refusé de la liste des rendez-vous en attente
        this.rendezVousEnAttente = this.rendezVousEnAttente.filter(rendezVous => rendezVous.id !== id);
      },
      (error: any) => {
        console.error("Erreur lors du refus du rendez-vous : ", error);
      }
    );
  }

  openModal(consultation: any) {
    this.selectedRendezVous = consultation;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  showDetails(id: number) {
    console.log("Détails du rendez-vous : ", id);
    let rendezVous = this.rendezVousList.find(rdv => rdv.id === id);

    if (rendezVous) {
      this.detailsRendezVous = rendezVous;
      this.detailsRendezVousVisible = true;
    } else {
      console.error("Rendez-vous non trouvé avec l'ID : ", id);
    }
  }

  afficherRendezVousEnAttente(): void {
    this.rendezVousEnAttenteVisible = true;
    this.rendezVousAcceptesVisible = false;
    this.rendezVousRefusesVisible = false;
  }

  afficherRendezVousAcceptes(): void {
    this.rendezVousEnAttenteVisible = false;
    this.rendezVousAcceptesVisible = true;
    this.rendezVousRefusesVisible = false;
  }

  afficherRendezVousRefuses(): void {
    this.rendezVousEnAttenteVisible = false;
    this.rendezVousAcceptesVisible = false;
    this.rendezVousRefusesVisible = true;
  }
}
