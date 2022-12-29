import { Widget } from '@lumino/widgets';
/**
 * The UI for the commit author form
 */
export class GitAuthorForm extends Widget {
    constructor() {
        super();
        this.node.appendChild(this.createBody());
    }
    createBody() {
        const node = document.createElement('div');
        const text = document.createElement('span');
        this._name = document.createElement('input');
        this._email = document.createElement('input');
        node.className = 'jp-RedirectForm';
        text.textContent = 'Enter your name and email for commit';
        this._name.placeholder = 'Name';
        this._email.placeholder = 'Email';
        node.appendChild(text);
        node.appendChild(this._name);
        node.appendChild(this._email);
        return node;
    }
    /**
     * Returns the input value.
     */
    getValue() {
        const credentials = {
            name: this._name.value,
            email: this._email.value
        };
        return credentials;
    }
}
//# sourceMappingURL=AuthorBox.js.map