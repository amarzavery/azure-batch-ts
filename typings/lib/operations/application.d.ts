import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a Application. */
export declare class Application {
    private readonly client;
    /**
     * Create a Application.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
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
    listWithHttpOperationResponse(options?: {
        applicationListOptions?: Models.ApplicationListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
    getWithHttpOperationResponse(applicationId: string, options?: {
        applicationGetOptions?: Models.ApplicationGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        applicationListNextOptions?: Models.ApplicationListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ApplicationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ApplicationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ApplicationListResult>;
    list(options: {
        applicationListOptions?: Models.ApplicationListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ApplicationListResult>;
    list(callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
    list(options: {
        applicationListOptions?: Models.ApplicationListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
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
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ApplicationSummary} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ApplicationSummary} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(applicationId: string): Promise<Models.ApplicationSummary>;
    get(applicationId: string, options: {
        applicationGetOptions?: Models.ApplicationGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ApplicationSummary>;
    get(applicationId: string, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
    get(applicationId: string, options: {
        applicationGetOptions?: Models.ApplicationGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
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
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ApplicationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ApplicationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ApplicationListResult>;
    listNext(nextPageLink: string, options: {
        applicationListNextOptions?: Models.ApplicationListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ApplicationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
    listNext(nextPageLink: string, options: {
        applicationListNextOptions?: Models.ApplicationListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
}
