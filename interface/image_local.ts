export interface IImageLocal {
    id?: string;
    idPlant: string;
    idPlantType: string;
    idCondition: string;
    description?: string;
    idImage: string;
    createdAt?: Date;
    imageFile?: File;
    uploaded?: boolean;
}