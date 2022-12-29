import { CommandRegistry } from '@lumino/commands';
import * as React from 'react';
import { Logger } from '../logger';
import { Git, IGitExtension } from '../tokens';
import { TranslationBundle } from '@jupyterlab/translation';
/**
 * Interface describing  properties.
 */
export interface IToolbarProps {
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
     * Current branch name.
     */
    currentBranch: string;
    /**
     * Extension logger
     */
    logger: Logger;
    /**
     * Git extension data model.
     */
    model: IGitExtension;
    /**
     * Number of commits ahead
     */
    nCommitsAhead: number;
    /**
     * Number of commits behind
     */
    nCommitsBehind: number;
    /**
     * Current repository.
     */
    repository: string;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
/**
 * Interface describing component state.
 */
export interface IToolbarState {
    /**
     * Boolean indicating whether a branch menu is shown.
     */
    branchMenu: boolean;
    /**
     * Panel tab identifier.
     */
    tab: number;
}
/**
 * React component for rendering a panel toolbar.
 */
export declare class Toolbar extends React.Component<IToolbarProps, IToolbarState> {
    /**
     * Returns a React component for rendering a panel toolbar.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: IToolbarProps);
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render(): React.ReactElement;
    /**
     * Renders the top navigation.
     *
     * @returns React element
     */
    private _renderTopNav;
    /**
     * Renders a repository menu.
     *
     * @returns React element
     */
    private _renderRepoMenu;
    /**
     * Renders a branch menu.
     *
     * @returns React element
     */
    private _renderBranchMenu;
    private _renderTabs;
    private _renderBranches;
    private _renderTags;
    /**
     * Callback invoked upon clicking a button to pull the latest changes.
     *
     * @param event - event object
     * @returns a promise which resolves upon pulling the latest changes
     */
    private _onPullClick;
    /**
     * Callback invoked upon clicking a button to push the latest changes.
     *
     * @param event - event object
     * @returns a promise which resolves upon pushing the latest changes
     */
    private _onPushClick;
    /**
     * Callback invoked upon clicking a button to change the current branch.
     *
     * @param event - event object
     */
    private _onBranchClick;
    /**
     * Callback invoked upon clicking a button to refresh the model.
     *
     * @param event - event object
     * @returns a promise which resolves upon refreshing the model
     */
    private _onRefreshClick;
}
