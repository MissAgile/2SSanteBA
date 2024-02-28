export class Users {

  id!: number;
  nom!: string;
email!: string;
password!: string;
telephone!: string;
image?: File;
role!: any; //(clé étrangère vers le modèle de rôle)
ville!: number; //(clé étrangère vers le modèle de ville)
genre!: string ;//('homme' ou 'femme')
createdAt!: Date;
updatedAt!: Date;
// statut!: 'en_attente' | 'approuvé' | 'bloqué';
statut!: string;
}

// id: number; // Identifiant de l'utilisateur
// nom: string; // Nom de l'utilisateur
// email: string; // Adresse email de l'utilisateur
// password: string; // Mot de passe de l'utilisateur
// telephone: string; // Numéro de téléphone de l'utilisateur
// genre: string; // Genre de l'utilisateur
// role_id: number; // Identifiant du rôle de l'utilisateur
// ville: string; // Ville de l'utilisateur
// secteur_activite: string; // Secteur d'activité de l'utilisateur
// hopital: string; // Hôpital de l'utilisateur
// poids: number; // Poids de l'utilisateur (pour un patient par exemple)
// age: number; // Age de l'utilisateur (pour un patient par exemple)
