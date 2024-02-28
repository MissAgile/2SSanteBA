import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from 'src/app/modelSRS/rendezVous';
import { PatientService } from 'src/app/servicesSRNRV/patient.service';
import { PlanningService } from 'src/app/servicesSRNRV/planning.service';
import { RendezVousService } from 'src/app/servicesSRNRV/rendez-vous.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rendez-vous-patient',
  templateUrl: './rendez-vous-patient.component.html',
  styleUrls: ['./rendez-vous-patient.component.css']
})
export class RendezVousPatientComponent implements OnInit {
  rendezVous = new RendezVous();
  emailPatient: string = '';
  selectedRendezVousId: string = '';
  tabPlanningMedecin: any;
  motifs: string[] = [
    'Consultation_generale',
   'Prescription_de_médicaments_renouvelables',
   'Suivi_de_traitement',
    'Conseils_sur_des_symptomes_mineurs',
   'Medecine_preventive',
   'Problemes_de_sante_mentale',
    'Deuxieme_avis_medical',
    'Suivi_post_operatoire',
    'Question_de_sante_sexuelle'
  ];
  selectedMotif: string = '';
  planningChoisi: any;

  constructor(
    private rendezVousService: RendezVousService,
    private patientService: PatientService,
    private http: HttpClient,
    private planningService: PlanningService,
    private route: ActivatedRoute
  ) {}
  idPlanning=this.route.snapshot.params['id']

  ngOnInit(): void {
    // Chargez les plannings lors de l'initialisation du composant

    this.tabPlanningMedecin = JSON.parse(localStorage.getItem('PlanningMedecin') || '[]');
    console.log('je suis tabPlanning',this.tabPlanningMedecin);
    console.log(this.idPlanning)
    this.planningChoisi=this.tabPlanningMedecin.find((item:any)=>item.id==this.idPlanning);
    console.log(this.planningChoisi)

  }
  planning: any;
  plannings: any[] = [];

  getPlannings(): void {
    // let detailsPlannings= planning_id
    this.planningService.getPlannings().subscribe(
      (response) => {
        console.log('response',response);

        this.plannings = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des plannings :', error);
      }
    );
  }
  getPlanningDetails(planning_id: string): void {
    // console.log('Détails du planning récupérés :', this.planningDetails);
    this.planning=planning_id;
    console.log(this.planning);

    };

    // Affecter les détails du planning simulé à la variable planningDetails
    // this.planningDetails = mockPlanningDetails;
valider(){
  const planning={
    planning_id:this.idPlanning,
    date:this.rendezVous.date,
    heure:this.rendezVous.heureRv,
    "motif":this.selectedMotif,
    type:this.rendezVous.typeRendezVous,

  }
  console.log(planning)
  this.rendezVousService.getRendez(planning).subscribe((response:any)=>{
    console.log(response);

  })
}
// valider(): void {
//   if (this.rendezVous.typeRendezVous && this.rendezVous.heureRv) {
//     // Vérification de l'heure de rendez-vous par rapport au planning
//     const heureRv = new Date(this.rendezVous.heureRv);

//     if (this.planningChoisi) {
//       const heureDebut = new Date(this.planningChoisi.heure_debut);
//       const heureFin = new Date(this.planningChoisi.heure_fin);

//       if (heureRv.getTime() >= heureDebut.getTime() && heureRv.getTime() <= heureFin.getTime()) {
//         // L'heure de rendez-vous est valide
//         // Placez ici le code pour soumettre le rendez-vous
//         const planning = {
//           planning_id: this.idPlanning,
//           heure: this.rendezVous.heureRv,
//           type: this.rendezVous.typeRendezVous,
//           motif: this.selectedMotif,
//         };

//         console.log(planning);
//         this.rendezVousService.getRendez(planning).subscribe((response: any) => {
//           console.log(response);

//           if (response.success) {
//             Swal.fire({
//               icon: 'success',
//               title: 'Succès',
//               text: 'Votre demande de rendez-vous a bien été prise en compte. Vous recevrez un mail de validation une fois que le médecin l\'approuve.',
//               timer: 5000, // Durée du message en millisecondes (5 secondes = 5000ms)
//               showConfirmButton: false, // Cache le bouton "OK"
//             });

//             // Rediriger vers une autre page après 5 secondes (optionnel)
//             setTimeout(() => {
//               window.location.href = '/autre-page';
//             }, 5000);
//           } else {
//             console.error(response.message);
//             Swal.fire({
//               icon: 'error',
//               title: 'Erreur',
//               text: response.message
//             });
//           }
//         });
//       } else {
//         // L'heure de rendez-vous n'est pas valide
//         Swal.fire({
//           icon: 'error',
//           title: 'Erreur',
//           text: "L'heure de rendez-vous doit être comprise entre " +
//             `${heureDebut.getHours()}:${heureDebut.getMinutes()}` +
//             ` et ${heureFin.getHours()}:${heureFin.getMinutes()}.`
//         });
//       }
//     } else {
//       console.error("Aucun planning n'a été sélectionné.");
//     }
//   } else {
//     Swal.fire({
//       icon: 'error',
//       title: 'Erreur',
//       text: 'Veuillez remplir tous les champs du formulaire.'
//     });
//   }
// }

// valider(): void {
//   if (this.rendezVous.typeRendezVous && this.rendezVous.heureRv) {
//       // Vérification de l'heure de rendez-vous par rapport au planning
//       const heureRv = new Date(this.rendezVous.heureRv);

//       if (this.planningChoisi) {
//           const heureDebut = new Date(this.planningChoisi.heure_debut);
//           const heureFin = new Date(this.planningChoisi.heure_fin);

//           if (heureRv >= heureDebut && heureRv <= heureFin) {
//               // L'heure de rendez-vous est valide
//               // Placez ici le code pour soumettre le rendez-vous
//               const planning = {
//                   planning_id: this.idPlanning,
//                   heure: this.rendezVous.heureRv,
//                   type: this.rendezVous.typeRendezVous,
//                   motif: this.selectedMotif,
//               };

//               console.log(planning);
//               this.rendezVousService.getRendez(planning).subscribe((response: any) => {
//                   console.log(response);
//               });
//           } else {
//               // L'heure de rendez-vous n'est pas valide
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Erreur',
//                   text: "L'heure de rendez-vous doit être comprise entre " +
//                       `${heureDebut.getHours()}:${heureDebut.getMinutes()}` +
//                       ` et ${heureFin.getHours()}:${heureFin.getMinutes()}.`
//               });
//           }
//       } else {
//           console.error("Aucun planning n'a été sélectionné.");
//       }
//   } else {
//       Swal.fire({
//           icon: 'error',
//           title: 'Erreur',
//           text: 'Veuillez remplir tous les champs du formulaire.'
//       });
//   }
// }



  validerRendezVous(): void {

    if (this.rendezVous.typeRendezVous && this.rendezVous.heureRv) {
      // Vérification de l'heure de rendez-vous par rapport au planning
      const heureRv = new Date(this.rendezVous.heureRv);

      if (this.selectedRendezVousId) {
        const rendezVousSelectionne = this.plannings.find(rv => rv.id === this.selectedRendezVousId);
        if (rendezVousSelectionne) {
          const heureDebut = new Date(rendezVousSelectionne.heure_debut);
          const heureFin = new Date(rendezVousSelectionne.heure_fin);

          if (heureRv >= heureDebut && heureRv <= heureFin) {
            // L'heure de rendez-vous est valide
            // Placez ici le code pour soumettre le rendez-vous
            const planning={
              planning_id:this.idPlanning,
              heure:this.rendezVous.heureRv,
              type:this.rendezVous.typeRendezVous,
              motif:this.selectedMotif,

            }
            console.log(planning)
            this.rendezVousService.getRendez(planning).subscribe((response:any)=>{
              console.log(response);
            })
          } else {
            // L'heure de rendez-vous n'est pas valide
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: 'L\'heure de rendez-vous doit être comprise entre ' +
                `${heureDebut.getHours()}:${heureDebut.getMinutes()}` +
                ` et ${heureFin.getHours()}:${heureFin.getMinutes()}.`
            });
          }
        } else {
          console.error('Aucun rendez-vous trouvé avec l\'ID sélectionné.');
        }
      } else {
        console.error('Aucun rendez-vous sélectionné.');
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs du formulaire.'
      });
    }

   }
   planningDetail(){
    // getALLPlannings.planningService()
    this.planningService.getALLPlannings(this.planning.id).subscribe(
      (response:any)=>{
        console.log(response.plannings.planning_id );
        this.planning=response.plannings.planning_id;
      }
    )

  }

}
