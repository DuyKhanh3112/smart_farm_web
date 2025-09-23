export interface IImage {
    id: string;
    createAt?: Date;
    modifiedAt?: Date;
    name: string;
    filename: string;
    extFile: string;
    downloadUri: string;
    status: string;
    active: boolean;
}