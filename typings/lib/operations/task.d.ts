import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClientContext } from "../batchServiceClientContext";
/** Class representing a Task. */
export declare class Task {
    private readonly client;
    /**
     * Create a Task.
     * @param {BatchServiceClientContext} client Reference to the service client.
     */
    constructor(client: BatchServiceClientContext);
    /**
     * @summary Adds a task to the specified job.
     *
     * The maximum lifetime of a task from addition to completion is 7 days. If a
     * task has not completed within 7 days of being added it will be terminated by
     * the Batch service and left in whatever state it was in at that time.
     *
     * @param {string} jobId The ID of the job to which the task is to be added.
     *
     * @param {TaskAddParameter} task The task to be added.
     *
     * @param {TaskAddOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addWithHttpOperationResponse(jobId: string, task: Models.TaskAddParameter, options?: Models.TaskAddOptionalParams): Promise<Models.TaskAddResponse>;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {TaskListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(jobId: string, options?: Models.TaskListOptionalParams): Promise<Models.TaskListResponse>;
    /**
     * @summary Adds a collection of tasks to the specified job.
     *
     * Note that each task must have a unique ID. The Batch service may not return
     * the results for each task in the same order the tasks were submitted in this
     * request. If the server times out or the connection is closed during the
     * request, the request may have been partially or fully processed, or not at
     * all. In such cases, the user should re-issue the request. Note that it is up
     * to the user to correctly handle failures when re-issuing a request. For
     * example, you should use the same task IDs during a retry so that if the
     * prior operation succeeded, the retry will not create extra tasks
     * unexpectedly. If the response contains any tasks which failed to add, a
     * client can retry the request. In a retry, it is most efficient to resubmit
     * only tasks that failed to add, and to omit tasks that were successfully
     * added on the first attempt. The maximum lifetime of a task from addition to
     * completion is 7 days. If a task has not completed within 7 days of being
     * added it will be terminated by the Batch service and left in whatever state
     * it was in at that time.
     *
     * @param {string} jobId The ID of the job to which the task collection is to
     * be added.
     *
     * @param {TaskAddCollectionParameter} taskCollection The tasks to be added.
     *
     * @param {TaskAddCollectionOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addCollectionWithHttpOperationResponse(jobId: string, taskCollection: Models.TaskAddCollectionParameter, options?: Models.TaskAddCollectionOptionalParams): Promise<Models.TaskAddCollectionResponse>;
    /**
     * @summary Deletes a task from the specified job.
     *
     * When a task is deleted, all of the files in its directory on the compute
     * node where it ran are also deleted (regardless of the retention time). For
     * multi-instance tasks, the delete task operation applies synchronously to the
     * primary task; subtasks and their files are then deleted asynchronously in
     * the background.
     *
     * @param {string} jobId The ID of the job from which to delete the task.
     *
     * @param {string} taskId The ID of the task to delete.
     *
     * @param {TaskDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.TaskDeleteMethodOptionalParams): Promise<Models.TaskDeleteResponse>;
    /**
     * @summary Gets information about the specified task.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task to get information about.
     *
     * @param {TaskGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.TaskGetOptionalParams): Promise<Models.TaskGetResponse>;
    /**
     * Updates the properties of the specified task.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to update.
     *
     * @param {TaskUpdateParameter} taskUpdateParameter The parameters for the
     * request.
     *
     * @param {TaskUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(jobId: string, taskId: string, taskUpdateParameter: Models.TaskUpdateParameter, options?: Models.TaskUpdateOptionalParams): Promise<Models.TaskUpdateResponse>;
    /**
     * @summary Lists all of the subtasks that are associated with the specified
     * multi-instance task.
     *
     * If the task is not a multi-instance task then this returns an empty
     * collection.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {string} taskId The ID of the task.
     *
     * @param {TaskListSubtasksOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listSubtasksWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.TaskListSubtasksOptionalParams): Promise<Models.TaskListSubtasksResponse>;
    /**
     * @summary Terminates the specified task.
     *
     * When the task has been terminated, it moves to the completed state. For
     * multi-instance tasks, the terminate task operation applies synchronously to
     * the primary task; subtasks are then terminated asynchronously in the
     * background.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to terminate.
     *
     * @param {TaskTerminateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    terminateWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.TaskTerminateOptionalParams): Promise<Models.TaskTerminateResponse>;
    /**
     * @summary Reactivates a task, allowing it to run again even if its retry
     * count has been exhausted.
     *
     * Reactivation makes a task eligible to be retried again up to its maximum
     * retry count. The task's state is changed to active. As the task is no longer
     * in the completed state, any previous exit code or failure information is no
     * longer available after reactivation. Each time a task is reactivated, its
     * retry count is reset to 0. Reactivation will fail for tasks that are not
     * completed or that previously completed successfully (with an exit code of
     * 0). Additionally, it will fail if the job has completed (or is terminating
     * or deleting).
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to reactivate.
     *
     * @param {TaskReactivateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    reactivateWithHttpOperationResponse(jobId: string, taskId: string, options?: Models.TaskReactivateOptionalParams): Promise<Models.TaskReactivateResponse>;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {TaskListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.TaskListNextOptionalParams): Promise<Models.TaskListResponse>;
    /**
     * @summary Adds a task to the specified job.
     *
     * The maximum lifetime of a task from addition to completion is 7 days. If a
     * task has not completed within 7 days of being added it will be terminated by
     * the Batch service and left in whatever state it was in at that time.
     *
     * @param {string} jobId The ID of the job to which the task is to be added.
     *
     * @param {TaskAddParameter} task The task to be added.
     *
     * @param {TaskAddOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    add(jobId: string, task: Models.TaskAddParameter): Promise<void>;
    add(jobId: string, task: Models.TaskAddParameter, options: Models.TaskAddOptionalParams): Promise<void>;
    add(jobId: string, task: Models.TaskAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(jobId: string, task: Models.TaskAddParameter, options: Models.TaskAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {TaskListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudTaskListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudTaskListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(jobId: string): Promise<Models.CloudTaskListResult>;
    list(jobId: string, options: Models.TaskListOptionalParams): Promise<Models.CloudTaskListResult>;
    list(jobId: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
    list(jobId: string, options: Models.TaskListOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
    /**
     * @summary Adds a collection of tasks to the specified job.
     *
     * Note that each task must have a unique ID. The Batch service may not return
     * the results for each task in the same order the tasks were submitted in this
     * request. If the server times out or the connection is closed during the
     * request, the request may have been partially or fully processed, or not at
     * all. In such cases, the user should re-issue the request. Note that it is up
     * to the user to correctly handle failures when re-issuing a request. For
     * example, you should use the same task IDs during a retry so that if the
     * prior operation succeeded, the retry will not create extra tasks
     * unexpectedly. If the response contains any tasks which failed to add, a
     * client can retry the request. In a retry, it is most efficient to resubmit
     * only tasks that failed to add, and to omit tasks that were successfully
     * added on the first attempt. The maximum lifetime of a task from addition to
     * completion is 7 days. If a task has not completed within 7 days of being
     * added it will be terminated by the Batch service and left in whatever state
     * it was in at that time.
     *
     * @param {string} jobId The ID of the job to which the task collection is to
     * be added.
     *
     * @param {TaskAddCollectionParameter} taskCollection The tasks to be added.
     *
     * @param {TaskAddCollectionOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TaskAddCollectionResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TaskAddCollectionResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    addCollection(jobId: string, taskCollection: Models.TaskAddCollectionParameter): Promise<Models.TaskAddCollectionResult>;
    addCollection(jobId: string, taskCollection: Models.TaskAddCollectionParameter, options: Models.TaskAddCollectionOptionalParams): Promise<Models.TaskAddCollectionResult>;
    addCollection(jobId: string, taskCollection: Models.TaskAddCollectionParameter, callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
    addCollection(jobId: string, taskCollection: Models.TaskAddCollectionParameter, options: Models.TaskAddCollectionOptionalParams, callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
    /**
     * @summary Deletes a task from the specified job.
     *
     * When a task is deleted, all of the files in its directory on the compute
     * node where it ran are also deleted (regardless of the retention time). For
     * multi-instance tasks, the delete task operation applies synchronously to the
     * primary task; subtasks and their files are then deleted asynchronously in
     * the background.
     *
     * @param {string} jobId The ID of the job from which to delete the task.
     *
     * @param {string} taskId The ID of the task to delete.
     *
     * @param {TaskDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(jobId: string, taskId: string): Promise<void>;
    deleteMethod(jobId: string, taskId: string, options: Models.TaskDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobId: string, taskId: string, options: Models.TaskDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets information about the specified task.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job that contains the task.
     *
     * @param {string} taskId The ID of the task to get information about.
     *
     * @param {TaskGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudTask} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudTask} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobId: string, taskId: string): Promise<Models.CloudTask>;
    get(jobId: string, taskId: string, options: Models.TaskGetOptionalParams): Promise<Models.CloudTask>;
    get(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTask>): void;
    get(jobId: string, taskId: string, options: Models.TaskGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudTask>): void;
    /**
     * Updates the properties of the specified task.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to update.
     *
     * @param {TaskUpdateParameter} taskUpdateParameter The parameters for the
     * request.
     *
     * @param {TaskUpdateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(jobId: string, taskId: string, taskUpdateParameter: Models.TaskUpdateParameter): Promise<void>;
    update(jobId: string, taskId: string, taskUpdateParameter: Models.TaskUpdateParameter, options: Models.TaskUpdateOptionalParams): Promise<void>;
    update(jobId: string, taskId: string, taskUpdateParameter: Models.TaskUpdateParameter, callback: msRest.ServiceCallback<void>): void;
    update(jobId: string, taskId: string, taskUpdateParameter: Models.TaskUpdateParameter, options: Models.TaskUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the subtasks that are associated with the specified
     * multi-instance task.
     *
     * If the task is not a multi-instance task then this returns an empty
     * collection.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {string} taskId The ID of the task.
     *
     * @param {TaskListSubtasksOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudTaskListSubtasksResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudTaskListSubtasksResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listSubtasks(jobId: string, taskId: string): Promise<Models.CloudTaskListSubtasksResult>;
    listSubtasks(jobId: string, taskId: string, options: Models.TaskListSubtasksOptionalParams): Promise<Models.CloudTaskListSubtasksResult>;
    listSubtasks(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
    listSubtasks(jobId: string, taskId: string, options: Models.TaskListSubtasksOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
    /**
     * @summary Terminates the specified task.
     *
     * When the task has been terminated, it moves to the completed state. For
     * multi-instance tasks, the terminate task operation applies synchronously to
     * the primary task; subtasks are then terminated asynchronously in the
     * background.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to terminate.
     *
     * @param {TaskTerminateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    terminate(jobId: string, taskId: string): Promise<void>;
    terminate(jobId: string, taskId: string, options: Models.TaskTerminateOptionalParams): Promise<void>;
    terminate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobId: string, taskId: string, options: Models.TaskTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Reactivates a task, allowing it to run again even if its retry
     * count has been exhausted.
     *
     * Reactivation makes a task eligible to be retried again up to its maximum
     * retry count. The task's state is changed to active. As the task is no longer
     * in the completed state, any previous exit code or failure information is no
     * longer available after reactivation. Each time a task is reactivated, its
     * retry count is reset to 0. Reactivation will fail for tasks that are not
     * completed or that previously completed successfully (with an exit code of
     * 0). Additionally, it will fail if the job has completed (or is terminating
     * or deleting).
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to reactivate.
     *
     * @param {TaskReactivateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    reactivate(jobId: string, taskId: string): Promise<void>;
    reactivate(jobId: string, taskId: string, options: Models.TaskReactivateOptionalParams): Promise<void>;
    reactivate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    reactivate(jobId: string, taskId: string, options: Models.TaskReactivateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {TaskListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudTaskListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudTaskListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudTaskListResult>;
    listNext(nextPageLink: string, options: Models.TaskListNextOptionalParams): Promise<Models.CloudTaskListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
    listNext(nextPageLink: string, options: Models.TaskListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
}
