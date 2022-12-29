import { TranslationBundle } from '@jupyterlab/translation';
import * as React from 'react';
import { Logger } from '../logger';
import { IGitExtension } from '../tokens';
/**
 * Interface describing component properties.
 */
export interface ITagMenuProps {
    /**
     * Boolean indicating whether branching is disabled.
     */
    branching: boolean;
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
export interface ITagMenuState {
    /**
     * Menu filter.
     */
    filter: string;
    /**
     * Current list of tags.
     */
    tags: string[];
}
/**
 * React component for rendering a branch menu.
 */
export declare class TagMenu extends React.Component<ITagMenuProps, ITagMenuState> {
    /**
     * Returns a React component for rendering a branch menu.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: ITagMenuProps);
    componentDidMount(): void;
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
    private _renderTagList;
    /**
     * Renders a menu item.
     *
     * @param props Row properties
     * @returns React element
     */
    private _renderItem;
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
     * Returns a callback which is invoked upon clicking a tag.
     *
     * @param branch - tag
     * @returns callback
     */
    private _onTagClickFactory;
}
