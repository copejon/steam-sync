import { fileIcon } from '@jupyterlab/ui-components';
import * as React from 'react';
import { fileIconStyle, fileLabelStyle, folderLabelStyle } from '../style/FilePathStyle';
import { extractFilename } from '../utils';
export const FilePath = (props) => {
    const filename = extractFilename(props.filepath);
    const folder = props.filepath
        .slice(0, props.filepath.length - filename.length)
        .replace(/^\/|\/$/g, ''); // Remove leading and trailing '/'
    const icon = props.filetype.icon || fileIcon;
    return (React.createElement(React.Fragment, null,
        React.createElement(icon.react, { className: fileIconStyle, elementPosition: "center", tag: "span" }),
        React.createElement("span", { className: fileLabelStyle },
            filename,
            React.createElement("span", { className: folderLabelStyle }, folder))));
};
//# sourceMappingURL=FilePath.js.map