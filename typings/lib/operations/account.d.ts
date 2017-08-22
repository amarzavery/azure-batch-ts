import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a Account. */
export declare class Account {
    private readonly client;
    /**
     * Create a Account.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
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
    listNodeAgentSkusWithHttpOperationResponse(options?: {
        accountListNodeAgentSkusOptions?: Models.AccountListNodeAgentSkusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
    listNodeAgentSkusNextWithHttpOperationResponse(nextPageLink: string, options?: {
        accountListNodeAgentSkusNextOptions?: Models.AccountListNodeAgentSkusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AccountListNodeAgentSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AccountListNodeAgentSkusResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNodeAgentSkus(): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkus(options: {
        accountListNodeAgentSkusOptions?: Models.AccountListNodeAgentSkusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkus(callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    listNodeAgentSkus(options: {
        accountListNodeAgentSkusOptions?: Models.AccountListNodeAgentSkusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
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
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AccountListNodeAgentSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AccountListNodeAgentSkusResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNodeAgentSkusNext(nextPageLink: string): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkusNext(nextPageLink: string, options: {
        accountListNodeAgentSkusNextOptions?: Models.AccountListNodeAgentSkusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    listNodeAgentSkusNext(nextPageLink: string, options: {
        accountListNodeAgentSkusNextOptions?: Models.AccountListNodeAgentSkusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
}
