/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as msRest from "ms-rest-ts";
import * as Mappers from "../models/mappers";
const WebResource = msRest.WebResource;
/** Class representing a Account. */
export class Account {
    /**
     * Create a Account.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @summary Lists all node agent SKUs supported by the Azure Batch service.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.accountListNodeAgentSkusOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.accountListNodeAgentSkusOptions.filter] An OData
     * $filter clause.
     *
     * @param {number} [options.accountListNodeAgentSkusOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 results
     * will be returned.
     *
     * @param {number} [options.accountListNodeAgentSkusOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.accountListNodeAgentSkusOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.accountListNodeAgentSkusOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.accountListNodeAgentSkusOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AccountListNodeAgentSkusResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNodeAgentSkusWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let accountListNodeAgentSkusOptions = (options && options.accountListNodeAgentSkusOptions !== undefined) ? options.accountListNodeAgentSkusOptions : undefined;
            // Validate
            try {
                if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                    throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            let filter;
            let maxResults;
            let timeout;
            let clientRequestId;
            let returnClientRequestId;
            let ocpDate;
            try {
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    filter = accountListNodeAgentSkusOptions.filter;
                    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
                        throw new Error('filter must be of type string.');
                    }
                }
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    maxResults = accountListNodeAgentSkusOptions.maxResults;
                    if (maxResults !== null && maxResults !== undefined && typeof maxResults !== 'number') {
                        throw new Error('maxResults must be of type number.');
                    }
                }
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    timeout = accountListNodeAgentSkusOptions.timeout;
                    if (timeout !== null && timeout !== undefined && typeof timeout !== 'number') {
                        throw new Error('timeout must be of type number.');
                    }
                }
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    clientRequestId = accountListNodeAgentSkusOptions.clientRequestId;
                    if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
                        throw new Error('clientRequestId must be of type string and must be a valid string.');
                    }
                }
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    returnClientRequestId = accountListNodeAgentSkusOptions.returnClientRequestId;
                    if (returnClientRequestId !== null && returnClientRequestId !== undefined && typeof returnClientRequestId !== 'boolean') {
                        throw new Error('returnClientRequestId must be of type boolean.');
                    }
                }
                if (accountListNodeAgentSkusOptions !== null && accountListNodeAgentSkusOptions !== undefined) {
                    ocpDate = accountListNodeAgentSkusOptions.ocpDate;
                    if (ocpDate && !(ocpDate instanceof Date ||
                        (typeof ocpDate.valueOf() === 'string' && !isNaN(Date.parse(ocpDate))))) {
                        throw new Error('ocpDate must be of type date.');
                    }
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'nodeagentskus';
            let queryParameters = [];
            queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
            if (filter !== null && filter !== undefined) {
                queryParameters.push('$filter=' + encodeURIComponent(filter));
            }
            if (maxResults !== null && maxResults !== undefined) {
                queryParameters.push('maxresults=' + encodeURIComponent(maxResults.toString()));
            }
            if (timeout !== null && timeout !== undefined) {
                queryParameters.push('timeout=' + encodeURIComponent(timeout.toString()));
            }
            if (queryParameters.length > 0) {
                requestUrl += '?' + queryParameters.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; odata=minimalmetadata; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                httpRequest.headers['client-request-id'] = clientRequestId.toString();
            }
            if (returnClientRequestId !== undefined && returnClientRequestId !== null) {
                httpRequest.headers['return-client-request-id'] = returnClientRequestId.toString();
            }
            if (ocpDate !== undefined && ocpDate !== null) {
                httpRequest.headers['ocp-date'] = ocpDate instanceof Date ? ocpDate.toUTCString() : ocpDate;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            httpRequest.body = null;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.BatchError;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.AccountListNodeAgentSkusResult;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * @summary Lists all node agent SKUs supported by the Azure Batch service.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.accountListNodeAgentSkusNextOptions] Additional
     * parameters for the operation
     *
     * @param {string}
     * [options.accountListNodeAgentSkusNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.accountListNodeAgentSkusNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.accountListNodeAgentSkusNextOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AccountListNodeAgentSkusResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNodeAgentSkusNextWithHttpOperationResponse(nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let accountListNodeAgentSkusNextOptions = (options && options.accountListNodeAgentSkusNextOptions !== undefined) ? options.accountListNodeAgentSkusNextOptions : undefined;
            // Validate
            try {
                if (nextPageLink === null || nextPageLink === undefined || typeof nextPageLink.valueOf() !== 'string') {
                    throw new Error('nextPageLink cannot be null or undefined and it must be of type string.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            let clientRequestId;
            let returnClientRequestId;
            let ocpDate;
            try {
                if (accountListNodeAgentSkusNextOptions !== null && accountListNodeAgentSkusNextOptions !== undefined) {
                    clientRequestId = accountListNodeAgentSkusNextOptions.clientRequestId;
                    if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
                        throw new Error('clientRequestId must be of type string and must be a valid string.');
                    }
                }
                if (accountListNodeAgentSkusNextOptions !== null && accountListNodeAgentSkusNextOptions !== undefined) {
                    returnClientRequestId = accountListNodeAgentSkusNextOptions.returnClientRequestId;
                    if (returnClientRequestId !== null && returnClientRequestId !== undefined && typeof returnClientRequestId !== 'boolean') {
                        throw new Error('returnClientRequestId must be of type boolean.');
                    }
                }
                if (accountListNodeAgentSkusNextOptions !== null && accountListNodeAgentSkusNextOptions !== undefined) {
                    ocpDate = accountListNodeAgentSkusNextOptions.ocpDate;
                    if (ocpDate && !(ocpDate instanceof Date ||
                        (typeof ocpDate.valueOf() === 'string' && !isNaN(Date.parse(ocpDate))))) {
                        throw new Error('ocpDate must be of type date.');
                    }
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let requestUrl = '{nextLink}';
            requestUrl = requestUrl.replace('{nextLink}', nextPageLink);
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; odata=minimalmetadata; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                httpRequest.headers['client-request-id'] = clientRequestId.toString();
            }
            if (returnClientRequestId !== undefined && returnClientRequestId !== null) {
                httpRequest.headers['return-client-request-id'] = returnClientRequestId.toString();
            }
            if (ocpDate !== undefined && ocpDate !== null) {
                httpRequest.headers['ocp-date'] = ocpDate instanceof Date ? ocpDate.toUTCString() : ocpDate;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            httpRequest.body = null;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.BatchError;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.AccountListNodeAgentSkusResult;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    listNodeAgentSkus(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.listNodeAgentSkusWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listNodeAgentSkusWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    listNodeAgentSkusNext(nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.listNodeAgentSkusNextWithHttpOperationResponse(nextPageLink, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listNodeAgentSkusNextWithHttpOperationResponse(nextPageLink, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
//# sourceMappingURL=account.js.map