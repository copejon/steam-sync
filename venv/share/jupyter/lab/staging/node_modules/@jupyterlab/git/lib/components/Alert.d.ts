import { TranslationBundle } from '@jupyterlab/translation';
import { Color } from '@material-ui/lab/Alert';
import * as React from 'react';
/**
 * Interface describing component properties.
 */
export interface IAlertProps {
    /**
     * Detailed message
     */
    details?: string;
    /**
     * Alert duration (in milliseconds).
     */
    duration?: number;
    /**
     * Error object
     */
    error?: Error;
    /**
     * Alert message.
     */
    message: string;
    /**
     * Boolean indicating whether to display an alert.
     */
    open: boolean;
    /**
     * Callback invoked upon clicking on an alert.
     */
    onClick?: (event?: any) => void;
    /**
     * Callback invoked upon closing an alert.
     */
    onClose: (event?: any) => void;
    /**
     * Alert severity.
     */
    severity?: Color;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
/**
 * React component for rendering an alert.
 */
export declare class Alert extends React.Component<IAlertProps> {
    /**
     * Returns a React component for rendering an alert.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props: IAlertProps);
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render(): React.ReactElement;
    /**
     * Callback invoked upon clicking on an alert.
     *
     * @param event - event object
     */
    private _onClick;
    /**
     * Callback invoked upon closing an alert.
     *
     * @param event - event object
     * @param reason - reason why the callback was invoked
     */
    private _onClose;
}
