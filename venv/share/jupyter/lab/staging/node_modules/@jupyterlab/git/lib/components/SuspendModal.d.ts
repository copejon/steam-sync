import * as React from 'react';
/**
 * Interface describing component properties.
 */
export interface ISuspendModalProps {
    /**
     * Boolean indicating whether to display a modal blocking UI interaction.
     */
    open: boolean;
    /**
     * Callback invoked upon clicking on a modal.
     */
    onClick?: (event?: any) => void;
}
/**
 * React component for rendering a modal blocking UI interaction.
 */
export declare class SuspendModal extends React.Component<ISuspendModalProps> {
    /**
     * Returns a React component for rendering a modal.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: ISuspendModalProps);
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render(): React.ReactElement;
    /**
     * Callback invoked upon clicking on a feedback modal.
     *
     * @param event - event object
     */
    private _onClick;
}
