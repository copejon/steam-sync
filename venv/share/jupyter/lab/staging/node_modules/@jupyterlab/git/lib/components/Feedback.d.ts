import { TranslationBundle } from '@jupyterlab/translation';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import * as React from 'react';
import { ILogMessage } from '../tokens';
export interface IFeedbackProps {
    /**
     * Alert
     */
    log: ILogMessage;
    /**
     * Extension settings
     */
    settings: ISettingRegistry.ISettings;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
export interface IFeedbackState {
    /**
     * Overlay visibility
     */
    blockUI: boolean;
    /**
     * Log message stack
     */
    logStack: ILogMessage[];
    /**
     * Last time the feedback message was changed
     */
    lastUpdate: number;
    /**
     * Alert visibility
     */
    showAlert: boolean;
}
/**
 * Component to handle logger user feedback
 */
export declare class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
    constructor(props: IFeedbackProps);
    static getDerivedStateFromProps(props: IFeedbackProps, state: IFeedbackState): IFeedbackState;
    render(): JSX.Element;
}
