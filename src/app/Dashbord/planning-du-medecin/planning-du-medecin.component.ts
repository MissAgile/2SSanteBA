

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleCalendarServiceService } from 'src/app/servicesSRNRV/google-calendar-service.service';
import { PlanningService } from 'src/app/servicesSRNRV/planning.service';

@Component({
  selector: 'app-planning-du-medecin',
  templateUrl: './planning-du-medecin.component.html',
  styleUrls: ['./planning-du-medecin.component.css']
})
export class PlanningDuMedecinComponent implements OnInit {
  newPlanning: any = {};
  plannings: any[] = [];
  selectedPlanning: any = {};
  listePlanning: any[] = [];
  test: string = ""

  constructor(
    private planningService: PlanningService,
    private googleCalendarService: GoogleCalendarServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.test = "dggegeg"
    // this.listerPlanning();
    this.planningService.getPlannings().subscribe((response:any) => {
      console.log('Liste des plannings :', response);
      this.plannings = response.plannings;
      console.log("Le tableau des planning", this.plannings);
      
      // Filtrer les plannings dont la date n'est pas encore passée
      // this.plannings = response.plannings.filter((planning: any) => {
      //   const planningDate = new Date(planning.date);
      //   const currentDate = new Date();
      //   return planningDate >= currentDate; // Garder seulement les plannings dont la date est ultérieure ou égale à la date actuelle
      // });
    });
  }

  listerPlanning() {
  }

  ajouterPlanning(): void {
    this.planningService.ajouterPlanning(this.newPlanning).subscribe(
      (response) => {
        console.log('Planning ajouté avec succès :', response);
        this.listerPlanning(); // Rafraîchir la liste des plannings après l'ajout
        this.newPlanning = {}; // Réinitialiser le formulaire après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du planning :', error);
      }
    );
  }

  

  selectionnerPlanning(planning: any): void {
    this.selectedPlanning = planning;
  }

  addEvent() {
    const eventData = {
      summary: 'Titre de l\'événement',
      startDateTime: '2024-02-04T10:00:00',
      endDateTime: '2024-02-04T12:00:00'
    };

    this.planningService.ajouterPlanning(eventData).subscribe(
      (response: any) => {
        console.log('Événement ajouté avec succès :', response);
        this.listerPlanning();
      },
      (error: any) => {
        console.log('Erreur lors de l\'ajout de l\'événement :', error);
      }
    );
  }
  

   // Attributs
   public isSecondCrenaux = false;
   //public plannings: any[] = [];
   public planningsObjet: any = {
     jour: "",
     creanaux: [
       {
         startTime: "",
         endTime: ""
       }
     ]
   };
 
   addCrenaux() {
     this.isSecondCrenaux = !this.isSecondCrenaux;
   }
   
   addPlannings() {
    
     //  throw ne''w Error('Method not implemented.');
     console.log('planning',this.planningsObjet);
     this.plannings.push(this.planningsObjet);
     console.log(this.plannings)

 
   }
 
   selectJour(event: any) {
     this.planningsObjet.jour = event.target.value;
   }
 }

