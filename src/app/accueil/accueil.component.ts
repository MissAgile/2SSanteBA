import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicesSRNRV/data.service';
import { MedecinService } from '../servicesSRNRV/medecin.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  medecin: any[] = [];

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.listerDesMedecins();
  }
  listerDesMedecins(): void {
    this.medecinService.getAllMedecin().subscribe(
      (medecins) => {
        this.medecin = medecins.medecins;
        console.log(this.medecin);
         // Récupérer seulement les trois premiers médecins
      this.medecin = medecins.slice(0, 3);
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
  // loadMedecins(): void {
  //   this.dataService.getMedecins().subscribe((medecins: any[]) => {
  //     // Récupérer seulement les trois premiers médecins
  //     this.medecins = medecins.slice(0, 3);
  //   });
  // }
}
