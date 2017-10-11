import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
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
     * @param {ComputeNodeUser} user The user account to be created.
     *
     * @param {ComputeNodeAddUserOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addUserWithHttpOperationResponse(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options?: Models.ComputeNodeAddUserOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeDeleteUserOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteUserWithHttpOperationResponse(poolId: string, nodeId: string, userName: string, options?: Models.ComputeNodeDeleteUserOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {NodeUpdateUserParameter} nodeUpdateUserParameter The parameters for
     * the request.
     *
     * @param {ComputeNodeUpdateUserOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateUserWithHttpOperationResponse(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options?: Models.ComputeNodeUpdateUserOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets information about the specified compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to get
     * information about.
     *
     * @param {ComputeNodeGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeGetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Restarts the specified compute node.
     *
     * You can restart a node only if it is in an idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {ComputeNodeRebootOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    rebootWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeRebootOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeReimageOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    reimageWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeReimageOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeDisableSchedulingOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    disableSchedulingWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeDisableSchedulingOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeEnableSchedulingOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    enableSchedulingWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeEnableSchedulingOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeGetRemoteLoginSettingsOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getRemoteLoginSettingsWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeGetRemoteDesktopOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getRemoteDesktopWithHttpOperationResponse(poolId: string, nodeId: string, options?: Models.ComputeNodeGetRemoteDesktopOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} poolId The ID of the pool from which you want to list nodes.
     *
     * @param {ComputeNodeListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(poolId: string, options?: Models.ComputeNodeListOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {ComputeNodeListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.ComputeNodeListNextOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {ComputeNodeUser} user The user account to be created.
     *
     * @param {ComputeNodeAddUserOptionalParams} [options] Optional Parameters.
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
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser): Promise<void>;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options: Models.ComputeNodeAddUserOptionalParams): Promise<void>;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, callback: msRest.ServiceCallback<void>): void;
    addUser(poolId: string, nodeId: string, user: Models.ComputeNodeUser, options: Models.ComputeNodeAddUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {ComputeNodeDeleteUserOptionalParams} [options] Optional Parameters.
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
    deleteUser(poolId: string, nodeId: string, userName: string): Promise<void>;
    deleteUser(poolId: string, nodeId: string, userName: string, options: Models.ComputeNodeDeleteUserOptionalParams): Promise<void>;
    deleteUser(poolId: string, nodeId: string, userName: string, callback: msRest.ServiceCallback<void>): void;
    deleteUser(poolId: string, nodeId: string, userName: string, options: Models.ComputeNodeDeleteUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {NodeUpdateUserParameter} nodeUpdateUserParameter The parameters for
     * the request.
     *
     * @param {ComputeNodeUpdateUserOptionalParams} [options] Optional Parameters.
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
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter): Promise<void>;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options: Models.ComputeNodeUpdateUserOptionalParams): Promise<void>;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, callback: msRest.ServiceCallback<void>): void;
    updateUser(poolId: string, nodeId: string, userName: string, nodeUpdateUserParameter: Models.NodeUpdateUserParameter, options: Models.ComputeNodeUpdateUserOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets information about the specified compute node.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to get
     * information about.
     *
     * @param {ComputeNodeGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ComputeNode} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ComputeNode} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(poolId: string, nodeId: string): Promise<Models.ComputeNode>;
    get(poolId: string, nodeId: string, options: Models.ComputeNodeGetOptionalParams): Promise<Models.ComputeNode>;
    get(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
    get(poolId: string, nodeId: string, options: Models.ComputeNodeGetOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNode>): void;
    /**
     * @summary Restarts the specified compute node.
     *
     * You can restart a node only if it is in an idle or running state.
     *
     * @param {string} poolId The ID of the pool that contains the compute node.
     *
     * @param {string} nodeId The ID of the compute node that you want to restart.
     *
     * @param {ComputeNodeRebootOptionalParams} [options] Optional Parameters.
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
    reboot(poolId: string, nodeId: string): Promise<void>;
    reboot(poolId: string, nodeId: string, options: Models.ComputeNodeRebootOptionalParams): Promise<void>;
    reboot(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    reboot(poolId: string, nodeId: string, options: Models.ComputeNodeRebootOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {ComputeNodeReimageOptionalParams} [options] Optional Parameters.
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
    reimage(poolId: string, nodeId: string): Promise<void>;
    reimage(poolId: string, nodeId: string, options: Models.ComputeNodeReimageOptionalParams): Promise<void>;
    reimage(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    reimage(poolId: string, nodeId: string, options: Models.ComputeNodeReimageOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {ComputeNodeDisableSchedulingOptionalParams} [options] Optional
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
    disableScheduling(poolId: string, nodeId: string): Promise<void>;
    disableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeDisableSchedulingOptionalParams): Promise<void>;
    disableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    disableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeDisableSchedulingOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {ComputeNodeEnableSchedulingOptionalParams} [options] Optional
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
    enableScheduling(poolId: string, nodeId: string): Promise<void>;
    enableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeEnableSchedulingOptionalParams): Promise<void>;
    enableScheduling(poolId: string, nodeId: string, callback: msRest.ServiceCallback<void>): void;
    enableScheduling(poolId: string, nodeId: string, options: Models.ComputeNodeEnableSchedulingOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {ComputeNodeGetRemoteLoginSettingsOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ComputeNodeGetRemoteLoginSettingsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.ComputeNodeGetRemoteLoginSettingsResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getRemoteLoginSettings(poolId: string, nodeId: string): Promise<Models.ComputeNodeGetRemoteLoginSettingsResult>;
    getRemoteLoginSettings(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams): Promise<Models.ComputeNodeGetRemoteLoginSettingsResult>;
    getRemoteLoginSettings(poolId: string, nodeId: string, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
    getRemoteLoginSettings(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteLoginSettingsOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeGetRemoteLoginSettingsResult>): void;
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
     * @param {ComputeNodeGetRemoteDesktopOptionalParams} [options] Optional
     * Parameters.
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
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getRemoteDesktop(poolId: string, nodeId: string): Promise<ReadableStream>;
    getRemoteDesktop(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteDesktopOptionalParams): Promise<ReadableStream>;
    getRemoteDesktop(poolId: string, nodeId: string, callback: msRest.ServiceCallback<ReadableStream>): void;
    getRemoteDesktop(poolId: string, nodeId: string, options: Models.ComputeNodeGetRemoteDesktopOptionalParams, callback: msRest.ServiceCallback<ReadableStream>): void;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} poolId The ID of the pool from which you want to list nodes.
     *
     * @param {ComputeNodeListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ComputeNodeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ComputeNodeListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(poolId: string): Promise<Models.ComputeNodeListResult>;
    list(poolId: string, options: Models.ComputeNodeListOptionalParams): Promise<Models.ComputeNodeListResult>;
    list(poolId: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    list(poolId: string, options: Models.ComputeNodeListOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    /**
     * @summary Lists the compute nodes in the specified pool.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {ComputeNodeListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ComputeNodeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ComputeNodeListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ComputeNodeListResult>;
    listNext(nextPageLink: string, options: Models.ComputeNodeListNextOptionalParams): Promise<Models.ComputeNodeListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
    listNext(nextPageLink: string, options: Models.ComputeNodeListNextOptionalParams, callback: msRest.ServiceCallback<Models.ComputeNodeListResult>): void;
}
