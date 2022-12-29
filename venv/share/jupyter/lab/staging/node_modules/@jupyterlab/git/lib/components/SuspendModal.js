import * as React from 'react';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fullscreenProgressClass } from '../style/SuspendModal';
/**
 * React component for rendering a modal blocking UI interaction.
 */
export class SuspendModal extends React.Component {
    /**
     * Returns a React component for rendering a modal.
     *
     * @param props - component properties
     * @returns React component
     */
    constructor(props) {
        super(props);
        /**
         * Callback invoked upon clicking on a feedback modal.
         *
         * @param event - event object
         */
        this._onClick = (event) => {
            this.props.onClick && this.props.onClick(event);
        };
    }
    /**
     * Renders the component.
     *
     * @returns React element
     */
    render() {
        return (React.createElement(Modal, { disableAutoFocus: true, disableEnforceFocus: true, open: this.props.open, onClick: this._onClick },
            React.createElement("div", { className: fullscreenProgressClass },
                React.createElement(CircularProgress, { color: "inherit" }))));
    }
}
//# sourceMappingURL=SuspendModal.js.map