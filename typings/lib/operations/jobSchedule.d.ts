import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleExistsOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleExistsOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleExistsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleExistsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleExistsOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleExistsOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleExistsOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleExistsOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleExistsOptions.ifUnmodifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has not been modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<boolean>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    existsWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleExistsOptions?: Models.JobScheduleExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleDeleteMethodOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.jobScheduleDeleteMethodOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobScheduleDeleteMethodOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.ifMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethodWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleDeleteMethodOptions?: Models.JobScheduleDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.jobScheduleGetOptions.select] An OData $select
     * clause.
     *
     * @param {string} [options.jobScheduleGetOptions.expand] An OData $expand
     * clause.
     *
     * @param {number} [options.jobScheduleGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleGetOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobScheduleGetOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleGetOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobSchedule>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleGetOptions?: Models.JobScheduleGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} jobSchedulePatchParameter The parameters for the request.
     *
     * @param {object} [jobSchedulePatchParameter.schedule] The schedule according
     * to which jobs will be created. If you do not specify this element, the
     * existing schedule is left unchanged.
     *
     * @param {date} [jobSchedulePatchParameter.schedule.doNotRunUntil] The
     * earliest time at which any job may be created under this job schedule. If
     * you do not specify a doNotRunUntil time, the schedule becomes ready to
     * create jobs immediately.
     *
     * @param {date} [jobSchedulePatchParameter.schedule.doNotRunAfter] A time
     * after which no job will be created under this job schedule. The schedule
     * will move to the completed state as soon as this deadline is past and there
     * is no active job under this job schedule. If you do not specify a
     * doNotRunAfter time, and you are creating a recurring job schedule, the job
     * schedule will remain active until you explicitly terminate it.
     *
     * @param {moment.duration} [jobSchedulePatchParameter.schedule.startWindow]
     * The time interval, starting from the time at which the schedule indicates a
     * job should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.schedule.recurrenceInterval] The time interval
     * between the start times of two successive jobs under the job schedule. A job
     * schedule can have at most one active job under it at any given time. Because
     * a job schedule can have at most one active job under it at any given time,
     * if it is time to create a new job under a job schedule, but the previous job
     * is still running, the Batch service will not create the new job until the
     * previous job finishes. If the previous job does not finish within the
     * startWindow period of the new recurrenceInterval, then no new job will be
     * scheduled for that interval. For recurring jobs, you should normally specify
     * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
     * you will need an external process to monitor when jobs are created, add
     * tasks to the jobs and terminate the jobs ready for the next recurrence. The
     * default is that the schedule does not recur: one job is created, within the
     * startWindow after the doNotRunUntil time, and the schedule is complete as
     * soon as that job finishes. The minimum value is 1 minute. If you specify a
     * lower value, the Batch service rejects the schedule with an error; if you
     * are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification] The details of
     * the jobs to be created on this schedule. Updates affect only jobs that are
     * started after the update has taken place. Any currently active job continues
     * with the older specification.
     *
     * @param {number} [jobSchedulePatchParameter.jobSpecification.priority] The
     * priority of jobs created under this schedule. Priority values can range from
     * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
     * highest priority. The default value is 0. This priority is used as the
     * default for all jobs under the job schedule. You can update a job's priority
     * after it has been created using by using the update job API.
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.displayName] The
     * display name for jobs created under this schedule. The name need not be
     * unique and can contain any Unicode characters up to a maximum length of
     * 1024.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.usesTaskDependencies] Whether
     * tasks in the job can define dependencies on each other. The default is
     * false.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.onAllTasksComplete] The action
     * the Batch service should take when all tasks in a job created under this
     * schedule are in the completed state. Note that if a job contains no tasks,
     * then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.onTaskFailure]
     * The action the Batch service should take when any task fails in a job
     * created under this schedule. A task is considered to have failed if it have
     * failed if has a failureInfo. A failureInfo is set if the task completes with
     * a non-zero exit code after exhausting its retry count, or if there was an
     * error starting the task, for example due to a resource file download error.
     * The default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.constraints] The
     * execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.constraints.maxTaskRetryCount]
     * The maximum number of times each task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try each
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * tasks. If the maximum retry count is -1, the Batch service retries tasks
     * without limit. The default value is 0 (no retries).
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.jobManagerTask]
     * The details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string} jobSchedulePatchParameter.jobSpecification.jobManagerTask.id
     * A string that uniquely identifies the Job Manager task within the job. The
     * ID can contain any combination of alphanumeric characters including hyphens
     * and underscores and cannot contain more than 64 characters.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.displayName] The
     * display name of the Job Manager task. It need not be unique and can contain
     * any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobManagerTask.commandLine The
     * command line of the Job Manager task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.outputFiles] A
     * list of files that the Batch service will upload from the compute node after
     * running the command line. For multi-instance tasks, the files will only be
     * uploaded from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.environmentSettings]
     * A list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.constraints]
     * Constraints that apply to the Job Manager task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.userIdentity] The
     * user identity under which the Job Manager task runs. If omitted, the task
     * runs as a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.runExclusive]
     * Whether the Job Manager task requires exclusive use of the compute node
     * where it runs. If true, no other tasks will run on the same compute node for
     * as long as the Job Manager is running. If false, other tasks can run
     * simultaneously with the Job Manager on a compute node. The Job Manager task
     * counts normally against the node's concurrent task limit, so this is only
     * relevant if the node allows multiple concurrent tasks. The default value is
     * true.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask] The Job
     * Preparation task for jobs created under this schedule. If a job has a Job
     * Preparation task, the Batch service will run the Job Preparation task on a
     * compute node before starting any tasks of that job on that compute node.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.id] A string
     * that uniquely identifies the Job Preparation task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobPreparationTask.commandLine
     * The command line of the Job Preparation task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.environmentSettings]
     * A list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.userIdentity]
     * The user identity under which the Job Preparation task runs. If omitted, the
     * task runs as a non-administrative user unique to the task on Windows nodes,
     * or a a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.jobReleaseTask]
     * The Job Release task for jobs created under this schedule. The primary
     * purpose of the Job Release task is to undo changes to compute nodes made by
     * the Job Preparation task. Example activities include deleting local files,
     * or shutting down services that were started as part of job preparation. A
     * Job Release task cannot be specified without also specifying a Job
     * Preparation task for the job. The Batch service runs the Job Release task on
     * the compute nodes that have run the Job Preparation task.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.id] A string that
     * uniquely identifies the Job Release task within the job. The ID can contain
     * any combination of alphanumeric characters including hyphens and underscores
     * and cannot contain more than 64 characters. If you do not specify this
     * property, the Batch service assigns a default value of 'jobrelease'. No
     * other task in the job can have the same ID as the Job Release task. If you
     * try to submit a task with the same id, the Batch service rejects the request
     * with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API
     * directly, the HTTP status code is 409 (Conflict).
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobReleaseTask.commandLine The
     * command line of the Job Release task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.environmentSettings]
     * A list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.maxWallClockTime]
     * The maximum elapsed time that the Job Release task may run on a given
     * compute node, measured from the time the task starts. If the task does not
     * complete within the time limit, the Batch service terminates it. The default
     * value is 15 minutes. You may not specify a timeout longer than 15 minutes.
     * If you do, the Batch service rejects it with an error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.retentionTime]
     * The minimum time to retain the task directory for the Job Release task on
     * the compute node. After this time, the Batch service may delete the task
     * directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.userIdentity] The
     * user identity under which the Job Release task runs. If omitted, the task
     * runs as a non-administrative user unique to the task.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.commonEnvironmentSettings] A
     * list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} jobSchedulePatchParameter.jobSpecification.poolInfo The pool
     * on which the Batch service runs the tasks of jobs created under this
     * schedule.
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.poolInfo.poolId]
     * The ID of an existing pool. All the tasks of the job will run on the
     * specified pool. You must ensure that the pool referenced by this property
     * exists. If the pool does not exist at the time the Batch service tries to
     * schedule a job, no tasks for the job will run until you create a pool with
     * that id. Note that the Batch service will not reject the job request; it
     * will simply not run tasks until the pool exists. You must specify either the
     * pool ID or the auto pool specification, but not both.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool]
     * The pool specification for the auto pool.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [jobSchedulePatchParameter.jobSpecification.metadata] A list
     * of name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [jobSchedulePatchParameter.metadata] A list of name-value
     * pairs associated with the job schedule as metadata. If you do not specify
     * this element, existing metadata is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobSchedulePatchOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobSchedulePatchOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobSchedulePatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobSchedulePatchOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobSchedulePatchOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobSchedulePatchOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobSchedulePatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobSchedulePatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobSchedulePatchOptions.ifUnmodifiedSince] A
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
    patchWithHttpOperationResponse(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options?: {
        jobSchedulePatchOptions?: Models.JobSchedulePatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} jobScheduleUpdateParameter The parameters for the request.
     *
     * @param {object} jobScheduleUpdateParameter.schedule The schedule according
     * to which jobs will be created. If you do not specify this element, it is
     * equivalent to passing the default schedule: that is, a single job scheduled
     * to run immediately.
     *
     * @param {date} [jobScheduleUpdateParameter.schedule.doNotRunUntil] The
     * earliest time at which any job may be created under this job schedule. If
     * you do not specify a doNotRunUntil time, the schedule becomes ready to
     * create jobs immediately.
     *
     * @param {date} [jobScheduleUpdateParameter.schedule.doNotRunAfter] A time
     * after which no job will be created under this job schedule. The schedule
     * will move to the completed state as soon as this deadline is past and there
     * is no active job under this job schedule. If you do not specify a
     * doNotRunAfter time, and you are creating a recurring job schedule, the job
     * schedule will remain active until you explicitly terminate it.
     *
     * @param {moment.duration} [jobScheduleUpdateParameter.schedule.startWindow]
     * The time interval, starting from the time at which the schedule indicates a
     * job should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.schedule.recurrenceInterval] The time interval
     * between the start times of two successive jobs under the job schedule. A job
     * schedule can have at most one active job under it at any given time. Because
     * a job schedule can have at most one active job under it at any given time,
     * if it is time to create a new job under a job schedule, but the previous job
     * is still running, the Batch service will not create the new job until the
     * previous job finishes. If the previous job does not finish within the
     * startWindow period of the new recurrenceInterval, then no new job will be
     * scheduled for that interval. For recurring jobs, you should normally specify
     * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
     * you will need an external process to monitor when jobs are created, add
     * tasks to the jobs and terminate the jobs ready for the next recurrence. The
     * default is that the schedule does not recur: one job is created, within the
     * startWindow after the doNotRunUntil time, and the schedule is complete as
     * soon as that job finishes. The minimum value is 1 minute. If you specify a
     * lower value, the Batch service rejects the schedule with an error; if you
     * are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {object} jobScheduleUpdateParameter.jobSpecification Details of the
     * jobs to be created on this schedule. Updates affect only jobs that are
     * started after the update has taken place. Any currently active job continues
     * with the older specification.
     *
     * @param {number} [jobScheduleUpdateParameter.jobSpecification.priority] The
     * priority of jobs created under this schedule. Priority values can range from
     * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
     * highest priority. The default value is 0. This priority is used as the
     * default for all jobs under the job schedule. You can update a job's priority
     * after it has been created using by using the update job API.
     *
     * @param {string} [jobScheduleUpdateParameter.jobSpecification.displayName]
     * The display name for jobs created under this schedule. The name need not be
     * unique and can contain any Unicode characters up to a maximum length of
     * 1024.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.usesTaskDependencies] Whether
     * tasks in the job can define dependencies on each other. The default is
     * false.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.onAllTasksComplete] The action
     * the Batch service should take when all tasks in a job created under this
     * schedule are in the completed state. Note that if a job contains no tasks,
     * then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [jobScheduleUpdateParameter.jobSpecification.onTaskFailure]
     * The action the Batch service should take when any task fails in a job
     * created under this schedule. A task is considered to have failed if it have
     * failed if has a failureInfo. A failureInfo is set if the task completes with
     * a non-zero exit code after exhausting its retry count, or if there was an
     * error starting the task, for example due to a resource file download error.
     * The default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.constraints]
     * The execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.constraints.maxTaskRetryCount]
     * The maximum number of times each task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try each
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * tasks. If the maximum retry count is -1, the Batch service retries tasks
     * without limit. The default value is 0 (no retries).
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.jobManagerTask]
     * The details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobManagerTask.id A string that
     * uniquely identifies the Job Manager task within the job. The ID can contain
     * any combination of alphanumeric characters including hyphens and underscores
     * and cannot contain more than 64 characters.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.displayName] The
     * display name of the Job Manager task. It need not be unique and can contain
     * any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobManagerTask.commandLine The
     * command line of the Job Manager task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.outputFiles] A
     * list of files that the Batch service will upload from the compute node after
     * running the command line. For multi-instance tasks, the files will only be
     * uploaded from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.environmentSettings]
     * A list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.constraints]
     * Constraints that apply to the Job Manager task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.userIdentity]
     * The user identity under which the Job Manager task runs. If omitted, the
     * task runs as a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.runExclusive]
     * Whether the Job Manager task requires exclusive use of the compute node
     * where it runs. If true, no other tasks will run on the same compute node for
     * as long as the Job Manager is running. If false, other tasks can run
     * simultaneously with the Job Manager on a compute node. The Job Manager task
     * counts normally against the node's concurrent task limit, so this is only
     * relevant if the node allows multiple concurrent tasks. The default value is
     * true.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask] The Job
     * Preparation task for jobs created under this schedule. If a job has a Job
     * Preparation task, the Batch service will run the Job Preparation task on a
     * compute node before starting any tasks of that job on that compute node.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.id] A string
     * that uniquely identifies the Job Preparation task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.commandLine
     * The command line of the Job Preparation task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.environmentSettings]
     * A list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.userIdentity]
     * The user identity under which the Job Preparation task runs. If omitted, the
     * task runs as a non-administrative user unique to the task on Windows nodes,
     * or a a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask]
     * The Job Release task for jobs created under this schedule. The primary
     * purpose of the Job Release task is to undo changes to compute nodes made by
     * the Job Preparation task. Example activities include deleting local files,
     * or shutting down services that were started as part of job preparation. A
     * Job Release task cannot be specified without also specifying a Job
     * Preparation task for the job. The Batch service runs the Job Release task on
     * the compute nodes that have run the Job Preparation task.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.id] A string
     * that uniquely identifies the Job Release task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobrelease'. No other task in the job can have the same ID as the Job
     * Release task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobReleaseTask; if
     * you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.commandLine The
     * command line of the Job Release task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.environmentSettings]
     * A list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.maxWallClockTime]
     * The maximum elapsed time that the Job Release task may run on a given
     * compute node, measured from the time the task starts. If the task does not
     * complete within the time limit, the Batch service terminates it. The default
     * value is 15 minutes. You may not specify a timeout longer than 15 minutes.
     * If you do, the Batch service rejects it with an error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.retentionTime]
     * The minimum time to retain the task directory for the Job Release task on
     * the compute node. After this time, the Batch service may delete the task
     * directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.userIdentity]
     * The user identity under which the Job Release task runs. If omitted, the
     * task runs as a non-administrative user unique to the task.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.commonEnvironmentSettings] A
     * list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} jobScheduleUpdateParameter.jobSpecification.poolInfo The
     * pool on which the Batch service runs the tasks of jobs created under this
     * schedule.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.poolId] The ID of an
     * existing pool. All the tasks of the job will run on the specified pool. You
     * must ensure that the pool referenced by this property exists. If the pool
     * does not exist at the time the Batch service tries to schedule a job, no
     * tasks for the job will run until you create a pool with that id. Note that
     * the Batch service will not reject the job request; it will simply not run
     * tasks until the pool exists. You must specify either the pool ID or the auto
     * pool specification, but not both.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool]
     * The pool specification for the auto pool.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [jobScheduleUpdateParameter.jobSpecification.metadata] A list
     * of name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [jobScheduleUpdateParameter.metadata] A list of name-value
     * pairs associated with the job schedule as metadata. If you do not specify
     * this element, it takes the default value of an empty list; in effect, any
     * existing metadata is deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleUpdateOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleUpdateOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleUpdateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleUpdateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ifUnmodifiedSince] A
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
    updateWithHttpOperationResponse(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options?: {
        jobScheduleUpdateOptions?: Models.JobScheduleUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Disables a job schedule.
     *
     * No new jobs will be created until the job schedule is enabled again.
     *
     * @param {string} jobScheduleId The ID of the job schedule to disable.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleDisableOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.jobScheduleDisableOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleDisableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleDisableOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleDisableOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleDisableOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleDisableOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleDisableOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleDisableOptions.ifUnmodifiedSince] A
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
    disableWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleDisableOptions?: Models.JobScheduleDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Enables a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to enable.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleEnableOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleEnableOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleEnableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleEnableOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleEnableOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleEnableOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleEnableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleEnableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleEnableOptions.ifUnmodifiedSince] A
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
    enableWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleEnableOptions?: Models.JobScheduleEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Terminates a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to terminates.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleTerminateOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.jobScheduleTerminateOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobScheduleTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleTerminateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleTerminateOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ifUnmodifiedSince] A
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
    terminateWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobScheduleTerminateOptions?: Models.JobScheduleTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a job schedule to the specified account.
     *
     * @param {object} cloudJobSchedule The job schedule to be added.
     *
     * @param {string} cloudJobSchedule.id A string that uniquely identifies the
     * schedule within the account. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores, and cannot
     * contain more than 64 characters. The ID is case-preserving and
     * case-insensitive (that is, you may not have two IDs within an account that
     * differ only by case).
     *
     * @param {string} [cloudJobSchedule.displayName] The display name for the
     * schedule. The display name need not be unique and can contain any Unicode
     * characters up to a maximum length of 1024.
     *
     * @param {object} cloudJobSchedule.schedule The schedule according to which
     * jobs will be created.
     *
     * @param {date} [cloudJobSchedule.schedule.doNotRunUntil] The earliest time at
     * which any job may be created under this job schedule. If you do not specify
     * a doNotRunUntil time, the schedule becomes ready to create jobs immediately.
     *
     * @param {date} [cloudJobSchedule.schedule.doNotRunAfter] A time after which
     * no job will be created under this job schedule. The schedule will move to
     * the completed state as soon as this deadline is past and there is no active
     * job under this job schedule. If you do not specify a doNotRunAfter time, and
     * you are creating a recurring job schedule, the job schedule will remain
     * active until you explicitly terminate it.
     *
     * @param {moment.duration} [cloudJobSchedule.schedule.startWindow] The time
     * interval, starting from the time at which the schedule indicates a job
     * should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration} [cloudJobSchedule.schedule.recurrenceInterval] The
     * time interval between the start times of two successive jobs under the job
     * schedule. A job schedule can have at most one active job under it at any
     * given time. Because a job schedule can have at most one active job under it
     * at any given time, if it is time to create a new job under a job schedule,
     * but the previous job is still running, the Batch service will not create the
     * new job until the previous job finishes. If the previous job does not finish
     * within the startWindow period of the new recurrenceInterval, then no new job
     * will be scheduled for that interval. For recurring jobs, you should normally
     * specify a jobManagerTask in the jobSpecification. If you do not use
     * jobManagerTask, you will need an external process to monitor when jobs are
     * created, add tasks to the jobs and terminate the jobs ready for the next
     * recurrence. The default is that the schedule does not recur: one job is
     * created, within the startWindow after the doNotRunUntil time, and the
     * schedule is complete as soon as that job finishes. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object} cloudJobSchedule.jobSpecification The details of the jobs to
     * be created on this schedule.
     *
     * @param {number} [cloudJobSchedule.jobSpecification.priority] The priority of
     * jobs created under this schedule. Priority values can range from -1000 to
     * 1000, with -1000 being the lowest priority and 1000 being the highest
     * priority. The default value is 0. This priority is used as the default for
     * all jobs under the job schedule. You can update a job's priority after it
     * has been created using by using the update job API.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.displayName] The display
     * name for jobs created under this schedule. The name need not be unique and
     * can contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {boolean} [cloudJobSchedule.jobSpecification.usesTaskDependencies]
     * Whether tasks in the job can define dependencies on each other. The default
     * is false.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.onAllTasksComplete] The
     * action the Batch service should take when all tasks in a job created under
     * this schedule are in the completed state. Note that if a job contains no
     * tasks, then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [cloudJobSchedule.jobSpecification.onTaskFailure] The action
     * the Batch service should take when any task fails in a job created under
     * this schedule. A task is considered to have failed if it have failed if has
     * a failureInfo. A failureInfo is set if the task completes with a non-zero
     * exit code after exhausting its retry count, or if there was an error
     * starting the task, for example due to a resource file download error. The
     * default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [cloudJobSchedule.jobSpecification.constraints] The
     * execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.constraints.maxWallClockTime] The maximum
     * elapsed time that the job may run, measured from the time the job is
     * created. If the job does not complete within the time limit, the Batch
     * service terminates it and any tasks that are still running. In this case,
     * the termination reason will be MaxWallClockTimeExpiry. If this property is
     * not specified, there is no time limit on how long the job may run.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobManagerTask] The
     * details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobManagerTask.id A string
     * that uniquely identifies the Job Manager task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.displayName] The display
     * name of the Job Manager task. It need not be unique and can contain any
     * Unicode characters up to a maximum length of 1024.
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobManagerTask.commandLine
     * The command line of the Job Manager task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.outputFiles] A list of
     * files that the Batch service will upload from the compute node after running
     * the command line. For multi-instance tasks, the files will only be uploaded
     * from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.environmentSettings] A
     * list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.constraints] Constraints
     * that apply to the Job Manager task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.userIdentity] The user
     * identity under which the Job Manager task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.runExclusive] Whether the
     * Job Manager task requires exclusive use of the compute node where it runs.
     * If true, no other tasks will run on the same compute node for as long as the
     * Job Manager is running. If false, other tasks can run simultaneously with
     * the Job Manager on a compute node. The Job Manager task counts normally
     * against the node's concurrent task limit, so this is only relevant if the
     * node allows multiple concurrent tasks. The default value is true.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobPreparationTask] The
     * Job Preparation task for jobs created under this schedule. If a job has a
     * Job Preparation task, the Batch service will run the Job Preparation task on
     * a compute node before starting any tasks of that job on that compute node.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.jobPreparationTask.id] A
     * string that uniquely identifies the Job Preparation task within the job. The
     * ID can contain any combination of alphanumeric characters including hyphens
     * and underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.jobPreparationTask.commandLine The command
     * line of the Job Preparation task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.resourceFiles] A list
     * of files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.environmentSettings] A
     * list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.userIdentity] The user
     * identity under which the Job Preparation task runs. If omitted, the task
     * runs as a non-administrative user unique to the task on Windows nodes, or a
     * a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobReleaseTask] The Job
     * Release task for jobs created under this schedule. The primary purpose of
     * the Job Release task is to undo changes to compute nodes made by the Job
     * Preparation task. Example activities include deleting local files, or
     * shutting down services that were started as part of job preparation. A Job
     * Release task cannot be specified without also specifying a Job Preparation
     * task for the job. The Batch service runs the Job Release task on the compute
     * nodes that have run the Job Preparation task.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.jobReleaseTask.id] A
     * string that uniquely identifies the Job Release task within the job. The ID
     * can contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobrelease'. No other task in the job can have the same ID as the Job
     * Release task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobReleaseTask; if
     * you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobReleaseTask.commandLine
     * The command line of the Job Release task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.environmentSettings] A
     * list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.maxWallClockTime] The
     * maximum elapsed time that the Job Release task may run on a given compute
     * node, measured from the time the task starts. If the task does not complete
     * within the time limit, the Batch service terminates it. The default value is
     * 15 minutes. You may not specify a timeout longer than 15 minutes. If you do,
     * the Batch service rejects it with an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.retentionTime] The minimum
     * time to retain the task directory for the Job Release task on the compute
     * node. After this time, the Batch service may delete the task directory and
     * all its contents. The default is infinite, i.e. the task directory will be
     * retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.userIdentity] The user
     * identity under which the Job Release task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {array} [cloudJobSchedule.jobSpecification.commonEnvironmentSettings]
     * A list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} cloudJobSchedule.jobSpecification.poolInfo The pool on which
     * the Batch service runs the tasks of jobs created under this schedule.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.poolInfo.poolId] The ID
     * of an existing pool. All the tasks of the job will run on the specified
     * pool. You must ensure that the pool referenced by this property exists. If
     * the pool does not exist at the time the Batch service tries to schedule a
     * job, no tasks for the job will run until you create a pool with that id.
     * Note that the Batch service will not reject the job request; it will simply
     * not run tasks until the pool exists. You must specify either the pool ID or
     * the auto pool specification, but not both.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [cloudJobSchedule.jobSpecification.metadata] A list of
     * name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [cloudJobSchedule.metadata] A list of name-value pairs
     * associated with the schedule as metadata. The Batch service does not assign
     * any meaning to metadata; it is solely for the use of user code.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleAddOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleAddOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleAddOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleAddOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
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
    addWithHttpOperationResponse(cloudJobSchedule: Models.JobScheduleAddParameter, options?: {
        jobScheduleAddOptions?: Models.JobScheduleAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.jobScheduleListOptions.filter] An OData $filter
     * clause.
     *
     * @param {string} [options.jobScheduleListOptions.select] An OData $select
     * clause.
     *
     * @param {string} [options.jobScheduleListOptions.expand] An OData $expand
     * clause.
     *
     * @param {number} [options.jobScheduleListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 job schedules
     * can be returned.
     *
     * @param {number} [options.jobScheduleListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleListOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobScheduleListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        jobScheduleListOptions?: Models.JobScheduleListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.jobScheduleListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleListNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobScheduleListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        jobScheduleListNextOptions?: Models.JobScheduleListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Checks the specified job schedule exists.
     *
     * @param {string} jobScheduleId The ID of the job schedule which you want to
     * check.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleExistsOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleExistsOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleExistsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleExistsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleExistsOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleExistsOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleExistsOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleExistsOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleExistsOptions.ifUnmodifiedSince] A
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
     *                      {boolean} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    exists(jobScheduleId: string): Promise<boolean>;
    exists(jobScheduleId: string, options: {
        jobScheduleExistsOptions?: Models.JobScheduleExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<boolean>;
    exists(jobScheduleId: string, callback: msRest.ServiceCallback<boolean>): void;
    exists(jobScheduleId: string, options: {
        jobScheduleExistsOptions?: Models.JobScheduleExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<boolean>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleDeleteMethodOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.jobScheduleDeleteMethodOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobScheduleDeleteMethodOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.ifMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleDeleteMethodOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethod(jobScheduleId: string): Promise<void>;
    deleteMethod(jobScheduleId: string, options: {
        jobScheduleDeleteMethodOptions?: Models.JobScheduleDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobScheduleId: string, options: {
        jobScheduleDeleteMethodOptions?: Models.JobScheduleDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.jobScheduleGetOptions.select] An OData $select
     * clause.
     *
     * @param {string} [options.jobScheduleGetOptions.expand] An OData $expand
     * clause.
     *
     * @param {number} [options.jobScheduleGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleGetOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobScheduleGetOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleGetOptions.ifUnmodifiedSince] A timestamp
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
     *                      {CloudJobSchedule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobSchedule} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobScheduleId: string): Promise<Models.CloudJobSchedule>;
    get(jobScheduleId: string, options: {
        jobScheduleGetOptions?: Models.JobScheduleGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobSchedule>;
    get(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
    get(jobScheduleId: string, options: {
        jobScheduleGetOptions?: Models.JobScheduleGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobSchedule>): void;
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
     * @param {object} jobSchedulePatchParameter The parameters for the request.
     *
     * @param {object} [jobSchedulePatchParameter.schedule] The schedule according
     * to which jobs will be created. If you do not specify this element, the
     * existing schedule is left unchanged.
     *
     * @param {date} [jobSchedulePatchParameter.schedule.doNotRunUntil] The
     * earliest time at which any job may be created under this job schedule. If
     * you do not specify a doNotRunUntil time, the schedule becomes ready to
     * create jobs immediately.
     *
     * @param {date} [jobSchedulePatchParameter.schedule.doNotRunAfter] A time
     * after which no job will be created under this job schedule. The schedule
     * will move to the completed state as soon as this deadline is past and there
     * is no active job under this job schedule. If you do not specify a
     * doNotRunAfter time, and you are creating a recurring job schedule, the job
     * schedule will remain active until you explicitly terminate it.
     *
     * @param {moment.duration} [jobSchedulePatchParameter.schedule.startWindow]
     * The time interval, starting from the time at which the schedule indicates a
     * job should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.schedule.recurrenceInterval] The time interval
     * between the start times of two successive jobs under the job schedule. A job
     * schedule can have at most one active job under it at any given time. Because
     * a job schedule can have at most one active job under it at any given time,
     * if it is time to create a new job under a job schedule, but the previous job
     * is still running, the Batch service will not create the new job until the
     * previous job finishes. If the previous job does not finish within the
     * startWindow period of the new recurrenceInterval, then no new job will be
     * scheduled for that interval. For recurring jobs, you should normally specify
     * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
     * you will need an external process to monitor when jobs are created, add
     * tasks to the jobs and terminate the jobs ready for the next recurrence. The
     * default is that the schedule does not recur: one job is created, within the
     * startWindow after the doNotRunUntil time, and the schedule is complete as
     * soon as that job finishes. The minimum value is 1 minute. If you specify a
     * lower value, the Batch service rejects the schedule with an error; if you
     * are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification] The details of
     * the jobs to be created on this schedule. Updates affect only jobs that are
     * started after the update has taken place. Any currently active job continues
     * with the older specification.
     *
     * @param {number} [jobSchedulePatchParameter.jobSpecification.priority] The
     * priority of jobs created under this schedule. Priority values can range from
     * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
     * highest priority. The default value is 0. This priority is used as the
     * default for all jobs under the job schedule. You can update a job's priority
     * after it has been created using by using the update job API.
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.displayName] The
     * display name for jobs created under this schedule. The name need not be
     * unique and can contain any Unicode characters up to a maximum length of
     * 1024.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.usesTaskDependencies] Whether
     * tasks in the job can define dependencies on each other. The default is
     * false.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.onAllTasksComplete] The action
     * the Batch service should take when all tasks in a job created under this
     * schedule are in the completed state. Note that if a job contains no tasks,
     * then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.onTaskFailure]
     * The action the Batch service should take when any task fails in a job
     * created under this schedule. A task is considered to have failed if it have
     * failed if has a failureInfo. A failureInfo is set if the task completes with
     * a non-zero exit code after exhausting its retry count, or if there was an
     * error starting the task, for example due to a resource file download error.
     * The default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.constraints] The
     * execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.constraints.maxTaskRetryCount]
     * The maximum number of times each task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try each
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * tasks. If the maximum retry count is -1, the Batch service retries tasks
     * without limit. The default value is 0 (no retries).
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.jobManagerTask]
     * The details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string} jobSchedulePatchParameter.jobSpecification.jobManagerTask.id
     * A string that uniquely identifies the Job Manager task within the job. The
     * ID can contain any combination of alphanumeric characters including hyphens
     * and underscores and cannot contain more than 64 characters.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.displayName] The
     * display name of the Job Manager task. It need not be unique and can contain
     * any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobManagerTask.commandLine The
     * command line of the Job Manager task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.outputFiles] A
     * list of files that the Batch service will upload from the compute node after
     * running the command line. For multi-instance tasks, the files will only be
     * uploaded from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.environmentSettings]
     * A list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.constraints]
     * Constraints that apply to the Job Manager task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.userIdentity] The
     * user identity under which the Job Manager task runs. If omitted, the task
     * runs as a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.runExclusive]
     * Whether the Job Manager task requires exclusive use of the compute node
     * where it runs. If true, no other tasks will run on the same compute node for
     * as long as the Job Manager is running. If false, other tasks can run
     * simultaneously with the Job Manager on a compute node. The Job Manager task
     * counts normally against the node's concurrent task limit, so this is only
     * relevant if the node allows multiple concurrent tasks. The default value is
     * true.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask] The Job
     * Preparation task for jobs created under this schedule. If a job has a Job
     * Preparation task, the Batch service will run the Job Preparation task on a
     * compute node before starting any tasks of that job on that compute node.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.id] A string
     * that uniquely identifies the Job Preparation task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobPreparationTask.commandLine
     * The command line of the Job Preparation task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.environmentSettings]
     * A list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.userIdentity]
     * The user identity under which the Job Preparation task runs. If omitted, the
     * task runs as a non-administrative user unique to the task on Windows nodes,
     * or a a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [jobSchedulePatchParameter.jobSpecification.jobReleaseTask]
     * The Job Release task for jobs created under this schedule. The primary
     * purpose of the Job Release task is to undo changes to compute nodes made by
     * the Job Preparation task. Example activities include deleting local files,
     * or shutting down services that were started as part of job preparation. A
     * Job Release task cannot be specified without also specifying a Job
     * Preparation task for the job. The Batch service runs the Job Release task on
     * the compute nodes that have run the Job Preparation task.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.id] A string that
     * uniquely identifies the Job Release task within the job. The ID can contain
     * any combination of alphanumeric characters including hyphens and underscores
     * and cannot contain more than 64 characters. If you do not specify this
     * property, the Batch service assigns a default value of 'jobrelease'. No
     * other task in the job can have the same ID as the Job Release task. If you
     * try to submit a task with the same id, the Batch service rejects the request
     * with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API
     * directly, the HTTP status code is 409 (Conflict).
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.jobReleaseTask.commandLine The
     * command line of the Job Release task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.environmentSettings]
     * A list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.maxWallClockTime]
     * The maximum elapsed time that the Job Release task may run on a given
     * compute node, measured from the time the task starts. If the task does not
     * complete within the time limit, the Batch service terminates it. The default
     * value is 15 minutes. You may not specify a timeout longer than 15 minutes.
     * If you do, the Batch service rejects it with an error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.retentionTime]
     * The minimum time to retain the task directory for the Job Release task on
     * the compute node. After this time, the Batch service may delete the task
     * directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.jobReleaseTask.userIdentity] The
     * user identity under which the Job Release task runs. If omitted, the task
     * runs as a non-administrative user unique to the task.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.commonEnvironmentSettings] A
     * list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} jobSchedulePatchParameter.jobSpecification.poolInfo The pool
     * on which the Batch service runs the tasks of jobs created under this
     * schedule.
     *
     * @param {string} [jobSchedulePatchParameter.jobSpecification.poolInfo.poolId]
     * The ID of an existing pool. All the tasks of the job will run on the
     * specified pool. You must ensure that the pool referenced by this property
     * exists. If the pool does not exist at the time the Batch service tries to
     * schedule a job, no tasks for the job will run until you create a pool with
     * that id. Note that the Batch service will not reject the job request; it
     * will simply not run tasks until the pool exists. You must specify either the
     * pool ID or the auto pool specification, but not both.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool]
     * The pool specification for the auto pool.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobSchedulePatchParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [jobSchedulePatchParameter.jobSpecification.metadata] A list
     * of name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [jobSchedulePatchParameter.metadata] A list of name-value
     * pairs associated with the job schedule as metadata. If you do not specify
     * this element, existing metadata is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobSchedulePatchOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobSchedulePatchOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobSchedulePatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobSchedulePatchOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobSchedulePatchOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobSchedulePatchOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobSchedulePatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobSchedulePatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobSchedulePatchOptions.ifUnmodifiedSince] A
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
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter): Promise<void>;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options: {
        jobSchedulePatchOptions?: Models.JobSchedulePatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(jobScheduleId: string, jobSchedulePatchParameter: Models.JobSchedulePatchParameter, options: {
        jobSchedulePatchOptions?: Models.JobSchedulePatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} jobScheduleUpdateParameter The parameters for the request.
     *
     * @param {object} jobScheduleUpdateParameter.schedule The schedule according
     * to which jobs will be created. If you do not specify this element, it is
     * equivalent to passing the default schedule: that is, a single job scheduled
     * to run immediately.
     *
     * @param {date} [jobScheduleUpdateParameter.schedule.doNotRunUntil] The
     * earliest time at which any job may be created under this job schedule. If
     * you do not specify a doNotRunUntil time, the schedule becomes ready to
     * create jobs immediately.
     *
     * @param {date} [jobScheduleUpdateParameter.schedule.doNotRunAfter] A time
     * after which no job will be created under this job schedule. The schedule
     * will move to the completed state as soon as this deadline is past and there
     * is no active job under this job schedule. If you do not specify a
     * doNotRunAfter time, and you are creating a recurring job schedule, the job
     * schedule will remain active until you explicitly terminate it.
     *
     * @param {moment.duration} [jobScheduleUpdateParameter.schedule.startWindow]
     * The time interval, starting from the time at which the schedule indicates a
     * job should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.schedule.recurrenceInterval] The time interval
     * between the start times of two successive jobs under the job schedule. A job
     * schedule can have at most one active job under it at any given time. Because
     * a job schedule can have at most one active job under it at any given time,
     * if it is time to create a new job under a job schedule, but the previous job
     * is still running, the Batch service will not create the new job until the
     * previous job finishes. If the previous job does not finish within the
     * startWindow period of the new recurrenceInterval, then no new job will be
     * scheduled for that interval. For recurring jobs, you should normally specify
     * a jobManagerTask in the jobSpecification. If you do not use jobManagerTask,
     * you will need an external process to monitor when jobs are created, add
     * tasks to the jobs and terminate the jobs ready for the next recurrence. The
     * default is that the schedule does not recur: one job is created, within the
     * startWindow after the doNotRunUntil time, and the schedule is complete as
     * soon as that job finishes. The minimum value is 1 minute. If you specify a
     * lower value, the Batch service rejects the schedule with an error; if you
     * are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {object} jobScheduleUpdateParameter.jobSpecification Details of the
     * jobs to be created on this schedule. Updates affect only jobs that are
     * started after the update has taken place. Any currently active job continues
     * with the older specification.
     *
     * @param {number} [jobScheduleUpdateParameter.jobSpecification.priority] The
     * priority of jobs created under this schedule. Priority values can range from
     * -1000 to 1000, with -1000 being the lowest priority and 1000 being the
     * highest priority. The default value is 0. This priority is used as the
     * default for all jobs under the job schedule. You can update a job's priority
     * after it has been created using by using the update job API.
     *
     * @param {string} [jobScheduleUpdateParameter.jobSpecification.displayName]
     * The display name for jobs created under this schedule. The name need not be
     * unique and can contain any Unicode characters up to a maximum length of
     * 1024.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.usesTaskDependencies] Whether
     * tasks in the job can define dependencies on each other. The default is
     * false.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.onAllTasksComplete] The action
     * the Batch service should take when all tasks in a job created under this
     * schedule are in the completed state. Note that if a job contains no tasks,
     * then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [jobScheduleUpdateParameter.jobSpecification.onTaskFailure]
     * The action the Batch service should take when any task fails in a job
     * created under this schedule. A task is considered to have failed if it have
     * failed if has a failureInfo. A failureInfo is set if the task completes with
     * a non-zero exit code after exhausting its retry count, or if there was an
     * error starting the task, for example due to a resource file download error.
     * The default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.constraints]
     * The execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.constraints.maxTaskRetryCount]
     * The maximum number of times each task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try each
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries a task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * tasks. If the maximum retry count is -1, the Batch service retries tasks
     * without limit. The default value is 0 (no retries).
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.jobManagerTask]
     * The details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobManagerTask.id A string that
     * uniquely identifies the Job Manager task within the job. The ID can contain
     * any combination of alphanumeric characters including hyphens and underscores
     * and cannot contain more than 64 characters.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.displayName] The
     * display name of the Job Manager task. It need not be unique and can contain
     * any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobManagerTask.commandLine The
     * command line of the Job Manager task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.outputFiles] A
     * list of files that the Batch service will upload from the compute node after
     * running the command line. For multi-instance tasks, the files will only be
     * uploaded from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.environmentSettings]
     * A list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.constraints]
     * Constraints that apply to the Job Manager task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.userIdentity]
     * The user identity under which the Job Manager task runs. If omitted, the
     * task runs as a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.runExclusive]
     * Whether the Job Manager task requires exclusive use of the compute node
     * where it runs. If true, no other tasks will run on the same compute node for
     * as long as the Job Manager is running. If false, other tasks can run
     * simultaneously with the Job Manager on a compute node. The Job Manager task
     * counts normally against the node's concurrent task limit, so this is only
     * relevant if the node allows multiple concurrent tasks. The default value is
     * true.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask] The Job
     * Preparation task for jobs created under this schedule. If a job has a Job
     * Preparation task, the Batch service will run the Job Preparation task on a
     * compute node before starting any tasks of that job on that compute node.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.id] A string
     * that uniquely identifies the Job Preparation task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.commandLine
     * The command line of the Job Preparation task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.environmentSettings]
     * A list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.userIdentity]
     * The user identity under which the Job Preparation task runs. If omitted, the
     * task runs as a non-administrative user unique to the task on Windows nodes,
     * or a a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask]
     * The Job Release task for jobs created under this schedule. The primary
     * purpose of the Job Release task is to undo changes to compute nodes made by
     * the Job Preparation task. Example activities include deleting local files,
     * or shutting down services that were started as part of job preparation. A
     * Job Release task cannot be specified without also specifying a Job
     * Preparation task for the job. The Batch service runs the Job Release task on
     * the compute nodes that have run the Job Preparation task.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.id] A string
     * that uniquely identifies the Job Release task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobrelease'. No other task in the job can have the same ID as the Job
     * Release task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobReleaseTask; if
     * you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.commandLine The
     * command line of the Job Release task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.environmentSettings]
     * A list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.maxWallClockTime]
     * The maximum elapsed time that the Job Release task may run on a given
     * compute node, measured from the time the task starts. If the task does not
     * complete within the time limit, the Batch service terminates it. The default
     * value is 15 minutes. You may not specify a timeout longer than 15 minutes.
     * If you do, the Batch service rejects it with an error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.retentionTime]
     * The minimum time to retain the task directory for the Job Release task on
     * the compute node. After this time, the Batch service may delete the task
     * directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.jobReleaseTask.userIdentity]
     * The user identity under which the Job Release task runs. If omitted, the
     * task runs as a non-administrative user unique to the task.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.commonEnvironmentSettings] A
     * list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} jobScheduleUpdateParameter.jobSpecification.poolInfo The
     * pool on which the Batch service runs the tasks of jobs created under this
     * schedule.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.poolId] The ID of an
     * existing pool. All the tasks of the job will run on the specified pool. You
     * must ensure that the pool referenced by this property exists. If the pool
     * does not exist at the time the Batch service tries to schedule a job, no
     * tasks for the job will run until you create a pool with that id. Note that
     * the Batch service will not reject the job request; it will simply not run
     * tasks until the pool exists. You must specify either the pool ID or the auto
     * pool specification, but not both.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool]
     * The pool specification for the auto pool.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobScheduleUpdateParameter.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [jobScheduleUpdateParameter.jobSpecification.metadata] A list
     * of name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [jobScheduleUpdateParameter.metadata] A list of name-value
     * pairs associated with the job schedule as metadata. If you do not specify
     * this element, it takes the default value of an empty list; in effect, any
     * existing metadata is deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleUpdateOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleUpdateOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleUpdateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleUpdateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleUpdateOptions.ifUnmodifiedSince] A
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
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter): Promise<void>;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options: {
        jobScheduleUpdateOptions?: Models.JobScheduleUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, callback: msRest.ServiceCallback<void>): void;
    update(jobScheduleId: string, jobScheduleUpdateParameter: Models.JobScheduleUpdateParameter, options: {
        jobScheduleUpdateOptions?: Models.JobScheduleUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables a job schedule.
     *
     * No new jobs will be created until the job schedule is enabled again.
     *
     * @param {string} jobScheduleId The ID of the job schedule to disable.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleDisableOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.jobScheduleDisableOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleDisableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleDisableOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleDisableOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleDisableOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleDisableOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleDisableOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleDisableOptions.ifUnmodifiedSince] A
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
    disable(jobScheduleId: string): Promise<void>;
    disable(jobScheduleId: string, options: {
        jobScheduleDisableOptions?: Models.JobScheduleDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    disable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    disable(jobScheduleId: string, options: {
        jobScheduleDisableOptions?: Models.JobScheduleDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to enable.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleEnableOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleEnableOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleEnableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleEnableOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleEnableOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleEnableOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleEnableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleEnableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobScheduleEnableOptions.ifUnmodifiedSince] A
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
    enable(jobScheduleId: string): Promise<void>;
    enable(jobScheduleId: string, options: {
        jobScheduleEnableOptions?: Models.JobScheduleEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    enable(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    enable(jobScheduleId: string, options: {
        jobScheduleEnableOptions?: Models.JobScheduleEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Terminates a job schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule to terminates.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleTerminateOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.jobScheduleTerminateOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobScheduleTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleTerminateOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.jobScheduleTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobScheduleTerminateOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.jobScheduleTerminateOptions.ifUnmodifiedSince] A
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
    terminate(jobScheduleId: string): Promise<void>;
    terminate(jobScheduleId: string, options: {
        jobScheduleTerminateOptions?: Models.JobScheduleTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    terminate(jobScheduleId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobScheduleId: string, options: {
        jobScheduleTerminateOptions?: Models.JobScheduleTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Adds a job schedule to the specified account.
     *
     * @param {object} cloudJobSchedule The job schedule to be added.
     *
     * @param {string} cloudJobSchedule.id A string that uniquely identifies the
     * schedule within the account. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores, and cannot
     * contain more than 64 characters. The ID is case-preserving and
     * case-insensitive (that is, you may not have two IDs within an account that
     * differ only by case).
     *
     * @param {string} [cloudJobSchedule.displayName] The display name for the
     * schedule. The display name need not be unique and can contain any Unicode
     * characters up to a maximum length of 1024.
     *
     * @param {object} cloudJobSchedule.schedule The schedule according to which
     * jobs will be created.
     *
     * @param {date} [cloudJobSchedule.schedule.doNotRunUntil] The earliest time at
     * which any job may be created under this job schedule. If you do not specify
     * a doNotRunUntil time, the schedule becomes ready to create jobs immediately.
     *
     * @param {date} [cloudJobSchedule.schedule.doNotRunAfter] A time after which
     * no job will be created under this job schedule. The schedule will move to
     * the completed state as soon as this deadline is past and there is no active
     * job under this job schedule. If you do not specify a doNotRunAfter time, and
     * you are creating a recurring job schedule, the job schedule will remain
     * active until you explicitly terminate it.
     *
     * @param {moment.duration} [cloudJobSchedule.schedule.startWindow] The time
     * interval, starting from the time at which the schedule indicates a job
     * should be created, within which a job must be created. If a job is not
     * created within the startWindow interval, then the 'opportunity' is lost; no
     * job will be created until the next recurrence of the schedule. If the
     * schedule is recurring, and the startWindow is longer than the recurrence
     * interval, then this is equivalent to an infinite startWindow, because the
     * job that is 'due' in one recurrenceInterval is not carried forward into the
     * next recurrence interval. The default is infinite. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {moment.duration} [cloudJobSchedule.schedule.recurrenceInterval] The
     * time interval between the start times of two successive jobs under the job
     * schedule. A job schedule can have at most one active job under it at any
     * given time. Because a job schedule can have at most one active job under it
     * at any given time, if it is time to create a new job under a job schedule,
     * but the previous job is still running, the Batch service will not create the
     * new job until the previous job finishes. If the previous job does not finish
     * within the startWindow period of the new recurrenceInterval, then no new job
     * will be scheduled for that interval. For recurring jobs, you should normally
     * specify a jobManagerTask in the jobSpecification. If you do not use
     * jobManagerTask, you will need an external process to monitor when jobs are
     * created, add tasks to the jobs and terminate the jobs ready for the next
     * recurrence. The default is that the schedule does not recur: one job is
     * created, within the startWindow after the doNotRunUntil time, and the
     * schedule is complete as soon as that job finishes. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the schedule
     * with an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object} cloudJobSchedule.jobSpecification The details of the jobs to
     * be created on this schedule.
     *
     * @param {number} [cloudJobSchedule.jobSpecification.priority] The priority of
     * jobs created under this schedule. Priority values can range from -1000 to
     * 1000, with -1000 being the lowest priority and 1000 being the highest
     * priority. The default value is 0. This priority is used as the default for
     * all jobs under the job schedule. You can update a job's priority after it
     * has been created using by using the update job API.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.displayName] The display
     * name for jobs created under this schedule. The name need not be unique and
     * can contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {boolean} [cloudJobSchedule.jobSpecification.usesTaskDependencies]
     * Whether tasks in the job can define dependencies on each other. The default
     * is false.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.onAllTasksComplete] The
     * action the Batch service should take when all tasks in a job created under
     * this schedule are in the completed state. Note that if a job contains no
     * tasks, then all tasks are considered complete. This option is therefore most
     * commonly used with a Job Manager task; if you want to use automatic job
     * termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks. The
     * default is noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [cloudJobSchedule.jobSpecification.onTaskFailure] The action
     * the Batch service should take when any task fails in a job created under
     * this schedule. A task is considered to have failed if it have failed if has
     * a failureInfo. A failureInfo is set if the task completes with a non-zero
     * exit code after exhausting its retry count, or if there was an error
     * starting the task, for example due to a resource file download error. The
     * default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {object} [cloudJobSchedule.jobSpecification.constraints] The
     * execution constraints for jobs created under this schedule.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.constraints.maxWallClockTime] The maximum
     * elapsed time that the job may run, measured from the time the job is
     * created. If the job does not complete within the time limit, the Batch
     * service terminates it and any tasks that are still running. In this case,
     * the termination reason will be MaxWallClockTimeExpiry. If this property is
     * not specified, there is no time limit on how long the job may run.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobManagerTask] The
     * details of a Job Manager task to be launched when a job is started under
     * this schedule. If the job does not specify a Job Manager task, the user must
     * explicitly add tasks to the job using the Task API. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job.
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobManagerTask.id A string
     * that uniquely identifies the Job Manager task within the job. The ID can
     * contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.displayName] The display
     * name of the Job Manager task. It need not be unique and can contain any
     * Unicode characters up to a maximum length of 1024.
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobManagerTask.commandLine
     * The command line of the Job Manager task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.outputFiles] A list of
     * files that the Batch service will upload from the compute node after running
     * the command line. For multi-instance tasks, the files will only be uploaded
     * from the compute node on which the primary task is executed.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.environmentSettings] A
     * list of environment variable settings for the Job Manager task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.constraints] Constraints
     * that apply to the Job Manager task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.killJobOnCompletion]
     * Whether completion of the Job Manager task signifies completion of the
     * entire job. If true, when the Job Manager task completes, the Batch service
     * marks the job as complete. If any tasks are still running at this time
     * (other than Job Release), those tasks are terminated. If false, the
     * completion of the Job Manager task does not affect the job status. In this
     * case, you should either use the onAllTasksComplete attribute to terminate
     * the job, or have a client or user terminate the job explicitly. An example
     * of this is if the Job Manager creates a set of tasks but then takes no
     * further role in their execution. The default value is true. If you are using
     * the onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.userIdentity] The user
     * identity under which the Job Manager task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.runExclusive] Whether the
     * Job Manager task requires exclusive use of the compute node where it runs.
     * If true, no other tasks will run on the same compute node for as long as the
     * Job Manager is running. If false, other tasks can run simultaneously with
     * the Job Manager on a compute node. The Job Manager task counts normally
     * against the node's concurrent task limit, so this is only relevant if the
     * node allows multiple concurrent tasks. The default value is true.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.applicationPackageReferences]
     * A list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy on
     * the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.authenticationTokenSettings]
     * The settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment
     * variable. The operations that the task can carry out using the token depend
     * on the settings. For example, a task can request job permissions in order to
     * add other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.authenticationTokenSettings.access]
     * The Batch resources to which the token grants access. The authentication
     * token grants access to a limited set of Batch service operations. Currently
     * the only supported value for the access property is 'job', which grants
     * access to all operations related to the job which contains the task.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobManagerTask.allowLowPriorityNode]
     * Whether the Job Manager task may run on a low-priority compute node. The
     * default value is false.
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobPreparationTask] The
     * Job Preparation task for jobs created under this schedule. If a job has a
     * Job Preparation task, the Batch service will run the Job Preparation task on
     * a compute node before starting any tasks of that job on that compute node.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.jobPreparationTask.id] A
     * string that uniquely identifies the Job Preparation task within the job. The
     * ID can contain any combination of alphanumeric characters including hyphens
     * and underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobpreparation'. No other task in the job can have the same ID as the Job
     * Preparation task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobPreparationTask;
     * if you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.jobPreparationTask.commandLine The command
     * line of the Job Preparation task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.resourceFiles] A list
     * of files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.environmentSettings] A
     * list of environment variable settings for the Job Preparation task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints]
     * Constraints that apply to the Job Preparation task.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.maxWallClockTime]
     * The maximum elapsed time that the task may run, measured from the time the
     * task starts. If the task does not complete within the time limit, the Batch
     * service terminates it. If this is not specified, there is no time limit on
     * how long the task may run.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.constraints.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.waitForSuccess]
     * Whether the Batch service should wait for the Job Preparation task to
     * complete successfully before scheduling any other tasks of the job on the
     * compute node. A Job Preparation task has completed successfully if it exits
     * with exit code 0. If true and the Job Preparation task fails on a compute
     * node, the Batch service retries the Job Preparation task up to its maximum
     * retry count (as specified in the constraints element). If the task has still
     * not completed successfully after all retries, then the Batch service will
     * not schedule tasks of the job to the compute node. The compute node remains
     * active and eligible to run tasks of other jobs. If false, the Batch service
     * will not wait for the Job Preparation task to complete. In this case, other
     * tasks of the job can start executing on the compute node while the Job
     * Preparation task is still running; and even if the Job Preparation task
     * fails, new tasks will continue to be scheduled on the node. The default
     * value is true.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.userIdentity] The user
     * identity under which the Job Preparation task runs. If omitted, the task
     * runs as a non-administrative user unique to the task on Windows nodes, or a
     * a non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [cloudJobSchedule.jobSpecification.jobReleaseTask] The Job
     * Release task for jobs created under this schedule. The primary purpose of
     * the Job Release task is to undo changes to compute nodes made by the Job
     * Preparation task. Example activities include deleting local files, or
     * shutting down services that were started as part of job preparation. A Job
     * Release task cannot be specified without also specifying a Job Preparation
     * task for the job. The Batch service runs the Job Release task on the compute
     * nodes that have run the Job Preparation task.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.jobReleaseTask.id] A
     * string that uniquely identifies the Job Release task within the job. The ID
     * can contain any combination of alphanumeric characters including hyphens and
     * underscores and cannot contain more than 64 characters. If you do not
     * specify this property, the Batch service assigns a default value of
     * 'jobrelease'. No other task in the job can have the same ID as the Job
     * Release task. If you try to submit a task with the same id, the Batch
     * service rejects the request with error code TaskIdSameAsJobReleaseTask; if
     * you are calling the REST API directly, the HTTP status code is 409
     * (Conflict).
     *
     * @param {string} cloudJobSchedule.jobSpecification.jobReleaseTask.commandLine
     * The command line of the Job Release task. The command line does not run
     * under a shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.environmentSettings] A
     * list of environment variable settings for the Job Release task.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.maxWallClockTime] The
     * maximum elapsed time that the Job Release task may run on a given compute
     * node, measured from the time the task starts. If the task does not complete
     * within the time limit, the Batch service terminates it. The default value is
     * 15 minutes. You may not specify a timeout longer than 15 minutes. If you do,
     * the Batch service rejects it with an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.retentionTime] The minimum
     * time to retain the task directory for the Job Release task on the compute
     * node. After this time, the Batch service may delete the task directory and
     * all its contents. The default is infinite, i.e. the task directory will be
     * retained until the compute node is removed or reimaged.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.jobReleaseTask.userIdentity] The user
     * identity under which the Job Release task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {array} [cloudJobSchedule.jobSpecification.commonEnvironmentSettings]
     * A list of common environment variable settings. These environment variables
     * are set for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     *
     * @param {object} cloudJobSchedule.jobSpecification.poolInfo The pool on which
     * the Batch service runs the tasks of jobs created under this schedule.
     *
     * @param {string} [cloudJobSchedule.jobSpecification.poolInfo.poolId] The ID
     * of an existing pool. All the tasks of the job will run on the specified
     * pool. You must ensure that the pool referenced by this property exists. If
     * the pool does not exist at the time the Batch service tries to schedule a
     * job, no tasks for the job will run until you create a pool with that id.
     * Note that the Batch service will not reject the job request; it will simply
     * not run tasks until the pool exists. You must specify either the pool ID or
     * the auto pool specification, but not both.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification]
     * Characteristics for a temporary 'auto pool'. The Batch service will create
     * this auto pool when the job is submitted. If auto pool creation fails, the
     * Batch service moves the job to a completed state, and the pool creation
     * error is set in the job's scheduling error property. The Batch service
     * manages the lifetime (both creation and, unless keepAlive is specified,
     * deletion) of the auto pool. Any user actions that affect the lifetime of the
     * auto pool while the job is active will result in unexpected behavior. You
     * must specify either the pool ID or the auto pool specification, but not
     * both.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.autoPoolIdPrefix]
     * A prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.poolLifetimeOption
     * The minimum lifetime of created auto pools, and how multiple jobs on a
     * schedule are assigned to pools. When the pool lifetime is jobSchedule the
     * pool exists for the lifetime of the job schedule. The Batch Service creates
     * the pool when it creates the first job on the schedule. You may apply this
     * option only to job schedules, not to jobs. When the pool lifetime is job the
     * pool exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.keepAlive]
     * Whether to keep an auto pool alive after its lifetime expires. If false, the
     * Batch service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.displayName]
     * The display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.vmSize
     * The size of the virtual machines in the pool. All virtual machines in a pool
     * are the same size. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration), see
     * Sizes for Cloud Services
     * (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2.
     * For information about available VM sizes for pools using images from the
     * Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with premium
     * storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
     * The cloud service configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure PaaS VMs. This property
     * and virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). This property cannot be specified if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
     * The collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be
     * identical and must reside in an Azure Storage account within the same
     * subscription and same region as the Batch account. For best performance, it
     * is recommended that each VHD resides in a separate Azure Storage account.
     * Each VHD can serve upto 20 Windows compute nodes or 40 Linux compute nodes.
     * You must supply enough VHD URIs to satisfy the 'targetDedicated' property of
     * the pool. If you do not supply enough VHD URIs, the pool will partially
     * allocate compute nodes, and a resize error will occur.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
     * The type of caching to enable for the OS disk. Values are:
     *
     * none - The caching mode for the disk is not enabled.
     * readOnly - The caching mode for the disk is read only.
     * readWrite - The caching mode for the disk is read and write.
     *
     * The default value for caching is none. For information about the caching
     * options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
     * The SKU of the Batch node agent to be provisioned on compute nodes in the
     * pool. The Batch node agent is a program that runs on each node in the pool,
     * and provides the command-and-control interface between the node and the
     * Batch service. There are different implementations of the node agent, known
     * as SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.resizeTimeout]
     * The timeout for allocation of compute nodes to the pool. This timeout
     * applies only to manual scaling; it has no effect when enableAutoScale is set
     * to true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
     * The ARM resource identifier of the virtual network subnet which the compute
     * nodes of the pool will join. This is of the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the Azure
     * Batch account. The specified subnet should have enough free IP addresses to
     * accommodate the number of nodes in the pool. If the subnet doesn't have
     * enough free IP addresses, the pool will partially allocate compute nodes,
     * and a resize error will occur. The 'MicrosoftAzureBatch' service principal
     * must have the 'Classic Virtual Machine Contributor' Role-Based Access
     * Control (RBAC) role for the specified VNet. The specified subnet must allow
     * communication from the Azure Batch service to be able to schedule tasks on
     * the compute nodes. This can be verified by checking if the specified VNet
     * has any associated Network Security Groups (NSG). If communication to the
     * compute nodes in the specified subnet is denied by an NSG, then the Batch
     * service will set the state of the compute nodes to unusable. For pools
     * created via virtualMachineConfiguration the Batch account must have
     * poolAllocationMode userSubscription in order to use a VNet. If the specified
     * VNet has any associated Network Security Groups (NSG), then a few reserved
     * system ports must be enabled for inbound communication. For pools created
     * with a virtual machine configuration, enable ports 29876 and 29877, as well
     * as port 22 for Linux and port 3389 for Windows. For pools created with a
     * cloud service configuration, enable ports 10100, 20100, and 30100. Also
     * enable outbound connections to Azure Storage on port 443. For more details
     * see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask]
     * A task to run on each compute node as it joins the pool. The task runs when
     * the node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
     * Whether the Batch service should wait for the start task to complete
     * successfully (that is, to exit with exit code 0) before scheduling any tasks
     * on the compute node. If true and the start task fails on a compute node, the
     * Batch service retries the start task up to its maximum retry count
     * (maxTaskRetryCount). If the task has still not completed successfully after
     * all retries, then the Batch service marks the compute node unusable, and
     * will not schedule tasks to it. This condition can be detected via the node
     * state and failure info details. If false, the Batch service will not wait
     * for the start task to complete. In this case, other tasks can start
     * executing on the compute node while the start task is still running; and
     * even if the start task fails, new tasks will continue to be scheduled on the
     * node. The default is false.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.certificateReferences]
     * A list of certificates to be installed on each compute node in the pool. For
     * Windows compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory and
     * an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.userAccounts]
     * The list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [cloudJobSchedule.jobSpecification.poolInfo.autoPoolSpecification.pool.metadata]
     * A list of name-value pairs associated with the pool as metadata. The Batch
     * service does not assign any meaning to metadata; it is solely for the use of
     * user code.
     *
     * @param {array} [cloudJobSchedule.jobSpecification.metadata] A list of
     * name-value pairs associated with each job created under this schedule as
     * metadata. The Batch service does not assign any meaning to metadata; it is
     * solely for the use of user code.
     *
     * @param {array} [cloudJobSchedule.metadata] A list of name-value pairs
     * associated with the schedule as metadata. The Batch service does not assign
     * any meaning to metadata; it is solely for the use of user code.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleAddOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobScheduleAddOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleAddOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleAddOptions.ocpDate] The time the request
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    add(cloudJobSchedule: Models.JobScheduleAddParameter): Promise<void>;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, options: {
        jobScheduleAddOptions?: Models.JobScheduleAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(cloudJobSchedule: Models.JobScheduleAddParameter, options: {
        jobScheduleAddOptions?: Models.JobScheduleAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.jobScheduleListOptions.filter] An OData $filter
     * clause.
     *
     * @param {string} [options.jobScheduleListOptions.select] An OData $select
     * clause.
     *
     * @param {string} [options.jobScheduleListOptions.expand] An OData $expand
     * clause.
     *
     * @param {number} [options.jobScheduleListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 job schedules
     * can be returned.
     *
     * @param {number} [options.jobScheduleListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobScheduleListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleListOptions.ocpDate] The time the request
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
     *                      {CloudJobScheduleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobScheduleListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudJobScheduleListResult>;
    list(options: {
        jobScheduleListOptions?: Models.JobScheduleListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobScheduleListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    list(options: {
        jobScheduleListOptions?: Models.JobScheduleListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    /**
     * @summary Lists all of the job schedules in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobScheduleListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.jobScheduleListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobScheduleListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobScheduleListNextOptions.ocpDate] The time the
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
     *                      {CloudJobScheduleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobScheduleListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudJobScheduleListResult>;
    listNext(nextPageLink: string, options: {
        jobScheduleListNextOptions?: Models.JobScheduleListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobScheduleListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
    listNext(nextPageLink: string, options: {
        jobScheduleListNextOptions?: Models.JobScheduleListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobScheduleListResult>): void;
}
