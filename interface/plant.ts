export interface IPlant {
    id: string;
    createAt: Date;
    modifiedAt: Date;
    name: string;
    description?: string;
    idPlantCategory?: string;
}