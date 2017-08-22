"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-ts");
const Mappers = require("../models/mappers");
const WebResource = msRest.WebResource;
/** Class representing a Application. */
class Application {
    /**
     * Create a Application.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @summary Lists all of the applications available in the specified account.
     *
     * This operation returns only applications and versions that are available for
     * use on compute nodes; that is, that can be used in an application package
     * reference. For administrator information about applications and versions
     * that are not yet available to compute nodes, use the Azure portal or the
     * Azure Resource Manager API.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.applicationListOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.applicationListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 applications
     * can be returned.
     *
     * @param {number} [options.applicationListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.applicationListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.applicationListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.applicationListOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ApplicationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let applicationListOptions = (options && options.applicationListOptions !== undefined) ? options.applicationListOptions : undefined;
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
            let maxResults;
            let timeout;
            let clientRequestId;
            let returnClientRequestId;
            let ocpDate;
            try {
                if (applicationListOptions !== null && applicationListOptions !== undefined) {
                    maxResults = applicationListOptions.maxResults;
                    if (maxResults !== null && maxResults !== undefined && typeof maxResults !== 'number') {
                        throw new Error('maxResults must be of type number.');
                    }
                }
                if (applicationListOptions !== null && applicationListOptions !== undefined) {
                    timeout = applicationListOptions.timeout;
                    if (timeout !== null && timeout !== undefined && typeof timeout !== 'number') {
                        throw new Error('timeout must be of type number.');
                    }
                }
                if (applicationListOptions !== null && applicationListOptions !== undefined) {
                    clientRequestId = applicationListOptions.clientRequestId;
                    if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
                        throw new Error('clientRequestId must be of type string and must be a valid string.');
                    }
                }
                if (applicationListOptions !== null && applicationListOptions !== undefined) {
                    returnClientRequestId = applicationListOptions.returnClientRequestId;
                    if (returnClientRequestId !== null && returnClientRequestId !== undefined && typeof returnClientRequestId !== 'boolean') {
                        throw new Error('returnClientRequestId must be of type boolean.');
                    }
                }
                if (applicationListOptions !== null && applicationListOptions !== undefined) {
                    ocpDate = applicationListOptions.ocpDate;
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
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'applications';
            let queryParameters = [];
            queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
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
                            let resultMapper = Mappers.ApplicationListResult;
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
     * @summary Gets information about the specified application.
     *
     * This operation returns only applications and versions that are available for
     * use on compute nodes; that is, that can be used in an application package
     * reference. For administrator information about applications and versions
     * that are not yet available to compute nodes, use the Azure portal or the
     * Azure Resource Manager API.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.applicationGetOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.applicationGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.applicationGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.applicationGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.applicationGetOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ApplicationSummary>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(applicationId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let applicationGetOptions = (options && options.applicationGetOptions !== undefined) ? options.applicationGetOptions : undefined;
            // Validate
            try {
                if (applicationId === null || applicationId === undefined || typeof applicationId.valueOf() !== 'string') {
                    throw new Error('applicationId cannot be null or undefined and it must be of type string.');
                }
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
            let timeout;
            let clientRequestId;
            let returnClientRequestId;
            let ocpDate;
            try {
                if (applicationGetOptions !== null && applicationGetOptions !== undefined) {
                    timeout = applicationGetOptions.timeout;
                    if (timeout !== null && timeout !== undefined && typeof timeout !== 'number') {
                        throw new Error('timeout must be of type number.');
                    }
                }
                if (applicationGetOptions !== null && applicationGetOptions !== undefined) {
                    clientRequestId = applicationGetOptions.clientRequestId;
                    if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
                        throw new Error('clientRequestId must be of type string and must be a valid string.');
                    }
                }
                if (applicationGetOptions !== null && applicationGetOptions !== undefined) {
                    returnClientRequestId = applicationGetOptions.returnClientRequestId;
                    if (returnClientRequestId !== null && returnClientRequestId !== undefined && typeof returnClientRequestId !== 'boolean') {
                        throw new Error('returnClientRequestId must be of type boolean.');
                    }
                }
                if (applicationGetOptions !== null && applicationGetOptions !== undefined) {
                    ocpDate = applicationGetOptions.ocpDate;
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
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'applications/{applicationId}';
            requestUrl = requestUrl.replace('{applicationId}', encodeURIComponent(applicationId));
            let queryParameters = [];
            queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
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
                            let resultMapper = Mappers.ApplicationSummary;
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
     * @summary Lists all of the applications available in the specified account.
     *
     * This operation returns only applications and versions that are available for
     * use on compute nodes; that is, that can be used in an application package
     * reference. For administrator information about applications and versions
     * that are not yet available to compute nodes, use the Azure portal or the
     * Azure Resource Manager API.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.applicationListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.applicationListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.applicationListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.applicationListNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ApplicationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let applicationListNextOptions = (options && options.applicationListNextOptions !== undefined) ? options.applicationListNextOptions : undefined;
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
                if (applicationListNextOptions !== null && applicationListNextOptions !== undefined) {
                    clientRequestId = applicationListNextOptions.clientRequestId;
                    if (clientRequestId !== null && clientRequestId !== undefined && !(typeof clientRequestId.valueOf() === 'string' && msRest.isValidUuid(clientRequestId))) {
                        throw new Error('clientRequestId must be of type string and must be a valid string.');
                    }
                }
                if (applicationListNextOptions !== null && applicationListNextOptions !== undefined) {
                    returnClientRequestId = applicationListNextOptions.returnClientRequestId;
                    if (returnClientRequestId !== null && returnClientRequestId !== undefined && typeof returnClientRequestId !== 'boolean') {
                        throw new Error('returnClientRequestId must be of type boolean.');
                    }
                }
                if (applicationListNextOptions !== null && applicationListNextOptions !== undefined) {
                    ocpDate = applicationListNextOptions.ocpDate;
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
                            let resultMapper = Mappers.ApplicationListResult;
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
    list(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    get(applicationId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(applicationId, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getWithHttpOperationResponse(applicationId, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    listNext(nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.listNextWithHttpOperationResponse(nextPageLink, options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map