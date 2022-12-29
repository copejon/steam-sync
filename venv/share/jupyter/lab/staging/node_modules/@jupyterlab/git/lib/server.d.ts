import { Git } from './tokens';
import { TranslationBundle } from '@jupyterlab/translation';
/**
 * Obtain the server settings or provide meaningful error message for the end user
 *
 * @returns The server settings
 *
 * @throws {ServerConnection.ResponseError} If the response was not ok
 * @throws {ServerConnection.NetworkError} If the request failed to reach the server
 */
export declare function getServerSettings(trans: TranslationBundle): Promise<Git.IServerSettings>;
