export class Ideia {

    name: string;
    title: string;
    description: string;
    idUser?: string;
    idIdeia?: string;

    constructor(name: string, title: string, description: string, idUser?: string, idIdeia?: string){
        this.name = name;
        this.title = title;
        this.description = description;
        this.idUser = idUser;
        this.idIdeia = idIdeia;
    }
}