import { Dialog, showDialog, showErrorMessage } from '@jupyterlab/apputils';
import { Button } from '@material-ui/core';
import Portal from '@material-ui/core/Portal';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import { default as MuiAlert } from '@material-ui/lab/Alert';
import * as React from 'react';
/**
 * Returns a React component for "sliding-in" an alert.
 *
 * @private
 * @param props - component properties
 * @returns React element
 */
function SlideTransition(props) {
    return React.createElement(Slide, Object.assign({}, props, { direction: "up" }));
}
/**
 * React component for rendering an alert.
 */
export class Alert extends React.Component {
    /**
     * Returns a React component for rendering an alert.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props) {
        super(props);
        /**
         * Callback invoked upon clicking on an alert.
         *
         * @param event - event object
         */
        this._onClick = (event) => {
            if (this.props.onClick) {
                this.props.onClick(event);
                return;
            }
            this._onClose(event, 'click');
        };
        /**
         * Callback invoked upon closing an alert.
         *
         * @param event - event object
         * @param reason - reason why the callback was invoked
         */
        this._onClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.props.onClose(event);
        };
    }
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render() {
        let duration = null;
        const severity = this.props.severity || 'info';
        if (severity === 'success') {
            duration = this.props.duration || 5000; // milliseconds
        }
        let action;
        if (this.props.error) {
            action = (React.createElement(Button, { color: "inherit", size: "small", onClick: () => {
                    showErrorMessage(this.props.trans.__('Error'), this.props.error, [
                        Dialog.warnButton({ label: this.props.trans.__('Dismiss') })
                    ]);
                } }, this.props.trans.__('Show')));
        }
        else if (this.props.details) {
            action = (React.createElement(Button, { color: "inherit", size: "small", onClick: () => {
                    showDialog({
                        title: this.props.trans.__('Detailed message'),
                        body: this.props.details,
                        buttons: [
                            Dialog.okButton({ label: this.props.trans.__('Dismiss') })
                        ]
                    });
                } }, this.props.trans.__('Details')));
        }
        return (React.createElement(Portal, null,
            React.createElement(Snackbar, { key: "git:alert", open: this.props.open, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                }, autoHideDuration: duration, TransitionComponent: SlideTransition, onClick: this._onClick, onClose: this._onClose },
                React.createElement(MuiAlert, { action: action, variant: "filled", severity: severity }, this.props.message || this.props.trans.__('(missing message)')))));
    }
}
//# sourceMappingURL=Alert.js.map