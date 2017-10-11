import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
/** Class representing a Pool. */
export declare class Pool {
    private readonly client;
    /**
     * Create a Pool.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {PoolListUsageMetricsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listUsageMetricsWithHttpOperationResponse(options?: Models.PoolListUsageMetricsOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets lifetime summary statistics for all of the pools in the
     * specified account.
     *
     * Statistics are aggregated across all pools that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {PoolGetAllLifetimeStatisticsOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getAllLifetimeStatisticsWithHttpOperationResponse(options?: Models.PoolGetAllLifetimeStatisticsOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a pool to the specified account.
     *
     * When naming pools, avoid including sensitive information such as user names
     * or secret project names. This information may appear in telemetry logs
     * accessible to Microsoft Support engineers.
     *
     * @param {PoolAddParameter} pool The pool to be added.
     *
     * @param {PoolAddOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addWithHttpOperationResponse(pool: Models.PoolAddParameter, options?: Models.PoolAddOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {PoolListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: Models.PoolListOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes a pool from the specified account.
     *
     * When you request that a pool be deleted, the following actions occur: the
     * pool state is set to deleting; any ongoing resize operation on the pool are
     * stopped; the Batch service starts resizing the pool to zero nodes; any tasks
     * running on existing nodes are terminated and requeued (as if a resize pool
     * operation had been requested with the default requeue option); finally, the
     * pool is removed from the system. Because running tasks are requeued, the
     * user can rerun these tasks by updating their job to target a different pool.
     * The tasks can then run on the new pool. If you want to override the requeue
     * behavior, then you should call resize pool explicitly to shrink the pool to
     * zero size before deleting the pool. If you call an Update, Patch or Delete
     * API on a pool in the deleting state, it will fail with HTTP status code 409
     * with error code PoolBeingDeleted.
     *
     * @param {string} poolId The ID of the pool to delete.
     *
     * @param {PoolDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(poolId: string, options?: Models.PoolDeleteMethodOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets basic properties of a pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {PoolExistsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    existsWithHttpOperationResponse(poolId: string, options?: Models.PoolExistsOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {PoolGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(poolId: string, options?: Models.PoolGetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This only replaces the pool properties specified in the request. For
     * example, if the pool has a start task associated with it, and a request does
     * not specify a start task element, then the pool keeps the existing start
     * task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {PoolPatchParameter} poolPatchParameter The parameters for the
     * request.
     *
     * @param {PoolPatchOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    patchWithHttpOperationResponse(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options?: Models.PoolPatchOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Disables automatic scaling for a pool.
     *
     * @param {string} poolId The ID of the pool on which to disable automatic
     * scaling.
     *
     * @param {PoolDisableAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    disableAutoScaleWithHttpOperationResponse(poolId: string, options?: Models.PoolDisableAutoScaleOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Enables automatic scaling for a pool.
     *
     * You cannot enable automatic scaling on a pool if a resize operation is in
     * progress on the pool. If automatic scaling of the pool is currently
     * disabled, you must specify a valid autoscale formula as part of the request.
     * If automatic scaling of the pool is already enabled, you may specify a new
     * autoscale formula and/or a new evaluation interval. You cannot call this API
     * for the same pool more than once every 30 seconds.
     *
     * @param {string} poolId The ID of the pool on which to enable automatic
     * scaling.
     *
     * @param {PoolEnableAutoScaleParameter} poolEnableAutoScaleParameter The
     * parameters for the request.
     *
     * @param {PoolEnableAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    enableAutoScaleWithHttpOperationResponse(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options?: Models.PoolEnableAutoScaleOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets the result of evaluating an automatic scaling formula on the
     * pool.
     *
     * This API is primarily for validating an autoscale formula, as it simply
     * returns the result without applying the formula to the pool. The pool must
     * have auto scaling enabled in order to evaluate a formula.
     *
     * @param {string} poolId The ID of the pool on which to evaluate the automatic
     * scaling formula.
     *
     * @param {string} autoScaleFormula The formula for the desired number of
     * compute nodes in the pool. The formula is validated and its results
     * calculated, but it is not applied to the pool. To apply the formula to the
     * pool, 'Enable automatic scaling on a pool'. For more information about
     * specifying this formula, see Automatically scale compute nodes in an Azure
     * Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {PoolEvaluateAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    evaluateAutoScaleWithHttpOperationResponse(poolId: string, autoScaleFormula: string, options?: Models.PoolEvaluateAutoScaleOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Changes the number of compute nodes that are assigned to a pool.
     *
     * You can only resize a pool when its allocation state is steady. If the pool
     * is already resizing, the request fails with status code 409. When you resize
     * a pool, the pool's allocation state changes from steady to resizing. You
     * cannot resize pools which are configured for automatic scaling. If you try
     * to do this, the Batch service returns an error 409. If you resize a pool
     * downwards, the Batch service chooses which nodes to remove. To remove
     * specific nodes, use the pool remove nodes API instead.
     *
     * @param {string} poolId The ID of the pool to resize.
     *
     * @param {PoolResizeParameter} poolResizeParameter The parameters for the
     * request.
     *
     * @param {PoolResizeOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    resizeWithHttpOperationResponse(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options?: Models.PoolResizeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Stops an ongoing resize operation on the pool.
     *
     * This does not restore the pool to its previous state before the resize
     * operation: it only stops any further changes being made, and the pool
     * maintains its current state. After stopping, the pool stabilizes at the
     * number of nodes it was at when the stop operation was done. During the stop
     * operation, the pool allocation state changes first to stopping and then to
     * steady. A resize operation need not be an explicit resize pool request; this
     * API can also be used to halt the initial sizing of the pool when it is
     * created.
     *
     * @param {string} poolId The ID of the pool whose resizing you want to stop.
     *
     * @param {PoolStopResizeOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    stopResizeWithHttpOperationResponse(poolId: string, options?: Models.PoolStopResizeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This fully replaces all the updateable properties of the pool. For example,
     * if the pool has a start task associated with it and if start task is not
     * specified with this request, then the Batch service will remove the existing
     * start task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {PoolUpdatePropertiesParameter} poolUpdatePropertiesParameter The
     * parameters for the request.
     *
     * @param {PoolUpdatePropertiesOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updatePropertiesWithHttpOperationResponse(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options?: Models.PoolUpdatePropertiesOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Upgrades the operating system of the specified pool.
     *
     * During an upgrade, the Batch service upgrades each compute node in the pool.
     * When a compute node is chosen for upgrade, any tasks running on that node
     * are removed from the node and returned to the queue to be rerun later (or on
     * a different compute node). The node will be unavailable until the upgrade is
     * complete. This operation results in temporarily reduced pool capacity as
     * nodes are taken out of service to be upgraded. Although the Batch service
     * tries to avoid upgrading all compute nodes at the same time, it does not
     * guarantee to do this (particularly on small pools); therefore, the pool may
     * be temporarily unavailable to run tasks. When this operation runs, the pool
     * state changes to upgrading. When all compute nodes have finished upgrading,
     * the pool state returns to active. While the upgrade is in progress, the
     * pool's currentOSVersion reflects the OS version that nodes are upgrading
     * from, and targetOSVersion reflects the OS version that nodes are upgrading
     * to. Once the upgrade is complete, currentOSVersion is updated to reflect the
     * OS version now running on all nodes. This operation can only be invoked on
     * pools created with the cloudServiceConfiguration property.
     *
     * @param {string} poolId The ID of the pool to upgrade.
     *
     * @param {string} targetOSVersion The Azure Guest OS version to be installed
     * on the virtual machines in the pool.
     *
     * @param {PoolUpgradeOSOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    upgradeOSWithHttpOperationResponse(poolId: string, targetOSVersion: string, options?: Models.PoolUpgradeOSOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Removes compute nodes from the specified pool.
     *
     * This operation can only run when the allocation state of the pool is steady.
     * When this operation runs, the allocation state changes from steady to
     * resizing.
     *
     * @param {string} poolId The ID of the pool from which you want to remove
     * nodes.
     *
     * @param {NodeRemoveParameter} nodeRemoveParameter The parameters for the
     * request.
     *
     * @param {PoolRemoveNodesOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    removeNodesWithHttpOperationResponse(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options?: Models.PoolRemoveNodesOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {PoolListUsageMetricsNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listUsageMetricsNextWithHttpOperationResponse(nextPageLink: string, options?: Models.PoolListUsageMetricsNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {PoolListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.PoolListNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {PoolListUsageMetricsOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.PoolListUsageMetricsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PoolListUsageMetricsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsageMetrics(): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetrics(options: Models.PoolListUsageMetricsOptionalParams): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetrics(callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    listUsageMetrics(options: Models.PoolListUsageMetricsOptionalParams, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    /**
     * @summary Gets lifetime summary statistics for all of the pools in the
     * specified account.
     *
     * Statistics are aggregated across all pools that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {PoolGetAllLifetimeStatisticsOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.PoolStatistics} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PoolStatistics} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getAllLifetimeStatistics(): Promise<Models.PoolStatistics>;
    getAllLifetimeStatistics(options: Models.PoolGetAllLifetimeStatisticsOptionalParams): Promise<Models.PoolStatistics>;
    getAllLifetimeStatistics(callback: msRest.ServiceCallback<Models.PoolStatistics>): void;
    getAllLifetimeStatistics(options: Models.PoolGetAllLifetimeStatisticsOptionalParams, callback: msRest.ServiceCallback<Models.PoolStatistics>): void;
    /**
     * @summary Adds a pool to the specified account.
     *
     * When naming pools, avoid including sensitive information such as user names
     * or secret project names. This information may appear in telemetry logs
     * accessible to Microsoft Support engineers.
     *
     * @param {PoolAddParameter} pool The pool to be added.
     *
     * @param {PoolAddOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    add(pool: Models.PoolAddParameter): Promise<void>;
    add(pool: Models.PoolAddParameter, options: Models.PoolAddOptionalParams): Promise<void>;
    add(pool: Models.PoolAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(pool: Models.PoolAddParameter, options: Models.PoolAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {PoolListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudPoolListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudPoolListResult>;
    list(options: Models.PoolListOptionalParams): Promise<Models.CloudPoolListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    list(options: Models.PoolListOptionalParams, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    /**
     * @summary Deletes a pool from the specified account.
     *
     * When you request that a pool be deleted, the following actions occur: the
     * pool state is set to deleting; any ongoing resize operation on the pool are
     * stopped; the Batch service starts resizing the pool to zero nodes; any tasks
     * running on existing nodes are terminated and requeued (as if a resize pool
     * operation had been requested with the default requeue option); finally, the
     * pool is removed from the system. Because running tasks are requeued, the
     * user can rerun these tasks by updating their job to target a different pool.
     * The tasks can then run on the new pool. If you want to override the requeue
     * behavior, then you should call resize pool explicitly to shrink the pool to
     * zero size before deleting the pool. If you call an Update, Patch or Delete
     * API on a pool in the deleting state, it will fail with HTTP status code 409
     * with error code PoolBeingDeleted.
     *
     * @param {string} poolId The ID of the pool to delete.
     *
     * @param {PoolDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(poolId: string): Promise<void>;
    deleteMethod(poolId: string, options: Models.PoolDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(poolId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(poolId: string, options: Models.PoolDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets basic properties of a pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {PoolExistsOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {boolean} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    exists(poolId: string): Promise<boolean>;
    exists(poolId: string, options: Models.PoolExistsOptionalParams): Promise<boolean>;
    exists(poolId: string, callback: msRest.ServiceCallback<boolean>): void;
    exists(poolId: string, options: Models.PoolExistsOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * Gets information about the specified pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {PoolGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudPool} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudPool} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(poolId: string): Promise<Models.CloudPool>;
    get(poolId: string, options: Models.PoolGetOptionalParams): Promise<Models.CloudPool>;
    get(poolId: string, callback: msRest.ServiceCallback<Models.CloudPool>): void;
    get(poolId: string, options: Models.PoolGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudPool>): void;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This only replaces the pool properties specified in the request. For
     * example, if the pool has a start task associated with it, and a request does
     * not specify a start task element, then the pool keeps the existing start
     * task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {PoolPatchParameter} poolPatchParameter The parameters for the
     * request.
     *
     * @param {PoolPatchOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter): Promise<void>;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options: Models.PoolPatchOptionalParams): Promise<void>;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options: Models.PoolPatchOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables automatic scaling for a pool.
     *
     * @param {string} poolId The ID of the pool on which to disable automatic
     * scaling.
     *
     * @param {PoolDisableAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    disableAutoScale(poolId: string): Promise<void>;
    disableAutoScale(poolId: string, options: Models.PoolDisableAutoScaleOptionalParams): Promise<void>;
    disableAutoScale(poolId: string, callback: msRest.ServiceCallback<void>): void;
    disableAutoScale(poolId: string, options: Models.PoolDisableAutoScaleOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables automatic scaling for a pool.
     *
     * You cannot enable automatic scaling on a pool if a resize operation is in
     * progress on the pool. If automatic scaling of the pool is currently
     * disabled, you must specify a valid autoscale formula as part of the request.
     * If automatic scaling of the pool is already enabled, you may specify a new
     * autoscale formula and/or a new evaluation interval. You cannot call this API
     * for the same pool more than once every 30 seconds.
     *
     * @param {string} poolId The ID of the pool on which to enable automatic
     * scaling.
     *
     * @param {PoolEnableAutoScaleParameter} poolEnableAutoScaleParameter The
     * parameters for the request.
     *
     * @param {PoolEnableAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter): Promise<void>;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options: Models.PoolEnableAutoScaleOptionalParams): Promise<void>;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, callback: msRest.ServiceCallback<void>): void;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options: Models.PoolEnableAutoScaleOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets the result of evaluating an automatic scaling formula on the
     * pool.
     *
     * This API is primarily for validating an autoscale formula, as it simply
     * returns the result without applying the formula to the pool. The pool must
     * have auto scaling enabled in order to evaluate a formula.
     *
     * @param {string} poolId The ID of the pool on which to evaluate the automatic
     * scaling formula.
     *
     * @param {string} autoScaleFormula The formula for the desired number of
     * compute nodes in the pool. The formula is validated and its results
     * calculated, but it is not applied to the pool. To apply the formula to the
     * pool, 'Enable automatic scaling on a pool'. For more information about
     * specifying this formula, see Automatically scale compute nodes in an Azure
     * Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {PoolEvaluateAutoScaleOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.AutoScaleRun} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AutoScaleRun} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    evaluateAutoScale(poolId: string, autoScaleFormula: string): Promise<Models.AutoScaleRun>;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, options: Models.PoolEvaluateAutoScaleOptionalParams): Promise<Models.AutoScaleRun>;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, callback: msRest.ServiceCallback<Models.AutoScaleRun>): void;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, options: Models.PoolEvaluateAutoScaleOptionalParams, callback: msRest.ServiceCallback<Models.AutoScaleRun>): void;
    /**
     * @summary Changes the number of compute nodes that are assigned to a pool.
     *
     * You can only resize a pool when its allocation state is steady. If the pool
     * is already resizing, the request fails with status code 409. When you resize
     * a pool, the pool's allocation state changes from steady to resizing. You
     * cannot resize pools which are configured for automatic scaling. If you try
     * to do this, the Batch service returns an error 409. If you resize a pool
     * downwards, the Batch service chooses which nodes to remove. To remove
     * specific nodes, use the pool remove nodes API instead.
     *
     * @param {string} poolId The ID of the pool to resize.
     *
     * @param {PoolResizeParameter} poolResizeParameter The parameters for the
     * request.
     *
     * @param {PoolResizeOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter): Promise<void>;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options: Models.PoolResizeOptionalParams): Promise<void>;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, callback: msRest.ServiceCallback<void>): void;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options: Models.PoolResizeOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Stops an ongoing resize operation on the pool.
     *
     * This does not restore the pool to its previous state before the resize
     * operation: it only stops any further changes being made, and the pool
     * maintains its current state. After stopping, the pool stabilizes at the
     * number of nodes it was at when the stop operation was done. During the stop
     * operation, the pool allocation state changes first to stopping and then to
     * steady. A resize operation need not be an explicit resize pool request; this
     * API can also be used to halt the initial sizing of the pool when it is
     * created.
     *
     * @param {string} poolId The ID of the pool whose resizing you want to stop.
     *
     * @param {PoolStopResizeOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    stopResize(poolId: string): Promise<void>;
    stopResize(poolId: string, options: Models.PoolStopResizeOptionalParams): Promise<void>;
    stopResize(poolId: string, callback: msRest.ServiceCallback<void>): void;
    stopResize(poolId: string, options: Models.PoolStopResizeOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This fully replaces all the updateable properties of the pool. For example,
     * if the pool has a start task associated with it and if start task is not
     * specified with this request, then the Batch service will remove the existing
     * start task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {PoolUpdatePropertiesParameter} poolUpdatePropertiesParameter The
     * parameters for the request.
     *
     * @param {PoolUpdatePropertiesOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter): Promise<void>;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options: Models.PoolUpdatePropertiesOptionalParams): Promise<void>;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, callback: msRest.ServiceCallback<void>): void;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options: Models.PoolUpdatePropertiesOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Upgrades the operating system of the specified pool.
     *
     * During an upgrade, the Batch service upgrades each compute node in the pool.
     * When a compute node is chosen for upgrade, any tasks running on that node
     * are removed from the node and returned to the queue to be rerun later (or on
     * a different compute node). The node will be unavailable until the upgrade is
     * complete. This operation results in temporarily reduced pool capacity as
     * nodes are taken out of service to be upgraded. Although the Batch service
     * tries to avoid upgrading all compute nodes at the same time, it does not
     * guarantee to do this (particularly on small pools); therefore, the pool may
     * be temporarily unavailable to run tasks. When this operation runs, the pool
     * state changes to upgrading. When all compute nodes have finished upgrading,
     * the pool state returns to active. While the upgrade is in progress, the
     * pool's currentOSVersion reflects the OS version that nodes are upgrading
     * from, and targetOSVersion reflects the OS version that nodes are upgrading
     * to. Once the upgrade is complete, currentOSVersion is updated to reflect the
     * OS version now running on all nodes. This operation can only be invoked on
     * pools created with the cloudServiceConfiguration property.
     *
     * @param {string} poolId The ID of the pool to upgrade.
     *
     * @param {string} targetOSVersion The Azure Guest OS version to be installed
     * on the virtual machines in the pool.
     *
     * @param {PoolUpgradeOSOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    upgradeOS(poolId: string, targetOSVersion: string): Promise<void>;
    upgradeOS(poolId: string, targetOSVersion: string, options: Models.PoolUpgradeOSOptionalParams): Promise<void>;
    upgradeOS(poolId: string, targetOSVersion: string, callback: msRest.ServiceCallback<void>): void;
    upgradeOS(poolId: string, targetOSVersion: string, options: Models.PoolUpgradeOSOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Removes compute nodes from the specified pool.
     *
     * This operation can only run when the allocation state of the pool is steady.
     * When this operation runs, the allocation state changes from steady to
     * resizing.
     *
     * @param {string} poolId The ID of the pool from which you want to remove
     * nodes.
     *
     * @param {NodeRemoveParameter} nodeRemoveParameter The parameters for the
     * request.
     *
     * @param {PoolRemoveNodesOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter): Promise<void>;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options: Models.PoolRemoveNodesOptionalParams): Promise<void>;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, callback: msRest.ServiceCallback<void>): void;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options: Models.PoolRemoveNodesOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {PoolListUsageMetricsNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.PoolListUsageMetricsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PoolListUsageMetricsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsageMetricsNext(nextPageLink: string): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetricsNext(nextPageLink: string, options: Models.PoolListUsageMetricsNextOptionalParams): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    listUsageMetricsNext(nextPageLink: string, options: Models.PoolListUsageMetricsNextOptionalParams, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {PoolListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudPoolListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudPoolListResult>;
    listNext(nextPageLink: string, options: Models.PoolListNextOptionalParams): Promise<Models.CloudPoolListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    listNext(nextPageLink: string, options: Models.PoolListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
}
