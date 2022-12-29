import { Dialog } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';
import { Git } from '../tokens';
/**
 * The UI for the commit author form
 */
export declare class GitAuthorForm extends Widget implements Dialog.IBodyWidget<Git.IIdentity> {
    constructor();
    private createBody;
    /**
     * Returns the input value.
     */
    getValue(): Git.IIdentity;
    private _name;
    private _email;
}
