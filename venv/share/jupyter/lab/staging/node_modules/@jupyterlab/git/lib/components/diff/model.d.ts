import { IDisposable } from '@lumino/disposable';
import { ISignal } from '@lumino/signaling';
import { Git } from '../../tokens';
/**
 * Base DiffModel class
 */
export declare class DiffModel implements IDisposable, Git.Diff.IModel {
    constructor(props: Omit<Git.Diff.IModel, 'changed' | 'hasConflict'>);
    /**
     * A signal emitted when the model changed.
     *
     * Note: The signal is emitted for any set on reference or
     * on challenger change except for the content; i.e. the content
     * is not fetch to check if it changed.
     */
    get changed(): ISignal<DiffModel, Git.Diff.IModelChange>;
    /**
     * Helper to compare diff contents.
     */
    private _didContentChange;
    /**
     * Challenger description
     */
    get challenger(): Git.Diff.IContent;
    set challenger(v: Git.Diff.IContent);
    /**
     * File to be compared
     *
     * Note: This path is relative to the repository path
     */
    get filename(): string;
    /**
     * Reference description
     */
    get reference(): Git.Diff.IContent;
    set reference(v: Git.Diff.IContent);
    /**
     * Git repository path
     *
     * Note: This path is relative to the server root
     */
    get repositoryPath(): string | undefined;
    /**
     * Base description
     *
     * Note: The base diff content is only provided during
     * merge conflicts (three-way diff).
     */
    get base(): Git.Diff.IContent | undefined;
    /**
     * Helper to check if the file has conflicts.
     */
    get hasConflict(): boolean;
    /**
     * Boolean indicating whether the model has been disposed.
     */
    get isDisposed(): boolean;
    /**
     * Dispose of the model.
     */
    dispose(): void;
    protected _reference: Git.Diff.IContent;
    protected _challenger: Git.Diff.IContent;
    protected _base?: Git.Diff.IContent;
    private _changed;
    private _isDisposed;
    private _filename;
    private _repositoryPath;
}
