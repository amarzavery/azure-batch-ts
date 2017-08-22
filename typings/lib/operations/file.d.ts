import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to delete children of a
     * directory. If the filePath parameter represents a directory instead of a
     * file, you can set recursive to true to delete the directory and all of the
     * files and subdirectories in it. If recursive is false then the directory
     * must be empty or deletion will fail.
     *
     * @param {object} [options.fileDeleteFromTaskOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.fileDeleteFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileDeleteFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileDeleteFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileDeleteFromTaskOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: {
        recursive?: boolean;
        fileDeleteFromTaskOptions?: Models.FileDeleteFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetFromTaskOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.fileGetFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileGetFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileGetFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetFromTaskOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.fileGetFromTaskOptions.ocpRange] The byte range to
     * be retrieved. The default is to retrieve the entire file. The format is
     * bytes=startRange-endRange.
     *
     * @param {date} [options.fileGetFromTaskOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.fileGetFromTaskOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ReadableStream>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: {
        fileGetFromTaskOptions?: Models.FileGetFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetPropertiesFromTaskOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetPropertiesFromTaskOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.fileGetPropertiesFromTaskOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetPropertiesFromTaskOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPropertiesFromTaskWithHttpOperationResponse(jobId: string, taskId: string, filePath: string, options?: {
        fileGetPropertiesFromTaskOptions?: Models.FileGetPropertiesFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to delete children of a
     * directory. If the filePath parameter represents a directory instead of a
     * file, you can set recursive to true to delete the directory and all of the
     * files and subdirectories in it. If recursive is false then the directory
     * must be empty or deletion will fail.
     *
     * @param {object} [options.fileDeleteFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileDeleteFromComputeNodeOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.fileDeleteFromComputeNodeOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileDeleteFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileDeleteFromComputeNodeOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: {
        recursive?: boolean;
        fileDeleteFromComputeNodeOptions?: Models.FileDeleteFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetFromComputeNodeOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.fileGetFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.fileGetFromComputeNodeOptions.ocpRange] The byte
     * range to be retrieved. The default is to retrieve the entire file. The
     * format is bytes=startRange-endRange.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ReadableStream>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: {
        fileGetFromComputeNodeOptions?: Models.FileGetFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetPropertiesFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetPropertiesFromComputeNodeOptions.timeout]
     * The maximum time that the server can spend processing the request, in
     * seconds. The default is 30 seconds.
     *
     * @param {string}
     * [options.fileGetPropertiesFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetPropertiesFromComputeNodeOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetPropertiesFromComputeNodeOptions.ocpDate] The
     * time the request was issued. Client libraries typically set this to the
     * current system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {date}
     * [options.fileGetPropertiesFromComputeNodeOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date}
     * [options.fileGetPropertiesFromComputeNodeOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPropertiesFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, filePath: string, options?: {
        fileGetPropertiesFromComputeNodeOptions?: Models.FileGetPropertiesFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose files you want to list.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to list children of the task
     * directory. This parameter can be used in combination with the filter
     * parameter to list specific type of files.
     *
     * @param {object} [options.fileListFromTaskOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.fileListFromTaskOptions.filter] An OData $filter
     * clause.
     *
     * @param {number} [options.fileListFromTaskOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 files can be
     * returned.
     *
     * @param {number} [options.fileListFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileListFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileListFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromTaskOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<NodeFileListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromTaskWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        recursive?: boolean;
        fileListFromTaskOptions?: Models.FileListFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node whose files you want to
     * list.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to list children of a
     * directory.
     *
     * @param {object} [options.fileListFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.fileListFromComputeNodeOptions.filter] An OData
     * $filter clause.
     *
     * @param {number} [options.fileListFromComputeNodeOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 files
     * can be returned.
     *
     * @param {number} [options.fileListFromComputeNodeOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.fileListFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileListFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromComputeNodeOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<NodeFileListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromComputeNodeWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        recursive?: boolean;
        fileListFromComputeNodeOptions?: Models.FileListFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileListFromTaskNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.fileListFromTaskNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileListFromTaskNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromTaskNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<NodeFileListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromTaskNextWithHttpOperationResponse(nextPageLink: string, options?: {
        fileListFromTaskNextOptions?: Models.FileListFromTaskNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileListFromComputeNodeNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.fileListFromComputeNodeNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileListFromComputeNodeNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromComputeNodeNextOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<NodeFileListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromComputeNodeNextWithHttpOperationResponse(nextPageLink: string, options?: {
        fileListFromComputeNodeNextOptions?: Models.FileListFromComputeNodeNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to delete children of a
     * directory. If the filePath parameter represents a directory instead of a
     * file, you can set recursive to true to delete the directory and all of the
     * files and subdirectories in it. If recursive is false then the directory
     * must be empty or deletion will fail.
     *
     * @param {object} [options.fileDeleteFromTaskOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.fileDeleteFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileDeleteFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileDeleteFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileDeleteFromTaskOptions.ocpDate] The time the
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteFromTask(jobId: string, taskId: string, filePath: string): Promise<void>;
    deleteFromTask(jobId: string, taskId: string, filePath: string, options: {
        recursive?: boolean;
        fileDeleteFromTaskOptions?: Models.FileDeleteFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    deleteFromTask(jobId: string, taskId: string, filePath: string, options: {
        recursive?: boolean;
        fileDeleteFromTaskOptions?: Models.FileDeleteFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetFromTaskOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.fileGetFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileGetFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileGetFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetFromTaskOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.fileGetFromTaskOptions.ocpRange] The byte range to
     * be retrieved. The default is to retrieve the entire file. The format is
     * bytes=startRange-endRange.
     *
     * @param {date} [options.fileGetFromTaskOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.fileGetFromTaskOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
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
     *                      {ReadableStream} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getFromTask(jobId: string, taskId: string, filePath: string): Promise<ReadableStream>;
    getFromTask(jobId: string, taskId: string, filePath: string, options: {
        fileGetFromTaskOptions?: Models.FileGetFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<ReadableStream>;
    getFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<ReadableStream>): void;
    getFromTask(jobId: string, taskId: string, filePath: string, options: {
        fileGetFromTaskOptions?: Models.FileGetFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<ReadableStream>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetPropertiesFromTaskOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetPropertiesFromTaskOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.fileGetPropertiesFromTaskOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetPropertiesFromTaskOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.fileGetPropertiesFromTaskOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string): Promise<void>;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, options: {
        fileGetPropertiesFromTaskOptions?: Models.FileGetPropertiesFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    getPropertiesFromTask(jobId: string, taskId: string, filePath: string, options: {
        fileGetPropertiesFromTaskOptions?: Models.FileGetPropertiesFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to delete children of a
     * directory. If the filePath parameter represents a directory instead of a
     * file, you can set recursive to true to delete the directory and all of the
     * files and subdirectories in it. If recursive is false then the directory
     * must be empty or deletion will fail.
     *
     * @param {object} [options.fileDeleteFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileDeleteFromComputeNodeOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.fileDeleteFromComputeNodeOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileDeleteFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileDeleteFromComputeNodeOptions.ocpDate] The time
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<void>;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        recursive?: boolean;
        fileDeleteFromComputeNodeOptions?: Models.FileDeleteFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    deleteFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        recursive?: boolean;
        fileDeleteFromComputeNodeOptions?: Models.FileDeleteFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetFromComputeNodeOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.fileGetFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.fileGetFromComputeNodeOptions.ocpRange] The byte
     * range to be retrieved. The default is to retrieve the entire file. The
     * format is bytes=startRange-endRange.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.fileGetFromComputeNodeOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
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
     *                      {ReadableStream} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<ReadableStream>;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        fileGetFromComputeNodeOptions?: Models.FileGetFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<ReadableStream>;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<ReadableStream>): void;
    getFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        fileGetFromComputeNodeOptions?: Models.FileGetFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<ReadableStream>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileGetPropertiesFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.fileGetPropertiesFromComputeNodeOptions.timeout]
     * The maximum time that the server can spend processing the request, in
     * seconds. The default is 30 seconds.
     *
     * @param {string}
     * [options.fileGetPropertiesFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileGetPropertiesFromComputeNodeOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileGetPropertiesFromComputeNodeOptions.ocpDate] The
     * time the request was issued. Client libraries typically set this to the
     * current system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {date}
     * [options.fileGetPropertiesFromComputeNodeOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date}
     * [options.fileGetPropertiesFromComputeNodeOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string): Promise<void>;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        fileGetPropertiesFromComputeNodeOptions?: Models.FileGetPropertiesFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, callback: msRest.ServiceCallback<void>): void;
    getPropertiesFromComputeNode(poolId: string, nodeId: string, filePath: string, options: {
        fileGetPropertiesFromComputeNodeOptions?: Models.FileGetPropertiesFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task whose files you want to list.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to list children of the task
     * directory. This parameter can be used in combination with the filter
     * parameter to list specific type of files.
     *
     * @param {object} [options.fileListFromTaskOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.fileListFromTaskOptions.filter] An OData $filter
     * clause.
     *
     * @param {number} [options.fileListFromTaskOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 files can be
     * returned.
     *
     * @param {number} [options.fileListFromTaskOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.fileListFromTaskOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileListFromTaskOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromTaskOptions.ocpDate] The time the request
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
     *                      {NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link NodeFileListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromTask(jobId: string, taskId: string): Promise<Models.NodeFileListResult>;
    listFromTask(jobId: string, taskId: string, options: {
        recursive?: boolean;
        fileListFromTaskOptions?: Models.FileListFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.NodeFileListResult>;
    listFromTask(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromTask(jobId: string, taskId: string, options: {
        recursive?: boolean;
        fileListFromTaskOptions?: Models.FileListFromTaskOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node whose files you want to
     * list.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.recursive] Whether to list children of a
     * directory.
     *
     * @param {object} [options.fileListFromComputeNodeOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.fileListFromComputeNodeOptions.filter] An OData
     * $filter clause.
     *
     * @param {number} [options.fileListFromComputeNodeOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 files
     * can be returned.
     *
     * @param {number} [options.fileListFromComputeNodeOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.fileListFromComputeNodeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileListFromComputeNodeOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromComputeNodeOptions.ocpDate] The time the
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
     *                      {NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link NodeFileListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromComputeNode(poolId: string, nodeId: string): Promise<Models.NodeFileListResult>;
    listFromComputeNode(poolId: string, nodeId: string, options: {
        recursive?: boolean;
        fileListFromComputeNodeOptions?: Models.FileListFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.NodeFileListResult>;
    listFromComputeNode(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromComputeNode(poolId: string, nodeId: string, options: {
        recursive?: boolean;
        fileListFromComputeNodeOptions?: Models.FileListFromComputeNodeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists the files in a task's directory on its compute node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileListFromTaskNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.fileListFromTaskNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.fileListFromTaskNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromTaskNextOptions.ocpDate] The time the
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
     *                      {NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link NodeFileListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromTaskNext(nextPageLink: string): Promise<Models.NodeFileListResult>;
    listFromTaskNext(nextPageLink: string, options: {
        fileListFromTaskNextOptions?: Models.FileListFromTaskNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.NodeFileListResult>;
    listFromTaskNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromTaskNext(nextPageLink: string, options: {
        fileListFromTaskNextOptions?: Models.FileListFromTaskNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    /**
     * @summary Lists all of the files in task directories on the specified compute
     * node.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.fileListFromComputeNodeNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.fileListFromComputeNodeNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.fileListFromComputeNodeNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.fileListFromComputeNodeNextOptions.ocpDate] The time
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
     *                      {NodeFileListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link NodeFileListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromComputeNodeNext(nextPageLink: string): Promise<Models.NodeFileListResult>;
    listFromComputeNodeNext(nextPageLink: string, options: {
        fileListFromComputeNodeNextOptions?: Models.FileListFromComputeNodeNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.NodeFileListResult>;
    listFromComputeNodeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
    listFromComputeNodeNext(nextPageLink: string, options: {
        fileListFromComputeNodeNextOptions?: Models.FileListFromComputeNodeNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.NodeFileListResult>): void;
}
