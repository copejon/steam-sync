import { TranslationBundle } from '@jupyterlab/translation';
import * as React from 'react';
import { Logger } from '../logger';
import { Git, IGitExtension } from '../tokens';
/**
 * Interface describing component properties.
 */
export interface IResetRevertDialogProps {
    /**
     * Type of action to perform.
     */
    action: 'reset' | 'revert';
    /**
     * Commit data for a single commit.
     */
    commit: Git.ISingleCommitInfo;
    /**
     * Extension data model.
     */
    model: IGitExtension;
    /**
     * Extension logger
     */
    logger: Logger;
    /**
     * Boolean indicating whether to show the dialog.
     */
    open: boolean;
    /**
     * Callback invoked upon closing the dialog.
     */
    onClose: () => void;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
/**
 * Interface describing component state.
 */
export interface IResetRevertDialogState {
    /**
     * Commit message summary.
     */
    summary: string;
    /**
     * Commit message description.
     */
    description: string;
    /**
     * Boolean indicating whether component buttons should be disabled.
     */
    disabled: boolean;
}
/**
 * React component for rendering a dialog for resetting or reverting a single commit.
 */
export declare class ResetRevertDialog extends React.Component<IResetRevertDialogProps, IResetRevertDialogState> {
    /**
     * Returns a React component for resetting or reverting a single commit.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: IResetRevertDialogProps);
    /**
     * Renders a dialog.
     *
     * @returns React element
     */
    render(): React.ReactElement;
    /**
     * Callback invoked upon updating a commit message summary.
     */
    private _onSummaryChange;
    /**
     * Callback invoked upon updating a commit message description.
     */
    private _onDescriptionChange;
    /**
     * Callback invoked upon clicking on a dialog.
     *
     * @param event - event object
     */
    private _onClick;
    /**
     * Callback invoked upon closing the dialog.
     *
     * @param event - event object
     */
    private _onClose;
    /**
     * Reset the current branch on the provided commit
     *
     * @param hash Git commit hash
     */
    private _resetCommit;
    /**
     * Revert the provided commit.
     *
     * @param hash Git commit hash
     */
    private _revertCommit;
    /**
     * Callback invoked upon clicking a button to reset or revert a commit.
     *
     * @param event - event object
     */
    private _onSubmit;
    /**
     * Returns a default commit summary for reverting a commit.
     *
     * @returns default commit summary
     */
    private _defaultSummary;
    /**
     * Returns a default commit description for reverting a commit.
     *
     * @returns default commit description
     */
    private _defaultDescription;
    /**
     * Returns a commit message for reverting a commit.
     *
     * @returns commit message
     */
    private _commitMessage;
    /**
     * Resets component state.
     */
    private _reset;
}
