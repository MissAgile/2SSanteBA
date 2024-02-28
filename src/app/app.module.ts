import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './headerFooter/header/header.component';
import { FooterComponent } from './headerFooter/footer/footer.component';
// import { AuthentificationComponent } from './authentification/authentification.component';
import { PolitiqueConfidentialiteComponent } from './politique-confidentialite/politique-confidentialite.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { DetailMedecinsComponent } from './detail-medecins/detail-medecins.component';
import { AproposComponent } from './apropos/apropos.component';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
// import { LitesArticleComponent } from './lites-article/lites-article.component';
import { ContactComponent } from './contact/contact.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DataService } from './servicesSRNRV/data.service';
// import { LitesArticleComponent } from './lites-articleOld/lites-article.component';
import { ArticleService } from './servicesSRNRV/article.service';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { SidebarComponent } from './Dashbord/sidebar/sidebar.component';
import { SidebarConttoutComponent } from './Dashbord/sidebar-conttout/sidebar-conttout.component';
import { NavbarConttoutComponent } from './Dashbord/navbar-conttout/navbar-conttout.component';
import { DashAdminComponent } from './Dashbord/dash-admin/dash-admin.component';
import { DashMedecinComponent } from './Dashbord/dash-medecin/dash-medecin.component';
import { DashPatientComponent } from './Dashbord/dash-patient/dash-patient.component';
import { DataTablesModule } from 'angular-datatables';
import { GestionContenueComponent } from './Dashbord/gestion-contenue/gestion-contenue.component';
import { GestionUtilisateurComponent } from './Dashbord/gestion-utilisateur/gestion-utilisateur.component';
import { GestionRoleComponent } from './Dashbord/gestion-role/gestion-role.component';
import { GestionArticleComponent } from './Dashbord/gestion-article/gestion-article.component';
import { ListePatientComponent } from './Dashbord/liste-patient/liste-patient.component';
import { ListeConsultationComponent } from './Dashbord/liste-consultation/liste-consultation.component';
import { ListeRDVEnAttenteComponent } from './Dashbord/liste-rdven-attente/liste-rdven-attente.component';
import { HistoriqueDesRVComponent } from './Dashbord/historique-des-rv/historique-des-rv.component';
import { MesMedecinComponent } from './Dashbord/mes-medecin/mes-medecin.component';
import { AuthentificationService } from './servicesSRNRV/authentification.service';
import { AuthInterceptor } from './interceptors/interceptors';
import { PlanningDuMedecinComponent } from './Dashbord/planning-du-medecin/planning-du-medecin.component';
import { RendezVousPatientComponent } from './Dashbord/rendez-vous-patient/rendez-vous-patient.component';
import { CalendrierPlannificationComponent } from './Dashbord/calendrier-plannification/calendrier-plannification.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashLayoutComponent } from './Dashbord/dash-layout/dash-layout.component';
// import { TokenInterceptorProvider } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    // AuthentificationComponent
    // AuthentificationComponent,
    PolitiqueConfidentialiteComponent,
    ListeMedecinsComponent,
    DetailMedecinsComponent,
    AproposComponent,
    DashboardPrincipalComponent,
    DetailsArticleComponent,
    // LitesArticleComponent,
    ContactComponent,
    PriseRdvComponent,
    AuthentificationComponent,
    ListeArticlesComponent,
    SidebarComponent,
    SidebarConttoutComponent,
    NavbarConttoutComponent,
    DashAdminComponent,
    DashMedecinComponent,
    DashPatientComponent,
    GestionContenueComponent,
    GestionUtilisateurComponent,
    GestionRoleComponent,
    GestionArticleComponent,
    ListePatientComponent,
    ListeConsultationComponent,
    ListeRDVEnAttenteComponent,
    HistoriqueDesRVComponent,
    MesMedecinComponent,
    PlanningDuMedecinComponent,
    RendezVousPatientComponent,
    RendezVousPatientComponent,
    CalendrierPlannificationComponent,
    DashLayoutComponent
    // LitesArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    // CalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,


  ],
  providers: [
    // DataService,
    // ArticleService,
    AuthentificationService,

    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'fr' },

    // TokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
