import { DocumentRegistry } from '@jupyterlab/docregistry';
import * as React from 'react';
/**
 * FilePath component properties
 */
export interface IFilePathProps {
    /**
     * File path
     */
    filepath: string;
    /**
     * File type
     */
    filetype: DocumentRegistry.IFileType;
}
export declare const FilePath: React.FunctionComponent<IFilePathProps>;
