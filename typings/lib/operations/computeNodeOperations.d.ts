import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a ComputeNodeOperations. */
export declare class ComputeNodeOperations {
    private readonly client;
    /**
     * Create a ComputeNodeOperations.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Adds a user account to the specified compute node.
     *
     * You can add a user account to a node only when it is in the idle or running
     * state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to create a
     * user account.
     *
     * @param {object} user The user account to be created.
     *
     * @param {string} user.name The user name of the account.
     *
     * @param {boolean} [user.isAdmin] Whether the account should be an
     * administrator on the compute node. The default value is false.
     *
     * @param {date} [user.expiryTime] The time at which the account should expire.
     * If omitted, the default is 1 day from the current time. For Linux compute
     * nodes, the expiryTime has a precision up to a day.
     *
     * @param {string} [user.password] The password of the account. The password is
     * required for Windows nodes (those created with 'cloudServiceConfiguration',
     * or created with 'virtualMachineConfiguration' using a Windows image
     * reference). For Linux compute nodes, the password can optionally be
     * specified along with the sshPublicKey property.
     *
     * @param {string} [user.sshPublicKey] The SSH public key that can be used for
     * remote login to the compute node. The public key should be compatible with
     * OpenSSH encoding and should be base 64 encoded. This property can be
     * specified only for Linux nodes. If this is specified for a Windows node,
     * then the Batch service rejects the request; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeAddUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeAddUserOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeAddUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeAddUserOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeAddUserOptions.ocpDate] The time the
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
    addUserWithHttpOperationResponse(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options?: {
        computeNodeAddUserOptions?: Models.ComputeNodeAddUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes a user account from the specified compute node.
     *
     * You can delete a user account to a node only when it is in the idle or
     * running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to delete a
     * user account.
     *
     * @param {string} userName The name of the user account to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeDeleteUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeDeleteUserOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.computeNodeDeleteUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeDeleteUserOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeDeleteUserOptions.ocpDate] The time the
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
    deleteUserWithHttpOperationResponse(poolId: string, nodeId: string, userName: string, options?: {
        computeNodeDeleteUserOptions?: Models.ComputeNodeDeleteUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the password and expiration time of a user account on the
     * specified compute node.
     *
     * This operation replaces of all the updateable properties of the account. For
     * example, if the expiryTime element is not specified, the current value is
     * replaced with the default value, not left unmodified. You can update a user
     * account on a node only when it is in the idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to update a
     * user account.
     *
     * @param {string} userName The name of the user account to update.
     *
     * @param {object} nodeUpdateUserParameter The parameters for the request.
     *
     * @param {string} [nodeUpdateUserParameter.password] The password of the
     * account. The password is required for Windows nodes (those created with
     * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
     * using a Windows image reference). For Linux compute nodes, the password can
     * optionally be specified along with the sshPublicKey property. If omitted,
     * any existing password is removed.
     *
     * @param {date} [nodeUpdateUserParameter.expiryTime] The time at which the
     * account should expire. If omitted, the default is 1 day from the current
     * time. For Linux compute nodes, the expiryTime has a precision up to a day.
     *
     * @param {string} [nodeUpdateUserParameter.sshPublicKey] The SSH public key
     * that can be used for remote login to the compute node. The public key should
     * be compatible with OpenSSH encoding and should be base 64 encoded. This
     * property can be specified only for Linux nodes. If this is specified for a
     * Windows node, then the Batch service rejects the request; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request). If
     * omitted, any existing SSH public key is removed.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeUpdateUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeUpdateUserOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.computeNodeUpdateUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeUpdateUserOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeUpdateUserOptions.ocpDate] The time the
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
    updateUserWithHttpOperationResponse(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options?: {
        computeNodeUpdateUserOptions?: Models.ComputeNodeUpdateUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets information about the specified compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to get
     * information about.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.computeNodeGetOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.computeNodeGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ComputeNode>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        computeNodeGetOptions?: Models.ComputeNodeGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Restarts the specified compute node.
     *
     * You can restart a node only if it is in an idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeRebootOption] When to reboot the compute node
     * and what to do with currently running tasks. Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * will run again when a node is available. Restart the node as soon as tasks
     * have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Restart
     * the node as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Restart the node when all tasks have completed.
     * retaineddata - Allow currently running tasks to complete, then wait for all
     * task data retention periods to expire. Schedule no new tasks while waiting.
     * Restart the node when all task retention periods have expired.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options.computeNodeRebootOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.computeNodeRebootOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeRebootOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeRebootOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeRebootOptions.ocpDate] The time the
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
    rebootWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        nodeRebootOption?: string;
        computeNodeRebootOptions?: Models.ComputeNodeRebootOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Reinstalls the operating system on the specified compute node.
     *
     * You can reinstall the operating system on a node only if it is in an idle or
     * running state. This API can be invoked only on pools created with the cloud
     * service configuration property.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeReimageOption] When to reimage the compute node
     * and what to do with currently running tasks. Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * will run again when a node is available. Reimage the node as soon as tasks
     * have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Reimage
     * the node as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Reimage the node when all tasks have completed.
     * retaineddata - Allow currently running tasks to complete, then wait for all
     * task data retention periods to expire. Schedule no new tasks while waiting.
     * Reimage the node when all task retention periods have expired.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options.computeNodeReimageOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeReimageOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeReimageOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeReimageOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeReimageOptions.ocpDate] The time the
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
    reimageWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        nodeReimageOption?: string;
        computeNodeReimageOptions?: Models.ComputeNodeReimageOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Disables task scheduling on the specified compute node.
     *
     * You can disable task scheduling on a node only if its current scheduling
     * state is enabled.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node on which you want to
     * disable task scheduling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeDisableSchedulingOption] What to do with
     * currently running tasks when disabling task scheduling on the compute node.
     * Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * may run again on other compute nodes, or when task scheduling is re-enabled
     * on this node. Enter offline state as soon as tasks have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Enter
     * offline state as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Enter offline state when all tasks have completed.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion'
     *
     * @param {object} [options.computeNodeDisableSchedulingOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeDisableSchedulingOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string}
     * [options.computeNodeDisableSchedulingOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeDisableSchedulingOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeDisableSchedulingOptions.ocpDate] The time
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
    disableSchedulingWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        nodeDisableSchedulingOption?: string;
        computeNodeDisableSchedulingOptions?: Models.ComputeNodeDisableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Enables task scheduling on the specified compute node.
     *
     * You can enable task scheduling on a node only if its current scheduling
     * state is disabled
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node on which you want to
     * enable task scheduling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeEnableSchedulingOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeEnableSchedulingOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.computeNodeEnableSchedulingOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeEnableSchedulingOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeEnableSchedulingOptions.ocpDate] The time
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
    enableSchedulingWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        computeNodeEnableSchedulingOptions?: Models.ComputeNodeEnableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets the settings required for remote login to a compute node.
     *
     * Before you can remotely login to a node using the remote login settings, you
     * must create a user account on the node. This API can be invoked only on
     * pools created with the virtual machine configuration property. For pools
     * created with a cloud service configuration, see the GetRemoteDesktop API.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node for which to obtain the
     * remote login settings.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetRemoteLoginSettingsOptions]
     * Additional parameters for the operation
     *
     * @param {number} [options.computeNodeGetRemoteLoginSettingsOptions.timeout]
     * The maximum time that the server can spend processing the request, in
     * seconds. The default is 30 seconds.
     *
     * @param {string}
     * [options.computeNodeGetRemoteLoginSettingsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeGetRemoteLoginSettingsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetRemoteLoginSettingsOptions.ocpDate] The
     * time the request was issued. Client libraries typically set this to the
     * current system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ComputeNodeGetRemoteLoginSettingsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getRemoteLoginSettingsWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        computeNodeGetRemoteLoginSettingsOptions?: Models.ComputeNodeGetRemoteLoginSettingsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets the Remote Desktop Protocol file for the specified compute
     * node.
     *
     * Before you can access a node by using the RDP file, you must create a user
     * account on the node. This API can only be invoked on pools created with a
     * cloud service configuration. For pools created with a virtual machine
     * configuration, see the GetRemoteLoginSettings API.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node for which you want to get
     * the Remote Desktop Protocol file.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetRemoteDesktopOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeGetRemoteDesktopOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.computeNodeGetRemoteDesktopOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeGetRemoteDesktopOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetRemoteDesktopOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
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
    getRemoteDesktopWithHttpOperationResponse(poolId: string, nodeId: string, options?: {
        computeNodeGetRemoteDesktopOptions?: Models.ComputeNodeGetRemoteDesktopOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} poolId The ID of the pool from which you want to list nodes.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.computeNodeListOptions.filter] An OData $filter
     * clause..
     *
     * @param {string} [options.computeNodeListOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.computeNodeListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 nodes can be
     * returned.
     *
     * @param {number} [options.computeNodeListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeListOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ComputeNodeListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(poolId: string, options?: {
        computeNodeListOptions?: Models.ComputeNodeListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.computeNodeListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeListNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ComputeNodeListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        computeNodeListNextOptions?: Models.ComputeNodeListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a user account to the specified compute node.
     *
     * You can add a user account to a node only when it is in the idle or running
     * state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to create a
     * user account.
     *
     * @param {object} user The user account to be created.
     *
     * @param {string} user.name The user name of the account.
     *
     * @param {boolean} [user.isAdmin] Whether the account should be an
     * administrator on the compute node. The default value is false.
     *
     * @param {date} [user.expiryTime] The time at which the account should expire.
     * If omitted, the default is 1 day from the current time. For Linux compute
     * nodes, the expiryTime has a precision up to a day.
     *
     * @param {string} [user.password] The password of the account. The password is
     * required for Windows nodes (those created with 'cloudServiceConfiguration',
     * or created with 'virtualMachineConfiguration' using a Windows image
     * reference). For Linux compute nodes, the password can optionally be
     * specified along with the sshPublicKey property.
     *
     * @param {string} [user.sshPublicKey] The SSH public key that can be used for
     * remote login to the compute node. The public key should be compatible with
     * OpenSSH encoding and should be base 64 encoded. This property can be
     * specified only for Linux nodes. If this is specified for a Windows node,
     * then the Batch service rejects the request; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeAddUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeAddUserOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeAddUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeAddUserOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeAddUserOptions.ocpDate] The time the
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
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser): Promise<void>;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options: {
        computeNodeAddUserOptions?: Models.ComputeNodeAddUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, callback: msRest.ServiceCallback<void>): void;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options: {
        computeNodeAddUserOptions?: Models.ComputeNodeAddUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Deletes a user account from the specified compute node.
     *
     * You can delete a user account to a node only when it is in the idle or
     * running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to delete a
     * user account.
     *
     * @param {string} userName The name of the user account to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeDeleteUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeDeleteUserOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.computeNodeDeleteUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeDeleteUserOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeDeleteUserOptions.ocpDate] The time the
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
    deleteUser(poolId: string, nodeId: string, userName: string): Promise<void>;
    deleteUser(poolId: string, nodeId: string, userName: string, options: {
        computeNodeDeleteUserOptions?: Models.ComputeNodeDeleteUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteUser(poolId: string, nodeId: string, userName: string, callback: msRest.ServiceCallback<void>): void;
    deleteUser(poolId: string, nodeId: string, userName: string, options: {
        computeNodeDeleteUserOptions?: Models.ComputeNodeDeleteUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates the password and expiration time of a user account on the
     * specified compute node.
     *
     * This operation replaces of all the updateable properties of the account. For
     * example, if the expiryTime element is not specified, the current value is
     * replaced with the default value, not left unmodified. You can update a user
     * account on a node only when it is in the idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the machine on which you want to update a
     * user account.
     *
     * @param {string} userName The name of the user account to update.
     *
     * @param {object} nodeUpdateUserParameter The parameters for the request.
     *
     * @param {string} [nodeUpdateUserParameter.password] The password of the
     * account. The password is required for Windows nodes (those created with
     * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
     * using a Windows image reference). For Linux compute nodes, the password can
     * optionally be specified along with the sshPublicKey property. If omitted,
     * any existing password is removed.
     *
     * @param {date} [nodeUpdateUserParameter.expiryTime] The time at which the
     * account should expire. If omitted, the default is 1 day from the current
     * time. For Linux compute nodes, the expiryTime has a precision up to a day.
     *
     * @param {string} [nodeUpdateUserParameter.sshPublicKey] The SSH public key
     * that can be used for remote login to the compute node. The public key should
     * be compatible with OpenSSH encoding and should be base 64 encoded. This
     * property can be specified only for Linux nodes. If this is specified for a
     * Windows node, then the Batch service rejects the request; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request). If
     * omitted, any existing SSH public key is removed.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeUpdateUserOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeUpdateUserOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.computeNodeUpdateUserOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeUpdateUserOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeUpdateUserOptions.ocpDate] The time the
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
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter): Promise<void>;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options: {
        computeNodeUpdateUserOptions?: Models.ComputeNodeUpdateUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, callback: msRest.ServiceCallback<void>): void;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options: {
        computeNodeUpdateUserOptions?: Models.ComputeNodeUpdateUserOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets information about the specified compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to get
     * information about.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.computeNodeGetOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.computeNodeGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetOptions.ocpDate] The time the request
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
     *                      {ComputeNode} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ComputeNode} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(poolId: string, nodeId: string): Promise<Models.ComputeNode>;
    get(poolId: string, nodeId: string, options: {
        computeNodeGetOptions?: Models.ComputeNodeGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ComputeNode>;
    get(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
    get(poolId: string, nodeId: string, options: {
        computeNodeGetOptions?: Models.ComputeNodeGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
    /**
     * @summary Restarts the specified compute node.
     *
     * You can restart a node only if it is in an idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeRebootOption] When to reboot the compute node
     * and what to do with currently running tasks. Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * will run again when a node is available. Restart the node as soon as tasks
     * have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Restart
     * the node as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Restart the node when all tasks have completed.
     * retaineddata - Allow currently running tasks to complete, then wait for all
     * task data retention periods to expire. Schedule no new tasks while waiting.
     * Restart the node when all task retention periods have expired.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options.computeNodeRebootOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.computeNodeRebootOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeRebootOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeRebootOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeRebootOptions.ocpDate] The time the
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
    reboot(poolId: string, nodeId: string): Promise<void>;
    reboot(poolId: string, nodeId: string, options: {
        nodeRebootOption?: string;
        computeNodeRebootOptions?: Models.ComputeNodeRebootOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    reboot(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    reboot(poolId: string, nodeId: string, options: {
        nodeRebootOption?: string;
        computeNodeRebootOptions?: Models.ComputeNodeRebootOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Reinstalls the operating system on the specified compute node.
     *
     * You can reinstall the operating system on a node only if it is in an idle or
     * running state. This API can be invoked only on pools created with the cloud
     * service configuration property.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeReimageOption] When to reimage the compute node
     * and what to do with currently running tasks. Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * will run again when a node is available. Reimage the node as soon as tasks
     * have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Reimage
     * the node as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Reimage the node when all tasks have completed.
     * retaineddata - Allow currently running tasks to complete, then wait for all
     * task data retention periods to expire. Schedule no new tasks while waiting.
     * Reimage the node when all task retention periods have expired.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options.computeNodeReimageOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.computeNodeReimageOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeReimageOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeReimageOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeReimageOptions.ocpDate] The time the
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
    reimage(poolId: string, nodeId: string): Promise<void>;
    reimage(poolId: string, nodeId: string, options: {
        nodeReimageOption?: string;
        computeNodeReimageOptions?: Models.ComputeNodeReimageOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    reimage(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    reimage(poolId: string, nodeId: string, options: {
        nodeReimageOption?: string;
        computeNodeReimageOptions?: Models.ComputeNodeReimageOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables task scheduling on the specified compute node.
     *
     * You can disable task scheduling on a node only if its current scheduling
     * state is enabled.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node on which you want to
     * disable task scheduling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.nodeDisableSchedulingOption] What to do with
     * currently running tasks when disabling task scheduling on the compute node.
     * Values are:
     *
     * requeue - Terminate running task processes and requeue the tasks. The tasks
     * may run again on other compute nodes, or when task scheduling is re-enabled
     * on this node. Enter offline state as soon as tasks have been terminated.
     * terminate - Terminate running tasks. The tasks will not run again. Enter
     * offline state as soon as tasks have been terminated.
     * taskcompletion - Allow currently running tasks to complete. Schedule no new
     * tasks while waiting. Enter offline state when all tasks have completed.
     *
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion'
     *
     * @param {object} [options.computeNodeDisableSchedulingOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeDisableSchedulingOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string}
     * [options.computeNodeDisableSchedulingOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeDisableSchedulingOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeDisableSchedulingOptions.ocpDate] The time
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
    disableScheduling(poolId: string, nodeId: string): Promise<void>;
    disableScheduling(poolId: string, nodeId: string, options: {
        nodeDisableSchedulingOption?: string;
        computeNodeDisableSchedulingOptions?: Models.ComputeNodeDisableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    disableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    disableScheduling(poolId: string, nodeId: string, options: {
        nodeDisableSchedulingOption?: string;
        computeNodeDisableSchedulingOptions?: Models.ComputeNodeDisableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables task scheduling on the specified compute node.
     *
     * You can enable task scheduling on a node only if its current scheduling
     * state is disabled
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node on which you want to
     * enable task scheduling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeEnableSchedulingOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeEnableSchedulingOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.computeNodeEnableSchedulingOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeEnableSchedulingOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeEnableSchedulingOptions.ocpDate] The time
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
    enableScheduling(poolId: string, nodeId: string): Promise<void>;
    enableScheduling(poolId: string, nodeId: string, options: {
        computeNodeEnableSchedulingOptions?: Models.ComputeNodeEnableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    enableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    enableScheduling(poolId: string, nodeId: string, options: {
        computeNodeEnableSchedulingOptions?: Models.ComputeNodeEnableSchedulingOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets the settings required for remote login to a compute node.
     *
     * Before you can remotely login to a node using the remote login settings, you
     * must create a user account on the node. This API can be invoked only on
     * pools created with the virtual machine configuration property. For pools
     * created with a cloud service configuration, see the GetRemoteDesktop API.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node for which to obtain the
     * remote login settings.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetRemoteLoginSettingsOptions]
     * Additional parameters for the operation
     *
     * @param {number} [options.computeNodeGetRemoteLoginSettingsOptions.timeout]
     * The maximum time that the server can spend processing the request, in
     * seconds. The default is 30 seconds.
     *
     * @param {string}
     * [options.computeNodeGetRemoteLoginSettingsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeGetRemoteLoginSettingsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetRemoteLoginSettingsOptions.ocpDate] The
     * time the request was issued. Client libraries typically set this to the
     * current system clock time; set it explicitly if you are calling the REST API
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
     *                      {ComputeNodeGetRemoteLoginSettingsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ComputeNodeGetRemoteLoginSettingsResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getRemoteLoginSettings(poolId: string, nodeId: string): Promise<Models.ComputeNodeGetRemoteLoginSettingsResult>;
    getRemoteLoginSettings(poolId: string, nodeId: string, options: {
        computeNodeGetRemoteLoginSettingsOptions?: Models.ComputeNodeGetRemoteLoginSettingsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ComputeNodeGetRemoteLoginSettingsResult>;
    getRemoteLoginSettings(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
    getRemoteLoginSettings(poolId: string, nodeId: string, options: {
        computeNodeGetRemoteLoginSettingsOptions?: Models.ComputeNodeGetRemoteLoginSettingsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
    /**
     * @summary Gets the Remote Desktop Protocol file for the specified compute
     * node.
     *
     * Before you can access a node by using the RDP file, you must create a user
     * account on the node. This API can only be invoked on pools created with a
     * cloud service configuration. For pools created with a virtual machine
     * configuration, see the GetRemoteLoginSettings API.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node for which you want to get
     * the Remote Desktop Protocol file.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeGetRemoteDesktopOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.computeNodeGetRemoteDesktopOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.computeNodeGetRemoteDesktopOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.computeNodeGetRemoteDesktopOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeGetRemoteDesktopOptions.ocpDate] The time
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
     *                      {ReadableStream} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getRemoteDesktop(poolId: string, nodeId: string): Promise<ReadableStream>;
    getRemoteDesktop(poolId: string, nodeId: string, options: {
        computeNodeGetRemoteDesktopOptions?: Models.ComputeNodeGetRemoteDesktopOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<ReadableStream>;
    getRemoteDesktop(poolId: string, nodeId: string, callback: msRest.ServiceCallback<ReadableStream>): void;
    getRemoteDesktop(poolId: string, nodeId: string, options: {
        computeNodeGetRemoteDesktopOptions?: Models.ComputeNodeGetRemoteDesktopOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<ReadableStream>): void;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} poolId The ID of the pool from which you want to list nodes.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.computeNodeListOptions.filter] An OData $filter
     * clause..
     *
     * @param {string} [options.computeNodeListOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.computeNodeListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 nodes can be
     * returned.
     *
     * @param {number} [options.computeNodeListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.computeNodeListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeListOptions.ocpDate] The time the request
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
     *                      {ComputeNodeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ComputeNodeListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(poolId: string): Promise<Models.ComputeNodeListResult>;
    list(poolId: string, options: {
        computeNodeListOptions?: Models.ComputeNodeListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ComputeNodeListResult>;
    list(poolId: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    list(poolId: string, options: {
        computeNodeListOptions?: Models.ComputeNodeListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.computeNodeListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.computeNodeListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.computeNodeListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.computeNodeListNextOptions.ocpDate] The time the
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
     *                      {ComputeNodeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ComputeNodeListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ComputeNodeListResult>;
    listNext(nextPageLink: string, options: {
        computeNodeListNextOptions?: Models.ComputeNodeListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ComputeNodeListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    listNext(nextPageLink: string, options: {
        computeNodeListNextOptions?: Models.ComputeNodeListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
}
