import * as React from 'react';
import { Level } from '../tokens';
import { Alert } from './Alert';
import { SuspendModal } from './SuspendModal';
const LEVEL_TO_SEVERITY = new Map([
    [Level.ERROR, 'error'],
    [Level.WARNING, 'warning'],
    [Level.SUCCESS, 'success'],
    [Level.INFO, 'info'],
    [Level.RUNNING, 'info']
]);
const VISUAL_DELAY = 1000; // in ms
/**
 * Component to handle logger user feedback
 */
export class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockUI: false,
            lastUpdate: Date.now() - VISUAL_DELAY,
            logStack: [],
            showAlert: false
        };
    }
    static getDerivedStateFromProps(props, state) {
        const latestLog = state.logStack[state.logStack.length - 1];
        const now = Date.now();
        if (props.log !== latestLog) {
            if (now - state.lastUpdate > VISUAL_DELAY) {
                state.logStack.shift();
            }
            if (latestLog && props.log.level > latestLog.level) {
                // Higher level takes over
                state.logStack.splice(0, 1, props.log);
                state.lastUpdate = now;
            }
            else {
                state.logStack.push(props.log);
            }
            state.blockUI = props.settings.composite['blockWhileCommandExecutes'];
            state.showAlert = true;
        }
        return state;
    }
    render() {
        if (this.state.logStack.length > 1) {
            setTimeout(() => {
                if (this.state.logStack.length > 1) {
                    this.setState({
                        blockUI: this.props.settings.composite['blockWhileCommandExecutes'],
                        logStack: this.state.logStack.slice(1),
                        lastUpdate: Date.now(),
                        showAlert: true
                    });
                }
            }, VISUAL_DELAY);
        }
        const log = this.state.logStack[0];
        return (React.createElement(React.Fragment, null,
            React.createElement(SuspendModal, { open: this.state.blockUI &&
                    log.level === Level.RUNNING &&
                    this.state.showAlert, onClick: () => {
                    this.setState({ blockUI: false });
                } }),
            React.createElement(Alert, { details: log === null || log === void 0 ? void 0 : log.details, error: log === null || log === void 0 ? void 0 : log.error, open: this.state.showAlert, message: (log === null || log === void 0 ? void 0 : log.message) || this.props.log.message, severity: LEVEL_TO_SEVERITY.get((log === null || log === void 0 ? void 0 : log.level) || this.props.log.level), onClose: () => this.setState({ showAlert: false }), trans: this.props.trans })));
    }
}
//# sourceMappingURL=Feedback.js.map