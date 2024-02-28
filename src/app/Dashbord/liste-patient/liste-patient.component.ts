import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/servicesSRNRV/rendez-vous.service';
// import { RendezVousService } from 'chemin-vers-votre-service/rendez-vous.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

  listeRendezVous: any[] = [];
  listePatients: any[] = [];

  constructor(private rendezVousService: RendezVousService) { }

  ngOnInit(): void {
    this.listerDesRendezVous();
  }

  listerDesRendezVous() {
    this.rendezVousService.getRendezVous().subscribe((rendezVous) => {
      this.listeRendezVous = rendezVous;
      this.extrairePatientsDesRendezVous();
    });
  }

  extrairePatientsDesRendezVous() {
    this.listePatients = [];
    this.listeRendezVous.forEach(rendezVous => {
      // Vérifiez si le rendez-vous a un patient associé
      if (rendezVous.patient) {
        this.listePatients.push(rendezVous.patient);
      }
    });
  }
}
