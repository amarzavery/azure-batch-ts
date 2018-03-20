import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
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
     * @param {AccountListNodeAgentSkusOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNodeAgentSkusWithHttpOperationResponse(options?: Models.AccountListNodeAgentSkusOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the number of nodes in each state, grouped by pool.
     *
     * @param {AccountListPoolNodeCountsOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPoolNodeCountsWithHttpOperationResponse(options?: Models.AccountListPoolNodeCountsOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all node agent SKUs supported by the Azure Batch service.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {AccountListNodeAgentSkusNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNodeAgentSkusNextWithHttpOperationResponse(nextPageLink: string, options?: Models.AccountListNodeAgentSkusNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the number of nodes in each state, grouped by pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {AccountListPoolNodeCountsNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPoolNodeCountsNextWithHttpOperationResponse(nextPageLink: string, options?: Models.AccountListPoolNodeCountsNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all node agent SKUs supported by the Azure Batch service.
     *
     * @param {AccountListNodeAgentSkusOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.AccountListNodeAgentSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AccountListNodeAgentSkusResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNodeAgentSkus(): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkus(options: Models.AccountListNodeAgentSkusOptionalParams): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkus(callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    listNodeAgentSkus(options: Models.AccountListNodeAgentSkusOptionalParams, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    /**
     * Gets the number of nodes in each state, grouped by pool.
     *
     * @param {AccountListPoolNodeCountsOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.PoolNodeCountsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PoolNodeCountsListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listPoolNodeCounts(): Promise<Models.PoolNodeCountsListResult>;
    listPoolNodeCounts(options: Models.AccountListPoolNodeCountsOptionalParams): Promise<Models.PoolNodeCountsListResult>;
    listPoolNodeCounts(callback: msRest.ServiceCallback<Models.PoolNodeCountsListResult>): void;
    listPoolNodeCounts(options: Models.AccountListPoolNodeCountsOptionalParams, callback: msRest.ServiceCallback<Models.PoolNodeCountsListResult>): void;
    /**
     * @summary Lists all node agent SKUs supported by the Azure Batch service.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {AccountListNodeAgentSkusNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.AccountListNodeAgentSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AccountListNodeAgentSkusResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNodeAgentSkusNext(nextPageLink: string): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkusNext(nextPageLink: string, options: Models.AccountListNodeAgentSkusNextOptionalParams): Promise<Models.AccountListNodeAgentSkusResult>;
    listNodeAgentSkusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    listNodeAgentSkusNext(nextPageLink: string, options: Models.AccountListNodeAgentSkusNextOptionalParams, callback: msRest.ServiceCallback<Models.AccountListNodeAgentSkusResult>): void;
    /**
     * Gets the number of nodes in each state, grouped by pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {AccountListPoolNodeCountsNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.PoolNodeCountsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PoolNodeCountsListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listPoolNodeCountsNext(nextPageLink: string): Promise<Models.PoolNodeCountsListResult>;
    listPoolNodeCountsNext(nextPageLink: string, options: Models.AccountListPoolNodeCountsNextOptionalParams): Promise<Models.PoolNodeCountsListResult>;
    listPoolNodeCountsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PoolNodeCountsListResult>): void;
    listPoolNodeCountsNext(nextPageLink: string, options: Models.AccountListPoolNodeCountsNextOptionalParams, callback: msRest.ServiceCallback<Models.PoolNodeCountsListResult>): void;
}
