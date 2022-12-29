import { LabIcon } from '@jupyterlab/ui-components';
import * as React from 'react';
/**
 * Action button properties interface
 */
export interface IActionButtonProps {
    /**
     * Customize class name
     */
    className?: string;
    /**
     * Is disabled?
     */
    disabled?: boolean;
    /**
     * Icon
     */
    icon: LabIcon;
    /**
     * Button title
     */
    title: string;
    /**
     * On-click event handler
     */
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * Action button component
 *
 * @param props Component properties
 */
export declare const ActionButton: React.FunctionComponent<IActionButtonProps>;
