import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClient } from "../batchServiceClient";
/** Class representing a JobSchedule. */
export declare class JobSchedule {
    private readonly client;
    /**
     * Create a JobSchedule.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Checks the specified job schedule exists.
     *
     * @param {string} jobScheduleId The ID of the job schedule which you want to
     * check.
     *
     * @param {JobScheduleExistsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    existsWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleExistsOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes a job schedule from the specified account.
     *
     * When you delete a job schedule, this also deletes all jobs and tasks under
     * that schedule. When tasks are deleted, all the files in their working
     * directories on the compute nodes are also deleted (the retention period is
     * ignored). The job schedule statistics are no longer accessible once the job
     * schedule is deleted, though they are still counted towards account lifetime
     * statistics.
     *
     * @param {string} jobScheduleId The ID of the job schedule to delete.
     *
     * @param {JobScheduleDeleteMethodOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleDeleteMethodOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to get.
     *
     * @param {JobScheduleGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleGetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified job schedule.
     *
     * This replaces only the job schedule properties specified in the request. For
     * example, if the schedule property is not specified with this request, then
     * the Batch service will keep the existing schedule. Changes to a job schedule
     * only impact jobs created by the schedule after the update has taken place;
     * currently running jobs are unaffected.
     *
     * @param {string} jobScheduleId The ID of the job schedule to update.
     *
     * @param {JobSchedulePatchParameter} jobSchedulePatchParameter The parameters
     * for the request.
     *
     * @param {JobSchedulePatchOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    patchWithHttpOperationResponse(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options?: Models.JobSchedulePatchOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified job schedule.
     *
     * This fully replaces all the updateable properties of the job schedule. For
     * example, if the schedule property is not specified with this request, then
     * the Batch service will remove the existing schedule. Changes to a job
     * schedule only impact jobs created by the schedule after the update has taken
     * place; currently running jobs are unaffected.
     *
     * @param {string} jobScheduleId The ID of the job schedule to update.
     *
     * @param {JobScheduleUpdateParameter} jobScheduleUpdateParameter The
     * parameters for the request.
     *
     * @param {JobScheduleUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options?: Models.JobScheduleUpdateOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Disables a job schedule.
     *
     * No new jobs will be created until the job schedule is enabled again.
     *
     * @param {string} jobScheduleId The ID of the job schedule to disable.
     *
     * @param {JobScheduleDisableOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    disableWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleDisableOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Enables a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to enable.
     *
     * @param {JobScheduleEnableOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    enableWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleEnableOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Terminates a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to terminates.
     *
     * @param {JobScheduleTerminateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    terminateWithHttpOperationResponse(jobScheduleId: string, options?: Models.JobScheduleTerminateOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a job schedule to the specified account.
     *
     * @param {JobScheduleAddParameter} cloudJobSchedule The job schedule to be
     * added.
     *
     * @param {JobScheduleAddOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addWithHttpOperationResponse(cloudJobSchedule: Models.JobScheduleAddParameter, options?: Models.JobScheduleAddOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {JobScheduleListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: Models.JobScheduleListOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobScheduleListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.JobScheduleListNextOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Checks the specified job schedule exists.
     *
     * @param {string} jobScheduleId The ID of the job schedule which you want to
     * check.
     *
     * @param {JobScheduleExistsOptionalParams} [options] Optional Parameters.
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
    exists(jobScheduleId: string): Promise<boolean>;
    exists(jobScheduleId: string, options: Models.JobScheduleExistsOptionalParams): Promise<boolean>;
    exists(jobScheduleId: string, callback: msRest.ServiceCallback<boolean>): void;
    exists(jobScheduleId: string, options: Models.JobScheduleExistsOptionalParams, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * @summary Deletes a job schedule from the specified account.
     *
     * When you delete a job schedule, this also deletes all jobs and tasks under
     * that schedule. When tasks are deleted, all the files in their working
     * directories on the compute nodes are also deleted (the retention period is
     * ignored). The job schedule statistics are no longer accessible once the job
     * schedule is deleted, though they are still counted towards account lifetime
     * statistics.
     *
     * @param {string} jobScheduleId The ID of the job schedule to delete.
     *
     * @param {JobScheduleDeleteMethodOptionalParams} [options] Optional
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
    deleteMethod(jobScheduleId: string): Promise<void>;
    deleteMethod(jobScheduleId: string, options: Models.JobScheduleDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobScheduleId: string, options: Models.JobScheduleDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to get.
     *
     * @param {JobScheduleGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobSchedule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobSchedule} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobScheduleId: string): Promise<Models.CloudJobSchedule>;
    get(jobScheduleId: string, options: Models.JobScheduleGetOptionalParams): Promise<Models.CloudJobSchedule>;
    get(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
    get(jobScheduleId: string, options: Models.JobScheduleGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
    /**
     * @summary Updates the properties of the specified job schedule.
     *
     * This replaces only the job schedule properties specified in the request. For
     * example, if the schedule property is not specified with this request, then
     * the Batch service will keep the existing schedule. Changes to a job schedule
     * only impact jobs created by the schedule after the update has taken place;
     * currently running jobs are unaffected.
     *
     * @param {string} jobScheduleId The ID of the job schedule to update.
     *
     * @param {JobSchedulePatchParameter} jobSchedulePatchParameter The parameters
     * for the request.
     *
     * @param {JobSchedulePatchOptionalParams} [options] Optional Parameters.
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
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter): Promise<void>;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options: Models.JobSchedulePatchOptionalParams): Promise<void>;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options: Models.JobSchedulePatchOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates the properties of the specified job schedule.
     *
     * This fully replaces all the updateable properties of the job schedule. For
     * example, if the schedule property is not specified with this request, then
     * the Batch service will remove the existing schedule. Changes to a job
     * schedule only impact jobs created by the schedule after the update has taken
     * place; currently running jobs are unaffected.
     *
     * @param {string} jobScheduleId The ID of the job schedule to update.
     *
     * @param {JobScheduleUpdateParameter} jobScheduleUpdateParameter The
     * parameters for the request.
     *
     * @param {JobScheduleUpdateOptionalParams} [options] Optional Parameters.
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
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter): Promise<void>;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options: Models.JobScheduleUpdateOptionalParams): Promise<void>;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, callback: msRest.ServiceCallback<void>): void;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options: Models.JobScheduleUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables a job schedule.
     *
     * No new jobs will be created until the job schedule is enabled again.
     *
     * @param {string} jobScheduleId The ID of the job schedule to disable.
     *
     * @param {JobScheduleDisableOptionalParams} [options] Optional Parameters.
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
    disable(jobScheduleId: string): Promise<void>;
    disable(jobScheduleId: string, options: Models.JobScheduleDisableOptionalParams): Promise<void>;
    disable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    disable(jobScheduleId: string, options: Models.JobScheduleDisableOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to enable.
     *
     * @param {JobScheduleEnableOptionalParams} [options] Optional Parameters.
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
    enable(jobScheduleId: string): Promise<void>;
    enable(jobScheduleId: string, options: Models.JobScheduleEnableOptionalParams): Promise<void>;
    enable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    enable(jobScheduleId: string, options: Models.JobScheduleEnableOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Terminates a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to terminates.
     *
     * @param {JobScheduleTerminateOptionalParams} [options] Optional Parameters.
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
    terminate(jobScheduleId: string): Promise<void>;
    terminate(jobScheduleId: string, options: Models.JobScheduleTerminateOptionalParams): Promise<void>;
    terminate(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobScheduleId: string, options: Models.JobScheduleTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Adds a job schedule to the specified account.
     *
     * @param {JobScheduleAddParameter} cloudJobSchedule The job schedule to be
     * added.
     *
     * @param {JobScheduleAddOptionalParams} [options] Optional Parameters.
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
    add(cloudJobSchedule: Models.JobScheduleAddParameter): Promise<void>;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, options: Models.JobScheduleAddOptionalParams): Promise<void>;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, options: Models.JobScheduleAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {JobScheduleListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobScheduleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobScheduleListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudJobScheduleListResult>;
    list(options: Models.JobScheduleListOptionalParams): Promise<Models.CloudJobScheduleListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    list(options: Models.JobScheduleListOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {JobScheduleListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CloudJobScheduleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CloudJobScheduleListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudJobScheduleListResult>;
    listNext(nextPageLink: string, options: Models.JobScheduleListNextOptionalParams): Promise<Models.CloudJobScheduleListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    listNext(nextPageLink: string, options: Models.JobScheduleListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
}
