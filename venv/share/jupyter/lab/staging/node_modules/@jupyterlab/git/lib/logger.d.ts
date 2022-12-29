import * as React from 'react';
import { ISignal } from '@lumino/signaling';
import { ILogMessage } from './tokens';
/**
 * Logger
 */
export declare class Logger {
    constructor();
    /**
     * Signal emitted when a log message is sent
     */
    get signal(): ISignal<Logger, ILogMessage>;
    /**
     * Send a log message.
     *
     * @param message Log message
     */
    log(message: ILogMessage): void;
    private _signal;
}
/**
 * Default logger
 */
export declare const logger: Logger;
/**
 * Default logger context for React
 */
export declare const LoggerContext: React.Context<Logger>;
