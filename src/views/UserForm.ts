export class UserForm {
    constructor(public parent: Element) {}

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <input />
        </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement('div');
        templateElement.innerHTML = this.template();
        this.parent.append(templateElement);
    }
}
