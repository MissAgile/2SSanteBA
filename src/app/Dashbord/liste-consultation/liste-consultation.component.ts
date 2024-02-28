import { Component } from '@angular/core';
import { RendezVousService } from 'src/app/servicesSRNRV/rendez-vous.service';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.css']
})
export class ListeConsultationComponent {
 // Declare jourSemaine property
//  jourSemaine: string;

rendezVousList: any[] = [];

constructor(private rendezVousService: RendezVousService) { }

ngOnInit(): void {
  this.loadRendezVousAcceptes();
}

// loadRendezVousAcceptes(): void {
//   this.rendezVousService.getRendezVousAcceptes().subscribe((data: any) => {
//     this.rendezVousList = data;
//     console.log('Liste des rendez-vous acceptés :', this.rendezVousList);
//   });
// }
rendezVousAcceptes: any[] = [];

  // constructor(private rendezVousService: RendezVousService) { }

  // ngOnInit(): void {
  //   this.loadRendezVousAcceptes();
  // }

  loadRendezVousAcceptes(): void {
    this.rendezVousService.getRendezVousList().subscribe((data: any) => {
      this.rendezVousAcceptes = data.consultations.filter((rendezVous: { etat: string; }) => rendezVous.etat === 'accepter');
      console.log('rvvvvvv',this.rendezVousAcceptes);
      
    });
  }
}
