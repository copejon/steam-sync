/// <reference types="react" />
import { TranslationBundle } from '@jupyterlab/translation';
import { Git } from '../tokens';
/**
 * MergeBranchDialog component properties
 */
export interface IMergeBranchDialogProps {
    /**
     * Current branch name.
     */
    currentBranch: string;
    /**
     * Current list of local branches and without the current branch.
     */
    branches: Git.IBranch[];
    /**
     * Callback to invoke upon closing the dialog.
     */
    onClose(branch?: string): void;
    /**
     * The application language translator.
     */
    trans: TranslationBundle;
}
/**
 * MergeBranchDialog React component
 *
 * @param props Component properties
 * @returns React element
 */
export declare function MergeBranchDialog(props: IMergeBranchDialogProps): JSX.Element;
