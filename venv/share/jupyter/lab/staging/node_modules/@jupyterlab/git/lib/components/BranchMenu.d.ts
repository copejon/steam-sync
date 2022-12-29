import { TranslationBundle } from '@jupyterlab/translation';
import { CommandRegistry } from '@lumino/commands';
import * as React from 'react';
import { Logger } from '../logger';
import { Git, IGitExtension } from '../tokens';
/**
 * Interface describing component properties.
 */
export interface IBranchMenuProps {
    /**
     * Current branch name.
     */
    currentBranch: string;
    /**
     * Current list of branches.
     */
    branches: Git.IBranch[];
    /**
     * Boolean indicating whether branching is disabled.
     */
    branching: boolean;
    /**
     * Jupyter App commands registry
     */
    commands: CommandRegistry;
    /**
     * Extension logger
     */
    logger: Logger;
    /**
     * Git extension data model.
     */
    model: IGitExtension;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
/**
 * Interface describing component state.
 */
export interface IBranchMenuState {
    /**
     * Boolean indicating whether to show a dialog to create a new branch.
     */
    branchDialog: boolean;
    /**
     * Menu filter.
     */
    filter: string;
}
/**
 * React component for rendering a branch menu.
 */
export declare class BranchMenu extends React.Component<IBranchMenuProps, IBranchMenuState> {
    CHANGES_ERR_MSG: string;
    /**
     * Returns a React component for rendering a branch menu.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: IBranchMenuProps);
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render(): React.ReactElement;
    /**
     * Renders a branch input filter.
     *
     * @returns React element
     */
    private _renderFilter;
    /**
     * Renders a
     *
     * @returns React element
     */
    private _renderBranchList;
    /**
     * Renders a menu item.
     *
     * @param props Row properties
     * @returns React element
     */
    private _renderItem;
    /**
     * Renders a dialog for creating a new branch.
     *
     * @returns React element
     */
    private _renderNewBranchDialog;
    /**
     * Callback invoked upon a change to the menu filter.
     *
     * @param event - event object
     */
    private _onFilterChange;
    /**
     * Callback invoked to reset the menu filter.
     */
    private _resetFilter;
    /**
     * Callback on delete branch name button
     *
     * @param branchName Branch name
     */
    private _onDeleteBranch;
    /**
     * Callback on merge branch name button
     *
     * @param branchName Branch name
     */
    private _onMergeBranch;
    /**
     * Callback invoked upon clicking a button to create a new branch.
     *
     * @param event - event object
     */
    private _onNewBranchClick;
    /**
     * Callback invoked upon closing a dialog to create a new branch.
     */
    private _onNewBranchDialogClose;
    /**
     * Returns a callback which is invoked upon clicking a branch name.
     *
     * @param branch - branch name
     * @returns callback
     */
    private _onBranchClickFactory;
}
