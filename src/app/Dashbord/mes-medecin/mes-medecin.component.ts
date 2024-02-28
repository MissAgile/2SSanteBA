import { PlanningService } from 'src/app/servicesSRNRV/planning.service';
import { secteur_activite } from './../../modelSRS/typesVHS';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from 'src/app/servicesSRNRV/medecin.service';

@Component({
  selector: 'app-mes-medecin',
  templateUrl: './mes-medecin.component.html',
  styleUrls: ['./mes-medecin.component.css']
})
export class MesMedecinComponent implements OnInit{
  medecin: any;
  filterValue: string = '';
  planningMedecin: any[] = [];
  // plannings: any[] = [];
  medecinId: number = 0;
  planning: any[] =[];
  test: string = ""

  // Variable pour switcher entre la liste des medecins et leurs détails
  isListeMedecin:boolean = true;
  isDetailsMedecin:boolean = false;
  // errorMessage: string = "Ce médecin n'existe pas.";

  constructor(
    private medecinService: MedecinService,
    private router : Router,
    private planningService: PlanningService,
    private route: ActivatedRoute,
  ) {}


  showListeMedecin(){
    this.isListeMedecin = true;
    this.isDetailsMedecin = false;
    this.listerDesMedecins();
  }

  showDetailsMedecin(medecinItem:any){
    this.isListeMedecin = false;
    this.isDetailsMedecin = true;
    this.medecin = medecinItem;
    // alert(this.medecin.id);
    this.planningDuMedecin();
    // console.log('yo',this.planningDuMedecin);
  }

  // Fonction de récupération des plannings du médecin
  
  planningDuMedecin(){
    this.planningService.getALLPlannings(this.medecin.id).subscribe(
      (response:any)=>{
        console.log('test vv',response.plannings );
        this.planningMedecin = response.plannings;
        // console.log('test vero',this.planningMedecin);
        
        // Filtrer les plannings qui ont dépassé leur date
        // this.planningMedecin = this.planningMedecin.filter(planning => new Date(planning.date) >= new Date());
        // localStorage.setItem('PlanningMedecin', JSON.stringify(this.planningMedecin));
      }
    )
  }
  ngOnInit(): void {
    this.listerDesMedecins();
    this.test = "dggegeg"
    // this.planningDuMedecin();
  }

  listerDesMedecins( ): void {
    this.medecinService.getAllMedecin().subscribe(
      (medecins) => {
        this.medecin = medecins.medecins;
        console.log(this.medecin);
      }
    );
  }
}

