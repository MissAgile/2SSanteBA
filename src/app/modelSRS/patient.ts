export class patient{
  id!: number;
nom!: string;
email!: string;
password!: string;
telephone!: string;
image?: File;
role_id!: number; ////(clé étrangère vers le modèle de ville)
genre!: string; //('homme' ou 'femme')
poids!: number;
age!: number;
createdAt!: Date;
updatedAt!: Date;
}

