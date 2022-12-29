import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ClearIcon from '@material-ui/icons/Clear';
import * as React from 'react';
import { classes } from 'typestyle';
import { actionsWrapperClass, buttonClass, cancelButtonClass, closeButtonClass, commitFormClass, contentWrapperClass, resetRevertDialogClass, submitButtonClass, titleClass, titleWrapperClass } from '../style/ResetRevertDialog';
import { Level } from '../tokens';
import { CommitMessage } from './CommitMessage';
/**
 * React component for rendering a dialog for resetting or reverting a single commit.
 */
export class ResetRevertDialog extends React.Component {
    /**
     * Returns a React component for resetting or reverting a single commit.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props) {
        super(props);
        /**
         * Callback invoked upon updating a commit message summary.
         */
        this._onSummaryChange = (summary) => {
            this.setState({
                summary
            });
        };
        /**
         * Callback invoked upon updating a commit message description.
         */
        this._onDescriptionChange = (description) => {
            this.setState({
                description
            });
        };
        /**
         * Callback invoked upon clicking on a dialog.
         *
         * @param event - event object
         */
        this._onClick = (event) => {
            event.stopPropagation();
        };
        /**
         * Callback invoked upon closing the dialog.
         *
         * @param event - event object
         */
        this._onClose = (event) => {
            event.stopPropagation();
            this.props.onClose();
            this._reset();
        };
        /**
         * Callback invoked upon clicking a button to reset or revert a commit.
         *
         * @param event - event object
         */
        this._onSubmit = async () => {
            this.setState({
                disabled: true
            });
            if (this.props.action === 'reset') {
                this._resetCommit(this.props.commit.commit);
            }
            else {
                this._revertCommit(this.props.commit.commit);
            }
            this._reset();
            this.props.onClose();
        };
        this.state = {
            summary: '',
            description: '',
            disabled: false
        };
    }
    /**
     * Renders a dialog.
     *
     * @returns React element
     */
    render() {
        const shortCommit = this.props.commit.commit.slice(0, 7);
        const isRevert = this.props.action === 'revert';
        return (React.createElement(Dialog, { classes: {
                paper: resetRevertDialogClass
            }, open: this.props.open, onClick: this._onClick, onClose: this._onClose },
            React.createElement("div", { className: titleWrapperClass },
                React.createElement("p", { className: titleClass }, isRevert
                    ? this.props.trans.__('Revert Changes')
                    : this.props.trans.__('Reset Changes')),
                React.createElement("button", { className: closeButtonClass },
                    React.createElement(ClearIcon, { titleAccess: this.props.trans.__('Close this dialog'), fontSize: "small", onClick: this._onClose }))),
            React.createElement("div", { className: contentWrapperClass },
                React.createElement("p", null, isRevert
                    ? this.props.trans.__("These changes will be reverted. Only commit if you're sure you're okay losing these changes.")
                    : this.props.trans.__('All changes after commit %1 will be gone forever (hard reset). Are you sure?', shortCommit)),
                isRevert && (React.createElement("div", { className: commitFormClass },
                    React.createElement(CommitMessage, { trans: this.props.trans, summary: this.state.summary, summaryPlaceholder: this._defaultSummary(), description: this.state.description, descriptionPlaceholder: this._defaultDescription(), setSummary: this._onSummaryChange, setDescription: this._onDescriptionChange })))),
            React.createElement(DialogActions, { className: actionsWrapperClass },
                React.createElement("input", { disabled: this.state.disabled, className: classes(buttonClass, cancelButtonClass), type: "button", title: this.props.trans.__('Cancel changes'), value: "Cancel", onClick: this._onClose }),
                React.createElement("input", { disabled: this.state.disabled, className: classes(buttonClass, submitButtonClass), type: "button", title: this.props.trans.__('Submit changes'), value: "Submit", onClick: this._onSubmit }))));
    }
    /**
     * Reset the current branch on the provided commit
     *
     * @param hash Git commit hash
     */
    async _resetCommit(hash) {
        this.props.logger.log({
            level: Level.RUNNING,
            message: this.props.trans.__('Discarding changes…')
        });
        try {
            await this.props.model.resetToCommit(hash);
            this.props.logger.log({
                level: Level.SUCCESS,
                message: this.props.trans.__('Successfully discarded changes.')
            });
        }
        catch (error) {
            this.props.logger.log({
                level: Level.ERROR,
                message: this.props.trans.__('Failed to discard changes.'),
                error: new Error(`Failed to discard changes after ${hash.slice(0, 7)}: ${error}`)
            });
        }
    }
    /**
     * Revert the provided commit.
     *
     * @param hash Git commit hash
     */
    async _revertCommit(hash) {
        this.props.logger.log({
            level: Level.RUNNING,
            message: this.props.trans.__('Reverting changes…')
        });
        try {
            await this.props.model.revertCommit(this._commitMessage(), hash);
            this.props.logger.log({
                level: Level.SUCCESS,
                message: this.props.trans.__('Successfully reverted changes.')
            });
        }
        catch (error) {
            this.props.logger.log({
                level: Level.ERROR,
                message: this.props.trans.__('Failed to revert changes.'),
                error: new Error(`Failed to revert ${hash.slice(0, 7)}: ${error}`)
            });
        }
    }
    /**
     * Returns a default commit summary for reverting a commit.
     *
     * @returns default commit summary
     */
    _defaultSummary() {
        const summary = this.props.commit.commit_msg.split('\n')[0];
        return this.props.trans.__("Revert '%1'", summary);
    }
    /**
     * Returns a default commit description for reverting a commit.
     *
     * @returns default commit description
     */
    _defaultDescription() {
        return this.props.trans.__('This reverts commit %1', this.props.commit.commit);
    }
    /**
     * Returns a commit message for reverting a commit.
     *
     * @returns commit message
     */
    _commitMessage() {
        const summary = this.state.summary || this._defaultSummary();
        const desc = this.state.description || this._defaultDescription();
        return summary + '\n\n' + desc + '\n';
    }
    /**
     * Resets component state.
     */
    _reset() {
        this.setState({
            summary: '',
            description: '',
            disabled: false
        });
    }
}
//# sourceMappingURL=ResetRevertDialog.js.map