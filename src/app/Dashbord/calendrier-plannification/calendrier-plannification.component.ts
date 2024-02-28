import { Component, OnInit } from '@angular/core';
import { PlanningService } from 'src/app/servicesSRNRV/planning.service';

@Component({
  selector: 'app-calendrier-plannification',
  templateUrl: './calendrier-plannification.component.html',
  styleUrls: ['./calendrier-plannification.component.css']
})
export class CalendrierPlannificationComponent implements OnInit {
  plannings: any[] = [];

  constructor(private planningService: PlanningService) { }

  ngOnInit(): void {
    this.ListAllPlannings();
  }

  ListAllPlannings(): void {
    // this.planningService.getALLPlannings().subscribe(
    //   (response) => {
    //     console.log('listePlanning', response);
    //     this.plannings = response.plannings;
    //     console.log("new data", this.plannings);
    //   },
    //   (error) => {
    //     console.error('Erreur lors de la récupération des plannings :', error);
    //   }
    // );
  }
}
//   plannings: any[] = [];
// Object: any[]=[];

//   constructor(private planningService: PlanningService) { }

//   ngOnInit(): void {
//     this.ListAllPlannings();
//   }

//   ListAllPlannings(): void {
//     this.planningService.getALLPlannings().subscribe((response) => {
//       console.log('listePlanning',response );
//       this.plannings= response.plannings;
//       console.log("new data",this.plannings);
//     });
//   }
//   }
  // listerPlanning() {
  //   // console.log(this.tabListProduit);
  //   this.planningService.getPlannings().subscribe((response) => {
  //     console.log('listePlanning',response );
  //     this.plannings= response.plannings;
  //     console.log("new data",this.plannings);
  //   });
  // }

