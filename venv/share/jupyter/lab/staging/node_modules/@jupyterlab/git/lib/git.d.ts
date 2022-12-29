import { ReadonlyJSONObject } from '@lumino/coreutils';
/**
 * Array of Git Auth Error Messages
 */
export declare const AUTH_ERROR_MESSAGES: string[];
/**
 * Call the API extension
 *
 * @param endPoint API REST end point for the extension; default ''
 * @param method HTML method; default 'GET'
 * @param body JSON object to be passed as body or null; default null
 * @param namespace API namespace; default 'git'
 * @returns The response body interpreted as JSON
 *
 * @throws {Git.GitResponseError} If the server response is not ok
 * @throws {ServerConnection.NetworkError} If the request cannot be made
 */
export declare function requestAPI<T>(endPoint?: string, method?: string, body?: ReadonlyJSONObject | null, namespace?: string): Promise<T>;
