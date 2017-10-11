import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
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
     * @param {ApplicationListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: Models.ApplicationListOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ApplicationGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(applicationId: string, options?: Models.ApplicationGetOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ApplicationListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.ApplicationListNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the applications available in the specified account.
     *
     * This operation returns only applications and versions that are available for
     * use on compute nodes; that is, that can be used in an application package
     * reference. For administrator information about applications and versions
     * that are not yet available to compute nodes, use the Azure portal or the
     * Azure Resource Manager API.
     *
     * @param {ApplicationListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ApplicationListResult>;
    list(options: Models.ApplicationListOptionalParams): Promise<Models.ApplicationListResult>;
    list(callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
    list(options: Models.ApplicationListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
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
     * @param {ApplicationGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationSummary} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationSummary} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(applicationId: string): Promise<Models.ApplicationSummary>;
    get(applicationId: string, options: Models.ApplicationGetOptionalParams): Promise<Models.ApplicationSummary>;
    get(applicationId: string, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
    get(applicationId: string, options: Models.ApplicationGetOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
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
     * @param {ApplicationListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ApplicationListResult>;
    listNext(nextPageLink: string, options: Models.ApplicationListNextOptionalParams): Promise<Models.ApplicationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
    listNext(nextPageLink: string, options: Models.ApplicationListNextOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
}
