var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { URLExt } from '@jupyterlab/coreutils';
import { ServerConnection } from '@jupyterlab/services';
import { Git } from './tokens';
/**
 * Array of Git Auth Error Messages
 */
export const AUTH_ERROR_MESSAGES = [
    'Invalid username or password',
    'could not read Username',
    'could not read Password'
];
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
export async function requestAPI(endPoint = '', method = 'GET', body = null, namespace = 'git') {
    // Make request to Jupyter API
    const settings = ServerConnection.makeSettings();
    const requestUrl = URLExt.join(settings.baseUrl, namespace, // API Namespace
    endPoint);
    const init = {
        method,
        body: body ? JSON.stringify(body) : undefined
    };
    let response;
    try {
        response = await ServerConnection.makeRequest(requestUrl, init, settings);
    }
    catch (error) {
        throw new ServerConnection.NetworkError(error);
    }
    let data = await response.text();
    let isJSON = false;
    if (data.length > 0) {
        try {
            data = JSON.parse(data);
            isJSON = true;
        }
        catch (error) {
            console.log('Not a JSON response body.', response);
        }
    }
    if (!response.ok) {
        if (isJSON) {
            const { message, traceback } = data, json = __rest(data, ["message", "traceback"]);
            throw new Git.GitResponseError(response, message ||
                `Invalid response: ${response.status} ${response.statusText}`, traceback || '', json);
        }
        else {
            throw new Git.GitResponseError(response, data);
        }
    }
    return data;
}
//# sourceMappingURL=git.js.map