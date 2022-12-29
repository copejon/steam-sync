import { TranslationBundle } from '@jupyterlab/translation';
import { IGitExtension } from '../tokens';
/**
 * Discard changes in all unstaged and staged files
 *
 * @param isFallback If dialog is called when the classical pull operation fails
 */
export declare function discardAllChanges(model: IGitExtension, trans: TranslationBundle, isFallback?: boolean): Promise<void>;
