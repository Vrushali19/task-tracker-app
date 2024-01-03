export class Task {
    public title: string;
    public description: string;
    public status: string;

    constructor(title: string, description: string, status: string) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}