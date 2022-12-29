import * as React from 'react';
import { classes } from 'typestyle';
import { actionButtonStyle } from '../style/ActionButtonStyle';
/**
 * Action button component
 *
 * @param props Component properties
 */
export const ActionButton = (props) => {
    const { disabled, className, title, onClick, icon } = props;
    return (React.createElement("button", { disabled: disabled, className: classes(actionButtonStyle, className), title: title, onClick: onClick },
        React.createElement(icon.react, { elementPosition: "center", tag: "span" })));
};
//# sourceMappingURL=ActionButton.js.map