import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
/** Class representing a File. */
export declare class File {
    private readonly client;
    /**
     * Create a File.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Deletes the specified task file from the compute node where the
     * task ran.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to delete.
     *
     * @param {string} filePath The path to the task file or directory that you
     * want to delete.
     *
     * @param {FileDeleteFromTaskOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: Models.FileDeleteFromTaskOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Returns the content of the specified task file.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to retrieve.
     *
     * @param {string} filePath The path to the task file that you want to get the
     * content of.
     *
     * @param {FileGetFromTaskOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: Models.FileGetFromTaskOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the properties of the specified task file.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to get the
     * properties of.
     *
     * @param {string} filePath The path to the task file that you want to get the
     * properties of.
     *
     * @param {FileGetPropertiesFromTaskOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPropertiesFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: Models.FileGetPropertiesFromTaskOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes the specified file from the compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node from which you want to
     * delete the file.
     *
     * @param {string} filePath The path to the file or directory that you want to
     * delete.
     *
     * @param {FileDeleteFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: Models.FileDeleteFromComputeNodeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Returns the content of the specified compute node file.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that contains the file.
     *
     * @param {string} filePath The path to the compute node file that you want to
     * get the content of.
     *
     * @param {FileGetFromComputeNodeOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: Models.FileGetFromComputeNodeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the properties of the specified compute node file.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that contains the file.
     *
     * @param {string} filePath The path to the compute node file that you want to
     * get the properties of.
     *
     * @param {FileGetPropertiesFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPropertiesFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: Models.FileGetPropertiesFromComputeNodeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose files you want to list.
     *
     * @param {FileListFromTaskOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromTaskWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.FileListFromTaskOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node whose files you want to
     * list.
     *
     * @param {FileListFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.FileListFromComputeNodeOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {FileListFromTaskNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromTaskNextWithHttpOperationResponse(nextPageLink: string, options?: Models.FileListFromTaskNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {FileListFromComputeNodeNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromComputeNodeNextWithHttpOperationResponse(nextPageLink: string, options?: Models.FileListFromComputeNodeNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes the specified task file from the compute node where the
     * task ran.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to delete.
     *
     * @param {string} filePath The path to the task file or directory that you
     * want to delete.
     *
     * @param {FileDeleteFromTaskOptionalParams} [options] Optional Parameters.
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
    deleteFromTask(jobId: string, taskId: string, filePath: string): Promise<void>;
    deleteFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileDeleteFromTaskOptionalParams): Promise<void>;
    deleteFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    deleteFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileDeleteFromTaskOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns the content of the specified task file.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to retrieve.
     *
     * @param {string} filePath The path to the task file that you want to get the
     * content of.
     *
     * @param {FileGetFromTaskOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Response} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getFromTask(jobId: string, taskId: string, filePath: string): Promise<Response>;
    getFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileGetFromTaskOptionalParams): Promise<Response>;
    getFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<Response>): void;
    getFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileGetFromTaskOptionalParams, callback: msRest.ServiceCallback<Response>): void;
    /**
     * Gets the properties of the specified task file.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose file you want to get the
     * properties of.
     *
     * @param {string} filePath The path to the task file that you want to get the
     * properties of.
     *
     * @param {FileGetPropertiesFromTaskOptionalParams} [options] Optional
     * Parameters.
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
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string): Promise<void>;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileGetPropertiesFromTaskOptionalParams): Promise<void>;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, options: Models.FileGetPropertiesFromTaskOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Deletes the specified file from the compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node from which you want to
     * delete the file.
     *
     * @param {string} filePath The path to the file or directory that you want to
     * delete.
     *
     * @param {FileDeleteFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
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
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<void>;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileDeleteFromComputeNodeOptionalParams): Promise<void>;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileDeleteFromComputeNodeOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns the content of the specified compute node file.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that contains the file.
     *
     * @param {string} filePath The path to the compute node file that you want to
     * get the content of.
     *
     * @param {FileGetFromComputeNodeOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Response} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<Response>;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileGetFromComputeNodeOptionalParams): Promise<Response>;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<Response>): void;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileGetFromComputeNodeOptionalParams, callback: msRest.ServiceCallback<Response>): void;
    /**
     * Gets the properties of the specified compute node file.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that contains the file.
     *
     * @param {string} filePath The path to the compute node file that you want to
     * get the properties of.
     *
     * @param {FileGetPropertiesFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
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
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<void>;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileGetPropertiesFromComputeNodeOptionalParams): Promise<void>;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, options: Models.FileGetPropertiesFromComputeNodeOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose files you want to list.
     *
     * @param {FileListFromTaskOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NodeFileListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromTask(jobId: string, taskId: string): Promise<Models.NodeFileListResult>;
    listFromTask(jobId: string, taskId: string, options: Models.FileListFromTaskOptionalParams): Promise<Models.NodeFileListResult>;
    listFromTask(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromTask(jobId: string, taskId: string, options: Models.FileListFromTaskOptionalParams, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node whose files you want to
     * list.
     *
     * @param {FileListFromComputeNodeOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NodeFileListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromComputeNode(poolId: string, nodeId: string): Promise<Models.NodeFileListResult>;
    listFromComputeNode(poolId: string, nodeId: string, options: Models.FileListFromComputeNodeOptionalParams): Promise<Models.NodeFileListResult>;
    listFromComputeNode(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromComputeNode(poolId: string, nodeId: string, options: Models.FileListFromComputeNodeOptionalParams, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {FileListFromTaskNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NodeFileListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromTaskNext(nextPageLink: string): Promise<Models.NodeFileListResult>;
    listFromTaskNext(nextPageLink: string, options: Models.FileListFromTaskNextOptionalParams): Promise<Models.NodeFileListResult>;
    listFromTaskNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromTaskNext(nextPageLink: string, options: Models.FileListFromTaskNextOptionalParams, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {FileListFromComputeNodeNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NodeFileListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromComputeNodeNext(nextPageLink: string): Promise<Models.NodeFileListResult>;
    listFromComputeNodeNext(nextPageLink: string, options: Models.FileListFromComputeNodeNextOptionalParams): Promise<Models.NodeFileListResult>;
    listFromComputeNodeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromComputeNodeNext(nextPageLink: string, options: Models.FileListFromComputeNodeNextOptionalParams, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
}
