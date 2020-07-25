export class Problema {

    name: string;
    title: string;
    description: string;
    idUser?: string;
    idProblema?: string;

    constructor(name: string, title: string, description: string, idUser?: string, idProblema?: string){
        this.name = name;
        this.title = title;
        this.description = description;
        this.idUser = idUser;
        this.idProblema = idProblema;
    }
}