export interface IAppVersion {
    id: string;
    creaetedAt?: Date;
    modifiedAt?: Date;
    versionName: string;
    idFile: string;
    urlDownloadFile: string;
    release: boolean;
    description?: string;

}