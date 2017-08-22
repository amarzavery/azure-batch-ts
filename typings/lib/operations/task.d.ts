import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a Task. */
export declare class Task {
    private readonly client;
    /**
     * Create a Task.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Adds a task to the specified job.
     *
     * @param {string} jobId The ID of the job to which the task is to be added.
     *
     * @param {object} task The task to be added.
     *
     * @param {string} task.id A string that uniquely identifies the task within
     * the job. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two IDs within a job that differ only by case).
     *
     * @param {string} [task.displayName] A display name for the task. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     *
     * @param {string} task.commandLine The command line of the task. For
     * multi-instance tasks, the command line is executed as the primary task,
     * after the primary task and all subtasks have finished executing the
     * coordination command line. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {object} [task.exitConditions] How the Batch service should respond
     * when the task completes.
     *
     * @param {array} [task.exitConditions.exitCodes] A list of individual task
     * exit codes and how the Batch service should respond to them.
     *
     * @param {array} [task.exitConditions.exitCodeRanges] A list of task exit code
     * ranges and how the Batch service should respond to them.
     *
     * @param {object} [task.exitConditions.preProcessingError] How the Batch
     * service should respond if the task fails to start due to an error.
     *
     * @param {object} [task.exitConditions.fileUploadError] How the Batch service
     * should respond if a file upload error occurs. If the task exited with an
     * exit code that was specified via exitCodes or exitCodeRanges, and then
     * encountered a file upload error, then the action specified by the exit code
     * takes precedence.
     *
     * @param {object} [task.exitConditions.default] How the Batch service should
     * respond if the task fails with an exit condition not covered by any of the
     * other properties. This value is used if the task exits with any nonzero exit
     * code not listed in the exitCodes or exitCodeRanges collection, with a
     * pre-processing error if the preProcessingError property is not present, or
     * with a file upload error if the fileUploadError property is not present. If
     * you want non-default behaviour on exit code 0, you must list it explicitly
     * using the exitCodes or exitCodeRanges collection.
     *
     * @param {string} [task.exitConditions.default.jobAction] An action to take on
     * the job containing the task, if the task completes with the given exit
     * condition and the job's onTaskFailed property is
     * 'performExitOptionsJobAction'. Values are:
     *
     * none - Take no action.
     * disable - Disable the job. This is equivalent to calling the disable job
     * API, with a disableTasks value of requeue.
     * terminate - Terminate the job. The terminateReason in the job's
     * executionInfo is set to "TaskFailed". The default is none for exit code 0
     * and terminate for all other exit conditions.
     *
     * If the job's onTaskFailed property is noAction, then specifying this
     * property returns an error and the add task request fails with an invalid
     * property value error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request). Possible values include: 'none',
     * 'disable', 'terminate'
     *
     * @param {string} [task.exitConditions.default.dependencyAction] An action
     * that the Batch service performs on tasks that depend on this task. Values
     * are:
     *
     * satisfy - Satisfy the task's dependencies.
     * block - Block the task's dependencies.
     *
     * The default is 'satisfy' for exit code 0, and 'block' for all other exit
     * conditions. If the job's usesTaskDependencies property is set to false, then
     * specifying the dependencyAction property returns an erro and the add task
     * request fails with an invalid property value error; if you are calling the
     * REST API directly, the HTTP status code is 400  (Bad Request). Possible
     * values include: 'satisfy', 'block'
     *
     * @param {array} [task.resourceFiles] A list of files that the Batch service
     * will download to the compute node before running the command line. For
     * multi-instance tasks, the resource files will only be downloaded to the
     * compute node on which the primary task is executed.
     *
     * @param {array} [task.outputFiles] A list of files that the Batch service
     * will upload from the compute node after running the command line. For
     * multi-instance tasks, the files will only be uploaded from the compute node
     * on which the primary task is executed.
     *
     * @param {array} [task.environmentSettings] A list of environment variable
     * settings for the task.
     *
     * @param {object} [task.affinityInfo] A locality hint that can be used by the
     * Batch service to select a compute node on which to start the new task.
     *
     * @param {string} task.affinityInfo.affinityId An opaque string representing
     * the location of a compute node or a task that has run previously. You can
     * pass the affinityId of a compute node to indicate that this task needs to
     * run on that compute node. Note that this is just a soft affinity. If the
     * target node is busy or unavailable at the time the task is scheduled, then
     * the task will be scheduled elsewhere.
     *
     * @param {object} [task.constraints] The execution constraints that apply to
     * this task. If you do not specify constraints, the maxTaskRetryCount is the
     * maxTaskRetryCount specified for the job, and the maxWallClockTime and
     * retentionTime are infinite.
     *
     * @param {moment.duration} [task.constraints.maxWallClockTime] The maximum
     * elapsed time that the task may run, measured from the time the task starts.
     * If the task does not complete within the time limit, the Batch service
     * terminates it. If this is not specified, there is no time limit on how long
     * the task may run.
     *
     * @param {moment.duration} [task.constraints.retentionTime] The minimum time
     * to retain the task directory on the compute node where it ran, from the time
     * it completes execution. After this time, the Batch service may delete the
     * task directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {number} [task.constraints.maxTaskRetryCount] The maximum number of
     * times the task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try the task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {object} [task.userIdentity] The user identity under which the task
     * runs. If omitted, the task runs as a non-administrative user unique to the
     * task.
     *
     * @param {string} [task.userIdentity.userName] The name of the user identity
     * under which the task is run. The userName and autoUser properties are
     * mutually exclusive; you must specify one but not both.
     *
     * @param {object} [task.userIdentity.autoUser] The auto user under which the
     * task is run. The userName and autoUser properties are mutually exclusive;
     * you must specify one but not both.
     *
     * @param {string} [task.userIdentity.autoUser.scope] The scope for the auto
     * user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string} [task.userIdentity.autoUser.elevationLevel] The elevation
     * level of the auto user. nonAdmin - The auto user is a standard user without
     * elevated access. admin - The auto user is a user with elevated access and
     * operates with full Administrator permissions. The default value is nonAdmin.
     * Possible values include: 'nonAdmin', 'admin'
     *
     * @param {object} [task.multiInstanceSettings] An object that indicates that
     * the task is a multi-instance task, and contains information about how to run
     * the multi-instance task.
     *
     * @param {number} task.multiInstanceSettings.numberOfInstances The number of
     * compute nodes required by the task.
     *
     * @param {string} [task.multiInstanceSettings.coordinationCommandLine] The
     * command line to run on all the compute nodes to enable them to coordinate
     * when the primary runs the main task command. A typical coordination command
     * line launches a background service and verifies that the service is ready to
     * process inter-node messages.
     *
     * @param {array} [task.multiInstanceSettings.commonResourceFiles] A list of
     * files that the Batch service will download before running the coordination
     * command line. The difference between common resource files and task resource
     * files is that common resource files are downloaded for all subtasks
     * including the primary, whereas task resource files are downloaded only for
     * the primary. Also note that these resource files are not downloaded to the
     * task working directory, but instead are downloaded to the task root
     * directory (one directory above the working directory).
     *
     * @param {object} [task.dependsOn] The tasks that this task depends on. This
     * task will not be scheduled until all tasks that it depends on have completed
     * successfully. If any of those tasks fail and exhaust their retry counts,
     * this task will never be scheduled. If the job does not have
     * usesTaskDependencies set to true, and this element is present, the request
     * fails with error code TaskDependenciesNotSpecifiedOnJob.
     *
     * @param {array} [task.dependsOn.taskIds] The list of task IDs that this task
     * depends on. All tasks in this list must complete successfully before the
     * dependent task can be scheduled. The taskIds collection is limited to 64000
     * characters total (i.e. the combined length of all task IDs). If the taskIds
     * collection exceeds the maximum length, the Add Task request fails with error
     * code TaskDependencyListTooLong. In this case consider using task ID ranges
     * instead.
     *
     * @param {array} [task.dependsOn.taskIdRanges] The list of task ID ranges that
     * this task depends on. All tasks in all ranges must complete successfully
     * before the dependent task can be scheduled.
     *
     * @param {array} [task.applicationPackageReferences] A list of application
     * packages that the Batch service will deploy to the compute node before
     * running the command line. Application packages are downloaded and deployed
     * to a shared directory, not the task working directory. Therefore, if a
     * referenced package is already on the compute node, and is up to date, then
     * it is not re-downloaded; the existing copy on the compute node is used. If a
     * referenced application package cannot be installed, for example because the
     * package has been deleted or because download failed, the task fails.
     *
     * @param {object} [task.authenticationTokenSettings] The settings for an
     * authentication token that the task can use to perform Batch service
     * operations. If this property is set, the Batch service provides the task
     * with an authentication token which can be used to authenticate Batch service
     * operations without requiring an account access key. The token is provided
     * via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations
     * that the task can carry out using the token depend on the settings. For
     * example, a task can request job permissions in order to add other tasks to
     * the job, or check the status of the job or of other tasks under the job.
     *
     * @param {array} [task.authenticationTokenSettings.access] The Batch resources
     * to which the token grants access. The authentication token grants access to
     * a limited set of Batch service operations. Currently the only supported
     * value for the access property is 'job', which grants access to all
     * operations related to the job which contains the task.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskAddOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
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
    addWithHttpOperationResponse(jobId: string, task: Models.TaskAddParameter, options?: {
        taskAddOptions?: Models.TaskAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.taskListOptions.select] An OData $select clause.
     *
     * @param {string} [options.taskListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.taskListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 tasks can be returned.
     *
     * @param {number} [options.taskListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudTaskListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(jobId: string, options?: {
        taskListOptions?: Models.TaskListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * added on the first attempt.
     *
     * @param {string} jobId The ID of the job to which the task collection is to
     * be added.
     *
     * @param {array} value The collection of tasks to add. The total serialized
     * size of this collection must be less than 4MB. If it is greater than 4MB
     * (for example if each task has 100's of resource files or environment
     * variables), the request will fail with code 'RequestBodyTooLarge' and should
     * be retried again with fewer tasks.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskAddCollectionOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskAddCollectionOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskAddCollectionOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskAddCollectionOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskAddCollectionOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<TaskAddCollectionResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addCollectionWithHttpOperationResponse(jobId: string, value: Models.TaskAddParameter[], options?: {
        taskAddCollectionOptions?: Models.TaskAddCollectionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethodWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        taskDeleteMethodOptions?: Models.TaskDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.taskGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.taskGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.taskGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskGetOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudTask>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        taskGetOptions?: Models.TaskGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates the properties of the specified task.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to update.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.constraints] Constraints that apply to this task.
     * If omitted, the task is given the default constraints. For multi-instance
     * tasks, updating the retention time applies only to the primary task and not
     * subtasks.
     *
     * @param {moment.duration} [options.constraints.maxWallClockTime] The maximum
     * elapsed time that the task may run, measured from the time the task starts.
     * If the task does not complete within the time limit, the Batch service
     * terminates it. If this is not specified, there is no time limit on how long
     * the task may run.
     *
     * @param {moment.duration} [options.constraints.retentionTime] The minimum
     * time to retain the task directory on the compute node where it ran, from the
     * time it completes execution. After this time, the Batch service may delete
     * the task directory and all its contents. The default is infinite, i.e. the
     * task directory will be retained until the compute node is removed or
     * reimaged.
     *
     * @param {number} [options.constraints.maxTaskRetryCount] The maximum number
     * of times the task may be retried. The Batch service retries a task if its
     * exit code is nonzero. Note that this value specifically controls the number
     * of retries. The Batch service will try the task once, and may then retry up
     * to this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {object} [options.taskUpdateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskUpdateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskUpdateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskUpdateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskUpdateOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.taskUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskUpdateOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
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
    updateWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        constraints?: Models.TaskConstraints;
        taskUpdateOptions?: Models.TaskUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListSubtasksOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.taskListSubtasksOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.taskListSubtasksOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskListSubtasksOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListSubtasksOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListSubtasksOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudTaskListSubtasksResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listSubtasksWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        taskListSubtasksOptions?: Models.TaskListSubtasksOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskTerminateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskTerminateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskTerminateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskTerminateOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskTerminateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskTerminateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskTerminateOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
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
    terminateWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        taskTerminateOptions?: Models.TaskTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskReactivateOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskReactivateOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskReactivateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskReactivateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskReactivateOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskReactivateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskReactivateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskReactivateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskReactivateOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
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
    reactivateWithHttpOperationResponse(jobId: string, taskId: string, options?: {
        taskReactivateOptions?: Models.TaskReactivateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListNextOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudTaskListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        taskListNextOptions?: Models.TaskListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a task to the specified job.
     *
     * @param {string} jobId The ID of the job to which the task is to be added.
     *
     * @param {object} task The task to be added.
     *
     * @param {string} task.id A string that uniquely identifies the task within
     * the job. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two IDs within a job that differ only by case).
     *
     * @param {string} [task.displayName] A display name for the task. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     *
     * @param {string} task.commandLine The command line of the task. For
     * multi-instance tasks, the command line is executed as the primary task,
     * after the primary task and all subtasks have finished executing the
     * coordination command line. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {object} [task.exitConditions] How the Batch service should respond
     * when the task completes.
     *
     * @param {array} [task.exitConditions.exitCodes] A list of individual task
     * exit codes and how the Batch service should respond to them.
     *
     * @param {array} [task.exitConditions.exitCodeRanges] A list of task exit code
     * ranges and how the Batch service should respond to them.
     *
     * @param {object} [task.exitConditions.preProcessingError] How the Batch
     * service should respond if the task fails to start due to an error.
     *
     * @param {object} [task.exitConditions.fileUploadError] How the Batch service
     * should respond if a file upload error occurs. If the task exited with an
     * exit code that was specified via exitCodes or exitCodeRanges, and then
     * encountered a file upload error, then the action specified by the exit code
     * takes precedence.
     *
     * @param {object} [task.exitConditions.default] How the Batch service should
     * respond if the task fails with an exit condition not covered by any of the
     * other properties. This value is used if the task exits with any nonzero exit
     * code not listed in the exitCodes or exitCodeRanges collection, with a
     * pre-processing error if the preProcessingError property is not present, or
     * with a file upload error if the fileUploadError property is not present. If
     * you want non-default behaviour on exit code 0, you must list it explicitly
     * using the exitCodes or exitCodeRanges collection.
     *
     * @param {string} [task.exitConditions.default.jobAction] An action to take on
     * the job containing the task, if the task completes with the given exit
     * condition and the job's onTaskFailed property is
     * 'performExitOptionsJobAction'. Values are:
     *
     * none - Take no action.
     * disable - Disable the job. This is equivalent to calling the disable job
     * API, with a disableTasks value of requeue.
     * terminate - Terminate the job. The terminateReason in the job's
     * executionInfo is set to "TaskFailed". The default is none for exit code 0
     * and terminate for all other exit conditions.
     *
     * If the job's onTaskFailed property is noAction, then specifying this
     * property returns an error and the add task request fails with an invalid
     * property value error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request). Possible values include: 'none',
     * 'disable', 'terminate'
     *
     * @param {string} [task.exitConditions.default.dependencyAction] An action
     * that the Batch service performs on tasks that depend on this task. Values
     * are:
     *
     * satisfy - Satisfy the task's dependencies.
     * block - Block the task's dependencies.
     *
     * The default is 'satisfy' for exit code 0, and 'block' for all other exit
     * conditions. If the job's usesTaskDependencies property is set to false, then
     * specifying the dependencyAction property returns an erro and the add task
     * request fails with an invalid property value error; if you are calling the
     * REST API directly, the HTTP status code is 400  (Bad Request). Possible
     * values include: 'satisfy', 'block'
     *
     * @param {array} [task.resourceFiles] A list of files that the Batch service
     * will download to the compute node before running the command line. For
     * multi-instance tasks, the resource files will only be downloaded to the
     * compute node on which the primary task is executed.
     *
     * @param {array} [task.outputFiles] A list of files that the Batch service
     * will upload from the compute node after running the command line. For
     * multi-instance tasks, the files will only be uploaded from the compute node
     * on which the primary task is executed.
     *
     * @param {array} [task.environmentSettings] A list of environment variable
     * settings for the task.
     *
     * @param {object} [task.affinityInfo] A locality hint that can be used by the
     * Batch service to select a compute node on which to start the new task.
     *
     * @param {string} task.affinityInfo.affinityId An opaque string representing
     * the location of a compute node or a task that has run previously. You can
     * pass the affinityId of a compute node to indicate that this task needs to
     * run on that compute node. Note that this is just a soft affinity. If the
     * target node is busy or unavailable at the time the task is scheduled, then
     * the task will be scheduled elsewhere.
     *
     * @param {object} [task.constraints] The execution constraints that apply to
     * this task. If you do not specify constraints, the maxTaskRetryCount is the
     * maxTaskRetryCount specified for the job, and the maxWallClockTime and
     * retentionTime are infinite.
     *
     * @param {moment.duration} [task.constraints.maxWallClockTime] The maximum
     * elapsed time that the task may run, measured from the time the task starts.
     * If the task does not complete within the time limit, the Batch service
     * terminates it. If this is not specified, there is no time limit on how long
     * the task may run.
     *
     * @param {moment.duration} [task.constraints.retentionTime] The minimum time
     * to retain the task directory on the compute node where it ran, from the time
     * it completes execution. After this time, the Batch service may delete the
     * task directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {number} [task.constraints.maxTaskRetryCount] The maximum number of
     * times the task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try the task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {object} [task.userIdentity] The user identity under which the task
     * runs. If omitted, the task runs as a non-administrative user unique to the
     * task.
     *
     * @param {string} [task.userIdentity.userName] The name of the user identity
     * under which the task is run. The userName and autoUser properties are
     * mutually exclusive; you must specify one but not both.
     *
     * @param {object} [task.userIdentity.autoUser] The auto user under which the
     * task is run. The userName and autoUser properties are mutually exclusive;
     * you must specify one but not both.
     *
     * @param {string} [task.userIdentity.autoUser.scope] The scope for the auto
     * user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string} [task.userIdentity.autoUser.elevationLevel] The elevation
     * level of the auto user. nonAdmin - The auto user is a standard user without
     * elevated access. admin - The auto user is a user with elevated access and
     * operates with full Administrator permissions. The default value is nonAdmin.
     * Possible values include: 'nonAdmin', 'admin'
     *
     * @param {object} [task.multiInstanceSettings] An object that indicates that
     * the task is a multi-instance task, and contains information about how to run
     * the multi-instance task.
     *
     * @param {number} task.multiInstanceSettings.numberOfInstances The number of
     * compute nodes required by the task.
     *
     * @param {string} [task.multiInstanceSettings.coordinationCommandLine] The
     * command line to run on all the compute nodes to enable them to coordinate
     * when the primary runs the main task command. A typical coordination command
     * line launches a background service and verifies that the service is ready to
     * process inter-node messages.
     *
     * @param {array} [task.multiInstanceSettings.commonResourceFiles] A list of
     * files that the Batch service will download before running the coordination
     * command line. The difference between common resource files and task resource
     * files is that common resource files are downloaded for all subtasks
     * including the primary, whereas task resource files are downloaded only for
     * the primary. Also note that these resource files are not downloaded to the
     * task working directory, but instead are downloaded to the task root
     * directory (one directory above the working directory).
     *
     * @param {object} [task.dependsOn] The tasks that this task depends on. This
     * task will not be scheduled until all tasks that it depends on have completed
     * successfully. If any of those tasks fail and exhaust their retry counts,
     * this task will never be scheduled. If the job does not have
     * usesTaskDependencies set to true, and this element is present, the request
     * fails with error code TaskDependenciesNotSpecifiedOnJob.
     *
     * @param {array} [task.dependsOn.taskIds] The list of task IDs that this task
     * depends on. All tasks in this list must complete successfully before the
     * dependent task can be scheduled. The taskIds collection is limited to 64000
     * characters total (i.e. the combined length of all task IDs). If the taskIds
     * collection exceeds the maximum length, the Add Task request fails with error
     * code TaskDependencyListTooLong. In this case consider using task ID ranges
     * instead.
     *
     * @param {array} [task.dependsOn.taskIdRanges] The list of task ID ranges that
     * this task depends on. All tasks in all ranges must complete successfully
     * before the dependent task can be scheduled.
     *
     * @param {array} [task.applicationPackageReferences] A list of application
     * packages that the Batch service will deploy to the compute node before
     * running the command line. Application packages are downloaded and deployed
     * to a shared directory, not the task working directory. Therefore, if a
     * referenced package is already on the compute node, and is up to date, then
     * it is not re-downloaded; the existing copy on the compute node is used. If a
     * referenced application package cannot be installed, for example because the
     * package has been deleted or because download failed, the task fails.
     *
     * @param {object} [task.authenticationTokenSettings] The settings for an
     * authentication token that the task can use to perform Batch service
     * operations. If this property is set, the Batch service provides the task
     * with an authentication token which can be used to authenticate Batch service
     * operations without requiring an account access key. The token is provided
     * via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations
     * that the task can carry out using the token depend on the settings. For
     * example, a task can request job permissions in order to add other tasks to
     * the job, or check the status of the job or of other tasks under the job.
     *
     * @param {array} [task.authenticationTokenSettings.access] The Batch resources
     * to which the token grants access. The authentication token grants access to
     * a limited set of Batch service operations. Currently the only supported
     * value for the access property is 'job', which grants access to all
     * operations related to the job which contains the task.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskAddOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    add(jobId: string, task: Models.TaskAddParameter): Promise<void>;
    add(jobId: string, task: Models.TaskAddParameter, options: {
        taskAddOptions?: Models.TaskAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    add(jobId: string, task: Models.TaskAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(jobId: string, task: Models.TaskAddParameter, options: {
        taskAddOptions?: Models.TaskAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the tasks that are associated with the specified job.
     *
     * For multi-instance tasks, information such as affinityId, executionInfo and
     * nodeInfo refer to the primary task. Use the list subtasks API to retrieve
     * information about subtasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.taskListOptions.select] An OData $select clause.
     *
     * @param {string} [options.taskListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.taskListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 tasks can be returned.
     *
     * @param {number} [options.taskListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
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
     *                      {CloudTaskListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudTaskListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(jobId: string): Promise<Models.CloudTaskListResult>;
    list(jobId: string, options: {
        taskListOptions?: Models.TaskListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudTaskListResult>;
    list(jobId: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
    list(jobId: string, options: {
        taskListOptions?: Models.TaskListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
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
     * added on the first attempt.
     *
     * @param {string} jobId The ID of the job to which the task collection is to
     * be added.
     *
     * @param {array} value The collection of tasks to add. The total serialized
     * size of this collection must be less than 4MB. If it is greater than 4MB
     * (for example if each task has 100's of resource files or environment
     * variables), the request will fail with code 'RequestBodyTooLarge' and should
     * be retried again with fewer tasks.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskAddCollectionOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskAddCollectionOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskAddCollectionOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskAddCollectionOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskAddCollectionOptions.ocpDate] The time the
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
     *                      {TaskAddCollectionResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link TaskAddCollectionResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    addCollection(jobId: string, value: Models.TaskAddParameter[]): Promise<Models.TaskAddCollectionResult>;
    addCollection(jobId: string, value: Models.TaskAddParameter[], options: {
        taskAddCollectionOptions?: Models.TaskAddCollectionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.TaskAddCollectionResult>;
    addCollection(jobId: string, value: Models.TaskAddParameter[], callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
    addCollection(jobId: string, value: Models.TaskAddParameter[], options: {
        taskAddCollectionOptions?: Models.TaskAddCollectionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.TaskAddCollectionResult>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethod(jobId: string, taskId: string): Promise<void>;
    deleteMethod(jobId: string, taskId: string, options: {
        taskDeleteMethodOptions?: Models.TaskDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobId: string, taskId: string, options: {
        taskDeleteMethodOptions?: Models.TaskDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.taskGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.taskGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.taskGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.taskGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskGetOptions.ifUnmodifiedSince] A timestamp
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
     *                      {CloudTask} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudTask} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobId: string, taskId: string): Promise<Models.CloudTask>;
    get(jobId: string, taskId: string, options: {
        taskGetOptions?: Models.TaskGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudTask>;
    get(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTask>): void;
    get(jobId: string, taskId: string, options: {
        taskGetOptions?: Models.TaskGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudTask>): void;
    /**
     * Updates the properties of the specified task.
     *
     * @param {string} jobId The ID of the job containing the task.
     *
     * @param {string} taskId The ID of the task to update.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.constraints] Constraints that apply to this task.
     * If omitted, the task is given the default constraints. For multi-instance
     * tasks, updating the retention time applies only to the primary task and not
     * subtasks.
     *
     * @param {moment.duration} [options.constraints.maxWallClockTime] The maximum
     * elapsed time that the task may run, measured from the time the task starts.
     * If the task does not complete within the time limit, the Batch service
     * terminates it. If this is not specified, there is no time limit on how long
     * the task may run.
     *
     * @param {moment.duration} [options.constraints.retentionTime] The minimum
     * time to retain the task directory on the compute node where it ran, from the
     * time it completes execution. After this time, the Batch service may delete
     * the task directory and all its contents. The default is infinite, i.e. the
     * task directory will be retained until the compute node is removed or
     * reimaged.
     *
     * @param {number} [options.constraints.maxTaskRetryCount] The maximum number
     * of times the task may be retried. The Batch service retries a task if its
     * exit code is nonzero. Note that this value specifically controls the number
     * of retries. The Batch service will try the task once, and may then retry up
     * to this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {object} [options.taskUpdateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskUpdateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskUpdateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskUpdateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskUpdateOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.taskUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskUpdateOptions.ifUnmodifiedSince] A timestamp
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(jobId: string, taskId: string): Promise<void>;
    update(jobId: string, taskId: string, options: {
        constraints?: Models.TaskConstraints;
        taskUpdateOptions?: Models.TaskUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    update(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    update(jobId: string, taskId: string, options: {
        constraints?: Models.TaskConstraints;
        taskUpdateOptions?: Models.TaskUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListSubtasksOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.taskListSubtasksOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.taskListSubtasksOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskListSubtasksOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListSubtasksOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListSubtasksOptions.ocpDate] The time the request
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
     *                      {CloudTaskListSubtasksResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudTaskListSubtasksResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listSubtasks(jobId: string, taskId: string): Promise<Models.CloudTaskListSubtasksResult>;
    listSubtasks(jobId: string, taskId: string, options: {
        taskListSubtasksOptions?: Models.TaskListSubtasksOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudTaskListSubtasksResult>;
    listSubtasks(jobId: string, taskId: string, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
    listSubtasks(jobId: string, taskId: string, options: {
        taskListSubtasksOptions?: Models.TaskListSubtasksOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudTaskListSubtasksResult>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskTerminateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.taskTerminateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.taskTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskTerminateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskTerminateOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskTerminateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskTerminateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskTerminateOptions.ifUnmodifiedSince] A timestamp
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    terminate(jobId: string, taskId: string): Promise<void>;
    terminate(jobId: string, taskId: string, options: {
        taskTerminateOptions?: Models.TaskTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    terminate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobId: string, taskId: string, options: {
        taskTerminateOptions?: Models.TaskTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskReactivateOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.taskReactivateOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.taskReactivateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskReactivateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskReactivateOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.taskReactivateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.taskReactivateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.taskReactivateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.taskReactivateOptions.ifUnmodifiedSince] A timestamp
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    reactivate(jobId: string, taskId: string): Promise<void>;
    reactivate(jobId: string, taskId: string, options: {
        taskReactivateOptions?: Models.TaskReactivateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    reactivate(jobId: string, taskId: string, callback: msRest.ServiceCallback<void>): void;
    reactivate(jobId: string, taskId: string, options: {
        taskReactivateOptions?: Models.TaskReactivateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.taskListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.taskListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.taskListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.taskListNextOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
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
     *                      {CloudTaskListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudTaskListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudTaskListResult>;
    listNext(nextPageLink: string, options: {
        taskListNextOptions?: Models.TaskListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudTaskListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
    listNext(nextPageLink: string, options: {
        taskListNextOptions?: Models.TaskListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudTaskListResult>): void;
}
