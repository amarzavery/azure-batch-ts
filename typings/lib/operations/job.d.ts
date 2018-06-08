import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClientContext } from "../batchServiceClientContext";
/** Class representing a Job. */
export declare class Job {
    private readonly client;
    /**
     * Create a Job.
     * @param {BatchServiceClientContext} client Reference to the service client.
     */
    constructor(client: BatchServiceClientContext);
    /**
     * @summary Gets lifetime summary statistics for all of the jobs in the
     * specified account.
     *
     * Statistics are aggregated across all jobs that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     * The statistics may not be immediately available. The Batch service performs
     * periodic roll-up of statistics. The typical delay is about 30 minutes.
     *
     * @param {JobGetAllLifetimeStatisticsOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getAllLifetimeStatisticsWithHttpOperationResponse(options?: Models.JobGetAllLifetimeStatisticsOptionalParams): Promise<Models.JobGetAllLifetimeStatisticsResponse>;
    /**
     * @summary Deletes a job.
     *
     * Deleting a job also deletes all tasks that are part of that job, and all job
     * statistics. This also overrides the retention period for task data; that is,
     * if the job contains tasks which are still retained on compute nodes, the
     * Batch services deletes those tasks' working directories and all their
     * contents.  When a Delete Job request is received, the Batch service sets the
     * job to the deleting state. All update operations on a job that is in
     * deleting state will fail with status code 409 (Conflict), with additional
     * information indicating that the job is being deleted.
     *
     * @param {string} jobId The ID of the job to delete.
     *
     * @param {JobDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(jobId: string, options?: Models.JobDeleteMethodOptionalParams): Promise<Models.JobDeleteResponse>;
    /**
     * @summary Gets information about the specified job.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobId: string, options?: Models.JobGetOptionalParams): Promise<Models.JobGetResponse>;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This replaces only the job properties specified in the request. For example,
     * if the job has constraints, and a request does not specify the constraints
     * element, then the job keeps the existing constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {JobPatchParameter} jobPatchParameter The parameters for the request.
     *
     * @param {JobPatchOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    patchWithHttpOperationResponse(jobId: string, jobPatchParameter: Models.JobPatchParameter, options?: Models.JobPatchOptionalParams): Promise<Models.JobPatchResponse>;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This fully replaces all the updateable properties of the job. For example,
     * if the job has constraints associated with it and if constraints is not
     * specified with this request, then the Batch service will remove the existing
     * constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {JobUpdateParameter} jobUpdateParameter The parameters for the
     * request.
     *
     * @param {JobUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options?: Models.JobUpdateOptionalParams): Promise<Models.JobUpdateResponse>;
    /**
     * @summary Disables the specified job, preventing new tasks from running.
     *
     * The Batch Service immediately moves the job to the disabling state. Batch
     * then uses the disableTasks parameter to determine what to do with the
     * currently running tasks of the job. The job remains in the disabling state
     * until the disable operation is completed and all tasks have been dealt with
     * according to the disableTasks option; the job then moves to the disabled
     * state. No new tasks are started under the job until it moves back to active
     * state. If you try to disable a job that is in any state other than active,
     * disabling, or disabled, the request fails with status code 409.
     *
     * @param {string} jobId The ID of the job to disable.
     *
     * @param {JobDisableParameter} jobDisableParameter The parameters for the
     * request.
     *
     * @param {JobDisableOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    disableWithHttpOperationResponse(jobId: string, jobDisableParameter: Models.JobDisableParameter, options?: Models.JobDisableOptionalParams): Promise<Models.JobDisableResponse>;
    /**
     * @summary Enables the specified job, allowing new tasks to run.
     *
     * When you call this API, the Batch service sets a disabled job to the
     * enabling state. After the this operation is completed, the job moves to the
     * active state, and scheduling of new tasks under the job resumes. The Batch
     * service does not allow a task to remain in the active state for more than 7
     * days. Therefore, if you enable a job containing active tasks which were
     * added more than 7 days ago, those tasks will not run.
     *
     * @param {string} jobId The ID of the job to enable.
     *
     * @param {JobEnableOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    enableWithHttpOperationResponse(jobId: string, options?: Models.JobEnableOptionalParams): Promise<Models.JobEnableResponse>;
    /**
     * @summary Terminates the specified job, marking it as completed.
     *
     * When a Terminate Job request is received, the Batch service sets the job to
     * the terminating state. The Batch service then terminates any running tasks
     * associated with the job and runs any required job release tasks. Then the
     * job moves into the completed state. If there are any tasks in the job in the
     * active state, they will remain in the active state. Once a job is
     * terminated, new tasks cannot be added and any remaining active tasks will
     * not be scheduled.
     *
     * @param {string} jobId The ID of the job to terminate.
     *
     * @param {JobTerminateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    terminateWithHttpOperationResponse(jobId: string, options?: Models.JobTerminateOptionalParams): Promise<Models.JobTerminateResponse>;
    /**
     * @summary Adds a job to the specified account.
     *
     * The Batch service supports two ways to control the work done as part of a
     * job. In the first approach, the user specifies a Job Manager task. The Batch
     * service launches this task when it is ready to start the job. The Job
     * Manager task controls all other tasks that run under this job, by using the
     * Task APIs. In the second approach, the user directly controls the execution
     * of tasks under an active job, by using the Task APIs. Also note: when naming
     * jobs, avoid including sensitive information such as user names or secret
     * project names. This information may appear in telemetry logs accessible to
     * Microsoft Support engineers.
     *
     * @param {JobAddParameter} job The job to be added.
     *
     * @param {JobAddOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addWithHttpOperationResponse(job: Models.JobAddParameter, options?: Models.JobAddOptionalParams): Promise<Models.JobAddResponse>;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {JobListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: Models.JobListOptionalParams): Promise<Models.JobListResponse>;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule from which you want
     * to get a list of jobs.
     *
     * @param {JobListFromJobScheduleOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromJobScheduleWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobListFromJobScheduleOptionalParams): Promise<Models.JobListFromJobScheduleResponse>;
    /**
     * @summary Lists the execution status of the Job Preparation and Job Release
     * task for the specified job across the compute nodes where the job has run.
     *
     * This API returns the Job Preparation and Job Release task status on all
     * compute nodes that have run the Job Preparation or Job Release task. This
     * includes nodes which have since been removed from the pool. If this API is
     * invoked on a job which has no Job Preparation or Job Release task, the Batch
     * service returns HTTP status code 409 (Conflict) with an error code of
     * JobPreparationTaskNotSpecified.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobListPreparationAndReleaseTaskStatusOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPreparationAndReleaseTaskStatusWithHttpOperationResponse(jobId: string, options?: Models.JobListPreparationAndReleaseTaskStatusOptionalParams): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
    /**
     * @summary Gets the task counts for the specified job.
     *
     * Task counts provide a count of the tasks by active, running or completed
     * task state, and a count of tasks which succeeded or failed. Tasks in the
     * preparing state are counted as running. If the validationStatus is
     * unvalidated, then the Batch service has not been able to check state counts
     * against the task states as reported in the List Tasks API. The
     * validationStatus may be unvalidated if the job contains more than 200,000
     * tasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobGetTaskCountsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getTaskCountsWithHttpOperationResponse(jobId: string, options?: Models.JobGetTaskCountsOptionalParams): Promise<Models.JobGetTaskCountsResponse>;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.JobListNextOptionalParams): Promise<Models.JobListResponse>;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListFromJobScheduleNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromJobScheduleNextWithHttpOperationResponse(nextPageLink: string, options?: Models.JobListFromJobScheduleNextOptionalParams): Promise<Models.JobListFromJobScheduleResponse>;
    /**
     * @summary Lists the execution status of the Job Preparation and Job Release
     * task for the specified job across the compute nodes where the job has run.
     *
     * This API returns the Job Preparation and Job Release task status on all
     * compute nodes that have run the Job Preparation or Job Release task. This
     * includes nodes which have since been removed from the pool. If this API is
     * invoked on a job which has no Job Preparation or Job Release task, the Batch
     * service returns HTTP status code 409 (Conflict) with an error code of
     * JobPreparationTaskNotSpecified.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListPreparationAndReleaseTaskStatusNextOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPreparationAndReleaseTaskStatusNextWithHttpOperationResponse(nextPageLink: string, options?: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
    /**
     * @summary Gets lifetime summary statistics for all of the jobs in the
     * specified account.
     *
     * Statistics are aggregated across all jobs that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     * The statistics may not be immediately available. The Batch service performs
     * periodic roll-up of statistics. The typical delay is about 30 minutes.
     *
     * @param {JobGetAllLifetimeStatisticsOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.JobStatistics} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.JobStatistics} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getAllLifetimeStatistics(): Promise<Models.JobStatistics>;
    getAllLifetimeStatistics(options: Models.JobGetAllLifetimeStatisticsOptionalParams): Promise<Models.JobStatistics>;
    getAllLifetimeStatistics(callback: msRest.ServiceCallback<Models.JobStatistics>): void;
    getAllLifetimeStatistics(options: Models.JobGetAllLifetimeStatisticsOptionalParams, callback: msRest.ServiceCallback<Models.JobStatistics>): void;
    /**
     * @summary Deletes a job.
     *
     * Deleting a job also deletes all tasks that are part of that job, and all job
     * statistics. This also overrides the retention period for task data; that is,
     * if the job contains tasks which are still retained on compute nodes, the
     * Batch services deletes those tasks' working directories and all their
     * contents.  When a Delete Job request is received, the Batch service sets the
     * job to the deleting state. All update operations on a job that is in
     * deleting state will fail with status code 409 (Conflict), with additional
     * information indicating that the job is being deleted.
     *
     * @param {string} jobId The ID of the job to delete.
     *
     * @param {JobDeleteMethodOptionalParams} [options] Optional Parameters.
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
    deleteMethod(jobId: string): Promise<void>;
    deleteMethod(jobId: string, options: Models.JobDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(jobId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobId: string, options: Models.JobDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets information about the specified job.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJob} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJob} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobId: string): Promise<Models.CloudJob>;
    get(jobId: string, options: Models.JobGetOptionalParams): Promise<Models.CloudJob>;
    get(jobId: string, callback: msRest.ServiceCallback<Models.CloudJob>): void;
    get(jobId: string, options: Models.JobGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudJob>): void;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This replaces only the job properties specified in the request. For example,
     * if the job has constraints, and a request does not specify the constraints
     * element, then the job keeps the existing constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {JobPatchParameter} jobPatchParameter The parameters for the request.
     *
     * @param {JobPatchOptionalParams} [options] Optional Parameters.
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
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter): Promise<void>;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options: Models.JobPatchOptionalParams): Promise<void>;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options: Models.JobPatchOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This fully replaces all the updateable properties of the job. For example,
     * if the job has constraints associated with it and if constraints is not
     * specified with this request, then the Batch service will remove the existing
     * constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {JobUpdateParameter} jobUpdateParameter The parameters for the
     * request.
     *
     * @param {JobUpdateOptionalParams} [options] Optional Parameters.
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
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter): Promise<void>;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options: Models.JobUpdateOptionalParams): Promise<void>;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, callback: msRest.ServiceCallback<void>): void;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options: Models.JobUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables the specified job, preventing new tasks from running.
     *
     * The Batch Service immediately moves the job to the disabling state. Batch
     * then uses the disableTasks parameter to determine what to do with the
     * currently running tasks of the job. The job remains in the disabling state
     * until the disable operation is completed and all tasks have been dealt with
     * according to the disableTasks option; the job then moves to the disabled
     * state. No new tasks are started under the job until it moves back to active
     * state. If you try to disable a job that is in any state other than active,
     * disabling, or disabled, the request fails with status code 409.
     *
     * @param {string} jobId The ID of the job to disable.
     *
     * @param {JobDisableParameter} jobDisableParameter The parameters for the
     * request.
     *
     * @param {JobDisableOptionalParams} [options] Optional Parameters.
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
    disable(jobId: string, jobDisableParameter: Models.JobDisableParameter): Promise<void>;
    disable(jobId: string, jobDisableParameter: Models.JobDisableParameter, options: Models.JobDisableOptionalParams): Promise<void>;
    disable(jobId: string, jobDisableParameter: Models.JobDisableParameter, callback: msRest.ServiceCallback<void>): void;
    disable(jobId: string, jobDisableParameter: Models.JobDisableParameter, options: Models.JobDisableOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables the specified job, allowing new tasks to run.
     *
     * When you call this API, the Batch service sets a disabled job to the
     * enabling state. After the this operation is completed, the job moves to the
     * active state, and scheduling of new tasks under the job resumes. The Batch
     * service does not allow a task to remain in the active state for more than 7
     * days. Therefore, if you enable a job containing active tasks which were
     * added more than 7 days ago, those tasks will not run.
     *
     * @param {string} jobId The ID of the job to enable.
     *
     * @param {JobEnableOptionalParams} [options] Optional Parameters.
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
    enable(jobId: string): Promise<void>;
    enable(jobId: string, options: Models.JobEnableOptionalParams): Promise<void>;
    enable(jobId: string, callback: msRest.ServiceCallback<void>): void;
    enable(jobId: string, options: Models.JobEnableOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Terminates the specified job, marking it as completed.
     *
     * When a Terminate Job request is received, the Batch service sets the job to
     * the terminating state. The Batch service then terminates any running tasks
     * associated with the job and runs any required job release tasks. Then the
     * job moves into the completed state. If there are any tasks in the job in the
     * active state, they will remain in the active state. Once a job is
     * terminated, new tasks cannot be added and any remaining active tasks will
     * not be scheduled.
     *
     * @param {string} jobId The ID of the job to terminate.
     *
     * @param {JobTerminateOptionalParams} [options] Optional Parameters.
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
    terminate(jobId: string): Promise<void>;
    terminate(jobId: string, options: Models.JobTerminateOptionalParams): Promise<void>;
    terminate(jobId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobId: string, options: Models.JobTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Adds a job to the specified account.
     *
     * The Batch service supports two ways to control the work done as part of a
     * job. In the first approach, the user specifies a Job Manager task. The Batch
     * service launches this task when it is ready to start the job. The Job
     * Manager task controls all other tasks that run under this job, by using the
     * Task APIs. In the second approach, the user directly controls the execution
     * of tasks under an active job, by using the Task APIs. Also note: when naming
     * jobs, avoid including sensitive information such as user names or secret
     * project names. This information may appear in telemetry logs accessible to
     * Microsoft Support engineers.
     *
     * @param {JobAddParameter} job The job to be added.
     *
     * @param {JobAddOptionalParams} [options] Optional Parameters.
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
    add(job: Models.JobAddParameter): Promise<void>;
    add(job: Models.JobAddParameter, options: Models.JobAddOptionalParams): Promise<void>;
    add(job: Models.JobAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(job: Models.JobAddParameter, options: Models.JobAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {JobListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudJobListResult>;
    list(options: Models.JobListOptionalParams): Promise<Models.CloudJobListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    list(options: Models.JobListOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule from which you want
     * to get a list of jobs.
     *
     * @param {JobListFromJobScheduleOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromJobSchedule(jobScheduleId: string): Promise<Models.CloudJobListResult>;
    listFromJobSchedule(jobScheduleId: string, options: Models.JobListFromJobScheduleOptionalParams): Promise<Models.CloudJobListResult>;
    listFromJobSchedule(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listFromJobSchedule(jobScheduleId: string, options: Models.JobListFromJobScheduleOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the execution status of the Job Preparation and Job Release
     * task for the specified job across the compute nodes where the job has run.
     *
     * This API returns the Job Preparation and Job Release task status on all
     * compute nodes that have run the Job Preparation or Job Release task. This
     * includes nodes which have since been removed from the pool. If this API is
     * invoked on a job which has no Job Preparation or Job Release task, the Batch
     * service returns HTTP status code 409 (Conflict) with an error code of
     * JobPreparationTaskNotSpecified.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobListPreparationAndReleaseTaskStatusOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListPreparationAndReleaseTaskStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.CloudJobListPreparationAndReleaseTaskStatusResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listPreparationAndReleaseTaskStatus(jobId: string): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatus(jobId: string, options: Models.JobListPreparationAndReleaseTaskStatusOptionalParams): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatus(jobId: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
    listPreparationAndReleaseTaskStatus(jobId: string, options: Models.JobListPreparationAndReleaseTaskStatusOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
    /**
     * @summary Gets the task counts for the specified job.
     *
     * Task counts provide a count of the tasks by active, running or completed
     * task state, and a count of tasks which succeeded or failed. Tasks in the
     * preparing state are counted as running. If the validationStatus is
     * unvalidated, then the Batch service has not been able to check state counts
     * against the task states as reported in the List Tasks API. The
     * validationStatus may be unvalidated if the job contains more than 200,000
     * tasks.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {JobGetTaskCountsOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TaskCounts} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TaskCounts} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getTaskCounts(jobId: string): Promise<Models.TaskCounts>;
    getTaskCounts(jobId: string, options: Models.JobGetTaskCountsOptionalParams): Promise<Models.TaskCounts>;
    getTaskCounts(jobId: string, callback: msRest.ServiceCallback<Models.TaskCounts>): void;
    getTaskCounts(jobId: string, options: Models.JobGetTaskCountsOptionalParams, callback: msRest.ServiceCallback<Models.TaskCounts>): void;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudJobListResult>;
    listNext(nextPageLink: string, options: Models.JobListNextOptionalParams): Promise<Models.CloudJobListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listNext(nextPageLink: string, options: Models.JobListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListFromJobScheduleNextOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromJobScheduleNext(nextPageLink: string): Promise<Models.CloudJobListResult>;
    listFromJobScheduleNext(nextPageLink: string, options: Models.JobListFromJobScheduleNextOptionalParams): Promise<Models.CloudJobListResult>;
    listFromJobScheduleNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listFromJobScheduleNext(nextPageLink: string, options: Models.JobListFromJobScheduleNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the execution status of the Job Preparation and Job Release
     * task for the specified job across the compute nodes where the job has run.
     *
     * This API returns the Job Preparation and Job Release task status on all
     * compute nodes that have run the Job Preparation or Job Release task. This
     * includes nodes which have since been removed from the pool. If this API is
     * invoked on a job which has no Job Preparation or Job Release task, the Batch
     * service returns HTTP status code 409 (Conflict) with an error code of
     * JobPreparationTaskNotSpecified.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobListPreparationAndReleaseTaskStatusNextOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobListPreparationAndReleaseTaskStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      Models.CloudJobListPreparationAndReleaseTaskStatusResult}
     *                      for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
}
