import { Users } from '../modelSRS/users';

export class Medecin {
  specialite!: string;
  medecinId!: string;
  id!: number;//
nom!: string;//
email!: string;//
password!: string;//
telephone!: string;//
image?: File;
role_id!: number;// (clé étrangère vers le modèle de rôle)
ville_id!: number;// (clé étrangère vers le modèle de ville)
secteurs_id!: number;// (clé étrangère vers le modèle de secteur d'activité)
hopital_id!: number;// (clé étrangère vers le modèle d'hôpital)
genre!: string;// ('homme' ou 'femme')
createdAt!: Date;//
updatedAt!: Date;//

}
