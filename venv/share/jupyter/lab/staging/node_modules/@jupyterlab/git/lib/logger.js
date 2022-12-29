import * as React from 'react';
import { Signal } from '@lumino/signaling';
/**
 * Logger
 */
export class Logger {
    constructor() {
        this._signal = new Signal(this);
    }
    /**
     * Signal emitted when a log message is sent
     */
    get signal() {
        return this._signal;
    }
    /**
     * Send a log message.
     *
     * @param message Log message
     */
    log(message) {
        this._signal.emit(message);
    }
}
/**
 * Default logger
 */
export const logger = new Logger();
/**
 * Default logger context for React
 */
export const LoggerContext = React.createContext(logger);
//# sourceMappingURL=logger.js.map