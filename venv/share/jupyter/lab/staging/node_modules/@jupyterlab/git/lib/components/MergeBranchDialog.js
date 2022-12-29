import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ListItem from '@material-ui/core/ListItem';
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react';
import { FixedSizeList } from 'react-window';
import { classes } from 'typestyle';
import { branchIcon } from '../style/icons';
import { actionsWrapperClass, activeListItemClass, branchDialogClass, buttonClass, cancelButtonClass, closeButtonClass, contentWrapperClass, createButtonClass, filterClass, filterClearClass, filterInputClass, filterWrapperClass, listItemClass, listItemContentClass, listItemIconClass, listItemTitleClass, listWrapperClass, titleClass, titleWrapperClass } from '../style/NewBranchDialog';
const ITEM_HEIGHT = 27.5; // HTML element height for a single branch
const HEIGHT = 200; // HTML element height for the branches list
/**
 * MergeBranchDialog React component
 *
 * @param props Component properties
 * @returns React element
 */
export function MergeBranchDialog(props) {
    const [filter, setFilter] = React.useState('');
    const [selectedBranch, setSelectedBranch] = React.useState(null);
    const branches = props.branches.filter(branch => !filter || branch.name.includes(filter));
    const { trans } = props;
    function renderItem(props) {
        const { data, index, style } = props;
        const branch = data[index];
        const isSelected = branch.name === selectedBranch;
        return (React.createElement(ListItem, { button: true, title: trans.__('Create a new branch based on: %1', branch.name), className: classes(listItemClass, isSelected ? activeListItemClass : null), onClick: () => {
                setSelectedBranch(branch.name);
            }, style: style },
            React.createElement(branchIcon.react, { className: listItemIconClass, tag: "span" }),
            React.createElement("div", { className: listItemContentClass },
                React.createElement("p", { className: listItemTitleClass }, branch.name))));
    }
    return (React.createElement(Dialog, { classes: {
            paper: branchDialogClass
        }, open: true, onClose: props.onClose },
        React.createElement("div", { className: titleWrapperClass },
            React.createElement("p", { className: titleClass }, trans.__('Merge Branch')),
            React.createElement("button", { className: closeButtonClass },
                React.createElement(ClearIcon, { titleAccess: trans.__('Close this dialog'), fontSize: "small", onClick: () => {
                        props.onClose();
                    } }))),
        React.createElement("div", { className: contentWrapperClass },
            React.createElement("p", null, trans.__('Select the branch to merge in %1', props.currentBranch)),
            React.createElement("div", { className: filterWrapperClass },
                React.createElement("div", { className: filterClass },
                    React.createElement("input", { className: filterInputClass, type: "text", onChange: event => {
                            setFilter(event.target.value);
                        }, value: filter, placeholder: trans.__('Filter'), title: trans.__('Filter branch list') }),
                    filter ? (React.createElement("button", { className: filterClearClass },
                        React.createElement(ClearIcon, { titleAccess: trans.__('Clear the current filter'), fontSize: "small", onClick: () => {
                                setFilter('');
                            } }))) : null)),
            React.createElement(FixedSizeList, { className: listWrapperClass, height: HEIGHT, itemSize: ITEM_HEIGHT, itemCount: branches.length, itemData: branches, itemKey: (index, data) => data[index].name, style: { overflowX: 'hidden' }, width: 'auto' }, renderItem)),
        React.createElement(DialogActions, { className: actionsWrapperClass },
            React.createElement("input", { className: classes(buttonClass, cancelButtonClass), type: "button", title: trans.__('Close this dialog without merging a branch'), value: trans.__('Cancel'), onClick: () => {
                    props.onClose();
                } }),
            React.createElement("input", { className: classes(buttonClass, createButtonClass), type: "button", title: trans.__('Merge branch'), value: trans.__('Merge'), onClick: () => {
                    props.onClose(selectedBranch);
                }, disabled: selectedBranch === null }))));
}
//# sourceMappingURL=MergeBranchDialog.js.map