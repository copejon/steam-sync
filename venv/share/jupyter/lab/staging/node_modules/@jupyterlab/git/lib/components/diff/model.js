import { Signal } from '@lumino/signaling';
/**
 * Base DiffModel class
 */
export class DiffModel {
    constructor(props) {
        this._isDisposed = false;
        this._challenger = props.challenger;
        this._filename = props.filename;
        this._reference = props.reference;
        this._repositoryPath = props.repositoryPath;
        this._base = props.base;
        this._changed = new Signal(this);
    }
    /**
     * A signal emitted when the model changed.
     *
     * Note: The signal is emitted for any set on reference or
     * on challenger change except for the content; i.e. the content
     * is not fetch to check if it changed.
     */
    get changed() {
        return this._changed;
    }
    /**
     * Helper to compare diff contents.
     */
    _didContentChange(a, b) {
        return (a.label !== b.label || a.source !== b.source || a.updateAt !== b.updateAt);
    }
    /**
     * Challenger description
     */
    get challenger() {
        return this._challenger;
    }
    set challenger(v) {
        const emitSignal = this._didContentChange(this._challenger, v);
        if (emitSignal) {
            this._challenger = v;
            this._changed.emit({ type: 'challenger' });
        }
    }
    /**
     * File to be compared
     *
     * Note: This path is relative to the repository path
     */
    get filename() {
        return this._filename;
    }
    /**
     * Reference description
     */
    get reference() {
        return this._reference;
    }
    set reference(v) {
        const emitSignal = this._didContentChange(this._reference, v);
        if (emitSignal) {
            this._reference = v;
            this._changed.emit({ type: 'reference' });
        }
    }
    /**
     * Git repository path
     *
     * Note: This path is relative to the server root
     */
    get repositoryPath() {
        return this._repositoryPath;
    }
    /**
     * Base description
     *
     * Note: The base diff content is only provided during
     * merge conflicts (three-way diff).
     */
    get base() {
        return this._base;
    }
    /**
     * Helper to check if the file has conflicts.
     */
    get hasConflict() {
        return this._base !== undefined;
    }
    /**
     * Boolean indicating whether the model has been disposed.
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Dispose of the model.
     */
    dispose() {
        if (this.isDisposed) {
            return;
        }
        this._isDisposed = true;
        Signal.clearData(this);
    }
}
//# sourceMappingURL=model.js.map