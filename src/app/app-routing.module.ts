import { CalendrierPlannificationComponent } from './Dashbord/calendrier-plannification/calendrier-plannification.component';
import { DashPatientComponent } from './Dashbord/dash-patient/dash-patient.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
// import { LitesArticleComponent } from './lites-articleOld/lites-article.component';
import { ContactComponent } from './contact/contact.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { DetailMedecinsComponent } from './detail-medecins/detail-medecins.component';
// import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import { DashAdminComponent } from './Dashbord/dash-admin/dash-admin.component';
import { GestionContenueComponent } from './Dashbord/gestion-contenue/gestion-contenue.component';
import { GestionUtilisateurComponent } from './Dashbord/gestion-utilisateur/gestion-utilisateur.component';
import { GestionRoleComponent } from './Dashbord/gestion-role/gestion-role.component';
import { GestionArticleComponent } from './Dashbord/gestion-article/gestion-article.component';
import { ListePatientComponent } from './Dashbord/liste-patient/liste-patient.component';
import { ListeConsultationComponent } from './Dashbord/liste-consultation/liste-consultation.component';
import { ListeRDVEnAttenteComponent } from './Dashbord/liste-rdven-attente/liste-rdven-attente.component';
import { HistoriqueDesRVComponent } from './Dashbord/historique-des-rv/historique-des-rv.component';
import { MesMedecinComponent } from './Dashbord/mes-medecin/mes-medecin.component';
import { DashMedecinComponent } from './Dashbord/dash-medecin/dash-medecin.component';
import { PlanningDuMedecinComponent } from './Dashbord/planning-du-medecin/planning-du-medecin.component';
import { RendezVousPatientComponent } from './Dashbord/rendez-vous-patient/rendez-vous-patient.component';
import { adminGuardGuard, authGuardGuard, patientGuardGuard } from './guards/auth-guard.guard';
// import { AuthentificationComponent } from './AuthentificationComponent/authentification.component';

const routes: Routes = [
  {path : '',redirectTo : 'accueil', pathMatch :'full' ,},
  {path : 'accueil', component : AccueilComponent,},
  {path : 'apropos', component : AproposComponent ,},
  {path : 'medecin', component : ListeMedecinsComponent,},
  {path : 'article', component: ListeArticlesComponent,},
  {path : 'contact', component : ContactComponent,},
  {path : 'confidentialite', component : PolitiqueConfidentialiteComponent,},
  {path : 'login', component : AuthentificationComponent,},
  {path : 'priseRV', component : PriseRdvComponent,},
  {path : 'detailMed/:id' , component : DetailMedecinsComponent,},
  {path : 'dashboardAdmin', component : DashAdminComponent, canActivate:[adminGuardGuard]},
  {path : 'dashboardMed', component :DashMedecinComponent , canActivate:[authGuardGuard]},
  {path : 'dashboardPatient', component :DashPatientComponent ,canActivate:[patientGuardGuard]},
  {path : 'gestion-contenu', component :GestionContenueComponent ,},
  {path : 'gestion-user', component : GestionUtilisateurComponent,},
  {path : 'gestion-role', component : GestionRoleComponent,},
  {path : 'gestion-article', component : GestionArticleComponent ,},
  {path : 'gestion-patient', component : ListePatientComponent,},
  {path : 'consultation', component : ListeConsultationComponent,},
  {path : 'rendezVousAttente', component : ListeRDVEnAttenteComponent,},
  {path : 'historique', component :HistoriqueDesRVComponent ,},
  {path : 'MesMedicin', component : MesMedecinComponent,},
  {path : 'planning', component : PlanningDuMedecinComponent,},
  {path : 'consultationPatient/:id', component : RendezVousPatientComponent,},
  {path : 'priseConsultation/:id', component : CalendrierPlannificationComponent,},
  // {path : '', component : ,},
  // {path : '', component : ,},
  // {path : '', component : ,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
