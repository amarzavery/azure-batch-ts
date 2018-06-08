import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing PoolUsageMetrics.
 * @summary Usage metrics for a pool across an aggregation interval.
 *
 */
export interface PoolUsageMetrics {
    /**
     * @member {string} poolId The ID of the pool whose metrics are aggregated in
     * this entry.
     */
    poolId: string;
    /**
     * @member {Date} startTime The start time of the aggregation interval
     * covered by this entry.
     */
    startTime: Date;
    /**
     * @member {Date} endTime The end time of the aggregation interval covered by
     * this entry.
     */
    endTime: Date;
    /**
     * @member {string} vmSize The size of virtual machines in the pool. All VMs
     * in a pool are the same size. For information about available sizes of
     * virtual machines in pools, see Choose a VM size for compute nodes in an
     * Azure Batch pool
     * (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). Batch
     * supports all Cloud Services VM sizes except ExtraSmall, STANDARD_A1_V2 and
     * STANDARD_A2_V2. For information about available VM sizes for pools using
     * images from the Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with
     * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize: string;
    /**
     * @member {number} totalCoreHours The total core hours used in the pool
     * during this aggregation interval.
     */
    totalCoreHours: number;
    /**
     * @member {number} dataIngressGiB The cross data center network ingress to
     * the pool during this interval, in GiB.
     */
    dataIngressGiB: number;
    /**
     * @member {number} dataEgressGiB The cross data center network egress from
     * the pool during this interval, in GiB.
     */
    dataEgressGiB: number;
}
/**
 * @interface
 * An interface representing ImageReference.
 * @summary A reference to an Azure Virtual Machines Marketplace image or a
 * custom Azure Virtual Machine image. To get the list of all Azure Marketplace
 * image references verified by Azure Batch, see the 'List node agent SKUs'
 * operation.
 *
 */
export interface ImageReference {
    /**
     * @member {string} [publisher] The publisher of the Azure Virtual Machines
     * Marketplace image. For example, Canonical or MicrosoftWindowsServer.
     */
    publisher?: string;
    /**
     * @member {string} [offer] The offer type of the Azure Virtual Machines
     * Marketplace image. For example, UbuntuServer or WindowsServer.
     */
    offer?: string;
    /**
     * @member {string} [sku] The SKU of the Azure Virtual Machines Marketplace
     * image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
     */
    sku?: string;
    /**
     * @member {string} [version] The version of the Azure Virtual Machines
     * Marketplace image. A value of 'latest' can be specified to select the
     * latest version of an image. If omitted, the default is 'latest'.
     */
    version?: string;
    /**
     * @member {string} [virtualMachineImageId] The ARM resource identifier of
     * the virtual machine image. Computes nodes of the pool will be created
     * using this custom image. This is of the form
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}.
     * This property is mutually exclusive with other ImageReference properties.
     * The virtual machine image must be in the same region and subscription as
     * the Azure Batch account. For information about the firewall settings for
     * the Batch node agent to communicate with the Batch service see
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
     */
    virtualMachineImageId?: string;
}
/**
 * @interface
 * An interface representing NodeAgentSku.
 * @summary A node agent SKU supported by the Batch service.
 *
 * The Batch node agent is a program that runs on each node in the pool, and
 * provides the command-and-control interface between the node and the Batch
 * service. There are different implementations of the node agent, known as
 * SKUs, for different operating systems.
 *
 */
export interface NodeAgentSku {
    /**
     * @member {string} [id] The ID of the node agent SKU.
     */
    id?: string;
    /**
     * @member {ImageReference[]} [verifiedImageReferences] The list of Azure
     * Marketplace images verified to be compatible with this node agent SKU.
     * This collection is not exhaustive (the node agent may be compatible with
     * other images).
     */
    verifiedImageReferences?: ImageReference[];
    /**
     * @member {OSType} [osType] The type of operating system (e.g. Windows or
     * Linux) compatible with the node agent SKU. Possible values include:
     * 'linux', 'windows'
     */
    osType?: OSType;
}
/**
 * @interface
 * An interface representing AuthenticationTokenSettings.
 * @summary The settings for an authentication token that the task can use to
 * perform Batch service operations.
 *
 */
export interface AuthenticationTokenSettings {
    /**
     * @member {AccessScope[]} [access] The Batch resources to which the token
     * grants access. The authentication token grants access to a limited set of
     * Batch service operations. Currently the only supported value for the
     * access property is 'job', which grants access to all operations related to
     * the job which contains the task.
     */
    access?: AccessScope[];
}
/**
 * @interface
 * An interface representing UsageStatistics.
 * @summary Statistics related to pool usage information.
 *
 */
export interface UsageStatistics {
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {string} dedicatedCoreTime The aggregated wall-clock time of the
     * dedicated compute node cores being part of the pool.
     */
    dedicatedCoreTime: string;
}
/**
 * @interface
 * An interface representing ResourceStatistics.
 * @summary Statistics related to resource consumption by compute nodes in a
 * pool.
 *
 */
export interface ResourceStatistics {
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {number} avgCPUPercentage The average CPU usage across all nodes
     * in the pool (percentage per node).
     */
    avgCPUPercentage: number;
    /**
     * @member {number} avgMemoryGiB The average memory usage in GiB across all
     * nodes in the pool.
     */
    avgMemoryGiB: number;
    /**
     * @member {number} peakMemoryGiB The peak memory usage in GiB across all
     * nodes in the pool.
     */
    peakMemoryGiB: number;
    /**
     * @member {number} avgDiskGiB The average used disk space in GiB across all
     * nodes in the pool.
     */
    avgDiskGiB: number;
    /**
     * @member {number} peakDiskGiB The peak used disk space in GiB across all
     * nodes in the pool.
     */
    peakDiskGiB: number;
    /**
     * @member {number} diskReadIOps The total number of disk read operations
     * across all nodes in the pool.
     */
    diskReadIOps: number;
    /**
     * @member {number} diskWriteIOps The total number of disk write operations
     * across all nodes in the pool.
     */
    diskWriteIOps: number;
    /**
     * @member {number} diskReadGiB The total amount of data in GiB of disk reads
     * across all nodes in the pool.
     */
    diskReadGiB: number;
    /**
     * @member {number} diskWriteGiB The total amount of data in GiB of disk
     * writes across all nodes in the pool.
     */
    diskWriteGiB: number;
    /**
     * @member {number} networkReadGiB The total amount of data in GiB of network
     * reads across all nodes in the pool.
     */
    networkReadGiB: number;
    /**
     * @member {number} networkWriteGiB The total amount of data in GiB of
     * network writes across all nodes in the pool.
     */
    networkWriteGiB: number;
}
/**
 * @interface
 * An interface representing PoolStatistics.
 * @summary Contains utilization and resource usage statistics for the lifetime
 * of a pool.
 *
 */
export interface PoolStatistics {
    /**
     * @member {string} url The URL for the statistics.
     */
    url: string;
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {UsageStatistics} [usageStats] Statistics related to pool usage,
     * such as the amount of core-time used.
     */
    usageStats?: UsageStatistics;
    /**
     * @member {ResourceStatistics} [resourceStats] Statistics related to
     * resource consumption by compute nodes in the pool.
     */
    resourceStats?: ResourceStatistics;
}
/**
 * @interface
 * An interface representing JobStatistics.
 * @summary Resource usage statistics for a job.
 *
 */
export interface JobStatistics {
    /**
     * @member {string} url The URL of the statistics.
     */
    url: string;
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {string} userCPUTime The total user mode CPU time (summed across
     * all cores and all compute nodes) consumed by all tasks in the job.
     */
    userCPUTime: string;
    /**
     * @member {string} kernelCPUTime The total kernel mode CPU time (summed
     * across all cores and all compute nodes) consumed by all tasks in the job.
     */
    kernelCPUTime: string;
    /**
     * @member {string} wallClockTime The total wall clock time of all tasks in
     * the job.  The wall clock time is the elapsed time from when the task
     * started running on a compute node to when it finished (or to the last time
     * the statistics were updated, if the task had not finished by then). If a
     * task was retried, this includes the wall clock time of all the task
     * retries.
     */
    wallClockTime: string;
    /**
     * @member {number} readIOps The total number of disk read operations made by
     * all tasks in the job.
     */
    readIOps: number;
    /**
     * @member {number} writeIOps The total number of disk write operations made
     * by all tasks in the job.
     */
    writeIOps: number;
    /**
     * @member {number} readIOGiB The total amount of data in GiB read from disk
     * by all tasks in the job.
     */
    readIOGiB: number;
    /**
     * @member {number} writeIOGiB The total amount of data in GiB written to
     * disk by all tasks in the job.
     */
    writeIOGiB: number;
    /**
     * @member {number} numSucceededTasks The total number of tasks successfully
     * completed in the job during the given time range. A task completes
     * successfully if it returns exit code 0.
     */
    numSucceededTasks: number;
    /**
     * @member {number} numFailedTasks The total number of tasks in the job that
     * failed during the given time range. A task fails if it exhausts its
     * maximum retry count without returning exit code 0.
     */
    numFailedTasks: number;
    /**
     * @member {number} numTaskRetries The total number of retries on all the
     * tasks in the job during the given time range.
     */
    numTaskRetries: number;
    /**
     * @member {string} waitTime The total wait time of all tasks in the job. The
     * wait time for a task is defined as the elapsed time between the creation
     * of the task and the start of task execution. (If the task is retried due
     * to failures, the wait time is the time to the most recent task execution.)
     * This value is only reported in the account lifetime statistics; it is not
     * included in the job statistics.
     */
    waitTime: string;
}
/**
 * @interface
 * An interface representing NameValuePair.
 * @summary Represents a name-value pair.
 *
 */
export interface NameValuePair {
    /**
     * @member {string} [name] The name in the name-value pair.
     */
    name?: string;
    /**
     * @member {string} [value] The value in the name-value pair.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing DeleteCertificateError.
 * @summary An error encountered by the Batch service when deleting a
 * certificate.
 *
 */
export interface DeleteCertificateError {
    /**
     * @member {string} [code] An identifier for the certificate deletion error.
     * Codes are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the certificate deletion
     * error, intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [values] A list of additional error details
     * related to the certificate deletion error. This list includes details such
     * as the active pools and nodes referencing this certificate. However, if a
     * large number of resources reference the certificate, the list contains
     * only about the first hundred.
     */
    values?: NameValuePair[];
}
/**
 * @interface
 * An interface representing Certificate.
 * A certificate that can be installed on compute nodes and can be used to
 * authenticate operations on the machine.
 *
 */
export interface Certificate {
    /**
     * @member {string} [thumbprint] The X.509 thumbprint of the certificate.
     * This is a sequence of up to 40 hex digits.
     */
    thumbprint?: string;
    /**
     * @member {string} [thumbprintAlgorithm] The algorithm used to derive the
     * thumbprint.
     */
    thumbprintAlgorithm?: string;
    /**
     * @member {string} [url] The URL of the certificate.
     */
    url?: string;
    /**
     * @member {CertificateState} [state] The current state of the certificate.
     * Possible values include: 'active', 'deleting', 'deleteFailed'
     */
    state?: CertificateState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the certificate
     * entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {CertificateState} [previousState] The previous state of the
     * certificate. This property is not set if the certificate is in its initial
     * active state. Possible values include: 'active', 'deleting',
     * 'deleteFailed'
     */
    previousState?: CertificateState;
    /**
     * @member {Date} [previousStateTransitionTime] The time at which the
     * certificate entered its previous state. This property is not set if the
     * certificate is in its initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * @member {string} [publicData] The public part of the certificate as a
     * base-64 encoded .cer file.
     */
    publicData?: string;
    /**
     * @member {DeleteCertificateError} [deleteCertificateError] The error that
     * occurred on the last attempt to delete this certificate. This property is
     * set only if the certificate is in the DeleteFailed state.
     */
    deleteCertificateError?: DeleteCertificateError;
}
/**
 * @interface
 * An interface representing ApplicationPackageReference.
 * @summary A reference to an application package to be deployed to compute
 * nodes.
 *
 */
export interface ApplicationPackageReference {
    /**
     * @member {string} applicationId The ID of the application to deploy.
     */
    applicationId: string;
    /**
     * @member {string} [version] The version of the application to deploy. If
     * omitted, the default version is deployed. If this is omitted on a pool,
     * and no default version is specified for this application, the request
     * fails with the error code InvalidApplicationPackageReferences and HTTP
     * status code 409. If this is omitted on a task, and no default version is
     * specified for this application, the task fails with a pre-processing
     * error.
     */
    version?: string;
}
/**
 * @interface
 * An interface representing ApplicationSummary.
 * @summary Contains information about an application in an Azure Batch
 * account.
 *
 */
export interface ApplicationSummary {
    /**
     * @member {string} id A string that uniquely identifies the application
     * within the account.
     */
    id: string;
    /**
     * @member {string} displayName The display name for the application.
     */
    displayName: string;
    /**
     * @member {string[]} versions The list of available versions of the
     * application.
     */
    versions: string[];
}
/**
 * @interface
 * An interface representing CertificateAddParameter.
 * @summary A certificate that can be installed on compute nodes and can be
 * used to authenticate operations on the machine.
 *
 */
export interface CertificateAddParameter {
    /**
     * @member {string} thumbprint The X.509 thumbprint of the certificate. This
     * is a sequence of up to 40 hex digits (it may include spaces but these are
     * removed).
     */
    thumbprint: string;
    /**
     * @member {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint. This must be sha1.
     */
    thumbprintAlgorithm: string;
    /**
     * @member {string} data The base64-encoded contents of the certificate. The
     * maximum size is 10KB.
     */
    data: string;
    /**
     * @member {CertificateFormat} [certificateFormat] The format of the
     * certificate data. Possible values include: 'pfx', 'cer'
     */
    certificateFormat?: CertificateFormat;
    /**
     * @member {string} [password] The password to access the certificate's
     * private key. This is required if the certificate format is pfx. It should
     * be omitted if the certificate format is cer.
     */
    password?: string;
}
/**
 * @interface
 * An interface representing FileProperties.
 * @summary The properties of a file on a compute node.
 *
 */
export interface FileProperties {
    /**
     * @member {Date} [creationTime] The file creation time. The creation time is
     * not returned for files on Linux compute nodes.
     */
    creationTime?: Date;
    /**
     * @member {Date} lastModified The time at which the file was last modified.
     */
    lastModified: Date;
    /**
     * @member {number} contentLength The length of the file.
     */
    contentLength: number;
    /**
     * @member {string} [contentType] The content type of the file.
     */
    contentType?: string;
    /**
     * @member {string} [fileMode] The file mode attribute in octal format. The
     * file mode is returned only for files on Linux compute nodes.
     */
    fileMode?: string;
}
/**
 * @interface
 * An interface representing NodeFile.
 * @summary Information about a file or directory on a compute node.
 *
 */
export interface NodeFile {
    /**
     * @member {string} [name] The file path.
     */
    name?: string;
    /**
     * @member {string} [url] The URL of the file.
     */
    url?: string;
    /**
     * @member {boolean} [isDirectory] Whether the object represents a directory.
     */
    isDirectory?: boolean;
    /**
     * @member {FileProperties} [properties] The file properties.
     */
    properties?: FileProperties;
}
/**
 * @interface
 * An interface representing Schedule.
 * @summary The schedule according to which jobs will be created
 *
 */
export interface Schedule {
    /**
     * @member {Date} [doNotRunUntil] The earliest time at which any job may be
     * created under this job schedule. If you do not specify a doNotRunUntil
     * time, the schedule becomes ready to create jobs immediately.
     */
    doNotRunUntil?: Date;
    /**
     * @member {Date} [doNotRunAfter] A time after which no job will be created
     * under this job schedule. The schedule will move to the completed state as
     * soon as this deadline is past and there is no active job under this job
     * schedule. If you do not specify a doNotRunAfter time, and you are creating
     * a recurring job schedule, the job schedule will remain active until you
     * explicitly terminate it.
     */
    doNotRunAfter?: Date;
    /**
     * @member {string} [startWindow] The time interval, starting from the time
     * at which the schedule indicates a job should be created, within which a
     * job must be created. If a job is not created within the startWindow
     * interval, then the 'opportunity' is lost; no job will be created until the
     * next recurrence of the schedule. If the schedule is recurring, and the
     * startWindow is longer than the recurrence interval, then this is
     * equivalent to an infinite startWindow, because the job that is 'due' in
     * one recurrenceInterval is not carried forward into the next recurrence
     * interval. The default is infinite. The minimum value is 1 minute. If you
     * specify a lower value, the Batch service rejects the schedule with an
     * error; if you are calling the REST API directly, the HTTP status code is
     * 400 (Bad Request).
     */
    startWindow?: string;
    /**
     * @member {string} [recurrenceInterval] The time interval between the start
     * times of two successive jobs under the job schedule. A job schedule can
     * have at most one active job under it at any given time. Because a job
     * schedule can have at most one active job under it at any given time, if it
     * is time to create a new job under a job schedule, but the previous job is
     * still running, the Batch service will not create the new job until the
     * previous job finishes. If the previous job does not finish within the
     * startWindow period of the new recurrenceInterval, then no new job will be
     * scheduled for that interval. For recurring jobs, you should normally
     * specify a jobManagerTask in the jobSpecification. If you do not use
     * jobManagerTask, you will need an external process to monitor when jobs are
     * created, add tasks to the jobs and terminate the jobs ready for the next
     * recurrence. The default is that the schedule does not recur: one job is
     * created, within the startWindow after the doNotRunUntil time, and the
     * schedule is complete as soon as that job finishes. The minimum value is 1
     * minute. If you specify a lower value, the Batch service rejects the
     * schedule with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     */
    recurrenceInterval?: string;
}
/**
 * @interface
 * An interface representing JobConstraints.
 * @summary The execution constraints for a job.
 *
 */
export interface JobConstraints {
    /**
     * @member {string} [maxWallClockTime] The maximum elapsed time that the job
     * may run, measured from the time the job is created. If the job does not
     * complete within the time limit, the Batch service terminates it and any
     * tasks that are still running. In this case, the termination reason will be
     * MaxWallClockTimeExpiry. If this property is not specified, there is no
     * time limit on how long the job may run.
     */
    maxWallClockTime?: string;
    /**
     * @member {number} [maxTaskRetryCount] The maximum number of times each task
     * may be retried. The Batch service retries a task if its exit code is
     * nonzero. Note that this value specifically controls the number of retries.
     * The Batch service will try each task once, and may then retry up to this
     * limit. For example, if the maximum retry count is 3, Batch tries a task up
     * to 4 times (one initial try and 3 retries). If the maximum retry count is
     * 0, the Batch service does not retry tasks. If the maximum retry count is
     * -1, the Batch service retries tasks without limit. The default value is 0
     * (no retries).
     */
    maxTaskRetryCount?: number;
}
/**
 * @interface
 * An interface representing ContainerRegistry.
 * @summary A private container registry.
 *
 */
export interface ContainerRegistry {
    /**
     * @member {string} [registryServer] The registry URL. If omitted, the
     * default is "docker.io".
     */
    registryServer?: string;
    /**
     * @member {string} userName The user name to log into the registry server.
     */
    userName: string;
    /**
     * @member {string} password The password to log into the registry server.
     */
    password: string;
}
/**
 * @interface
 * An interface representing TaskContainerSettings.
 * @summary The container settings for a task.
 *
 */
export interface TaskContainerSettings {
    /**
     * @member {string} [containerRunOptions] Additional options to the container
     * create command. These additional options are supplied as arguments to the
     * "docker create" command, in addition to those controlled by the Batch
     * Service.
     */
    containerRunOptions?: string;
    /**
     * @member {string} imageName The image to use to create the container in
     * which the task will run. This is the full image reference, as would be
     * specified to "docker pull". If no tag is provided as part of the image
     * name, the tag ":latest" is used as a default.
     */
    imageName: string;
    /**
     * @member {ContainerRegistry} [registry] The private registry which contains
     * the container image. This setting can be omitted if was already provided
     * at pool creation.
     */
    registry?: ContainerRegistry;
}
/**
 * @interface
 * An interface representing ResourceFile.
 * @summary A file to be downloaded from Azure blob storage to a compute node.
 *
 */
export interface ResourceFile {
    /**
     * @member {string} blobSource The URL of the file within Azure Blob Storage.
     * This URL must be readable using anonymous access; that is, the Batch
     * service does not present any credentials when downloading the blob. There
     * are two ways to get such a URL for a blob in Azure storage: include a
     * Shared Access Signature (SAS) granting read permissions on the blob, or
     * set the ACL for the blob or its container to allow public access.
     */
    blobSource: string;
    /**
     * @member {string} filePath The location on the compute node to which to
     * download the file, relative to the task's working directory.
     */
    filePath: string;
    /**
     * @member {string} [fileMode] The file permission mode attribute in octal
     * format. This property applies only to files being downloaded to Linux
     * compute nodes. It will be ignored if it is specified for a resourceFile
     * which will be downloaded to a Windows node. If this property is not
     * specified for a Linux node, then a default value of 0770 is applied to the
     * file.
     */
    fileMode?: string;
}
/**
 * @interface
 * An interface representing EnvironmentSetting.
 * @summary An environment variable to be set on a task process.
 *
 */
export interface EnvironmentSetting {
    /**
     * @member {string} name The name of the environment variable.
     */
    name: string;
    /**
     * @member {string} [value] The value of the environment variable.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing ExitOptions.
 * @summary Specifies how the Batch service responds to a particular exit
 * condition.
 *
 */
export interface ExitOptions {
    /**
     * @member {JobAction} [jobAction] An action to take on the job containing
     * the task, if the task completes with the given exit condition and the
     * job's onTaskFailed property is 'performExitOptionsJobAction'. The default
     * is none for exit code 0 and terminate for all other exit conditions. If
     * the job's onTaskFailed property is noaction, then specifying this property
     * returns an error and the add task request fails with an invalid property
     * value error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request). Possible values include: 'none', 'disable',
     * 'terminate'
     */
    jobAction?: JobAction;
    /**
     * @member {DependencyAction} [dependencyAction] An action that the Batch
     * service performs on tasks that depend on this task. The default is
     * 'satisfy' for exit code 0, and 'block' for all other exit conditions. If
     * the job's usesTaskDependencies property is set to false, then specifying
     * the dependencyAction property returns an error and the add task request
     * fails with an invalid property value error; if you are calling the REST
     * API directly, the HTTP status code is 400  (Bad Request). Possible values
     * include: 'satisfy', 'block'
     */
    dependencyAction?: DependencyAction;
}
/**
 * @interface
 * An interface representing ExitCodeMapping.
 * @summary How the Batch service should respond if a task exits with a
 * particular exit code.
 *
 */
export interface ExitCodeMapping {
    /**
     * @member {number} code A process exit code.
     */
    code: number;
    /**
     * @member {ExitOptions} exitOptions How the Batch service should respond if
     * the task exits with this exit code.
     */
    exitOptions: ExitOptions;
}
/**
 * @interface
 * An interface representing ExitCodeRangeMapping.
 * @summary A range of exit codes and how the Batch service should respond to
 * exit codes within that range.
 *
 */
export interface ExitCodeRangeMapping {
    /**
     * @member {number} start The first exit code in the range.
     */
    start: number;
    /**
     * @member {number} end The last exit code in the range.
     */
    end: number;
    /**
     * @member {ExitOptions} exitOptions How the Batch service should respond if
     * the task exits with an exit code in the range start to end (inclusive).
     */
    exitOptions: ExitOptions;
}
/**
 * @interface
 * An interface representing ExitConditions.
 * @summary Specifies how the Batch service should respond when the task
 * completes.
 *
 */
export interface ExitConditions {
    /**
     * @member {ExitCodeMapping[]} [exitCodes] A list of individual task exit
     * codes and how the Batch service should respond to them.
     */
    exitCodes?: ExitCodeMapping[];
    /**
     * @member {ExitCodeRangeMapping[]} [exitCodeRanges] A list of task exit code
     * ranges and how the Batch service should respond to them.
     */
    exitCodeRanges?: ExitCodeRangeMapping[];
    /**
     * @member {ExitOptions} [preProcessingError] How the Batch service should
     * respond if the task fails to start due to an error.
     */
    preProcessingError?: ExitOptions;
    /**
     * @member {ExitOptions} [fileUploadError] How the Batch service should
     * respond if a file upload error occurs. If the task exited with an exit
     * code that was specified via exitCodes or exitCodeRanges, and then
     * encountered a file upload error, then the action specified by the exit
     * code takes precedence.
     */
    fileUploadError?: ExitOptions;
    /**
     * @member {ExitOptions} [default] How the Batch service should respond if
     * the task fails with an exit condition not covered by any of the other
     * properties. This value is used if the task exits with any nonzero exit
     * code not listed in the exitCodes or exitCodeRanges collection, with a
     * pre-processing error if the preProcessingError property is not present, or
     * with a file upload error if the fileUploadError property is not present.
     * If you want non-default behaviour on exit code 0, you must list it
     * explicitly using the exitCodes or exitCodeRanges collection.
     */
    default?: ExitOptions;
}
/**
 * @interface
 * An interface representing AutoUserSpecification.
 * @summary Specifies the parameters for the auto user that runs a task on the
 * Batch service.
 *
 */
export interface AutoUserSpecification {
    /**
     * @member {AutoUserScope} [scope] The scope for the auto user. The default
     * value is task. Possible values include: 'task', 'pool'
     */
    scope?: AutoUserScope;
    /**
     * @member {ElevationLevel} [elevationLevel] The elevation level of the auto
     * user. The default value is nonAdmin. Possible values include: 'nonAdmin',
     * 'admin'
     */
    elevationLevel?: ElevationLevel;
}
/**
 * @interface
 * An interface representing UserIdentity.
 * @summary The definition of the user identity under which the task is run.
 *
 * Specify either the userName or autoUser property, but not both. On
 * CloudServiceConfiguration pools, this user is logged in with the INTERACTIVE
 * flag. On Windows VirtualMachineConfiguration pools, this user is logged in
 * with the BATCH flag.
 *
 */
export interface UserIdentity {
    /**
     * @member {string} [userName] The name of the user identity under which the
     * task is run. The userName and autoUser properties are mutually exclusive;
     * you must specify one but not both.
     */
    userName?: string;
    /**
     * @member {AutoUserSpecification} [autoUser] The auto user under which the
     * task is run. The userName and autoUser properties are mutually exclusive;
     * you must specify one but not both.
     */
    autoUser?: AutoUserSpecification;
}
/**
 * @interface
 * An interface representing LinuxUserConfiguration.
 * @summary Properties used to create a user account on a Linux node.
 *
 */
export interface LinuxUserConfiguration {
    /**
     * @member {number} [uid] The user ID of the user account. The uid and gid
     * properties must be specified together or not at all. If not specified the
     * underlying operating system picks the uid.
     */
    uid?: number;
    /**
     * @member {number} [gid] The group ID for the user account. The uid and gid
     * properties must be specified together or not at all. If not specified the
     * underlying operating system picks the gid.
     */
    gid?: number;
    /**
     * @member {string} [sshPrivateKey] The SSH private key for the user account.
     * The private key must not be password protected. The private key is used to
     * automatically configure asymmetric-key based authentication for SSH
     * between nodes in a Linux pool when the pool's enableInterNodeCommunication
     * property is true (it is ignored if enableInterNodeCommunication is false).
     * It does this by placing the key pair into the user's .ssh directory. If
     * not specified, password-less SSH is not configured between nodes (no
     * modification of the user's .ssh directory is done).
     */
    sshPrivateKey?: string;
}
/**
 * @interface
 * An interface representing UserAccount.
 * @summary Properties used to create a user used to execute tasks on an Azure
 * Batch node.
 *
 */
export interface UserAccount {
    /**
     * @member {string} name The name of the user account.
     */
    name: string;
    /**
     * @member {string} password The password for the user account.
     */
    password: string;
    /**
     * @member {ElevationLevel} [elevationLevel] The elevation level of the user
     * account. nonAdmin - The auto user is a standard user without elevated
     * access. admin - The auto user is a user with elevated access and operates
     * with full Administrator permissions. The default value is nonAdmin.
     * Possible values include: 'nonAdmin', 'admin'
     */
    elevationLevel?: ElevationLevel;
    /**
     * @member {LinuxUserConfiguration} [linuxUserConfiguration] The
     * Linux-specific user configuration for the user account. This property is
     * ignored if specified on a Windows pool. If not specified, the user is
     * created with the default options.
     */
    linuxUserConfiguration?: LinuxUserConfiguration;
}
/**
 * @interface
 * An interface representing TaskConstraints.
 * @summary Execution constraints to apply to a task.
 *
 */
export interface TaskConstraints {
    /**
     * @member {string} [maxWallClockTime] The maximum elapsed time that the task
     * may run, measured from the time the task starts. If the task does not
     * complete within the time limit, the Batch service terminates it. If this
     * is not specified, there is no time limit on how long the task may run.
     */
    maxWallClockTime?: string;
    /**
     * @member {string} [retentionTime] The minimum time to retain the task
     * directory on the compute node where it ran, from the time it completes
     * execution. After this time, the Batch service may delete the task
     * directory and all its contents. The default is infinite, i.e. the task
     * directory will be retained until the compute node is removed or reimaged.
     */
    retentionTime?: string;
    /**
     * @member {number} [maxTaskRetryCount] The maximum number of times the task
     * may be retried. The Batch service retries a task if its exit code is
     * nonzero. Note that this value specifically controls the number of retries
     * for the task executable due to a nonzero exit code. The Batch service will
     * try the task once, and may then retry up to this limit. For example, if
     * the maximum retry count is 3, Batch tries the task up to 4 times (one
     * initial try and 3 retries). If the maximum retry count is 0, the Batch
     * service does not retry the task after the first attempt. If the maximum
     * retry count is -1, the Batch service retries the task without limit.
     * Resource files and application packages are only downloaded again if the
     * task is retried on a new compute node.
     */
    maxTaskRetryCount?: number;
}
/**
 * @interface
 * An interface representing OutputFileBlobContainerDestination.
 * @summary Specifies a file upload destination within an Azure blob storage
 * container.
 *
 */
export interface OutputFileBlobContainerDestination {
    /**
     * @member {string} [path] The destination blob or virtual directory within
     * the Azure Storage container. If filePattern refers to a specific file
     * (i.e. contains no wildcards), then path is the name of the blob to which
     * to upload that file. If filePattern contains one or more wildcards (and
     * therefore may match multiple files), then path is the name of the blob
     * virtual directory (which is prepended to each blob name) to which to
     * upload the file(s). If omitted, file(s) are uploaded to the root of the
     * container with a blob name matching their file name.
     */
    path?: string;
    /**
     * @member {string} containerUrl The URL of the container within Azure Blob
     * Storage to which to upload the file(s). The URL must include a Shared
     * Access Signature (SAS) granting write permissions to the container.
     */
    containerUrl: string;
}
/**
 * @interface
 * An interface representing OutputFileDestination.
 * @summary The destination to which a file should be uploaded.
 *
 */
export interface OutputFileDestination {
    /**
     * @member {OutputFileBlobContainerDestination} [container] A location in
     * Azure blob storage to which files are uploaded.
     */
    container?: OutputFileBlobContainerDestination;
}
/**
 * @interface
 * An interface representing OutputFileUploadOptions.
 * @summary Details about an output file upload operation, including under what
 * conditions to perform the upload.
 *
 */
export interface OutputFileUploadOptions {
    /**
     * @member {OutputFileUploadCondition} uploadCondition The conditions under
     * which the task output file or set of files should be uploaded. The default
     * is taskcompletion. Possible values include: 'taskSuccess', 'taskFailure',
     * 'taskCompletion'
     */
    uploadCondition: OutputFileUploadCondition;
}
/**
 * @interface
 * An interface representing OutputFile.
 * @summary A specification for uploading files from an Azure Batch node to
 * another location after the Batch service has finished executing the task
 * process.
 *
 */
export interface OutputFile {
    /**
     * @member {string} filePattern A pattern indicating which file(s) to upload.
     * Both relative and absolute paths are supported. Relative paths are
     * relative to the task working directory. The following wildcards are
     * supported: * matches 0 or more characters (for example pattern abc* would
     * match abc or abcdef), ** matches any directory, ? matches any single
     * character, [abc] matches one character in the brackets, and [a-c] matches
     * one character in the range. Brackets can include a negation to match any
     * character not specified (for example [!abc] matches any character but a,
     * b, or c). If a file name starts with "." it is ignored by default but may
     * be matched by specifying it explicitly (for example *.gif will not match
     * .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that
     * does not start in '.' and ends with .txt in the task working directory or
     * any subdirectory. If the filename contains a wildcard character it can be
     * escaped using brackets (for example abc[*] would match a file named abc*).
     * Note that both \ and / are treated as directory separators on Windows, but
     * only / is on Linux. Environment variables (%var% on Windows or $var on
     * Linux) are expanded prior to the pattern being applied.
     */
    filePattern: string;
    /**
     * @member {OutputFileDestination} destination The destination for the output
     * file(s).
     */
    destination: OutputFileDestination;
    /**
     * @member {OutputFileUploadOptions} uploadOptions Additional options for the
     * upload operation, including under what conditions to perform the upload.
     */
    uploadOptions: OutputFileUploadOptions;
}
/**
 * @interface
 * An interface representing JobManagerTask.
 * @summary Specifies details of a Job Manager task.
 *
 * The Job Manager task is automatically started when the job is created. The
 * Batch service tries to schedule the Job Manager task before any other tasks
 * in the job. When shrinking a pool, the Batch service tries to preserve
 * compute nodes where Job Manager tasks are running for as long as possible
 * (that is, nodes running 'normal' tasks are removed before nodes running Job
 * Manager tasks). When a Job Manager task fails and needs to be restarted, the
 * system tries to schedule it at the highest priority. If there are no idle
 * nodes available, the system may terminate one of the running tasks in the
 * pool and return it to the queue in order to make room for the Job Manager
 * task to restart. Note that a Job Manager task in one job does not have
 * priority over tasks in other jobs. Across jobs, only job level priorities
 * are observed. For example, if a Job Manager in a priority 0 job needs to be
 * restarted, it will not displace tasks of a priority 1 job. Batch will retry
 * tasks when a recovery operation is triggered on a compute node. Examples of
 * recovery operations include (but are not limited to) when an unhealthy
 * compute node is rebooted or a compute node disappeared due to host failure.
 * Retries due to recovery operations are independent of and are not counted
 * against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an
 * internal retry due to a recovery operation may occur. Because of this, all
 * tasks should be idempotent. This means tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running tasks is to use some form of
 * checkpointing.
 *
 */
export interface JobManagerTask {
    /**
     * @member {string} id A string that uniquely identifies the Job Manager task
     * within the job. The ID can contain any combination of alphanumeric
     * characters including hyphens and underscores and cannot contain more than
     * 64 characters.
     */
    id: string;
    /**
     * @member {string} [displayName] The display name of the Job Manager task.
     * It need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} commandLine The command line of the Job Manager task. The
     * command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in
     * the command line, for example using "cmd /c MyCommand" in Windows or
     * "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths,
     * it should use a relative path (relative to the task working directory), or
     * use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the Job Manager task runs. If the pool that will run
     * this task has containerConfiguration set, this must be set as well. If the
     * pool that will run this task doesn't have containerConfiguration set, this
     * must not be set. When this is specified, all directories recursively below
     * the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the
     * node) are mapped into the container, all task environment variables are
     * mapped into the container, and the task command line is executed in the
     * container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working
     * directory.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {OutputFile[]} [outputFiles] A list of files that the Batch
     * service will upload from the compute node after running the command line.
     * For multi-instance tasks, the files will only be uploaded from the compute
     * node on which the primary task is executed.
     */
    outputFiles?: OutputFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the Job Manager task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {TaskConstraints} [constraints] Constraints that apply to the Job
     * Manager task.
     */
    constraints?: TaskConstraints;
    /**
     * @member {boolean} [killJobOnCompletion] Whether completion of the Job
     * Manager task signifies completion of the entire job. If true, when the Job
     * Manager task completes, the Batch service marks the job as complete. If
     * any tasks are still running at this time (other than Job Release), those
     * tasks are terminated. If false, the completion of the Job Manager task
     * does not affect the job status. In this case, you should either use the
     * onAllTasksComplete attribute to terminate the job, or have a client or
     * user terminate the job explicitly. An example of this is if the Job
     * Manager creates a set of tasks but then takes no further role in their
     * execution. The default value is true. If you are using the
     * onAllTasksComplete and onTaskFailure attributes to control job lifetime,
     * and using the Job Manager task only to create the tasks for the job (not
     * to monitor progress), then it is important to set killJobOnCompletion to
     * false.
     */
    killJobOnCompletion?: boolean;
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * Job Manager task runs. If omitted, the task runs as a non-administrative
     * user unique to the task.
     */
    userIdentity?: UserIdentity;
    /**
     * @member {boolean} [runExclusive] Whether the Job Manager task requires
     * exclusive use of the compute node where it runs. If true, no other tasks
     * will run on the same compute node for as long as the Job Manager is
     * running. If false, other tasks can run simultaneously with the Job Manager
     * on a compute node. The Job Manager task counts normally against the node's
     * concurrent task limit, so this is only relevant if the node allows
     * multiple concurrent tasks. The default value is true.
     */
    runExclusive?: boolean;
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] A
     * list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy
     * on the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {AuthenticationTokenSettings} [authenticationTokenSettings] The
     * settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN
     * environment variable. The operations that the task can carry out using the
     * token depend on the settings. For example, a task can request job
     * permissions in order to add other tasks to the job, or check the status of
     * the job or of other tasks under the job.
     */
    authenticationTokenSettings?: AuthenticationTokenSettings;
    /**
     * @member {boolean} [allowLowPriorityNode] Whether the Job Manager task may
     * run on a low-priority compute node. The default value is true.
     */
    allowLowPriorityNode?: boolean;
}
/**
 * @interface
 * An interface representing JobPreparationTask.
 * @summary A Job Preparation task to run before any tasks of the job on any
 * given compute node.
 *
 * You can use Job Preparation to prepare a compute node to run tasks for the
 * job. Activities commonly performed in Job Preparation include: Downloading
 * common resource files used by all the tasks in the job. The Job Preparation
 * task can download these common resource files to the shared location on the
 * compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service
 * on the compute node so that all tasks of that job can communicate with it.
 * If the Job Preparation task fails (that is, exhausts its retry count before
 * exiting with exit code 0), Batch will not run tasks of this job on the
 * compute node. The node remains ineligible to run tasks of this job until it
 * is reimaged. The node remains active and can be used for other jobs. The Job
 * Preparation task can run multiple times on the same compute node. Therefore,
 * you should write the Job Preparation task to handle re-execution. If the
 * compute node is rebooted, the Job Preparation task is run again on the node
 * before scheduling any other task of the job, if
 * rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not
 * previously complete. If the compute node is reimaged, the Job Preparation
 * task is run again before scheduling any task of the job. Batch will retry
 * tasks when a recovery operation is triggered on a compute node. Examples of
 * recovery operations include (but are not limited to) when an unhealthy
 * compute node is rebooted or a compute node disappeared due to host failure.
 * Retries due to recovery operations are independent of and are not counted
 * against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an
 * internal retry due to a recovery operation may occur. Because of this, all
 * tasks should be idempotent. This means tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running tasks is to use some form of
 * checkpointing.
 *
 */
export interface JobPreparationTask {
    /**
     * @member {string} [id] A string that uniquely identifies the Job
     * Preparation task within the job. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores and cannot
     * contain more than 64 characters. If you do not specify this property, the
     * Batch service assigns a default value of 'jobpreparation'. No other task
     * in the job can have the same ID as the Job Preparation task. If you try to
     * submit a task with the same id, the Batch service rejects the request with
     * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
     * directly, the HTTP status code is 409 (Conflict).
     */
    id?: string;
    /**
     * @member {string} commandLine The command line of the Job Preparation task.
     * The command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in
     * the command line, for example using "cmd /c MyCommand" in Windows or
     * "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths,
     * it should use a relative path (relative to the task working directory), or
     * use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the Job Preparation task runs. When this is
     * specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR
     * (the root of Azure Batch directories on the node) are mapped into the
     * container, all task environment variables are mapped into the container,
     * and the task command line is executed in the container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working
     * directory.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the Job Preparation task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {TaskConstraints} [constraints] Constraints that apply to the Job
     * Preparation task.
     */
    constraints?: TaskConstraints;
    /**
     * @member {boolean} [waitForSuccess] Whether the Batch service should wait
     * for the Job Preparation task to complete successfully before scheduling
     * any other tasks of the job on the compute node. A Job Preparation task has
     * completed successfully if it exits with exit code 0. If true and the Job
     * Preparation task fails on a compute node, the Batch service retries the
     * Job Preparation task up to its maximum retry count (as specified in the
     * constraints element). If the task has still not completed successfully
     * after all retries, then the Batch service will not schedule tasks of the
     * job to the compute node. The compute node remains active and eligible to
     * run tasks of other jobs. If false, the Batch service will not wait for the
     * Job Preparation task to complete. In this case, other tasks of the job can
     * start executing on the compute node while the Job Preparation task is
     * still running; and even if the Job Preparation task fails, new tasks will
     * continue to be scheduled on the node. The default value is true.
     */
    waitForSuccess?: boolean;
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * Job Preparation task runs. If omitted, the task runs as a
     * non-administrative user unique to the task on Windows nodes, or a a
     * non-administrative user unique to the pool on Linux nodes.
     */
    userIdentity?: UserIdentity;
    /**
     * @member {boolean} [rerunOnNodeRebootAfterSuccess] Whether the Batch
     * service should rerun the Job Preparation task after a compute node
     * reboots. The Job Preparation task is always rerun if a compute node is
     * reimaged, or if the Job Preparation task did not complete (e.g. because
     * the reboot occurred while the task was running). Therefore, you should
     * always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     */
    rerunOnNodeRebootAfterSuccess?: boolean;
}
/**
 * @interface
 * An interface representing JobReleaseTask.
 * @summary A Job Release task to run on job completion on any compute node
 * where the job has run.
 *
 * The Job Release task runs when the job ends, because of one of the
 * following: The user calls the Terminate Job API, or the Delete Job API while
 * the job is still active, the job's maximum wall clock time constraint is
 * reached, and the job is still active, or the job's Job Manager task
 * completed, and the job is configured to terminate when the Job Manager
 * completes. The Job Release task runs on each compute node where tasks of the
 * job have run and the Job Preparation task ran and completed. If you reimage
 * a compute node after it has run the Job Preparation task, and the job ends
 * without any further tasks of the job running on that compute node (and hence
 * the Job Preparation task does not re-run), then the Job Release task does
 * not run on that node. If a compute node reboots while the Job Release task
 * is still running, the Job Release task runs again when the compute node
 * starts up. The job is not marked as complete until all Job Release tasks
 * have completed. The Job Release task runs in the background. It does not
 * occupy a scheduling slot; that is, it does not count towards the
 * maxTasksPerNode limit specified on the pool.
 *
 */
export interface JobReleaseTask {
    /**
     * @member {string} [id] A string that uniquely identifies the Job Release
     * task within the job. The ID can contain any combination of alphanumeric
     * characters including hyphens and underscores and cannot contain more than
     * 64 characters. If you do not specify this property, the Batch service
     * assigns a default value of 'jobrelease'. No other task in the job can have
     * the same ID as the Job Release task. If you try to submit a task with the
     * same id, the Batch service rejects the request with error code
     * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
     * HTTP status code is 409 (Conflict).
     */
    id?: string;
    /**
     * @member {string} commandLine The command line of the Job Release task. The
     * command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in
     * the command line, for example using "cmd /c MyCommand" in Windows or
     * "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths,
     * it should use a relative path (relative to the task working directory), or
     * use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the Job Release task runs. When this is specified,
     * all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of
     * Azure Batch directories on the node) are mapped into the container, all
     * task environment variables are mapped into the container, and the task
     * command line is executed in the container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working
     * directory.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the Job Release task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {string} [maxWallClockTime] The maximum elapsed time that the Job
     * Release task may run on a given compute node, measured from the time the
     * task starts. If the task does not complete within the time limit, the
     * Batch service terminates it. The default value is 15 minutes. You may not
     * specify a timeout longer than 15 minutes. If you do, the Batch service
     * rejects it with an error; if you are calling the REST API directly, the
     * HTTP status code is 400 (Bad Request).
     */
    maxWallClockTime?: string;
    /**
     * @member {string} [retentionTime] The minimum time to retain the task
     * directory for the Job Release task on the compute node. After this time,
     * the Batch service may delete the task directory and all its contents. The
     * default is infinite, i.e. the task directory will be retained until the
     * compute node is removed or reimaged.
     */
    retentionTime?: string;
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * Job Release task runs. If omitted, the task runs as a non-administrative
     * user unique to the task.
     */
    userIdentity?: UserIdentity;
}
/**
 * @interface
 * An interface representing TaskSchedulingPolicy.
 * @summary Specifies how tasks should be distributed across compute nodes.
 *
 */
export interface TaskSchedulingPolicy {
    /**
     * @member {ComputeNodeFillType} nodeFillType How tasks are distributed
     * across compute nodes in a pool. Possible values include: 'spread', 'pack'
     */
    nodeFillType: ComputeNodeFillType;
}
/**
 * @interface
 * An interface representing StartTask.
 * @summary A task which is run when a compute node joins a pool in the Azure
 * Batch service, or when the compute node is rebooted or reimaged.
 *
 * Batch will retry tasks when a recovery operation is triggered on a compute
 * node. Examples of recovery operations include (but are not limited to) when
 * an unhealthy compute node is rebooted or a compute node disappeared due to
 * host failure. Retries due to recovery operations are independent of and are
 * not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is
 * 0, an internal retry due to a recovery operation may occur. Because of this,
 * all tasks should be idempotent. This means tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running tasks is to use some form of
 * checkpointing.
 *
 */
export interface StartTask {
    /**
     * @member {string} commandLine The command line of the start task. The
     * command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in
     * the command line, for example using "cmd /c MyCommand" in Windows or
     * "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths,
     * it should use a relative path (relative to the task working directory), or
     * use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the start task runs. When this is specified, all
     * directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of
     * Azure Batch directories on the node) are mapped into the container, all
     * task environment variables are mapped into the container, and the task
     * command line is executed in the container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working
     * directory.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the start task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * start task runs. If omitted, the task runs as a non-administrative user
     * unique to the task.
     */
    userIdentity?: UserIdentity;
    /**
     * @member {number} [maxTaskRetryCount] The maximum number of times the task
     * may be retried. The Batch service retries a task if its exit code is
     * nonzero. Note that this value specifically controls the number of retries.
     * The Batch service will try the task once, and may then retry up to this
     * limit. For example, if the maximum retry count is 3, Batch tries the task
     * up to 4 times (one initial try and 3 retries). If the maximum retry count
     * is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     */
    maxTaskRetryCount?: number;
    /**
     * @member {boolean} [waitForSuccess] Whether the Batch service should wait
     * for the start task to complete successfully (that is, to exit with exit
     * code 0) before scheduling any tasks on the compute node. If true and the
     * start task fails on a compute node, the Batch service retries the start
     * task up to its maximum retry count (maxTaskRetryCount). If the task has
     * still not completed successfully after all retries, then the Batch service
     * marks the compute node unusable, and will not schedule tasks to it. This
     * condition can be detected via the node state and failure info details. If
     * false, the Batch service will not wait for the start task to complete. In
     * this case, other tasks can start executing on the compute node while the
     * start task is still running; and even if the start task fails, new tasks
     * will continue to be scheduled on the node. The default is false.
     */
    waitForSuccess?: boolean;
}
/**
 * @interface
 * An interface representing CertificateReference.
 * @summary A reference to a certificate to be installed on compute nodes in a
 * pool.
 *
 */
export interface CertificateReference {
    /**
     * @member {string} thumbprint The thumbprint of the certificate.
     */
    thumbprint: string;
    /**
     * @member {string} thumbprintAlgorithm The algorithm with which the
     * thumbprint is associated. This must be sha1.
     */
    thumbprintAlgorithm: string;
    /**
     * @member {CertificateStoreLocation} [storeLocation] The location of the
     * certificate store on the compute node into which to install the
     * certificate. The default value is currentuser. This property is applicable
     * only for pools configured with Windows nodes (that is, created with
     * cloudServiceConfiguration, or with virtualMachineConfiguration using a
     * Windows image reference). For Linux compute nodes, the certificates are
     * stored in a directory inside the task working directory and an environment
     * variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for
     * this location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     * Possible values include: 'currentUser', 'localMachine'
     */
    storeLocation?: CertificateStoreLocation;
    /**
     * @member {string} [storeName] The name of the certificate store on the
     * compute node into which to install the certificate. This property is
     * applicable only for pools configured with Windows nodes (that is, created
     * with cloudServiceConfiguration, or with virtualMachineConfiguration using
     * a Windows image reference). Common store names include: My, Root, CA,
     * Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook,
     * but any custom store name can also be used. The default value is My.
     */
    storeName?: string;
    /**
     * @member {CertificateVisibility[]} [visibility] Which user accounts on the
     * compute node should have access to the private data of the certificate.
     * You can specify more than one visibility in this collection. The default
     * is all accounts.
     */
    visibility?: CertificateVisibility[];
}
/**
 * @interface
 * An interface representing MetadataItem.
 * @summary A name-value pair associated with a Batch service resource.
 *
 * The Batch service does not assign any meaning to this metadata; it is solely
 * for the use of user code.
 *
 */
export interface MetadataItem {
    /**
     * @member {string} name The name of the metadata item.
     */
    name: string;
    /**
     * @member {string} value The value of the metadata item.
     */
    value: string;
}
/**
 * @interface
 * An interface representing CloudServiceConfiguration.
 * @summary The configuration for nodes in a pool based on the Azure Cloud
 * Services platform.
 *
 */
export interface CloudServiceConfiguration {
    /**
     * @member {string} osFamily The Azure Guest OS family to be installed on the
     * virtual machines in the pool. Possible values are: 2 - OS Family 2,
     * equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to
     * Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012
     * R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more
     * information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     */
    osFamily: string;
    /**
     * @member {string} [targetOSVersion] The Azure Guest OS version to be
     * installed on the virtual machines in the pool. The default value is *
     * which specifies the latest operating system version for the specified OS
     * family.
     */
    targetOSVersion?: string;
    /**
     * @member {string} [currentOSVersion] The Azure Guest OS Version currently
     * installed on the virtual machines in the pool. This may differ from
     * targetOSVersion if the pool state is Upgrading. In this case some virtual
     * machines may be on the targetOSVersion and some may be on the
     * currentOSVersion during the upgrade process. Once all virtual machines
     * have upgraded, currentOSVersion is updated to be the same as
     * targetOSVersion.
     */
    readonly currentOSVersion?: string;
}
/**
 * @interface
 * An interface representing OSDisk.
 * @summary Settings for the operating system disk of the virtual machine.
 *
 */
export interface OSDisk {
    /**
     * @member {CachingType} [caching] The type of caching to enable for the OS
     * disk. The default value for caching is none. For information about the
     * caching options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     */
    caching?: CachingType;
}
/**
 * @interface
 * An interface representing WindowsConfiguration.
 * @summary Windows operating system settings to apply to the virtual machine.
 *
 */
export interface WindowsConfiguration {
    /**
     * @member {boolean} [enableAutomaticUpdates] Whether automatic updates are
     * enabled on the virtual machine. If omitted, the default value is true.
     */
    enableAutomaticUpdates?: boolean;
}
/**
 * @interface
 * An interface representing DataDisk.
 * @summary Settings which will be used by the data disks associated to compute
 * nodes in the pool.
 *
 */
export interface DataDisk {
    /**
     * @member {number} lun The logical unit number. The lun is used to uniquely
     * identify each data disk. If attaching multiple disks, each should have a
     * distinct lun.
     */
    lun: number;
    /**
     * @member {CachingType} [caching] The type of caching to be enabled for the
     * data disks. The default value for caching is none. For information about
     * the caching options see:
     * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     * Possible values include: 'none', 'readOnly', 'readWrite'
     */
    caching?: CachingType;
    /**
     * @member {number} diskSizeGB The initial disk size in gigabytes.
     */
    diskSizeGB: number;
    /**
     * @member {StorageAccountType} [storageAccountType] The storage account type
     * to be used for the data disk. If omitted, the default is "standard_lrs".
     * Possible values include: 'StandardLRS', 'PremiumLRS'
     */
    storageAccountType?: StorageAccountType;
}
/**
 * @interface
 * An interface representing ContainerConfiguration.
 * @summary The configuration for container-enabled pools.
 *
 */
export interface ContainerConfiguration {
    /**
     * @member {string[]} [containerImageNames] The collection of container image
     * names. This is the full image reference, as would be specified to "docker
     * pull". An image will be sourced from the default Docker registry unless
     * the image is fully qualified with an alternative registry.
     */
    containerImageNames?: string[];
    /**
     * @member {ContainerRegistry[]} [containerRegistries] Additional private
     * registries from which containers can be pulled. If any images must be
     * downloaded from a private registry which requires credentials, then those
     * credentials must be provided here.
     */
    containerRegistries?: ContainerRegistry[];
}
/**
 * @interface
 * An interface representing VirtualMachineConfiguration.
 * @summary The configuration for compute nodes in a pool based on the Azure
 * Virtual Machines infrastructure.
 *
 */
export interface VirtualMachineConfiguration {
    /**
     * @member {ImageReference} imageReference A reference to the Azure Virtual
     * Machines Marketplace image or the custom Virtual Machine image to use.
     */
    imageReference: ImageReference;
    /**
     * @member {OSDisk} [osDisk] Settings for the operating system disk of the
     * Virtual Machine.
     */
    osDisk?: OSDisk;
    /**
     * @member {string} nodeAgentSKUId The SKU of the Batch node agent to be
     * provisioned on compute nodes in the pool. The Batch node agent is a
     * program that runs on each node in the pool, and provides the
     * command-and-control interface between the node and the Batch service.
     * There are different implementations of the node agent, known as SKUs, for
     * different operating systems. You must specify a node agent SKU which
     * matches the selected image reference. To get the list of supported node
     * agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     */
    nodeAgentSKUId: string;
    /**
     * @member {WindowsConfiguration} [windowsConfiguration] Windows operating
     * system settings on the virtual machine. This property must not be
     * specified if the imageReference or osDisk property specifies a Linux OS
     * image.
     */
    windowsConfiguration?: WindowsConfiguration;
    /**
     * @member {DataDisk[]} [dataDisks] The configuration for data disks attached
     * to the comptue nodes in the pool. This property must be specified if the
     * compute nodes in the pool need to have empty data disks attached to them.
     * This cannot be updated. Each node gets its own disk (the disk is not a
     * file share). Existing disks cannot be attached, each attached disk is
     * empty. When the node is removed from the pool, the disk and all data
     * associated with it is also deleted. The disk is not formatted after being
     * attached, it must be formatted before use - for more information see
     * https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux
     * and
     * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
     */
    dataDisks?: DataDisk[];
    /**
     * @member {string} [licenseType] The type of on-premises license to be used
     * when deploying the operating system. This only applies to images that
     * contain the Windows operating system, and should only be used when you
     * hold valid on-premises licenses for the nodes which will be deployed. If
     * omitted, no on-premises licensing discount is applied. Values are:
     *
     * Windows_Server - The on-premises license is for Windows Server.
     * Windows_Client - The on-premises license is for Windows Client.
     */
    licenseType?: string;
    /**
     * @member {ContainerConfiguration} [containerConfiguration] The container
     * configuration for the pool. If specified, setup is performed on each node
     * in the pool to allow tasks to run in containers. All regular tasks and job
     * manager tasks run on this pool must specify the containerSettings
     * property, and all other tasks may specify it.
     */
    containerConfiguration?: ContainerConfiguration;
}
/**
 * @interface
 * An interface representing NetworkSecurityGroupRule.
 * @summary A network security group rule to apply to an inbound endpoint.
 *
 */
export interface NetworkSecurityGroupRule {
    /**
     * @member {number} priority The priority for this rule. Priorities within a
     * pool must be unique and are evaluated in order of priority. The lower the
     * number the higher the priority. For example, rules could be specified with
     * order numbers of 150, 250, and 350. The rule with the order number of 150
     * takes precedence over the rule that has an order of 250. Allowed
     * priorities are 150 to 3500. If any reserved or duplicate values are
     * provided the request fails with HTTP status code 400.
     */
    priority: number;
    /**
     * @member {NetworkSecurityGroupRuleAccess} access The action that should be
     * taken for a specified IP address, subnet range or tag. Possible values
     * include: 'allow', 'deny'
     */
    access: NetworkSecurityGroupRuleAccess;
    /**
     * @member {string} sourceAddressPrefix The source address prefix or tag to
     * match for the rule. Valid values are a single IP address (i.e.
     * 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all
     * addresses).  If any other values are provided the request fails with HTTP
     * status code 400.
     */
    sourceAddressPrefix: string;
}
/**
 * @interface
 * An interface representing InboundNATPool.
 * @summary A inbound NAT pool that can be used to address specific ports on
 * compute nodes in a Batch pool externally.
 *
 */
export interface InboundNATPool {
    /**
     * @member {string} name The name of the endpoint. The name must be unique
     * within a Batch pool, can contain letters, numbers, underscores, periods,
     * and hyphens. Names must start with a letter or number, must end with a
     * letter, number, or underscore, and cannot exceed 77 characters.  If any
     * invalid values are provided the request fails with HTTP status code 400.
     */
    name: string;
    /**
     * @member {InboundEndpointProtocol} protocol The protocol of the endpoint.
     * Possible values include: 'tcp', 'udp'
     */
    protocol: InboundEndpointProtocol;
    /**
     * @member {number} backendPort The port number on the compute node. This
     * must be unique within a Batch pool. Acceptable values are between 1 and
     * 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any
     * reserved values are provided the request fails with HTTP status code 400.
     */
    backendPort: number;
    /**
     * @member {number} frontendPortRangeStart The first port number in the range
     * of external ports that will be used to provide inbound access to the
     * backendPort on individual compute nodes. Acceptable values range between 1
     * and 65534 except ports from 50000 to 55000 which are reserved. All ranges
     * within a pool must be distinct and cannot overlap. Each range must contain
     * at least 40 ports. If any reserved or overlapping values are provided the
     * request fails with HTTP status code 400.
     */
    frontendPortRangeStart: number;
    /**
     * @member {number} frontendPortRangeEnd The last port number in the range of
     * external ports that will be used to provide inbound access to the
     * backendPort on individual compute nodes. Acceptable values range between 1
     * and 65534 except ports from 50000 to 55000 which are reserved by the Batch
     * service. All ranges within a pool must be distinct and cannot overlap.
     * Each range must contain at least 40 ports. If any reserved or overlapping
     * values are provided the request fails with HTTP status code 400.
     */
    frontendPortRangeEnd: number;
    /**
     * @member {NetworkSecurityGroupRule[]} [networkSecurityGroupRules] A list of
     * network security group rules that will be applied to the endpoint. The
     * maximum number of rules that can be specified across all the endpoints on
     * a Batch pool is 25. If no network security group rules are specified, a
     * default rule will be created to allow inbound access to the specified
     * backendPort. If the maximum number of network security group rules is
     * exceeded the request fails with HTTP status code 400.
     */
    networkSecurityGroupRules?: NetworkSecurityGroupRule[];
}
/**
 * @interface
 * An interface representing PoolEndpointConfiguration.
 * @summary The endpoint configuration for a pool.
 *
 */
export interface PoolEndpointConfiguration {
    /**
     * @member {InboundNATPool[]} inboundNATPools A list of inbound NAT pools
     * that can be used to address specific ports on an individual compute node
     * externally. The maximum number of inbound NAT pools per Batch pool is 5.
     * If the maximum number of inbound NAT pools is exceeded the request fails
     * with HTTP status code 400.
     */
    inboundNATPools: InboundNATPool[];
}
/**
 * @interface
 * An interface representing NetworkConfiguration.
 * The network configuration for a pool.
 *
 */
export interface NetworkConfiguration {
    /**
     * @member {string} [subnetId] The ARM resource identifier of the virtual
     * network subnet which the compute nodes of the pool will join. This is of
     * the form
     * /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}.
     * The virtual network must be in the same region and subscription as the
     * Azure Batch account. The specified subnet should have enough free IP
     * addresses to accommodate the number of nodes in the pool. If the subnet
     * doesn't have enough free IP addresses, the pool will partially allocate
     * compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch'
     * service principal must have the 'Classic Virtual Machine Contributor'
     * Role-Based Access Control (RBAC) role for the specified VNet. The
     * specified subnet must allow communication from the Azure Batch service to
     * be able to schedule tasks on the compute nodes. This can be verified by
     * checking if the specified VNet has any associated Network Security Groups
     * (NSG). If communication to the compute nodes in the specified subnet is
     * denied by an NSG, then the Batch service will set the state of the compute
     * nodes to unusable. For pools created with virtualMachineConfiguration only
     * ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported,
     * but for pools created with cloudServiceConfiguration both ARM and classic
     * virtual networks are supported. If the specified VNet has any associated
     * Network Security Groups (NSG), then a few reserved system ports must be
     * enabled for inbound communication. For pools created with a virtual
     * machine configuration, enable ports 29876 and 29877, as well as port 22
     * for Linux and port 3389 for Windows. For pools created with a cloud
     * service configuration, enable ports 10100, 20100, and 30100. Also enable
     * outbound connections to Azure Storage on port 443. For more details see:
     * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     */
    subnetId?: string;
    /**
     * @member {PoolEndpointConfiguration} [endpointConfiguration] The
     * configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     */
    endpointConfiguration?: PoolEndpointConfiguration;
}
/**
 * @interface
 * An interface representing PoolSpecification.
 * @summary Specification for creating a new pool.
 *
 */
export interface PoolSpecification {
    /**
     * @member {string} [displayName] The display name for the pool. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} vmSize The size of the virtual machines in the pool. All
     * virtual machines in a pool are the same size. For information about
     * available sizes of virtual machines for Cloud Services pools (pools
     * created with cloudServiceConfiguration), see Sizes for Cloud Services
     * (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and
     * A2V2. For information about available VM sizes for pools using images from
     * the Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with
     * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize: string;
    /**
     * @member {CloudServiceConfiguration} [cloudServiceConfiguration] The cloud
     * service configuration for the pool. This property must be specified if the
     * pool needs to be created with Azure PaaS VMs. This property and
     * virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch
     * service returns an error; if you are calling the REST API directly, the
     * HTTP status code is 400 (Bad Request). This property cannot be specified
     * if the Batch account was created with its poolAllocationMode property set
     * to 'UserSubscription'.
     */
    cloudServiceConfiguration?: CloudServiceConfiguration;
    /**
     * @member {VirtualMachineConfiguration} [virtualMachineConfiguration] The
     * virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This
     * property and cloudServiceConfiguration are mutually exclusive and one of
     * the properties must be specified. If neither is specified then the Batch
     * service returns an error; if you are calling the REST API directly, the
     * HTTP status code is 400 (Bad Request).
     */
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    /**
     * @member {number} [maxTasksPerNode] The maximum number of tasks that can
     * run concurrently on a single compute node in the pool. The default value
     * is 1. The maximum value of this setting depends on the size of the compute
     * nodes in the pool (the vmSize setting).
     */
    maxTasksPerNode?: number;
    /**
     * @member {TaskSchedulingPolicy} [taskSchedulingPolicy] How tasks are
     * distributed across compute nodes in a pool.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * @member {string} [resizeTimeout] The timeout for allocation of compute
     * nodes to the pool. This timeout applies only to manual scaling; it has no
     * effect when enableAutoScale is set to true. The default value is 15
     * minutes. The minimum value is 5 minutes. If you specify a value less than
     * 5 minutes, the Batch service rejects the request with an error; if you are
     * calling the REST API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    /**
     * @member {number} [targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to true. If enableAutoScale is set to false, then
     * you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     */
    targetDedicatedNodes?: number;
    /**
     * @member {number} [targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     */
    targetLowPriorityNodes?: number;
    /**
     * @member {boolean} [enableAutoScale] Whether the pool size should
     * automatically adjust over time. If false, at least one of
     * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
     * the autoScaleFormula element is required. The pool automatically resizes
     * according to the formula. The default value is false.
     */
    enableAutoScale?: boolean;
    /**
     * @member {string} [autoScaleFormula] The formula for the desired number of
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to false. It is required if enableAutoScale is set
     * to true. The formula is checked for validity before the pool is created.
     * If the formula is not valid, the Batch service rejects the request with
     * detailed error information.
     */
    autoScaleFormula?: string;
    /**
     * @member {string} [autoScaleEvaluationInterval] The time interval at which
     * to automatically adjust the pool size according to the autoscale formula.
     * The default value is 15 minutes. The minimum and maximum value are 5
     * minutes and 168 hours respectively. If you specify a value less than 5
     * minutes or greater than 168 hours, the Batch service rejects the request
     * with an invalid property value error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     */
    autoScaleEvaluationInterval?: string;
    /**
     * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
     * direct communication between nodes. Enabling inter-node communication
     * limits the maximum size of the pool due to deployment restrictions on the
     * nodes of the pool. This may result in the pool not reaching its desired
     * size. The default value is false.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * @member {NetworkConfiguration} [networkConfiguration] The network
     * configuration for the pool.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * @member {StartTask} [startTask] A task to run on each compute node as it
     * joins the pool. The task runs when the node is added to the pool or when
     * the node is restarted.
     */
    startTask?: StartTask;
    /**
     * @member {CertificateReference[]} [certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. For Windows
     * compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory
     * and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the
     * task to query for this location. For certificates with visibility of
     * 'remoteUser', a 'certs' directory is created in the user's home directory
     * (e.g., /home/{user-name}/certs) and certificates are placed in that
     * directory.
     */
    certificateReferences?: CertificateReference[];
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] The
     * list of application packages to be installed on each compute node in the
     * pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {string[]} [applicationLicenses] The list of application licenses
     * the Batch service will make available on each compute node in the pool.
     * The list of application licenses must be a subset of available Batch
     * service application licenses. If a license is requested which is not
     * supported, pool creation will fail.
     */
    applicationLicenses?: string[];
    /**
     * @member {UserAccount[]} [userAccounts] The list of user accounts to be
     * created on each node in the pool.
     */
    userAccounts?: UserAccount[];
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the pool as metadata. The Batch service does not assign any meaning
     * to metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing AutoPoolSpecification.
 * @summary Specifies characteristics for a temporary 'auto pool'. The Batch
 * service will create this auto pool when the job is submitted.
 *
 */
export interface AutoPoolSpecification {
    /**
     * @member {string} [autoPoolIdPrefix] A prefix to be added to the unique
     * identifier when a pool is automatically created. The Batch service assigns
     * each auto pool a unique identifier on creation. To distinguish between
     * pools created for different purposes, you can specify this element to add
     * a prefix to the ID that is assigned. The prefix can be up to 20 characters
     * long.
     */
    autoPoolIdPrefix?: string;
    /**
     * @member {PoolLifetimeOption} poolLifetimeOption The minimum lifetime of
     * created auto pools, and how multiple jobs on a schedule are assigned to
     * pools. Possible values include: 'jobSchedule', 'job'
     */
    poolLifetimeOption: PoolLifetimeOption;
    /**
     * @member {boolean} [keepAlive] Whether to keep an auto pool alive after its
     * lifetime expires. If false, the Batch service deletes the pool once its
     * lifetime (as determined by the poolLifetimeOption setting) expires; that
     * is, when the job or job schedule completes. If true, the Batch service
     * does not delete the pool automatically. It is up to the user to delete
     * auto pools created with this option.
     */
    keepAlive?: boolean;
    /**
     * @member {PoolSpecification} [pool] The pool specification for the auto
     * pool.
     */
    pool?: PoolSpecification;
}
/**
 * @interface
 * An interface representing PoolInformation.
 * @summary Specifies how a job should be assigned to a pool.
 *
 */
export interface PoolInformation {
    /**
     * @member {string} [poolId] The ID of an existing pool. All the tasks of the
     * job will run on the specified pool. You must ensure that the pool
     * referenced by this property exists. If the pool does not exist at the time
     * the Batch service tries to schedule a job, no tasks for the job will run
     * until you create a pool with that id. Note that the Batch service will not
     * reject the job request; it will simply not run tasks until the pool
     * exists. You must specify either the pool ID or the auto pool
     * specification, but not both.
     */
    poolId?: string;
    /**
     * @member {AutoPoolSpecification} [autoPoolSpecification] Characteristics
     * for a temporary 'auto pool'. The Batch service will create this auto pool
     * when the job is submitted. If auto pool creation fails, the Batch service
     * moves the job to a completed state, and the pool creation error is set in
     * the job's scheduling error property. The Batch service manages the
     * lifetime (both creation and, unless keepAlive is specified, deletion) of
     * the auto pool. Any user actions that affect the lifetime of the auto pool
     * while the job is active will result in unexpected behavior. You must
     * specify either the pool ID or the auto pool specification, but not both.
     */
    autoPoolSpecification?: AutoPoolSpecification;
}
/**
 * @interface
 * An interface representing JobSpecification.
 * @summary Specifies details of the jobs to be created on a schedule.
 *
 */
export interface JobSpecification {
    /**
     * @member {number} [priority] The priority of jobs created under this
     * schedule. Priority values can range from -1000 to 1000, with -1000 being
     * the lowest priority and 1000 being the highest priority. The default value
     * is 0. This priority is used as the default for all jobs under the job
     * schedule. You can update a job's priority after it has been created using
     * by using the update job API.
     */
    priority?: number;
    /**
     * @member {string} [displayName] The display name for jobs created under
     * this schedule. The name need not be unique and can contain any Unicode
     * characters up to a maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {boolean} [usesTaskDependencies] Whether tasks in the job can
     * define dependencies on each other. The default is false.
     */
    usesTaskDependencies?: boolean;
    /**
     * @member {OnAllTasksComplete} [onAllTasksComplete] The action the Batch
     * service should take when all tasks in a job created under this schedule
     * are in the completed state. Note that if a job contains no tasks, then all
     * tasks are considered complete. This option is therefore most commonly used
     * with a Job Manager task; if you want to use automatic job termination
     * without a Job Manager, you should initially set onAllTasksComplete to
     * noaction and update the job properties to set onAllTasksComplete to
     * terminatejob once you have finished adding tasks. The default is noaction.
     * Possible values include: 'noAction', 'terminateJob'
     */
    onAllTasksComplete?: OnAllTasksComplete;
    /**
     * @member {OnTaskFailure} [onTaskFailure] The action the Batch service
     * should take when any task fails in a job created under this schedule. A
     * task is considered to have failed if it have failed if has a failureInfo.
     * A failureInfo is set if the task completes with a non-zero exit code after
     * exhausting its retry count, or if there was an error starting the task,
     * for example due to a resource file download error. The default is
     * noaction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     */
    onTaskFailure?: OnTaskFailure;
    /**
     * @member {JobConstraints} [constraints] The execution constraints for jobs
     * created under this schedule.
     */
    constraints?: JobConstraints;
    /**
     * @member {JobManagerTask} [jobManagerTask] The details of a Job Manager
     * task to be launched when a job is started under this schedule. If the job
     * does not specify a Job Manager task, the user must explicitly add tasks to
     * the job using the Task API. If the job does specify a Job Manager task,
     * the Batch service creates the Job Manager task when the job is created,
     * and will try to schedule the Job Manager task before scheduling other
     * tasks in the job.
     */
    jobManagerTask?: JobManagerTask;
    /**
     * @member {JobPreparationTask} [jobPreparationTask] The Job Preparation task
     * for jobs created under this schedule. If a job has a Job Preparation task,
     * the Batch service will run the Job Preparation task on a compute node
     * before starting any tasks of that job on that compute node.
     */
    jobPreparationTask?: JobPreparationTask;
    /**
     * @member {JobReleaseTask} [jobReleaseTask] The Job Release task for jobs
     * created under this schedule. The primary purpose of the Job Release task
     * is to undo changes to compute nodes made by the Job Preparation task.
     * Example activities include deleting local files, or shutting down services
     * that were started as part of job preparation. A Job Release task cannot be
     * specified without also specifying a Job Preparation task for the job. The
     * Batch service runs the Job Release task on the compute nodes that have run
     * the Job Preparation task.
     */
    jobReleaseTask?: JobReleaseTask;
    /**
     * @member {EnvironmentSetting[]} [commonEnvironmentSettings] A list of
     * common environment variable settings. These environment variables are set
     * for all tasks in jobs created under this schedule (including the Job
     * Manager, Job Preparation and Job Release tasks). Individual tasks can
     * override an environment setting specified here by specifying the same
     * setting name with a different value.
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * @member {PoolInformation} poolInfo The pool on which the Batch service
     * runs the tasks of jobs created under this schedule.
     */
    poolInfo: PoolInformation;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with each job created under this schedule as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing RecentJob.
 * @summary Information about the most recent job to run under the job
 * schedule.
 *
 */
export interface RecentJob {
    /**
     * @member {string} [id] The ID of the job.
     */
    id?: string;
    /**
     * @member {string} [url] The URL of the job.
     */
    url?: string;
}
/**
 * @interface
 * An interface representing JobScheduleExecutionInformation.
 * @summary Contains information about jobs that have been and will be run
 * under a job schedule.
 *
 */
export interface JobScheduleExecutionInformation {
    /**
     * @member {Date} [nextRunTime] The next time at which a job will be created
     * under this schedule. This property is meaningful only if the schedule is
     * in the active state when the time comes around. For example, if the
     * schedule is disabled, no job will be created at nextRunTime unless the job
     * is enabled before then.
     */
    nextRunTime?: Date;
    /**
     * @member {RecentJob} [recentJob] Information about the most recent job
     * under the job schedule. This property is present only if the at least one
     * job has run under the schedule.
     */
    recentJob?: RecentJob;
    /**
     * @member {Date} [endTime] The time at which the schedule ended. This
     * property is set only if the job schedule is in the completed state.
     */
    endTime?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleStatistics.
 * @summary Resource usage statistics for a job schedule.
 *
 */
export interface JobScheduleStatistics {
    /**
     * @member {string} url The URL of the statistics.
     */
    url: string;
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {string} userCPUTime The total user mode CPU time (summed across
     * all cores and all compute nodes) consumed by all tasks in all jobs created
     * under the schedule.
     */
    userCPUTime: string;
    /**
     * @member {string} kernelCPUTime The total kernel mode CPU time (summed
     * across all cores and all compute nodes) consumed by all tasks in all jobs
     * created under the schedule.
     */
    kernelCPUTime: string;
    /**
     * @member {string} wallClockTime The total wall clock time of all the tasks
     * in all the jobs created under the schedule. The wall clock time is the
     * elapsed time from when the task started running on a compute node to when
     * it finished (or to the last time the statistics were updated, if the task
     * had not finished by then). If a task was retried, this includes the wall
     * clock time of all the task retries.
     */
    wallClockTime: string;
    /**
     * @member {number} readIOps The total number of disk read operations made by
     * all tasks in all jobs created under the schedule.
     */
    readIOps: number;
    /**
     * @member {number} writeIOps The total number of disk write operations made
     * by all tasks in all jobs created under the schedule.
     */
    writeIOps: number;
    /**
     * @member {number} readIOGiB The total gibibytes read from disk by all tasks
     * in all jobs created under the schedule.
     */
    readIOGiB: number;
    /**
     * @member {number} writeIOGiB The total gibibytes written to disk by all
     * tasks in all jobs created under the schedule.
     */
    writeIOGiB: number;
    /**
     * @member {number} numSucceededTasks The total number of tasks successfully
     * completed during the given time range in jobs created under the schedule.
     * A task completes successfully if it returns exit code 0.
     */
    numSucceededTasks: number;
    /**
     * @member {number} numFailedTasks The total number of tasks that failed
     * during the given time range in jobs created under the schedule. A task
     * fails if it exhausts its maximum retry count without returning exit code
     * 0.
     */
    numFailedTasks: number;
    /**
     * @member {number} numTaskRetries The total number of retries during the
     * given time range on all tasks in all jobs created under the schedule.
     */
    numTaskRetries: number;
    /**
     * @member {string} waitTime The total wait time of all tasks in all jobs
     * created under the schedule. The wait time for a task is defined as the
     * elapsed time between the creation of the task and the start of task
     * execution. (If the task is retried due to failures, the wait time is the
     * time to the most recent task execution.). This value is only reported in
     * the account lifetime statistics; it is not included in the job statistics.
     */
    waitTime: string;
}
/**
 * @interface
 * An interface representing CloudJobSchedule.
 * @summary A job schedule that allows recurring jobs by specifying when to run
 * jobs and a specification used to create each job.
 *
 */
export interface CloudJobSchedule {
    /**
     * @member {string} [id] A string that uniquely identifies the schedule
     * within the account.
     */
    id?: string;
    /**
     * @member {string} [displayName] The display name for the schedule.
     */
    displayName?: string;
    /**
     * @member {string} [url] The URL of the job schedule.
     */
    url?: string;
    /**
     * @member {string} [eTag] The ETag of the job schedule. This is an opaque
     * string. You can use it to detect whether the job schedule has changed
     * between requests. In particular, you can be pass the ETag with an Update
     * Job Schedule request to specify that your changes should take effect only
     * if nobody else has modified the schedule in the meantime.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The last modified time of the job schedule.
     * This is the last time at which the schedule level data, such as the job
     * specification or recurrence information, changed. It does not factor in
     * job-level changes such as new jobs being created or jobs changing state.
     */
    lastModified?: Date;
    /**
     * @member {Date} [creationTime] The creation time of the job schedule.
     */
    creationTime?: Date;
    /**
     * @member {JobScheduleState} [state] The current state of the job schedule.
     * Possible values include: 'active', 'completed', 'disabled', 'terminating',
     * 'deleting'
     */
    state?: JobScheduleState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the job schedule
     * entered the current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {JobScheduleState} [previousState] The previous state of the job
     * schedule. This property is not present if the job schedule is in its
     * initial active state. Possible values include: 'active', 'completed',
     * 'disabled', 'terminating', 'deleting'
     */
    previousState?: JobScheduleState;
    /**
     * @member {Date} [previousStateTransitionTime] The time at which the job
     * schedule entered its previous state. This property is not present if the
     * job schedule is in its initial active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * @member {Schedule} [schedule] The schedule according to which jobs will be
     * created.
     */
    schedule?: Schedule;
    /**
     * @member {JobSpecification} [jobSpecification] The details of the jobs to
     * be created on this schedule.
     */
    jobSpecification?: JobSpecification;
    /**
     * @member {JobScheduleExecutionInformation} [executionInfo] Information
     * about jobs that have been and will be run under this schedule.
     */
    executionInfo?: JobScheduleExecutionInformation;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the schedule as metadata. The Batch service does not assign any
     * meaning to metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
    /**
     * @member {JobScheduleStatistics} [stats] The lifetime resource usage
     * statistics for the job schedule. The statistics may not be immediately
     * available. The Batch service performs periodic roll-up of statistics. The
     * typical delay is about 30 minutes.
     */
    stats?: JobScheduleStatistics;
}
/**
 * @interface
 * An interface representing JobScheduleAddParameter.
 * @summary A job schedule that allows recurring jobs by specifying when to run
 * jobs and a specification used to create each job.
 *
 */
export interface JobScheduleAddParameter {
    /**
     * @member {string} id A string that uniquely identifies the schedule within
     * the account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you
     * may not have two IDs within an account that differ only by case).
     */
    id: string;
    /**
     * @member {string} [displayName] The display name for the schedule. The
     * display name need not be unique and can contain any Unicode characters up
     * to a maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {Schedule} schedule The schedule according to which jobs will be
     * created.
     */
    schedule: Schedule;
    /**
     * @member {JobSpecification} jobSpecification The details of the jobs to be
     * created on this schedule.
     */
    jobSpecification: JobSpecification;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the schedule as metadata. The Batch service does not assign any
     * meaning to metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing JobSchedulingError.
 * @summary An error encountered by the Batch service when scheduling a job.
 *
 */
export interface JobSchedulingError {
    /**
     * @member {ErrorCategory} category The category of the job scheduling error.
     * Possible values include: 'userError', 'serverError'
     */
    category: ErrorCategory;
    /**
     * @member {string} [code] An identifier for the job scheduling error. Codes
     * are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the job scheduling error,
     * intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [details] A list of additional error details
     * related to the scheduling error.
     */
    details?: NameValuePair[];
}
/**
 * @interface
 * An interface representing JobExecutionInformation.
 * @summary Contains information about the execution of a job in the Azure
 * Batch service.
 *
 */
export interface JobExecutionInformation {
    /**
     * @member {Date} startTime The start time of the job. This is the time at
     * which the job was created.
     */
    startTime: Date;
    /**
     * @member {Date} [endTime] The completion time of the job. This property is
     * set only if the job is in the completed state.
     */
    endTime?: Date;
    /**
     * @member {string} [poolId] The ID of the pool to which this job is
     * assigned. This element contains the actual pool where the job is assigned.
     * When you get job details from the service, they also contain a poolInfo
     * element, which contains the pool configuration data from when the job was
     * added or updated. That poolInfo element may also contain a poolId element.
     * If it does, the two IDs are the same. If it does not, it means the job ran
     * on an auto pool, and this property contains the ID of that auto pool.
     */
    poolId?: string;
    /**
     * @member {JobSchedulingError} [schedulingError] Details of any error
     * encountered by the service in starting the job. This property is not set
     * if there was no error starting the job.
     */
    schedulingError?: JobSchedulingError;
    /**
     * @member {string} [terminateReason] A string describing the reason the job
     * ended. This property is set only if the job is in the completed state. If
     * the Batch service terminates the job, it sets the reason as follows:
     * JMComplete - the Job Manager task completed, and killJobOnCompletion was
     * set to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime
     * constraint. TerminateJobSchedule - the job ran as part of a schedule, and
     * the schedule terminated. AllTasksComplete - the job's onAllTasksComplete
     * attribute is set to terminatejob, and all tasks in the job are complete.
     * TaskFailed - the job's onTaskFailure attribute is set to
     * performExitOptionsJobAction, and a task in the job failed with an exit
     * condition that specified a jobAction of terminatejob. Any other string is
     * a user-defined reason specified in a call to the 'Terminate a job'
     * operation.
     */
    terminateReason?: string;
}
/**
 * @interface
 * An interface representing CloudJob.
 * @summary An Azure Batch job.
 *
 */
export interface CloudJob {
    /**
     * @member {string} [id] A string that uniquely identifies the job within the
     * account. The ID is case-preserving and case-insensitive (that is, you may
     * not have two IDs within an account that differ only by case).
     */
    id?: string;
    /**
     * @member {string} [displayName] The display name for the job.
     */
    displayName?: string;
    /**
     * @member {boolean} [usesTaskDependencies] Whether tasks in the job can
     * define dependencies on each other. The default is false.
     */
    usesTaskDependencies?: boolean;
    /**
     * @member {string} [url] The URL of the job.
     */
    url?: string;
    /**
     * @member {string} [eTag] The ETag of the job. This is an opaque string. You
     * can use it to detect whether the job has changed between requests. In
     * particular, you can be pass the ETag when updating a job to specify that
     * your changes should take effect only if nobody else has modified the job
     * in the meantime.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The last modified time of the job. This is
     * the last time at which the job level data, such as the job state or
     * priority, changed. It does not factor in task-level changes such as adding
     * new tasks or tasks changing state.
     */
    lastModified?: Date;
    /**
     * @member {Date} [creationTime] The creation time of the job.
     */
    creationTime?: Date;
    /**
     * @member {JobState} [state] The current state of the job. Possible values
     * include: 'active', 'disabling', 'disabled', 'enabling', 'terminating',
     * 'completed', 'deleting'
     */
    state?: JobState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the job entered its
     * current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {JobState} [previousState] The previous state of the job. This
     * property is not set if the job is in its initial Active state. Possible
     * values include: 'active', 'disabling', 'disabled', 'enabling',
     * 'terminating', 'completed', 'deleting'
     */
    previousState?: JobState;
    /**
     * @member {Date} [previousStateTransitionTime] The time at which the job
     * entered its previous state. This property is not set if the job is in its
     * initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * @member {number} [priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * @member {JobConstraints} [constraints] The execution constraints for the
     * job.
     */
    constraints?: JobConstraints;
    /**
     * @member {JobManagerTask} [jobManagerTask] Details of a Job Manager task to
     * be launched when the job is started.
     */
    jobManagerTask?: JobManagerTask;
    /**
     * @member {JobPreparationTask} [jobPreparationTask] The Job Preparation
     * task. The Job Preparation task is a special task run on each node before
     * any other task of the job.
     */
    jobPreparationTask?: JobPreparationTask;
    /**
     * @member {JobReleaseTask} [jobReleaseTask] The Job Release task. The Job
     * Release task is a special task run at the end of the job on each node that
     * has run any other task of the job.
     */
    jobReleaseTask?: JobReleaseTask;
    /**
     * @member {EnvironmentSetting[]} [commonEnvironmentSettings] The list of
     * common environment variable settings. These environment variables are set
     * for all tasks in the job (including the Job Manager, Job Preparation and
     * Job Release tasks). Individual tasks can override an environment setting
     * specified here by specifying the same setting name with a different value.
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * @member {PoolInformation} [poolInfo] The pool settings associated with the
     * job.
     */
    poolInfo?: PoolInformation;
    /**
     * @member {OnAllTasksComplete} [onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state.
     * The default is noaction. Possible values include: 'noAction',
     * 'terminateJob'
     */
    onAllTasksComplete?: OnAllTasksComplete;
    /**
     * @member {OnTaskFailure} [onTaskFailure] The action the Batch service
     * should take when any task in the job fails. A task is considered to have
     * failed if has a failureInfo. A failureInfo is set if the task completes
     * with a non-zero exit code after exhausting its retry count, or if there
     * was an error starting the task, for example due to a resource file
     * download error. The default is noaction. Possible values include:
     * 'noAction', 'performExitOptionsJobAction'
     */
    onTaskFailure?: OnTaskFailure;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job as metadata. The Batch service does not assign any meaning to
     * metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
    /**
     * @member {JobExecutionInformation} [executionInfo] The execution
     * information for the job.
     */
    executionInfo?: JobExecutionInformation;
    /**
     * @member {JobStatistics} [stats] Resource usage statistics for the entire
     * lifetime of the job. The statistics may not be immediately available. The
     * Batch service performs periodic roll-up of statistics. The typical delay
     * is about 30 minutes.
     */
    stats?: JobStatistics;
}
/**
 * @interface
 * An interface representing JobAddParameter.
 * @summary An Azure Batch job to add.
 *
 */
export interface JobAddParameter {
    /**
     * @member {string} id A string that uniquely identifies the job within the
     * account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you
     * may not have two IDs within an account that differ only by case).
     */
    id: string;
    /**
     * @member {string} [displayName] The display name for the job. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {number} [priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. The default value is 0.
     */
    priority?: number;
    /**
     * @member {JobConstraints} [constraints] The execution constraints for the
     * job.
     */
    constraints?: JobConstraints;
    /**
     * @member {JobManagerTask} [jobManagerTask] Details of a Job Manager task to
     * be launched when the job is started. If the job does not specify a Job
     * Manager task, the user must explicitly add tasks to the job. If the job
     * does specify a Job Manager task, the Batch service creates the Job Manager
     * task when the job is created, and will try to schedule the Job Manager
     * task before scheduling other tasks in the job. The Job Manager task's
     * typical purpose is to control and/or monitor job execution, for example by
     * deciding what additional tasks to run, determining when the work is
     * complete, etc. (However, a Job Manager task is not restricted to these
     * activities - it is a fully-fledged task in the system and perform whatever
     * actions are required for the job.) For example, a Job Manager task might
     * download a file specified as a parameter, analyze the contents of that
     * file and submit additional tasks based on those contents.
     */
    jobManagerTask?: JobManagerTask;
    /**
     * @member {JobPreparationTask} [jobPreparationTask] The Job Preparation
     * task. If a job has a Job Preparation task, the Batch service will run the
     * Job Preparation task on a compute node before starting any tasks of that
     * job on that compute node.
     */
    jobPreparationTask?: JobPreparationTask;
    /**
     * @member {JobReleaseTask} [jobReleaseTask] The Job Release task. A Job
     * Release task cannot be specified without also specifying a Job Preparation
     * task for the job. The Batch service runs the Job Release task on the
     * compute nodes that have run the Job Preparation task. The primary purpose
     * of the Job Release task is to undo changes to compute nodes made by the
     * Job Preparation task. Example activities include deleting local files, or
     * shutting down services that were started as part of job preparation.
     */
    jobReleaseTask?: JobReleaseTask;
    /**
     * @member {EnvironmentSetting[]} [commonEnvironmentSettings] The list of
     * common environment variable settings. These environment variables are set
     * for all tasks in the job (including the Job Manager, Job Preparation and
     * Job Release tasks). Individual tasks can override an environment setting
     * specified here by specifying the same setting name with a different value.
     */
    commonEnvironmentSettings?: EnvironmentSetting[];
    /**
     * @member {PoolInformation} poolInfo The pool on which the Batch service
     * runs the job's tasks.
     */
    poolInfo: PoolInformation;
    /**
     * @member {OnAllTasksComplete} [onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state.
     * Note that if a job contains no tasks, then all tasks are considered
     * complete. This option is therefore most commonly used with a Job Manager
     * task; if you want to use automatic job termination without a Job Manager,
     * you should initially set onAllTasksComplete to noaction and update the job
     * properties to set onAllTasksComplete to terminatejob once you have
     * finished adding tasks. The default is noaction. Possible values include:
     * 'noAction', 'terminateJob'
     */
    onAllTasksComplete?: OnAllTasksComplete;
    /**
     * @member {OnTaskFailure} [onTaskFailure] The action the Batch service
     * should take when any task in the job fails. A task is considered to have
     * failed if has a failureInfo. A failureInfo is set if the task completes
     * with a non-zero exit code after exhausting its retry count, or if there
     * was an error starting the task, for example due to a resource file
     * download error. The default is noaction. Possible values include:
     * 'noAction', 'performExitOptionsJobAction'
     */
    onTaskFailure?: OnTaskFailure;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job as metadata. The Batch service does not assign any meaning to
     * metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
    /**
     * @member {boolean} [usesTaskDependencies] Whether tasks in the job can
     * define dependencies on each other. The default is false.
     */
    usesTaskDependencies?: boolean;
}
/**
 * @interface
 * An interface representing TaskContainerExecutionInformation.
 * @summary Contains information about the container which a task is executing.
 *
 */
export interface TaskContainerExecutionInformation {
    /**
     * @member {string} [containerId] The ID of the container.
     */
    containerId?: string;
    /**
     * @member {string} [state] The state of the container. This is the state of
     * the container according to the Docker service. It is equivalent to the
     * status field returned by "docker inspect".
     */
    state?: string;
    /**
     * @member {string} [error] Detailed error information about the container.
     * This is the detailed error string from the Docker service, if available.
     * It is equivalent to the error field returned by "docker inspect".
     */
    error?: string;
}
/**
 * @interface
 * An interface representing TaskFailureInformation.
 * @summary Information about a task failure.
 *
 */
export interface TaskFailureInformation {
    /**
     * @member {ErrorCategory} category The category of the task error. Possible
     * values include: 'userError', 'serverError'
     */
    category: ErrorCategory;
    /**
     * @member {string} [code] An identifier for the task error. Codes are
     * invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the task error, intended
     * to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [details] A list of additional details related
     * to the error.
     */
    details?: NameValuePair[];
}
/**
 * @interface
 * An interface representing JobPreparationTaskExecutionInformation.
 * @summary Contains information about the execution of a Job Preparation task
 * on a compute node.
 *
 */
export interface JobPreparationTaskExecutionInformation {
    /**
     * @member {Date} startTime The time at which the task started running. If
     * the task has been restarted or retried, this is the most recent time at
     * which the task started running.
     */
    startTime: Date;
    /**
     * @member {Date} [endTime] The time at which the Job Preparation task
     * completed. This property is set only if the task is in the Completed
     * state.
     */
    endTime?: Date;
    /**
     * @member {JobPreparationTaskState} state The current state of the Job
     * Preparation task on the compute node. Possible values include: 'running',
     * 'completed'
     */
    state: JobPreparationTaskState;
    /**
     * @member {string} [taskRootDirectory] The root directory of the Job
     * Preparation task on the compute node. You can use this path to retrieve
     * files created by the task, such as log files.
     */
    taskRootDirectory?: string;
    /**
     * @member {string} [taskRootDirectoryUrl] The URL to the root directory of
     * the Job Preparation task on the compute node.
     */
    taskRootDirectoryUrl?: string;
    /**
     * @member {number} [exitCode] The exit code of the program specified on the
     * task command line. This parameter is returned only if the task is in the
     * completed state. The exit code for a process reflects the specific
     * convention implemented by the application developer for that process. If
     * you use the exit code value to make decisions in your code, be sure that
     * you know the exit code convention used by the application process. Note
     * that the exit code may also be generated by the compute node operating
     * system, such as when a process is forcibly terminated.
     */
    exitCode?: number;
    /**
     * @member {TaskContainerExecutionInformation} [containerInfo] Information
     * about the container under which the task is executing. This property is
     * set only if the task runs in a container context.
     */
    containerInfo?: TaskContainerExecutionInformation;
    /**
     * @member {TaskFailureInformation} [failureInfo] Information describing the
     * task failure, if any. This property is set only if the task is in the
     * completed state and encountered a failure.
     */
    failureInfo?: TaskFailureInformation;
    /**
     * @member {number} retryCount The number of times the task has been retried
     * by the Batch service. Task application failures (non-zero exit code) are
     * retried, pre-processing errors (the task could not be run) and file upload
     * errors are not retried. The Batch service will retry the task up to the
     * limit specified by the constraints. Task application failures (non-zero
     * exit code) are retried, pre-processing errors (the task could not be run)
     * and file upload errors are not retried. The Batch service will retry the
     * task up to the limit specified by the constraints.
     */
    retryCount: number;
    /**
     * @member {Date} [lastRetryTime] The most recent time at which a retry of
     * the Job Preparation task started running. This property is set only if the
     * task was retried (i.e. retryCount is nonzero). If present, this is
     * typically the same as startTime, but may be different if the task has been
     * restarted for reasons other than retry; for example, if the compute node
     * was rebooted during a retry, then the startTime is updated but the
     * lastRetryTime is not.
     */
    lastRetryTime?: Date;
    /**
     * @member {TaskExecutionResult} [result] The result of the task execution.
     * If the value is 'failed', then the details of the failure can be found in
     * the failureInfo property. Possible values include: 'success', 'failure'
     */
    result?: TaskExecutionResult;
}
/**
 * @interface
 * An interface representing JobReleaseTaskExecutionInformation.
 * @summary Contains information about the execution of a Job Release task on a
 * compute node.
 *
 */
export interface JobReleaseTaskExecutionInformation {
    /**
     * @member {Date} startTime The time at which the task started running. If
     * the task has been restarted or retried, this is the most recent time at
     * which the task started running.
     */
    startTime: Date;
    /**
     * @member {Date} [endTime] The time at which the Job Release task completed.
     * This property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * @member {JobReleaseTaskState} state The current state of the Job Release
     * task on the compute node. Possible values include: 'running', 'completed'
     */
    state: JobReleaseTaskState;
    /**
     * @member {string} [taskRootDirectory] The root directory of the Job Release
     * task on the compute node. You can use this path to retrieve files created
     * by the task, such as log files.
     */
    taskRootDirectory?: string;
    /**
     * @member {string} [taskRootDirectoryUrl] The URL to the root directory of
     * the Job Release task on the compute node.
     */
    taskRootDirectoryUrl?: string;
    /**
     * @member {number} [exitCode] The exit code of the program specified on the
     * task command line. This parameter is returned only if the task is in the
     * completed state. The exit code for a process reflects the specific
     * convention implemented by the application developer for that process. If
     * you use the exit code value to make decisions in your code, be sure that
     * you know the exit code convention used by the application process. Note
     * that the exit code may also be generated by the compute node operating
     * system, such as when a process is forcibly terminated.
     */
    exitCode?: number;
    /**
     * @member {TaskContainerExecutionInformation} [containerInfo] Information
     * about the container under which the task is executing. This property is
     * set only if the task runs in a container context.
     */
    containerInfo?: TaskContainerExecutionInformation;
    /**
     * @member {TaskFailureInformation} [failureInfo] Information describing the
     * task failure, if any. This property is set only if the task is in the
     * completed state and encountered a failure.
     */
    failureInfo?: TaskFailureInformation;
    /**
     * @member {TaskExecutionResult} [result] The result of the task execution.
     * If the value is 'failed', then the details of the failure can be found in
     * the failureInfo property. Possible values include: 'success', 'failure'
     */
    result?: TaskExecutionResult;
}
/**
 * @interface
 * An interface representing JobPreparationAndReleaseTaskExecutionInformation.
 * @summary The status of the Job Preparation and Job Release tasks on a
 * compute node.
 *
 */
export interface JobPreparationAndReleaseTaskExecutionInformation {
    /**
     * @member {string} [poolId] The ID of the pool containing the compute node
     * to which this entry refers.
     */
    poolId?: string;
    /**
     * @member {string} [nodeId] The ID of the compute node to which this entry
     * refers.
     */
    nodeId?: string;
    /**
     * @member {string} [nodeUrl] The URL of the compute node to which this entry
     * refers.
     */
    nodeUrl?: string;
    /**
     * @member {JobPreparationTaskExecutionInformation}
     * [jobPreparationTaskExecutionInfo] Information about the execution status
     * of the Job Preparation task on this compute node.
     */
    jobPreparationTaskExecutionInfo?: JobPreparationTaskExecutionInformation;
    /**
     * @member {JobReleaseTaskExecutionInformation} [jobReleaseTaskExecutionInfo]
     * Information about the execution status of the Job Release task on this
     * compute node. This property is set only if the Job Release task has run on
     * the node.
     */
    jobReleaseTaskExecutionInfo?: JobReleaseTaskExecutionInformation;
}
/**
 * @interface
 * An interface representing TaskCounts.
 * @summary The task counts for a job.
 *
 */
export interface TaskCounts {
    /**
     * @member {number} active The number of tasks in the active state.
     */
    active: number;
    /**
     * @member {number} running The number of tasks in the running or preparing
     * state.
     */
    running: number;
    /**
     * @member {number} completed The number of tasks in the completed state.
     */
    completed: number;
    /**
     * @member {number} succeeded The number of tasks which succeeded. A task
     * succeeds if its result (found in the executionInfo property) is 'success'.
     */
    succeeded: number;
    /**
     * @member {number} failed The number of tasks which failed. A task fails if
     * its result (found in the executionInfo property) is 'failure'.
     */
    failed: number;
    /**
     * @member {TaskCountValidationStatus} validationStatus Whether the task
     * counts have been validated. Possible values include: 'validated',
     * 'unvalidated'
     */
    validationStatus: TaskCountValidationStatus;
}
/**
 * @interface
 * An interface representing AutoScaleRunError.
 * @summary An error that occurred when executing or evaluating a pool
 * autoscale formula.
 *
 */
export interface AutoScaleRunError {
    /**
     * @member {string} [code] An identifier for the autoscale error. Codes are
     * invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the autoscale error,
     * intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [values] A list of additional error details
     * related to the autoscale error.
     */
    values?: NameValuePair[];
}
/**
 * @interface
 * An interface representing AutoScaleRun.
 * @summary The results and errors from an execution of a pool autoscale
 * formula.
 *
 */
export interface AutoScaleRun {
    /**
     * @member {Date} timestamp The time at which the autoscale formula was last
     * evaluated.
     */
    timestamp: Date;
    /**
     * @member {string} [results] The final values of all variables used in the
     * evaluation of the autoscale formula. Each variable value is returned in
     * the form $variable=value, and variables are separated by semicolons.
     */
    results?: string;
    /**
     * @member {AutoScaleRunError} [error] Details of the error encountered
     * evaluating the autoscale formula on the pool, if the evaluation was
     * unsuccessful.
     */
    error?: AutoScaleRunError;
}
/**
 * @interface
 * An interface representing ResizeError.
 * @summary An error that occurred when resizing a pool.
 *
 */
export interface ResizeError {
    /**
     * @member {string} [code] An identifier for the pool resize error. Codes are
     * invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the pool resize error,
     * intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [values] A list of additional error details
     * related to the pool resize error.
     */
    values?: NameValuePair[];
}
/**
 * @interface
 * An interface representing CloudPool.
 * @summary A pool in the Azure Batch service.
 *
 */
export interface CloudPool {
    /**
     * @member {string} [id] A string that uniquely identifies the pool within
     * the account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you
     * may not have two IDs within an account that differ only by case).
     */
    id?: string;
    /**
     * @member {string} [displayName] The display name for the pool. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} [url] The URL of the pool.
     */
    url?: string;
    /**
     * @member {string} [eTag] The ETag of the pool. This is an opaque string.
     * You can use it to detect whether the pool has changed between requests. In
     * particular, you can be pass the ETag when updating a pool to specify that
     * your changes should take effect only if nobody else has modified the pool
     * in the meantime.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The last modified time of the pool. This is
     * the last time at which the pool level data, such as the
     * targetDedicatedNodes or enableAutoscale settings, changed. It does not
     * factor in node-level changes such as a compute node changing state.
     */
    lastModified?: Date;
    /**
     * @member {Date} [creationTime] The creation time of the pool.
     */
    creationTime?: Date;
    /**
     * @member {PoolState} [state] The current state of the pool. Possible values
     * include: 'active', 'deleting', 'upgrading'
     */
    state?: PoolState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the pool entered
     * its current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {AllocationState} [allocationState] Whether the pool is resizing.
     * Possible values include: 'steady', 'resizing', 'stopping'
     */
    allocationState?: AllocationState;
    /**
     * @member {Date} [allocationStateTransitionTime] The time at which the pool
     * entered its current allocation state.
     */
    allocationStateTransitionTime?: Date;
    /**
     * @member {string} [vmSize] The size of virtual machines in the pool. All
     * virtual machines in a pool are the same size. For information about
     * available sizes of virtual machines for Cloud Services pools (pools
     * created with cloudServiceConfiguration), see Sizes for Cloud Services
     * (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and
     * A2V2. For information about available VM sizes for pools using images from
     * the Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with
     * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize?: string;
    /**
     * @member {CloudServiceConfiguration} [cloudServiceConfiguration] The cloud
     * service configuration for the pool. This property and
     * virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. This property cannot be specified if the
     * Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     */
    cloudServiceConfiguration?: CloudServiceConfiguration;
    /**
     * @member {VirtualMachineConfiguration} [virtualMachineConfiguration] The
     * virtual machine configuration for the pool. This property and
     * cloudServiceConfiguration are mutually exclusive and one of the properties
     * must be specified.
     */
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    /**
     * @member {string} [resizeTimeout] The timeout for allocation of compute
     * nodes to the pool. This is the timeout for the most recent resize
     * operation. (The initial sizing when the pool is created counts as a
     * resize.) The default value is 15 minutes.
     */
    resizeTimeout?: string;
    /**
     * @member {ResizeError[]} [resizeErrors] A list of errors encountered while
     * performing the last resize on the pool. This property is set only if one
     * or more errors occurred during the last pool resize, and only when the
     * pool allocationState is Steady.
     */
    resizeErrors?: ResizeError[];
    /**
     * @member {number} [currentDedicatedNodes] The number of dedicated compute
     * nodes currently in the pool.
     */
    currentDedicatedNodes?: number;
    /**
     * @member {number} [currentLowPriorityNodes] The number of low-priority
     * compute nodes currently in the pool. Low-priority compute nodes which have
     * been preempted are included in this count.
     */
    currentLowPriorityNodes?: number;
    /**
     * @member {number} [targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool.
     */
    targetDedicatedNodes?: number;
    /**
     * @member {number} [targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool.
     */
    targetLowPriorityNodes?: number;
    /**
     * @member {boolean} [enableAutoScale] Whether the pool size should
     * automatically adjust over time. If false, at least one of
     * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
     * the autoScaleFormula property is required and the pool automatically
     * resizes according to the formula. The default value is false.
     */
    enableAutoScale?: boolean;
    /**
     * @member {string} [autoScaleFormula] A formula for the desired number of
     * compute nodes in the pool. This property is set only if the pool
     * automatically scales, i.e. enableAutoScale is true.
     */
    autoScaleFormula?: string;
    /**
     * @member {string} [autoScaleEvaluationInterval] The time interval at which
     * to automatically adjust the pool size according to the autoscale formula.
     * This property is set only if the pool automatically scales, i.e.
     * enableAutoScale is true.
     */
    autoScaleEvaluationInterval?: string;
    /**
     * @member {AutoScaleRun} [autoScaleRun] The results and errors from the last
     * execution of the autoscale formula. This property is set only if the pool
     * automatically scales, i.e. enableAutoScale is true.
     */
    autoScaleRun?: AutoScaleRun;
    /**
     * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
     * direct communication between nodes. This imposes restrictions on which
     * nodes can be assigned to the pool. Specifying this value can reduce the
     * chance of the requested number of nodes to be allocated in the pool.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * @member {NetworkConfiguration} [networkConfiguration] The network
     * configuration for the pool.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * @member {StartTask} [startTask] A task specified to run on each compute
     * node as it joins the pool.
     */
    startTask?: StartTask;
    /**
     * @member {CertificateReference[]} [certificateReferences] The list of
     * certificates to be installed on each compute node in the pool. For Windows
     * compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory
     * and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the
     * task to query for this location. For certificates with visibility of
     * 'remoteUser', a 'certs' directory is created in the user's home directory
     * (e.g., /home/{user-name}/certs) and certificates are placed in that
     * directory.
     */
    certificateReferences?: CertificateReference[];
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] The
     * list of application packages to be installed on each compute node in the
     * pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {string[]} [applicationLicenses] The list of application licenses
     * the Batch service will make available on each compute node in the pool.
     * The list of application licenses must be a subset of available Batch
     * service application licenses. If a license is requested which is not
     * supported, pool creation will fail.
     */
    applicationLicenses?: string[];
    /**
     * @member {number} [maxTasksPerNode] The maximum number of tasks that can
     * run concurrently on a single compute node in the pool.
     */
    maxTasksPerNode?: number;
    /**
     * @member {TaskSchedulingPolicy} [taskSchedulingPolicy] How tasks are
     * distributed across compute nodes in a pool.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * @member {UserAccount[]} [userAccounts] The list of user accounts to be
     * created on each node in the pool.
     */
    userAccounts?: UserAccount[];
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the pool as metadata.
     */
    metadata?: MetadataItem[];
    /**
     * @member {PoolStatistics} [stats] Utilization and resource usage statistics
     * for the entire lifetime of the pool. The statistics may not be immediately
     * available. The Batch service performs periodic roll-up of statistics. The
     * typical delay is about 30 minutes.
     */
    stats?: PoolStatistics;
}
/**
 * @interface
 * An interface representing PoolAddParameter.
 * @summary A pool in the Azure Batch service to add.
 *
 */
export interface PoolAddParameter {
    /**
     * @member {string} id A string that uniquely identifies the pool within the
     * account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you
     * may not have two pool IDs within an account that differ only by case).
     */
    id: string;
    /**
     * @member {string} [displayName] The display name for the pool. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} vmSize The size of virtual machines in the pool. All
     * virtual machines in a pool are the same size. For information about
     * available sizes of virtual machines for Cloud Services pools (pools
     * created with cloudServiceConfiguration), see Sizes for Cloud Services
     * (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and
     * A2V2. For information about available VM sizes for pools using images from
     * the Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with
     * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize: string;
    /**
     * @member {CloudServiceConfiguration} [cloudServiceConfiguration] The cloud
     * service configuration for the pool. This property and
     * virtualMachineConfiguration are mutually exclusive and one of the
     * properties must be specified. This property cannot be specified if the
     * Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'.
     */
    cloudServiceConfiguration?: CloudServiceConfiguration;
    /**
     * @member {VirtualMachineConfiguration} [virtualMachineConfiguration] The
     * virtual machine configuration for the pool. This property and
     * cloudServiceConfiguration are mutually exclusive and one of the properties
     * must be specified.
     */
    virtualMachineConfiguration?: VirtualMachineConfiguration;
    /**
     * @member {string} [resizeTimeout] The timeout for allocation of compute
     * nodes to the pool. This timeout applies only to manual scaling; it has no
     * effect when enableAutoScale is set to true. The default value is 15
     * minutes. The minimum value is 5 minutes. If you specify a value less than
     * 5 minutes, the Batch service returns an error; if you are calling the REST
     * API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    /**
     * @member {number} [targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to true. If enableAutoScale is set to false, then
     * you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     */
    targetDedicatedNodes?: number;
    /**
     * @member {number} [targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     */
    targetLowPriorityNodes?: number;
    /**
     * @member {boolean} [enableAutoScale] Whether the pool size should
     * automatically adjust over time. If false, at least one of
     * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
     * the autoScaleFormula property is required and the pool automatically
     * resizes according to the formula. The default value is false.
     */
    enableAutoScale?: boolean;
    /**
     * @member {string} [autoScaleFormula] A formula for the desired number of
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to false. It is required if enableAutoScale is set
     * to true. The formula is checked for validity before the pool is created.
     * If the formula is not valid, the Batch service rejects the request with
     * detailed error information. For more information about specifying this
     * formula, see 'Automatically scale compute nodes in an Azure Batch pool'
     * (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
     */
    autoScaleFormula?: string;
    /**
     * @member {string} [autoScaleEvaluationInterval] The time interval at which
     * to automatically adjust the pool size according to the autoscale formula.
     * The default value is 15 minutes. The minimum and maximum value are 5
     * minutes and 168 hours respectively. If you specify a value less than 5
     * minutes or greater than 168 hours, the Batch service returns an error; if
     * you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     */
    autoScaleEvaluationInterval?: string;
    /**
     * @member {boolean} [enableInterNodeCommunication] Whether the pool permits
     * direct communication between nodes. Enabling inter-node communication
     * limits the maximum size of the pool due to deployment restrictions on the
     * nodes of the pool. This may result in the pool not reaching its desired
     * size. The default value is false.
     */
    enableInterNodeCommunication?: boolean;
    /**
     * @member {NetworkConfiguration} [networkConfiguration] The network
     * configuration for the pool.
     */
    networkConfiguration?: NetworkConfiguration;
    /**
     * @member {StartTask} [startTask] A task specified to run on each compute
     * node as it joins the pool. The task runs when the node is added to the
     * pool or when the node is restarted.
     */
    startTask?: StartTask;
    /**
     * @member {CertificateReference[]} [certificateReferences] The list of
     * certificates to be installed on each compute node in the pool. For Windows
     * compute nodes, the Batch service installs the certificates to the
     * specified certificate store and location. For Linux compute nodes, the
     * certificates are stored in a directory inside the task working directory
     * and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the
     * task to query for this location. For certificates with visibility of
     * 'remoteUser', a 'certs' directory is created in the user's home directory
     * (e.g., /home/{user-name}/certs) and certificates are placed in that
     * directory.
     */
    certificateReferences?: CertificateReference[];
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] The
     * list of application packages to be installed on each compute node in the
     * pool.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {string[]} [applicationLicenses] The list of application licenses
     * the Batch service will make available on each compute node in the pool.
     * The list of application licenses must be a subset of available Batch
     * service application licenses. If a license is requested which is not
     * supported, pool creation will fail.
     */
    applicationLicenses?: string[];
    /**
     * @member {number} [maxTasksPerNode] The maximum number of tasks that can
     * run concurrently on a single compute node in the pool. The default value
     * is 1. The maximum value of this setting depends on the size of the compute
     * nodes in the pool (the vmSize setting).
     */
    maxTasksPerNode?: number;
    /**
     * @member {TaskSchedulingPolicy} [taskSchedulingPolicy] How tasks are
     * distributed across compute nodes in a pool.
     */
    taskSchedulingPolicy?: TaskSchedulingPolicy;
    /**
     * @member {UserAccount[]} [userAccounts] The list of user accounts to be
     * created on each node in the pool.
     */
    userAccounts?: UserAccount[];
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the pool as metadata. The Batch service does not assign any meaning
     * to metadata; it is solely for the use of user code.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing AffinityInformation.
 * @summary A locality hint that can be used by the Batch service to select a
 * compute node on which to start a task.
 *
 */
export interface AffinityInformation {
    /**
     * @member {string} affinityId An opaque string representing the location of
     * a compute node or a task that has run previously. You can pass the
     * affinityId of a compute node to indicate that this task needs to run on
     * that compute node. Note that this is just a soft affinity. If the target
     * node is busy or unavailable at the time the task is scheduled, then the
     * task will be scheduled elsewhere.
     */
    affinityId: string;
}
/**
 * @interface
 * An interface representing TaskExecutionInformation.
 * @summary Information about the execution of a task.
 *
 */
export interface TaskExecutionInformation {
    /**
     * @member {Date} [startTime] The time at which the task started running.
     * 'Running' corresponds to the running state, so if the task specifies
     * resource files or application packages, then the start time reflects the
     * time at which the task started downloading or deploying these. If the task
     * has been restarted or retried, this is the most recent time at which the
     * task started running. This property is present only for tasks that are in
     * the running or completed state.
     */
    startTime?: Date;
    /**
     * @member {Date} [endTime] The time at which the task completed. This
     * property is set only if the task is in the Completed state.
     */
    endTime?: Date;
    /**
     * @member {number} [exitCode] The exit code of the program specified on the
     * task command line. This property is set only if the task is in the
     * completed state. In general, the exit code for a process reflects the
     * specific convention implemented by the application developer for that
     * process. If you use the exit code value to make decisions in your code, be
     * sure that you know the exit code convention used by the application
     * process. However, if the Batch service terminates the task (due to
     * timeout, or user termination via the API) you may see an operating
     * system-defined exit code.
     */
    exitCode?: number;
    /**
     * @member {TaskContainerExecutionInformation} [containerInfo] Information
     * about the container under which the task is executing. This property is
     * set only if the task runs in a container context.
     */
    containerInfo?: TaskContainerExecutionInformation;
    /**
     * @member {TaskFailureInformation} [failureInfo] Information describing the
     * task failure, if any. This property is set only if the task is in the
     * completed state and encountered a failure.
     */
    failureInfo?: TaskFailureInformation;
    /**
     * @member {number} retryCount The number of times the task has been retried
     * by the Batch service. Task application failures (non-zero exit code) are
     * retried, pre-processing errors (the task could not be run) and file upload
     * errors are not retried. The Batch service will retry the task up to the
     * limit specified by the constraints.
     */
    retryCount: number;
    /**
     * @member {Date} [lastRetryTime] The most recent time at which a retry of
     * the task started running. This element is present only if the task was
     * retried (i.e. retryCount is nonzero). If present, this is typically the
     * same as startTime, but may be different if the task has been restarted for
     * reasons other than retry; for example, if the compute node was rebooted
     * during a retry, then the startTime is updated but the lastRetryTime is
     * not.
     */
    lastRetryTime?: Date;
    /**
     * @member {number} requeueCount The number of times the task has been
     * requeued by the Batch service as the result of a user request. When the
     * user removes nodes from a pool (by resizing/shrinking the pool) or when
     * the job is being disabled, the user can specify that running tasks on the
     * nodes be requeued for execution. This count tracks how many times the task
     * has been requeued for these reasons.
     */
    requeueCount: number;
    /**
     * @member {Date} [lastRequeueTime] The most recent time at which the task
     * has been requeued by the Batch service as the result of a user request.
     * This property is set only if the requeueCount is nonzero.
     */
    lastRequeueTime?: Date;
    /**
     * @member {TaskExecutionResult} [result] The result of the task execution.
     * If the value is 'failed', then the details of the failure can be found in
     * the failureInfo property. Possible values include: 'success', 'failure'
     */
    result?: TaskExecutionResult;
}
/**
 * @interface
 * An interface representing ComputeNodeInformation.
 * @summary Information about the compute node on which a task ran.
 *
 */
export interface ComputeNodeInformation {
    /**
     * @member {string} [affinityId] An identifier for the compute node on which
     * the task ran, which can be passed when adding a task to request that the
     * task be scheduled on this compute node.
     */
    affinityId?: string;
    /**
     * @member {string} [nodeUrl] The URL of the node on which the task ran. .
     */
    nodeUrl?: string;
    /**
     * @member {string} [poolId] The ID of the pool on which the task ran.
     */
    poolId?: string;
    /**
     * @member {string} [nodeId] The ID of the node on which the task ran.
     */
    nodeId?: string;
    /**
     * @member {string} [taskRootDirectory] The root directory of the task on the
     * compute node.
     */
    taskRootDirectory?: string;
    /**
     * @member {string} [taskRootDirectoryUrl] The URL to the root directory of
     * the task on the compute node.
     */
    taskRootDirectoryUrl?: string;
}
/**
 * @interface
 * An interface representing MultiInstanceSettings.
 * @summary Settings which specify how to run a multi-instance task.
 *
 * Multi-instance tasks are commonly used to support MPI tasks.
 *
 */
export interface MultiInstanceSettings {
    /**
     * @member {number} [numberOfInstances] The number of compute nodes required
     * by the task. If omitted, the default is 1.
     */
    numberOfInstances?: number;
    /**
     * @member {string} coordinationCommandLine The command line to run on all
     * the compute nodes to enable them to coordinate when the primary runs the
     * main task command. A typical coordination command line launches a
     * background service and verifies that the service is ready to process
     * inter-node messages.
     */
    coordinationCommandLine: string;
    /**
     * @member {ResourceFile[]} [commonResourceFiles] A list of files that the
     * Batch service will download before running the coordination command line.
     * The difference between common resource files and task resource files is
     * that common resource files are downloaded for all subtasks including the
     * primary, whereas task resource files are downloaded only for the primary.
     * Also note that these resource files are not downloaded to the task working
     * directory, but instead are downloaded to the task root directory (one
     * directory above the working directory).
     */
    commonResourceFiles?: ResourceFile[];
}
/**
 * @interface
 * An interface representing TaskStatistics.
 * @summary Resource usage statistics for a task.
 *
 */
export interface TaskStatistics {
    /**
     * @member {string} url The URL of the statistics.
     */
    url: string;
    /**
     * @member {Date} startTime The start time of the time range covered by the
     * statistics.
     */
    startTime: Date;
    /**
     * @member {Date} lastUpdateTime The time at which the statistics were last
     * updated. All statistics are limited to the range between startTime and
     * lastUpdateTime.
     */
    lastUpdateTime: Date;
    /**
     * @member {string} userCPUTime The total user mode CPU time (summed across
     * all cores and all compute nodes) consumed by the task.
     */
    userCPUTime: string;
    /**
     * @member {string} kernelCPUTime The total kernel mode CPU time (summed
     * across all cores and all compute nodes) consumed by the task.
     */
    kernelCPUTime: string;
    /**
     * @member {string} wallClockTime The total wall clock time of the task. The
     * wall clock time is the elapsed time from when the task started running on
     * a compute node to when it finished (or to the last time the statistics
     * were updated, if the task had not finished by then). If the task was
     * retried, this includes the wall clock time of all the task retries.
     */
    wallClockTime: string;
    /**
     * @member {number} readIOps The total number of disk read operations made by
     * the task.
     */
    readIOps: number;
    /**
     * @member {number} writeIOps The total number of disk write operations made
     * by the task.
     */
    writeIOps: number;
    /**
     * @member {number} readIOGiB The total gibibytes read from disk by the task.
     */
    readIOGiB: number;
    /**
     * @member {number} writeIOGiB The total gibibytes written to disk by the
     * task.
     */
    writeIOGiB: number;
    /**
     * @member {string} waitTime The total wait time of the task. The wait time
     * for a task is defined as the elapsed time between the creation of the task
     * and the start of task execution. (If the task is retried due to failures,
     * the wait time is the time to the most recent task execution.).
     */
    waitTime: string;
}
/**
 * @interface
 * An interface representing TaskIdRange.
 * @summary A range of task IDs that a task can depend on. All tasks with IDs
 * in the range must complete successfully before the dependent task can be
 * scheduled.
 *
 * The start and end of the range are inclusive. For example, if a range has
 * start 9 and end 12, then it represents tasks '9', '10', '11' and '12'.
 *
 */
export interface TaskIdRange {
    /**
     * @member {number} start The first task ID in the range.
     */
    start: number;
    /**
     * @member {number} end The last task ID in the range.
     */
    end: number;
}
/**
 * @interface
 * An interface representing TaskDependencies.
 * @summary Specifies any dependencies of a task. Any task that is explicitly
 * specified or within a dependency range must complete before the dependant
 * task will be scheduled.
 *
 */
export interface TaskDependencies {
    /**
     * @member {string[]} [taskIds] The list of task IDs that this task depends
     * on. All tasks in this list must complete successfully before the dependent
     * task can be scheduled. The taskIds collection is limited to 64000
     * characters total (i.e. the combined length of all task IDs). If the
     * taskIds collection exceeds the maximum length, the Add Task request fails
     * with error code TaskDependencyListTooLong. In this case consider using
     * task ID ranges instead.
     */
    taskIds?: string[];
    /**
     * @member {TaskIdRange[]} [taskIdRanges] The list of task ID ranges that
     * this task depends on. All tasks in all ranges must complete successfully
     * before the dependent task can be scheduled.
     */
    taskIdRanges?: TaskIdRange[];
}
/**
 * @interface
 * An interface representing CloudTask.
 * @summary An Azure Batch task.
 *
 * Batch will retry tasks when a recovery operation is triggered on a compute
 * node. Examples of recovery operations include (but are not limited to) when
 * an unhealthy compute node is rebooted or a compute node disappeared due to
 * host failure. Retries due to recovery operations are independent of and are
 * not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is
 * 0, an internal retry due to a recovery operation may occur. Because of this,
 * all tasks should be idempotent. This means tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running tasks is to use some form of
 * checkpointing.
 *
 */
export interface CloudTask {
    /**
     * @member {string} [id] A string that uniquely identifies the task within
     * the job. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters.
     */
    id?: string;
    /**
     * @member {string} [displayName] A display name for the task. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} [url] The URL of the task.
     */
    url?: string;
    /**
     * @member {string} [eTag] The ETag of the task. This is an opaque string.
     * You can use it to detect whether the task has changed between requests. In
     * particular, you can be pass the ETag when updating a task to specify that
     * your changes should take effect only if nobody else has modified the task
     * in the meantime.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The last modified time of the task.
     */
    lastModified?: Date;
    /**
     * @member {Date} [creationTime] The creation time of the task.
     */
    creationTime?: Date;
    /**
     * @member {ExitConditions} [exitConditions] How the Batch service should
     * respond when the task completes.
     */
    exitConditions?: ExitConditions;
    /**
     * @member {TaskState} [state] The current state of the task. Possible values
     * include: 'active', 'preparing', 'running', 'completed'
     */
    state?: TaskState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the task entered
     * its current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {TaskState} [previousState] The previous state of the task. This
     * property is not set if the task is in its initial Active state. Possible
     * values include: 'active', 'preparing', 'running', 'completed'
     */
    previousState?: TaskState;
    /**
     * @member {Date} [previousStateTransitionTime] The time at which the task
     * entered its previous state. This property is not set if the task is in its
     * initial Active state.
     */
    previousStateTransitionTime?: Date;
    /**
     * @member {string} [commandLine] The command line of the task. For
     * multi-instance tasks, the command line is executed as the primary task,
     * after the primary task and all subtasks have finished executing the
     * coordination command line. The command line does not run under a shell,
     * and therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command
     * line refers to file paths, it should use a relative path (relative to the
     * task working directory), or use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine?: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the task runs. If the pool that will run this task
     * has containerConfiguration set, this must be set as well. If the pool that
     * will run this task doesn't have containerConfiguration set, this must not
     * be set. When this is specified, all directories recursively below the
     * AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node)
     * are mapped into the container, all task environment variables are mapped
     * into the container, and the task command line is executed in the
     * container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * For multi-instance tasks, the resource files will only be downloaded to
     * the compute node on which the primary task is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {OutputFile[]} [outputFiles] A list of files that the Batch
     * service will upload from the compute node after running the command line.
     * For multi-instance tasks, the files will only be uploaded from the compute
     * node on which the primary task is executed.
     */
    outputFiles?: OutputFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {AffinityInformation} [affinityInfo] A locality hint that can be
     * used by the Batch service to select a compute node on which to start the
     * new task.
     */
    affinityInfo?: AffinityInformation;
    /**
     * @member {TaskConstraints} [constraints] The execution constraints that
     * apply to this task.
     */
    constraints?: TaskConstraints;
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * task runs. If omitted, the task runs as a non-administrative user unique
     * to the task.
     */
    userIdentity?: UserIdentity;
    /**
     * @member {TaskExecutionInformation} [executionInfo] Information about the
     * execution of the task.
     */
    executionInfo?: TaskExecutionInformation;
    /**
     * @member {ComputeNodeInformation} [nodeInfo] Information about the compute
     * node on which the task ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * @member {MultiInstanceSettings} [multiInstanceSettings] An object that
     * indicates that the task is a multi-instance task, and contains information
     * about how to run the multi-instance task.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * @member {TaskStatistics} [stats] Resource usage statistics for the task.
     */
    stats?: TaskStatistics;
    /**
     * @member {TaskDependencies} [dependsOn] The tasks that this task depends
     * on. This task will not be scheduled until all tasks that it depends on
     * have completed successfully. If any of those tasks fail and exhaust their
     * retry counts, this task will never be scheduled.
     */
    dependsOn?: TaskDependencies;
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] A
     * list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy
     * on the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {AuthenticationTokenSettings} [authenticationTokenSettings] The
     * settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN
     * environment variable. The operations that the task can carry out using the
     * token depend on the settings. For example, a task can request job
     * permissions in order to add other tasks to the job, or check the status of
     * the job or of other tasks under the job.
     */
    authenticationTokenSettings?: AuthenticationTokenSettings;
}
/**
 * @interface
 * An interface representing TaskAddParameter.
 * @summary An Azure Batch task to add.
 *
 * Batch will retry tasks when a recovery operation is triggered on a compute
 * node. Examples of recovery operations include (but are not limited to) when
 * an unhealthy compute node is rebooted or a compute node disappeared due to
 * host failure. Retries due to recovery operations are independent of and are
 * not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is
 * 0, an internal retry due to a recovery operation may occur. Because of this,
 * all tasks should be idempotent. This means tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running tasks is to use some form of
 * checkpointing.
 *
 */
export interface TaskAddParameter {
    /**
     * @member {string} id A string that uniquely identifies the task within the
     * job. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you
     * may not have two IDs within a job that differ only by case).
     */
    id: string;
    /**
     * @member {string} [displayName] A display name for the task. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     */
    displayName?: string;
    /**
     * @member {string} commandLine The command line of the task. For
     * multi-instance tasks, the command line is executed as the primary task,
     * after the primary task and all subtasks have finished executing the
     * coordination command line. The command line does not run under a shell,
     * and therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command
     * line refers to file paths, it should use a relative path (relative to the
     * task working directory), or use the Batch provided environment variable
     * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
     */
    commandLine: string;
    /**
     * @member {TaskContainerSettings} [containerSettings] The settings for the
     * container under which the task runs. If the pool that will run this task
     * has containerConfiguration set, this must be set as well. If the pool that
     * will run this task doesn't have containerConfiguration set, this must not
     * be set. When this is specified, all directories recursively below the
     * AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node)
     * are mapped into the container, all task environment variables are mapped
     * into the container, and the task command line is executed in the
     * container.
     */
    containerSettings?: TaskContainerSettings;
    /**
     * @member {ExitConditions} [exitConditions] How the Batch service should
     * respond when the task completes.
     */
    exitConditions?: ExitConditions;
    /**
     * @member {ResourceFile[]} [resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * For multi-instance tasks, the resource files will only be downloaded to
     * the compute node on which the primary task is executed.
     */
    resourceFiles?: ResourceFile[];
    /**
     * @member {OutputFile[]} [outputFiles] A list of files that the Batch
     * service will upload from the compute node after running the command line.
     * For multi-instance tasks, the files will only be uploaded from the compute
     * node on which the primary task is executed.
     */
    outputFiles?: OutputFile[];
    /**
     * @member {EnvironmentSetting[]} [environmentSettings] A list of environment
     * variable settings for the task.
     */
    environmentSettings?: EnvironmentSetting[];
    /**
     * @member {AffinityInformation} [affinityInfo] A locality hint that can be
     * used by the Batch service to select a compute node on which to start the
     * new task.
     */
    affinityInfo?: AffinityInformation;
    /**
     * @member {TaskConstraints} [constraints] The execution constraints that
     * apply to this task. If you do not specify constraints, the
     * maxTaskRetryCount is the maxTaskRetryCount specified for the job, and the
     * maxWallClockTime and retentionTime are infinite.
     */
    constraints?: TaskConstraints;
    /**
     * @member {UserIdentity} [userIdentity] The user identity under which the
     * task runs. If omitted, the task runs as a non-administrative user unique
     * to the task.
     */
    userIdentity?: UserIdentity;
    /**
     * @member {MultiInstanceSettings} [multiInstanceSettings] An object that
     * indicates that the task is a multi-instance task, and contains information
     * about how to run the multi-instance task.
     */
    multiInstanceSettings?: MultiInstanceSettings;
    /**
     * @member {TaskDependencies} [dependsOn] The tasks that this task depends
     * on. This task will not be scheduled until all tasks that it depends on
     * have completed successfully. If any of those tasks fail and exhaust their
     * retry counts, this task will never be scheduled. If the job does not have
     * usesTaskDependencies set to true, and this element is present, the request
     * fails with error code TaskDependenciesNotSpecifiedOnJob.
     */
    dependsOn?: TaskDependencies;
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] A
     * list of application packages that the Batch service will deploy to the
     * compute node before running the command line. Application packages are
     * downloaded and deployed to a shared directory, not the task working
     * directory. Therefore, if a referenced package is already on the compute
     * node, and is up to date, then it is not re-downloaded; the existing copy
     * on the compute node is used. If a referenced application package cannot be
     * installed, for example because the package has been deleted or because
     * download failed, the task fails.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {AuthenticationTokenSettings} [authenticationTokenSettings] The
     * settings for an authentication token that the task can use to perform
     * Batch service operations. If this property is set, the Batch service
     * provides the task with an authentication token which can be used to
     * authenticate Batch service operations without requiring an account access
     * key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN
     * environment variable. The operations that the task can carry out using the
     * token depend on the settings. For example, a task can request job
     * permissions in order to add other tasks to the job, or check the status of
     * the job or of other tasks under the job.
     */
    authenticationTokenSettings?: AuthenticationTokenSettings;
}
/**
 * @interface
 * An interface representing TaskAddCollectionParameter.
 * @summary A collection of Azure Batch tasks to add.
 *
 */
export interface TaskAddCollectionParameter {
    /**
     * @member {TaskAddParameter[]} value The collection of tasks to add. The
     * total serialized size of this collection must be less than 4MB. If it is
     * greater than 4MB (for example if each task has 100's of resource files or
     * environment variables), the request will fail with code
     * 'RequestBodyTooLarge' and should be retried again with fewer tasks.
     */
    value: TaskAddParameter[];
}
/**
 * @interface
 * An interface representing ErrorMessage.
 * @summary An error message received in an Azure Batch error response.
 *
 */
export interface ErrorMessage {
    /**
     * @member {string} [lang] The language code of the error message.
     */
    lang?: string;
    /**
     * @member {string} [value] The text of the message.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing BatchErrorDetail.
 * @summary An item of additional information included in an Azure Batch error
 * response.
 *
 */
export interface BatchErrorDetail {
    /**
     * @member {string} [key] An identifier specifying the meaning of the Value
     * property.
     */
    key?: string;
    /**
     * @member {string} [value] The additional information included with the
     * error response.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing BatchError.
 * @summary An error response received from the Azure Batch service.
 *
 */
export interface BatchError {
    /**
     * @member {string} [code] An identifier for the error. Codes are invariant
     * and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {ErrorMessage} [message] A message describing the error, intended
     * to be suitable for display in a user interface.
     */
    message?: ErrorMessage;
    /**
     * @member {BatchErrorDetail[]} [values] A collection of key-value pairs
     * containing additional details about the error.
     */
    values?: BatchErrorDetail[];
}
/**
 * @interface
 * An interface representing TaskAddResult.
 * @summary Result for a single task added as part of an add task collection
 * operation.
 *
 */
export interface TaskAddResult {
    /**
     * @member {TaskAddStatus} status The status of the add task request.
     * Possible values include: 'success', 'clientError', 'serverError'
     */
    status: TaskAddStatus;
    /**
     * @member {string} taskId The ID of the task for which this is the result.
     */
    taskId: string;
    /**
     * @member {string} [eTag] The ETag of the task, if the task was successfully
     * added. You can use this to detect whether the task has changed between
     * requests. In particular, you can be pass the ETag with an Update Task
     * request to specify that your changes should take effect only if nobody
     * else has modified the job in the meantime.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The last modified time of the task.
     */
    lastModified?: Date;
    /**
     * @member {string} [location] The URL of the task, if the task was
     * successfully added.
     */
    location?: string;
    /**
     * @member {BatchError} [error] The error encountered while attempting to add
     * the task.
     */
    error?: BatchError;
}
/**
 * @interface
 * An interface representing TaskAddCollectionResult.
 * @summary The result of adding a collection of tasks to a job.
 *
 */
export interface TaskAddCollectionResult {
    /**
     * @member {TaskAddResult[]} [value] The results of the add task collection
     * operation.
     */
    value?: TaskAddResult[];
}
/**
 * @interface
 * An interface representing SubtaskInformation.
 * @summary Information about an Azure Batch subtask.
 *
 */
export interface SubtaskInformation {
    /**
     * @member {number} [id] The ID of the subtask.
     */
    id?: number;
    /**
     * @member {ComputeNodeInformation} [nodeInfo] Information about the compute
     * node on which the subtask ran.
     */
    nodeInfo?: ComputeNodeInformation;
    /**
     * @member {Date} [startTime] The time at which the subtask started running.
     * If the subtask has been restarted or retried, this is the most recent time
     * at which the subtask started running.
     */
    startTime?: Date;
    /**
     * @member {Date} [endTime] The time at which the subtask completed. This
     * property is set only if the subtask is in the Completed state.
     */
    endTime?: Date;
    /**
     * @member {number} [exitCode] The exit code of the program specified on the
     * subtask command line. This property is set only if the subtask is in the
     * completed state. In general, the exit code for a process reflects the
     * specific convention implemented by the application developer for that
     * process. If you use the exit code value to make decisions in your code, be
     * sure that you know the exit code convention used by the application
     * process. However, if the Batch service terminates the subtask (due to
     * timeout, or user termination via the API) you may see an operating
     * system-defined exit code.
     */
    exitCode?: number;
    /**
     * @member {TaskContainerExecutionInformation} [containerInfo] Information
     * about the container under which the task is executing. This property is
     * set only if the task runs in a container context.
     */
    containerInfo?: TaskContainerExecutionInformation;
    /**
     * @member {TaskFailureInformation} [failureInfo] Information describing the
     * task failure, if any. This property is set only if the task is in the
     * completed state and encountered a failure.
     */
    failureInfo?: TaskFailureInformation;
    /**
     * @member {SubtaskState} [state] The current state of the subtask. Possible
     * values include: 'preparing', 'running', 'completed'
     */
    state?: SubtaskState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the subtask entered
     * its current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {SubtaskState} [previousState] The previous state of the subtask.
     * This property is not set if the subtask is in its initial running state.
     * Possible values include: 'preparing', 'running', 'completed'
     */
    previousState?: SubtaskState;
    /**
     * @member {Date} [previousStateTransitionTime] The time at which the subtask
     * entered its previous state. This property is not set if the subtask is in
     * its initial running state.
     */
    previousStateTransitionTime?: Date;
    /**
     * @member {TaskExecutionResult} [result] The result of the task execution.
     * If the value is 'failed', then the details of the failure can be found in
     * the failureInfo property. Possible values include: 'success', 'failure'
     */
    result?: TaskExecutionResult;
}
/**
 * @interface
 * An interface representing CloudTaskListSubtasksResult.
 * @summary The result of listing the subtasks of a task.
 *
 */
export interface CloudTaskListSubtasksResult {
    /**
     * @member {SubtaskInformation[]} [value] The list of subtasks.
     */
    value?: SubtaskInformation[];
}
/**
 * @interface
 * An interface representing TaskInformation.
 * @summary Information about a task running on a compute node.
 *
 */
export interface TaskInformation {
    /**
     * @member {string} [taskUrl] The URL of the task.
     */
    taskUrl?: string;
    /**
     * @member {string} [jobId] The ID of the job to which the task belongs.
     */
    jobId?: string;
    /**
     * @member {string} [taskId] The ID of the task.
     */
    taskId?: string;
    /**
     * @member {number} [subtaskId] The ID of the subtask if the task is a
     * multi-instance task.
     */
    subtaskId?: number;
    /**
     * @member {TaskState} taskState The current state of the task. Possible
     * values include: 'active', 'preparing', 'running', 'completed'
     */
    taskState: TaskState;
    /**
     * @member {TaskExecutionInformation} [executionInfo] Information about the
     * execution of the task.
     */
    executionInfo?: TaskExecutionInformation;
}
/**
 * @interface
 * An interface representing StartTaskInformation.
 * @summary Information about a start task running on a compute node.
 *
 */
export interface StartTaskInformation {
    /**
     * @member {StartTaskState} state The state of the start task on the compute
     * node. Possible values include: 'running', 'completed'
     */
    state: StartTaskState;
    /**
     * @member {Date} startTime The time at which the start task started running.
     * This value is reset every time the task is restarted or retried (that is,
     * this is the most recent time at which the start task started running).
     */
    startTime: Date;
    /**
     * @member {Date} [endTime] The time at which the start task stopped running.
     * This is the end time of the most recent run of the start task, if that run
     * has completed (even if that run failed and a retry is pending). This
     * element is not present if the start task is currently running.
     */
    endTime?: Date;
    /**
     * @member {number} [exitCode] The exit code of the program specified on the
     * start task command line. This property is set only if the start task is in
     * the completed state. In general, the exit code for a process reflects the
     * specific convention implemented by the application developer for that
     * process. If you use the exit code value to make decisions in your code, be
     * sure that you know the exit code convention used by the application
     * process. However, if the Batch service terminates the start task (due to
     * timeout, or user termination via the API) you may see an operating
     * system-defined exit code.
     */
    exitCode?: number;
    /**
     * @member {TaskContainerExecutionInformation} [containerInfo] Information
     * about the container under which the task is executing. This property is
     * set only if the task runs in a container context.
     */
    containerInfo?: TaskContainerExecutionInformation;
    /**
     * @member {TaskFailureInformation} [failureInfo] Information describing the
     * task failure, if any. This property is set only if the task is in the
     * completed state and encountered a failure.
     */
    failureInfo?: TaskFailureInformation;
    /**
     * @member {number} retryCount The number of times the task has been retried
     * by the Batch service. Task application failures (non-zero exit code) are
     * retried, pre-processing errors (the task could not be run) and file upload
     * errors are not retried. The Batch service will retry the task up to the
     * limit specified by the constraints.
     */
    retryCount: number;
    /**
     * @member {Date} [lastRetryTime] The most recent time at which a retry of
     * the task started running. This element is present only if the task was
     * retried (i.e. retryCount is nonzero). If present, this is typically the
     * same as startTime, but may be different if the task has been restarted for
     * reasons other than retry; for example, if the compute node was rebooted
     * during a retry, then the startTime is updated but the lastRetryTime is
     * not.
     */
    lastRetryTime?: Date;
    /**
     * @member {TaskExecutionResult} [result] The result of the task execution.
     * If the value is 'failed', then the details of the failure can be found in
     * the failureInfo property. Possible values include: 'success', 'failure'
     */
    result?: TaskExecutionResult;
}
/**
 * @interface
 * An interface representing ComputeNodeError.
 * @summary An error encountered by a compute node.
 *
 */
export interface ComputeNodeError {
    /**
     * @member {string} [code] An identifier for the compute node error. Codes
     * are invariant and are intended to be consumed programmatically.
     */
    code?: string;
    /**
     * @member {string} [message] A message describing the compute node error,
     * intended to be suitable for display in a user interface.
     */
    message?: string;
    /**
     * @member {NameValuePair[]} [errorDetails] The list of additional error
     * details related to the compute node error.
     */
    errorDetails?: NameValuePair[];
}
/**
 * @interface
 * An interface representing InboundEndpoint.
 * @summary An inbound endpoint on a compute node.
 *
 */
export interface InboundEndpoint {
    /**
     * @member {string} name The name of the endpoint.
     */
    name: string;
    /**
     * @member {InboundEndpointProtocol} protocol The protocol of the endpoint.
     * Possible values include: 'tcp', 'udp'
     */
    protocol: InboundEndpointProtocol;
    /**
     * @member {string} publicIPAddress The public IP address of the compute
     * node.
     */
    publicIPAddress: string;
    /**
     * @member {string} publicFQDN The public fully qualified domain name for the
     * compute node.
     */
    publicFQDN: string;
    /**
     * @member {number} frontendPort The public port number of the endpoint.
     */
    frontendPort: number;
    /**
     * @member {number} backendPort The backend port number of the endpoint.
     */
    backendPort: number;
}
/**
 * @interface
 * An interface representing ComputeNodeEndpointConfiguration.
 * @summary The endpoint configuration for the compute node.
 *
 */
export interface ComputeNodeEndpointConfiguration {
    /**
     * @member {InboundEndpoint[]} inboundEndpoints The list of inbound endpoints
     * that are accessible on the compute node.
     */
    inboundEndpoints: InboundEndpoint[];
}
/**
 * @interface
 * An interface representing ComputeNode.
 * @summary A compute node in the Batch service.
 *
 */
export interface ComputeNode {
    /**
     * @member {string} [id] The ID of the compute node. Every node that is added
     * to a pool is assigned a unique ID. Whenever a node is removed from a pool,
     * all of its local files are deleted, and the ID is reclaimed and could be
     * reused for new nodes.
     */
    id?: string;
    /**
     * @member {string} [url] The URL of the compute node.
     */
    url?: string;
    /**
     * @member {ComputeNodeState} [state] The current state of the compute node.
     * The low-priority node has been preempted. Tasks which were running on the
     * node when it was pre-empted will be rescheduled when another node becomes
     * available. Possible values include: 'idle', 'rebooting', 'reimaging',
     * 'running', 'unusable', 'creating', 'starting', 'waitingForStartTask',
     * 'startTaskFailed', 'unknown', 'leavingPool', 'offline', 'preempted'
     */
    state?: ComputeNodeState;
    /**
     * @member {SchedulingState} [schedulingState] Whether the compute node is
     * available for task scheduling. Possible values include: 'enabled',
     * 'disabled'
     */
    schedulingState?: SchedulingState;
    /**
     * @member {Date} [stateTransitionTime] The time at which the compute node
     * entered its current state.
     */
    stateTransitionTime?: Date;
    /**
     * @member {Date} [lastBootTime] The time at which the compute node was
     * started. This property may not be present if the node state is unusable.
     */
    lastBootTime?: Date;
    /**
     * @member {Date} [allocationTime] The time at which this compute node was
     * allocated to the pool.
     */
    allocationTime?: Date;
    /**
     * @member {string} [ipAddress] The IP address that other compute nodes can
     * use to communicate with this compute node. Every node that is added to a
     * pool is assigned a unique IP address. Whenever a node is removed from a
     * pool, all of its local files are deleted, and the IP address is reclaimed
     * and could be reused for new nodes.
     */
    ipAddress?: string;
    /**
     * @member {string} [affinityId] An identifier which can be passed when
     * adding a task to request that the task be scheduled on this node. Note
     * that this is just a soft affinity. If the target node is busy or
     * unavailable at the time the task is scheduled, then the task will be
     * scheduled elsewhere.
     */
    affinityId?: string;
    /**
     * @member {string} [vmSize] The size of the virtual machine hosting the
     * compute node. For information about available sizes of virtual machines
     * for Cloud Services pools (pools created with cloudServiceConfiguration),
     * see Sizes for Cloud Services
     * (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/).
     * Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and
     * A2V2. For information about available VM sizes for pools using images from
     * the Virtual Machines Marketplace (pools created with
     * virtualMachineConfiguration) see Sizes for Virtual Machines (Linux)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/)
     * or Sizes for Virtual Machines (Windows)
     * (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/).
     * Batch supports all Azure VM sizes except STANDARD_A0 and those with
     * premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize?: string;
    /**
     * @member {number} [totalTasksRun] The total number of job tasks completed
     * on the compute node. This includes Job Manager tasks and normal tasks, but
     * not Job Preparation, Job Release or Start tasks.
     */
    totalTasksRun?: number;
    /**
     * @member {number} [runningTasksCount] The total number of currently running
     * job tasks on the compute node. This includes Job Manager tasks and normal
     * tasks, but not Job Preparation, Job Release or Start tasks.
     */
    runningTasksCount?: number;
    /**
     * @member {number} [totalTasksSucceeded] The total number of job tasks which
     * completed successfully (with exitCode 0) on the compute node. This
     * includes Job Manager tasks and normal tasks, but not Job Preparation, Job
     * Release or Start tasks.
     */
    totalTasksSucceeded?: number;
    /**
     * @member {TaskInformation[]} [recentTasks] A list of tasks whose state has
     * recently changed. This property is present only if at least one task has
     * run on this node since it was assigned to the pool.
     */
    recentTasks?: TaskInformation[];
    /**
     * @member {StartTask} [startTask] The task specified to run on the compute
     * node as it joins the pool.
     */
    startTask?: StartTask;
    /**
     * @member {StartTaskInformation} [startTaskInfo] Runtime information about
     * the execution of the start task on the compute node.
     */
    startTaskInfo?: StartTaskInformation;
    /**
     * @member {CertificateReference[]} [certificateReferences] The list of
     * certificates installed on the compute node. For Windows compute nodes, the
     * Batch service installs the certificates to the specified certificate store
     * and location. For Linux compute nodes, the certificates are stored in a
     * directory inside the task working directory and an environment variable
     * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
     * location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     */
    certificateReferences?: CertificateReference[];
    /**
     * @member {ComputeNodeError[]} [errors] The list of errors that are
     * currently being encountered by the compute node.
     */
    errors?: ComputeNodeError[];
    /**
     * @member {boolean} [isDedicated] Whether this compute node is a dedicated
     * node. If false, the node is a low-priority node.
     */
    isDedicated?: boolean;
    /**
     * @member {ComputeNodeEndpointConfiguration} [endpointConfiguration] The
     * endpoint configuration for the compute node.
     */
    endpointConfiguration?: ComputeNodeEndpointConfiguration;
}
/**
 * @interface
 * An interface representing ComputeNodeUser.
 * @summary A user account for RDP or SSH access on a compute node.
 *
 */
export interface ComputeNodeUser {
    /**
     * @member {string} name The user name of the account.
     */
    name: string;
    /**
     * @member {boolean} [isAdmin] Whether the account should be an administrator
     * on the compute node. The default value is false.
     */
    isAdmin?: boolean;
    /**
     * @member {Date} [expiryTime] The time at which the account should expire.
     * If omitted, the default is 1 day from the current time. For Linux compute
     * nodes, the expiryTime has a precision up to a day.
     */
    expiryTime?: Date;
    /**
     * @member {string} [password] The password of the account. The password is
     * required for Windows nodes (those created with
     * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
     * using a Windows image reference). For Linux compute nodes, the password
     * can optionally be specified along with the sshPublicKey property.
     */
    password?: string;
    /**
     * @member {string} [sshPublicKey] The SSH public key that can be used for
     * remote login to the compute node. The public key should be compatible with
     * OpenSSH encoding and should be base 64 encoded. This property can be
     * specified only for Linux nodes. If this is specified for a Windows node,
     * then the Batch service rejects the request; if you are calling the REST
     * API directly, the HTTP status code is 400 (Bad Request).
     */
    sshPublicKey?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteLoginSettingsResult.
 * @summary The remote login settings for a compute node.
 *
 */
export interface ComputeNodeGetRemoteLoginSettingsResult {
    /**
     * @member {string} remoteLoginIPAddress The IP address used for remote login
     * to the compute node.
     */
    remoteLoginIPAddress: string;
    /**
     * @member {number} remoteLoginPort The port used for remote login to the
     * compute node.
     */
    remoteLoginPort: number;
}
/**
 * @interface
 * An interface representing JobSchedulePatchParameter.
 * @summary The set of changes to be made to a job schedule.
 *
 */
export interface JobSchedulePatchParameter {
    /**
     * @member {Schedule} [schedule] The schedule according to which jobs will be
     * created. If you do not specify this element, the existing schedule is left
     * unchanged.
     */
    schedule?: Schedule;
    /**
     * @member {JobSpecification} [jobSpecification] The details of the jobs to
     * be created on this schedule. Updates affect only jobs that are started
     * after the update has taken place. Any currently active job continues with
     * the older specification.
     */
    jobSpecification?: JobSpecification;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job schedule as metadata. If you do not specify this element,
     * existing metadata is left unchanged.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing JobScheduleUpdateParameter.
 * @summary The set of changes to be made to a job schedule.
 *
 */
export interface JobScheduleUpdateParameter {
    /**
     * @member {Schedule} schedule The schedule according to which jobs will be
     * created. If you do not specify this element, it is equivalent to passing
     * the default schedule: that is, a single job scheduled to run immediately.
     */
    schedule: Schedule;
    /**
     * @member {JobSpecification} jobSpecification Details of the jobs to be
     * created on this schedule. Updates affect only jobs that are started after
     * the update has taken place. Any currently active job continues with the
     * older specification.
     */
    jobSpecification: JobSpecification;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job schedule as metadata. If you do not specify this element, it
     * takes the default value of an empty list; in effect, any existing metadata
     * is deleted.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing JobDisableParameter.
 * @summary Options when disabling a job.
 *
 */
export interface JobDisableParameter {
    /**
     * @member {DisableJobOption} disableTasks What to do with active tasks
     * associated with the job. Possible values include: 'requeue', 'terminate',
     * 'wait'
     */
    disableTasks: DisableJobOption;
}
/**
 * @interface
 * An interface representing JobTerminateParameter.
 * @summary Options when terminating a job.
 *
 */
export interface JobTerminateParameter {
    /**
     * @member {string} [terminateReason] The text you want to appear as the
     * job's TerminateReason. The default is 'UserTerminate'.
     */
    terminateReason?: string;
}
/**
 * @interface
 * An interface representing JobPatchParameter.
 * @summary The set of changes to be made to a job.
 *
 */
export interface JobPatchParameter {
    /**
     * @member {number} [priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. If omitted, the priority of the job is left
     * unchanged.
     */
    priority?: number;
    /**
     * @member {OnAllTasksComplete} [onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state.
     * If omitted, the completion behavior is left unchanged. You may not change
     * the value from terminatejob to noaction - that is, once you have engaged
     * automatic job termination, you cannot turn it off again. If you try to do
     * this, the request fails with an 'invalid property value' error response;
     * if you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request). Possible values include: 'noAction', 'terminateJob'
     */
    onAllTasksComplete?: OnAllTasksComplete;
    /**
     * @member {JobConstraints} [constraints] The execution constraints for the
     * job. If omitted, the existing execution constraints are left unchanged.
     */
    constraints?: JobConstraints;
    /**
     * @member {PoolInformation} [poolInfo] The pool on which the Batch service
     * runs the job's tasks. You may change the pool for a job only when the job
     * is disabled. The Patch Job call will fail if you include the poolInfo
     * element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job. If omitted, the job continues to run on its
     * current pool.
     */
    poolInfo?: PoolInformation;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job as metadata. If omitted, the existing job metadata is left
     * unchanged.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing JobUpdateParameter.
 * @summary The set of changes to be made to a job.
 *
 */
export interface JobUpdateParameter {
    /**
     * @member {number} [priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. If omitted, it is set to the default value 0.
     */
    priority?: number;
    /**
     * @member {JobConstraints} [constraints] The execution constraints for the
     * job. If omitted, the constraints are cleared.
     */
    constraints?: JobConstraints;
    /**
     * @member {PoolInformation} poolInfo The pool on which the Batch service
     * runs the job's tasks. You may change the pool for a job only when the job
     * is disabled. The Update Job call will fail if you include the poolInfo
     * element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job.
     */
    poolInfo: PoolInformation;
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the job as metadata. If omitted, it takes the default value of an
     * empty list; in effect, any existing metadata is deleted.
     */
    metadata?: MetadataItem[];
    /**
     * @member {OnAllTasksComplete} [onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state.
     * If omitted, the completion behavior is set to noaction. If the current
     * value is terminatejob, this is an error because a job's completion
     * behavior may not be changed from terminatejob to noaction. You may not
     * change the value from terminatejob to noaction - that is, once you have
     * engaged automatic job termination, you cannot turn it off again. If you
     * try to do this, the request fails and Batch returns status code 400 (Bad
     * Request) and an 'invalid property value' error response. If you do not
     * specify this element in a PUT request, it is equivalent to passing
     * noaction. This is an error if the current value is terminatejob. Possible
     * values include: 'noAction', 'terminateJob'
     */
    onAllTasksComplete?: OnAllTasksComplete;
}
/**
 * @interface
 * An interface representing PoolEnableAutoScaleParameter.
 * @summary Options for enabling automatic scaling on a pool.
 *
 */
export interface PoolEnableAutoScaleParameter {
    /**
     * @member {string} [autoScaleFormula] The formula for the desired number of
     * compute nodes in the pool. The formula is checked for validity before it
     * is applied to the pool. If the formula is not valid, the Batch service
     * rejects the request with detailed error information. For more information
     * about specifying this formula, see Automatically scale compute nodes in an
     * Azure Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     */
    autoScaleFormula?: string;
    /**
     * @member {string} [autoScaleEvaluationInterval] The time interval at which
     * to automatically adjust the pool size according to the autoscale formula.
     * The default value is 15 minutes. The minimum and maximum value are 5
     * minutes and 168 hours respectively. If you specify a value less than 5
     * minutes or greater than 168 hours, the Batch service rejects the request
     * with an invalid property value error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request). If you specify a new
     * interval, then the existing autoscale evaluation schedule will be stopped
     * and a new autoscale evaluation schedule will be started, with its starting
     * time being the time when this request was issued.
     */
    autoScaleEvaluationInterval?: string;
}
/**
 * @interface
 * An interface representing PoolEvaluateAutoScaleParameter.
 * @summary Options for evaluating an automatic scaling formula on a pool.
 *
 */
export interface PoolEvaluateAutoScaleParameter {
    /**
     * @member {string} autoScaleFormula The formula for the desired number of
     * compute nodes in the pool. The formula is validated and its results
     * calculated, but it is not applied to the pool. To apply the formula to the
     * pool, 'Enable automatic scaling on a pool'. For more information about
     * specifying this formula, see Automatically scale compute nodes in an Azure
     * Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     */
    autoScaleFormula: string;
}
/**
 * @interface
 * An interface representing PoolResizeParameter.
 * @summary Options for changing the size of a pool.
 *
 */
export interface PoolResizeParameter {
    /**
     * @member {number} [targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool.
     */
    targetDedicatedNodes?: number;
    /**
     * @member {number} [targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool.
     */
    targetLowPriorityNodes?: number;
    /**
     * @member {string} [resizeTimeout] The timeout for allocation of compute
     * nodes to the pool or removal of compute nodes from the pool. The default
     * value is 15 minutes. The minimum value is 5 minutes. If you specify a
     * value less than 5 minutes, the Batch service returns an error; if you are
     * calling the REST API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    /**
     * @member {ComputeNodeDeallocationOption} [nodeDeallocationOption]
     * Determines what to do with a node and its running task(s) if the pool size
     * is decreasing. The default value is requeue. Possible values include:
     * 'requeue', 'terminate', 'taskCompletion', 'retainedData'
     */
    nodeDeallocationOption?: ComputeNodeDeallocationOption;
}
/**
 * @interface
 * An interface representing PoolUpdatePropertiesParameter.
 * @summary The set of changes to be made to a pool.
 *
 */
export interface PoolUpdatePropertiesParameter {
    /**
     * @member {StartTask} [startTask] A task to run on each compute node as it
     * joins the pool. The task runs when the node is added to the pool or when
     * the node is restarted. If this element is present, it overwrites any
     * existing start task. If omitted, any existing start task is removed from
     * the pool.
     */
    startTask?: StartTask;
    /**
     * @member {CertificateReference[]} certificateReferences A list of
     * certificates to be installed on each compute node in the pool. This list
     * replaces any existing certificate references configured on the pool. If
     * you specify an empty collection, any existing certificate references are
     * removed from the pool. For Windows compute nodes, the Batch service
     * installs the certificates to the specified certificate store and location.
     * For Linux compute nodes, the certificates are stored in a directory inside
     * the task working directory and an environment variable
     * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
     * location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     */
    certificateReferences: CertificateReference[];
    /**
     * @member {ApplicationPackageReference[]} applicationPackageReferences A
     * list of application packages to be installed on each compute node in the
     * pool. The list replaces any existing application package references on the
     * pool. Changes to application package references affect all new compute
     * nodes joining the pool, but do not affect compute nodes that are already
     * in the pool until they are rebooted or reimaged. If omitted, or if you
     * specify an empty collection, any existing application packages references
     * are removed from the pool.
     */
    applicationPackageReferences: ApplicationPackageReference[];
    /**
     * @member {MetadataItem[]} metadata A list of name-value pairs associated
     * with the pool as metadata. This list replaces any existing metadata
     * configured on the pool. If omitted, or if you specify an empty collection,
     * any existing metadata is removed from the pool.
     */
    metadata: MetadataItem[];
}
/**
 * @interface
 * An interface representing PoolUpgradeOSParameter.
 * @summary Options for upgrading the operating system of compute nodes in a
 * pool.
 *
 */
export interface PoolUpgradeOSParameter {
    /**
     * @member {string} targetOSVersion The Azure Guest OS version to be
     * installed on the virtual machines in the pool.
     */
    targetOSVersion: string;
}
/**
 * @interface
 * An interface representing PoolPatchParameter.
 * @summary The set of changes to be made to a pool.
 *
 */
export interface PoolPatchParameter {
    /**
     * @member {StartTask} [startTask] A task to run on each compute node as it
     * joins the pool. The task runs when the node is added to the pool or when
     * the node is restarted. If this element is present, it overwrites any
     * existing start task. If omitted, any existing start task is left
     * unchanged.
     */
    startTask?: StartTask;
    /**
     * @member {CertificateReference[]} [certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. If this
     * element is present, it replaces any existing certificate references
     * configured on the pool. If omitted, any existing certificate references
     * are left unchanged. For Windows compute nodes, the Batch service installs
     * the certificates to the specified certificate store and location. For
     * Linux compute nodes, the certificates are stored in a directory inside the
     * task working directory and an environment variable
     * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
     * location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     */
    certificateReferences?: CertificateReference[];
    /**
     * @member {ApplicationPackageReference[]} [applicationPackageReferences] A
     * list of application packages to be installed on each compute node in the
     * pool. Changes to application package references affect all new compute
     * nodes joining the pool, but do not affect compute nodes that are already
     * in the pool until they are rebooted or reimaged. If this element is
     * present, it replaces any existing application package references. If you
     * specify an empty collection, then all application package references are
     * removed from the pool. If omitted, any existing application package
     * references are left unchanged.
     */
    applicationPackageReferences?: ApplicationPackageReference[];
    /**
     * @member {MetadataItem[]} [metadata] A list of name-value pairs associated
     * with the pool as metadata. If this element is present, it replaces any
     * existing metadata configured on the pool. If you specify an empty
     * collection, any metadata is removed from the pool. If omitted, any
     * existing metadata is left unchanged.
     */
    metadata?: MetadataItem[];
}
/**
 * @interface
 * An interface representing TaskUpdateParameter.
 * @summary The set of changes to be made to a task.
 *
 */
export interface TaskUpdateParameter {
    /**
     * @member {TaskConstraints} [constraints] Constraints that apply to this
     * task. If omitted, the task is given the default constraints. For
     * multi-instance tasks, updating the retention time applies only to the
     * primary task and not subtasks.
     */
    constraints?: TaskConstraints;
}
/**
 * @interface
 * An interface representing NodeUpdateUserParameter.
 * @summary The set of changes to be made to a user account on a node.
 *
 */
export interface NodeUpdateUserParameter {
    /**
     * @member {string} [password] The password of the account. The password is
     * required for Windows nodes (those created with
     * 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration'
     * using a Windows image reference). For Linux compute nodes, the password
     * can optionally be specified along with the sshPublicKey property. If
     * omitted, any existing password is removed.
     */
    password?: string;
    /**
     * @member {Date} [expiryTime] The time at which the account should expire.
     * If omitted, the default is 1 day from the current time. For Linux compute
     * nodes, the expiryTime has a precision up to a day.
     */
    expiryTime?: Date;
    /**
     * @member {string} [sshPublicKey] The SSH public key that can be used for
     * remote login to the compute node. The public key should be compatible with
     * OpenSSH encoding and should be base 64 encoded. This property can be
     * specified only for Linux nodes. If this is specified for a Windows node,
     * then the Batch service rejects the request; if you are calling the REST
     * API directly, the HTTP status code is 400 (Bad Request). If omitted, any
     * existing SSH public key is removed.
     */
    sshPublicKey?: string;
}
/**
 * @interface
 * An interface representing NodeRebootParameter.
 * @summary Options for rebooting a compute node.
 *
 */
export interface NodeRebootParameter {
    /**
     * @member {ComputeNodeRebootOption} [nodeRebootOption] When to reboot the
     * compute node and what to do with currently running tasks. The default
     * value is requeue. Possible values include: 'requeue', 'terminate',
     * 'taskCompletion', 'retainedData'
     */
    nodeRebootOption?: ComputeNodeRebootOption;
}
/**
 * @interface
 * An interface representing NodeReimageParameter.
 * @summary Options for reimaging a compute node.
 *
 */
export interface NodeReimageParameter {
    /**
     * @member {ComputeNodeReimageOption} [nodeReimageOption] When to reimage the
     * compute node and what to do with currently running tasks. The default
     * value is requeue. Possible values include: 'requeue', 'terminate',
     * 'taskCompletion', 'retainedData'
     */
    nodeReimageOption?: ComputeNodeReimageOption;
}
/**
 * @interface
 * An interface representing NodeDisableSchedulingParameter.
 * @summary Options for disabling scheduling on a compute node.
 *
 */
export interface NodeDisableSchedulingParameter {
    /**
     * @member {DisableComputeNodeSchedulingOption} [nodeDisableSchedulingOption]
     * What to do with currently running tasks when disabling task scheduling on
     * the compute node. The default value is requeue. Possible values include:
     * 'requeue', 'terminate', 'taskCompletion'
     */
    nodeDisableSchedulingOption?: DisableComputeNodeSchedulingOption;
}
/**
 * @interface
 * An interface representing NodeRemoveParameter.
 * @summary Options for removing compute nodes from a pool.
 *
 */
export interface NodeRemoveParameter {
    /**
     * @member {string[]} nodeList A list containing the IDs of the compute nodes
     * to be removed from the specified pool.
     */
    nodeList: string[];
    /**
     * @member {string} [resizeTimeout] The timeout for removal of compute nodes
     * to the pool. The default value is 15 minutes. The minimum value is 5
     * minutes. If you specify a value less than 5 minutes, the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    /**
     * @member {ComputeNodeDeallocationOption} [nodeDeallocationOption]
     * Determines what to do with a node and its running task(s) after it has
     * been selected for deallocation. The default value is requeue. Possible
     * values include: 'requeue', 'terminate', 'taskCompletion', 'retainedData'
     */
    nodeDeallocationOption?: ComputeNodeDeallocationOption;
}
/**
 * @interface
 * An interface representing UploadBatchServiceLogsConfiguration.
 * @summary The Azure Batch service log files upload configuration for a
 * compute node.
 *
 */
export interface UploadBatchServiceLogsConfiguration {
    /**
     * @member {string} containerUrl The URL of the container within Azure Blob
     * Storage to which to upload the Batch Service log file(s). The URL must
     * include a Shared Access Signature (SAS) granting write permissions to the
     * container. The SAS duration must allow enough time for the upload to
     * finish. The start time for SAS is optional and recommended to not be
     * specified.
     */
    containerUrl: string;
    /**
     * @member {Date} startTime The start of the time range from which to upload
     * Batch Service log file(s). Any log file containing a log message in the
     * time range will be uploaded. This means that the operation might retrieve
     * more logs than have been requested since the entire log file is always
     * uploaded, but the operation should not retrieve fewer logs than have been
     * requested.
     */
    startTime: Date;
    /**
     * @member {Date} [endTime] The end of the time range from which to upload
     * Batch Service log file(s). Any log file containing a log message in the
     * time range will be uploaded. This means that the operation might retrieve
     * more logs than have been requested since the entire log file is always
     * uploaded, but the operation should not retrieve fewer logs than have been
     * requested. If omitted, the default is to upload all logs available after
     * the startTime.
     */
    endTime?: Date;
}
/**
 * @interface
 * An interface representing UploadBatchServiceLogsResult.
 * @summary The result of uploading Batch service log files from a specific
 * compute node.
 *
 */
export interface UploadBatchServiceLogsResult {
    /**
     * @member {string} virtualDirectoryName The virtual directory within Azure
     * Blob Storage container to which the Batch Service log file(s) will be
     * uploaded. The virtual directory name is part of the blob name for each log
     * file uploaded, and it is built based poolId, nodeId and a unique
     * identifier.
     */
    virtualDirectoryName: string;
    /**
     * @member {number} numberOfFilesUploaded The number of log files which will
     * be uploaded.
     */
    numberOfFilesUploaded: number;
}
/**
 * @interface
 * An interface representing NodeCounts.
 * @summary The number of nodes in each node state.
 *
 */
export interface NodeCounts {
    /**
     * @member {number} creating The number of nodes in the creating state.
     */
    creating: number;
    /**
     * @member {number} idle The number of nodes in the idle state.
     */
    idle: number;
    /**
     * @member {number} offline The number of nodes in the offline state.
     */
    offline: number;
    /**
     * @member {number} preempted The number of nodes in the preempted state.
     */
    preempted: number;
    /**
     * @member {number} rebooting The count of nodes in the rebooting state.
     */
    rebooting: number;
    /**
     * @member {number} reimaging The number of nodes in the reimaging state.
     */
    reimaging: number;
    /**
     * @member {number} running The number of nodes in the running state.
     */
    running: number;
    /**
     * @member {number} starting The number of nodes in the starting state.
     */
    starting: number;
    /**
     * @member {number} startTaskFailed The number of nodes in the
     * startTaskFailed state.
     */
    startTaskFailed: number;
    /**
     * @member {number} leavingPool The number of nodes in the leavingPool state.
     */
    leavingPool: number;
    /**
     * @member {number} unknown The number of nodes in the unknown state.
     */
    unknown: number;
    /**
     * @member {number} unusable The number of nodes in the unusable state.
     */
    unusable: number;
    /**
     * @member {number} waitingForStartTask The number of nodes in the
     * waitingForStartTask state.
     */
    waitingForStartTask: number;
    /**
     * @member {number} total The total number of nodes.
     */
    total: number;
}
/**
 * @interface
 * An interface representing PoolNodeCounts.
 * @summary The number of nodes in each state for a pool.
 *
 */
export interface PoolNodeCounts {
    /**
     * @member {string} poolId The ID of the pool.
     */
    poolId: string;
    /**
     * @member {NodeCounts} [dedicated] The number of dedicated nodes in each
     * state.
     */
    dedicated?: NodeCounts;
    /**
     * @member {NodeCounts} [lowPriority] The number of low priority nodes in
     * each state.
     */
    lowPriority?: NodeCounts;
}
/**
 * @interface
 * An interface representing ApplicationListOptions.
 * Additional parameters for list operation.
 *
 */
export interface ApplicationListOptions {
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 applications can be returned. Default value:
     * 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ApplicationGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface ApplicationGetOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolListUsageMetricsOptions.
 * Additional parameters for listUsageMetrics operation.
 *
 */
export interface PoolListUsageMetricsOptions {
    /**
     * @member {Date} [startTime] The earliest time from which to include
     * metrics. This must be at least two and a half hours before the current
     * time. If not specified this defaults to the start time of the last
     * aggregation interval currently available.
     */
    startTime?: Date;
    /**
     * @member {Date} [endTime] The latest time from which to include metrics.
     * This must be at least two hours before the current time. If not specified
     * this defaults to the end time of the last aggregation interval currently
     * available.
     */
    endTime?: Date;
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
     */
    filter?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 results will be returned. Default value: 1000
     * .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolGetAllLifetimeStatisticsOptions.
 * Additional parameters for getAllLifetimeStatistics operation.
 *
 */
export interface PoolGetAllLifetimeStatisticsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolAddOptions.
 * Additional parameters for add operation.
 *
 */
export interface PoolAddOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolListOptions.
 * Additional parameters for list operation.
 *
 */
export interface PoolListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 pools can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolDeleteMethodOptions.
 * Additional parameters for deleteMethod operation.
 *
 */
export interface PoolDeleteMethodOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolExistsOptions.
 * Additional parameters for exists operation.
 *
 */
export interface PoolExistsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface PoolGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolPatchOptions.
 * Additional parameters for patch operation.
 *
 */
export interface PoolPatchOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolDisableAutoScaleOptions.
 * Additional parameters for disableAutoScale operation.
 *
 */
export interface PoolDisableAutoScaleOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolEnableAutoScaleOptions.
 * Additional parameters for enableAutoScale operation.
 *
 */
export interface PoolEnableAutoScaleOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolEvaluateAutoScaleOptions.
 * Additional parameters for evaluateAutoScale operation.
 *
 */
export interface PoolEvaluateAutoScaleOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolResizeOptions.
 * Additional parameters for resize operation.
 *
 */
export interface PoolResizeOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolStopResizeOptions.
 * Additional parameters for stopResize operation.
 *
 */
export interface PoolStopResizeOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolUpdatePropertiesOptions.
 * Additional parameters for updateProperties operation.
 *
 */
export interface PoolUpdatePropertiesOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolUpgradeOSOptions.
 * Additional parameters for upgradeOS operation.
 *
 */
export interface PoolUpgradeOSOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing PoolRemoveNodesOptions.
 * Additional parameters for removeNodes operation.
 *
 */
export interface PoolRemoveNodesOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing AccountListNodeAgentSkusOptions.
 * Additional parameters for listNodeAgentSkus operation.
 *
 */
export interface AccountListNodeAgentSkusOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus.
     */
    filter?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 results will be returned. Default value: 1000
     * .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing AccountListPoolNodeCountsOptions.
 * Additional parameters for listPoolNodeCounts operation.
 *
 */
export interface AccountListPoolNodeCountsOptions {
    /**
     * @member {string} [filter] An OData $filter clause.
     */
    filter?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. Default value: 10 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobGetAllLifetimeStatisticsOptions.
 * Additional parameters for getAllLifetimeStatistics operation.
 *
 */
export interface JobGetAllLifetimeStatisticsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobDeleteMethodOptions.
 * Additional parameters for deleteMethod operation.
 *
 */
export interface JobDeleteMethodOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface JobGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobPatchOptions.
 * Additional parameters for patch operation.
 *
 */
export interface JobPatchOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobUpdateOptions.
 * Additional parameters for update operation.
 *
 */
export interface JobUpdateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobDisableOptions.
 * Additional parameters for disable operation.
 *
 */
export interface JobDisableOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobEnableOptions.
 * Additional parameters for enable operation.
 *
 */
export interface JobEnableOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobTerminateOptions.
 * Additional parameters for terminate operation.
 *
 */
export interface JobTerminateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobAddOptions.
 * Additional parameters for add operation.
 *
 */
export interface JobAddOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListOptions.
 * Additional parameters for list operation.
 *
 */
export interface JobListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 jobs can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListFromJobScheduleOptions.
 * Additional parameters for listFromJobSchedule operation.
 *
 */
export interface JobListFromJobScheduleOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 jobs can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListPreparationAndReleaseTaskStatusOptions.
 * Additional parameters for listPreparationAndReleaseTaskStatus operation.
 *
 */
export interface JobListPreparationAndReleaseTaskStatusOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 tasks can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobGetTaskCountsOptions.
 * Additional parameters for getTaskCounts operation.
 *
 */
export interface JobGetTaskCountsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateAddOptions.
 * Additional parameters for add operation.
 *
 */
export interface CertificateAddOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateListOptions.
 * Additional parameters for list operation.
 *
 */
export interface CertificateListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 certificates can be returned. Default value:
     * 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateCancelDeletionOptions.
 * Additional parameters for cancelDeletion operation.
 *
 */
export interface CertificateCancelDeletionOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateDeleteMethodOptions.
 * Additional parameters for deleteMethod operation.
 *
 */
export interface CertificateDeleteMethodOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface CertificateGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileDeleteFromTaskOptions.
 * Additional parameters for deleteFromTask operation.
 *
 */
export interface FileDeleteFromTaskOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileGetFromTaskOptions.
 * Additional parameters for getFromTask operation.
 *
 */
export interface FileGetFromTaskOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ocpRange] The byte range to be retrieved. The default is
     * to retrieve the entire file. The format is bytes=startRange-endRange.
     */
    ocpRange?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromTaskOptions.
 * Additional parameters for getPropertiesFromTask operation.
 *
 */
export interface FileGetPropertiesFromTaskOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing FileDeleteFromComputeNodeOptions.
 * Additional parameters for deleteFromComputeNode operation.
 *
 */
export interface FileDeleteFromComputeNodeOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileGetFromComputeNodeOptions.
 * Additional parameters for getFromComputeNode operation.
 *
 */
export interface FileGetFromComputeNodeOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ocpRange] The byte range to be retrieved. The default is
     * to retrieve the entire file. The format is bytes=startRange-endRange.
     */
    ocpRange?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromComputeNodeOptions.
 * Additional parameters for getPropertiesFromComputeNode operation.
 *
 */
export interface FileGetPropertiesFromComputeNodeOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing FileListFromTaskOptions.
 * Additional parameters for listFromTask operation.
 *
 */
export interface FileListFromTaskOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
     */
    filter?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 files can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileListFromComputeNodeOptions.
 * Additional parameters for listFromComputeNode operation.
 *
 */
export interface FileListFromComputeNodeOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
     */
    filter?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 files can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleExistsOptions.
 * Additional parameters for exists operation.
 *
 */
export interface JobScheduleExistsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleDeleteMethodOptions.
 * Additional parameters for deleteMethod operation.
 *
 */
export interface JobScheduleDeleteMethodOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface JobScheduleGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobSchedulePatchOptions.
 * Additional parameters for patch operation.
 *
 */
export interface JobSchedulePatchOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleUpdateOptions.
 * Additional parameters for update operation.
 *
 */
export interface JobScheduleUpdateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleDisableOptions.
 * Additional parameters for disable operation.
 *
 */
export interface JobScheduleDisableOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleEnableOptions.
 * Additional parameters for enable operation.
 *
 */
export interface JobScheduleEnableOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleTerminateOptions.
 * Additional parameters for terminate operation.
 *
 */
export interface JobScheduleTerminateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleAddOptions.
 * Additional parameters for add operation.
 *
 */
export interface JobScheduleAddOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleListOptions.
 * Additional parameters for list operation.
 *
 */
export interface JobScheduleListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 job schedules can be returned. Default value:
     * 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskAddOptions.
 * Additional parameters for add operation.
 *
 */
export interface TaskAddOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskListOptions.
 * Additional parameters for list operation.
 *
 */
export interface TaskListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 tasks can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskAddCollectionOptions.
 * Additional parameters for addCollection operation.
 *
 */
export interface TaskAddCollectionOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskDeleteMethodOptions.
 * Additional parameters for deleteMethod operation.
 *
 */
export interface TaskDeleteMethodOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing TaskGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface TaskGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {string} [expand] An OData $expand clause.
     */
    expand?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing TaskUpdateOptions.
 * Additional parameters for update operation.
 *
 */
export interface TaskUpdateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing TaskListSubtasksOptions.
 * Additional parameters for listSubtasks operation.
 *
 */
export interface TaskListSubtasksOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskTerminateOptions.
 * Additional parameters for terminate operation.
 *
 */
export interface TaskTerminateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing TaskReactivateOptions.
 * Additional parameters for reactivate operation.
 *
 */
export interface TaskReactivateOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
    /**
     * @member {string} [ifMatch] An ETag value associated with the version of
     * the resource known to the client. The operation will be performed only if
     * the resource's current ETag on the service exactly matches the value
     * specified by the client.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] An ETag value associated with the version
     * of the resource known to the client. The operation will be performed only
     * if the resource's current ETag on the service does not match the value
     * specified by the client.
     */
    ifNoneMatch?: string;
    /**
     * @member {Date} [ifModifiedSince] A timestamp indicating the last modified
     * time of the resource known to the client. The operation will be performed
     * only if the resource on the service has been modified since the specified
     * time.
     */
    ifModifiedSince?: Date;
    /**
     * @member {Date} [ifUnmodifiedSince] A timestamp indicating the last
     * modified time of the resource known to the client. The operation will be
     * performed only if the resource on the service has not been modified since
     * the specified time.
     */
    ifUnmodifiedSince?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeAddUserOptions.
 * Additional parameters for addUser operation.
 *
 */
export interface ComputeNodeAddUserOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeDeleteUserOptions.
 * Additional parameters for deleteUser operation.
 *
 */
export interface ComputeNodeDeleteUserOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeUpdateUserOptions.
 * Additional parameters for updateUser operation.
 *
 */
export interface ComputeNodeUpdateUserOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeGetOptions.
 * Additional parameters for get operation.
 *
 */
export interface ComputeNodeGetOptions {
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeRebootOptions.
 * Additional parameters for reboot operation.
 *
 */
export interface ComputeNodeRebootOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeReimageOptions.
 * Additional parameters for reimage operation.
 *
 */
export interface ComputeNodeReimageOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeDisableSchedulingOptions.
 * Additional parameters for disableScheduling operation.
 *
 */
export interface ComputeNodeDisableSchedulingOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeEnableSchedulingOptions.
 * Additional parameters for enableScheduling operation.
 *
 */
export interface ComputeNodeEnableSchedulingOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteLoginSettingsOptions.
 * Additional parameters for getRemoteLoginSettings operation.
 *
 */
export interface ComputeNodeGetRemoteLoginSettingsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteDesktopOptions.
 * Additional parameters for getRemoteDesktop operation.
 *
 */
export interface ComputeNodeGetRemoteDesktopOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeUploadBatchServiceLogsOptions.
 * Additional parameters for uploadBatchServiceLogs operation.
 *
 */
export interface ComputeNodeUploadBatchServiceLogsOptions {
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeListOptions.
 * Additional parameters for list operation.
 *
 */
export interface ComputeNodeListOptions {
    /**
     * @member {string} [filter] An OData $filter clause. For more information on
     * constructing this filter, see
     * https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
     */
    filter?: string;
    /**
     * @member {string} [select] An OData $select clause.
     */
    select?: string;
    /**
     * @member {number} [maxResults] The maximum number of items to return in the
     * response. A maximum of 1000 nodes can be returned. Default value: 1000 .
     */
    maxResults?: number;
    /**
     * @member {number} [timeout] The maximum time that the server can spend
     * processing the request, in seconds. The default is 30 seconds. Default
     * value: 30 .
     */
    timeout?: number;
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ApplicationListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface ApplicationListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolListUsageMetricsNextOptions.
 * Additional parameters for listUsageMetricsNext operation.
 *
 */
export interface PoolListUsageMetricsNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing PoolListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface PoolListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing AccountListNodeAgentSkusNextOptions.
 * Additional parameters for listNodeAgentSkusNext operation.
 *
 */
export interface AccountListNodeAgentSkusNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing AccountListPoolNodeCountsNextOptions.
 * Additional parameters for listPoolNodeCountsNext operation.
 *
 */
export interface AccountListPoolNodeCountsNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface JobListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListFromJobScheduleNextOptions.
 * Additional parameters for listFromJobScheduleNext operation.
 *
 */
export interface JobListFromJobScheduleNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobListPreparationAndReleaseTaskStatusNextOptions.
 * Additional parameters for listPreparationAndReleaseTaskStatusNext operation.
 *
 */
export interface JobListPreparationAndReleaseTaskStatusNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing CertificateListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface CertificateListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileListFromTaskNextOptions.
 * Additional parameters for listFromTaskNext operation.
 *
 */
export interface FileListFromTaskNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing FileListFromComputeNodeNextOptions.
 * Additional parameters for listFromComputeNodeNext operation.
 *
 */
export interface FileListFromComputeNodeNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface JobScheduleListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing TaskListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface TaskListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeListNextOptions.
 * Additional parameters for listNext operation.
 *
 */
export interface ComputeNodeListNextOptions {
    /**
     * @member {string} [clientRequestId] The caller-generated request identity,
     * in the form of a GUID with no decoration such as curly braces, e.g.
     * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    clientRequestId?: string;
    /**
     * @member {boolean} [returnClientRequestId] Whether the server should return
     * the client-request-id in the response. Default value: false .
     */
    returnClientRequestId?: boolean;
    /**
     * @member {Date} [ocpDate] The time the request was issued. Client libraries
     * typically set this to the current system clock time; set it explicitly if
     * you are calling the REST API directly.
     */
    ocpDate?: Date;
}
/**
 * @interface
 * An interface representing ApplicationListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApplicationListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ApplicationListOptions} [applicationListOptions] Additional
     * parameters for the operation
     */
    applicationListOptions?: ApplicationListOptions;
}
/**
 * @interface
 * An interface representing ApplicationGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApplicationGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ApplicationGetOptions} [applicationGetOptions] Additional
     * parameters for the operation
     */
    applicationGetOptions?: ApplicationGetOptions;
}
/**
 * @interface
 * An interface representing ApplicationListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApplicationListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ApplicationListNextOptions} [applicationListNextOptions]
     * Additional parameters for the operation
     */
    applicationListNextOptions?: ApplicationListNextOptions;
}
/**
 * @interface
 * An interface representing PoolListUsageMetricsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolListUsageMetricsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolListUsageMetricsOptions} [poolListUsageMetricsOptions]
     * Additional parameters for the operation
     */
    poolListUsageMetricsOptions?: PoolListUsageMetricsOptions;
}
/**
 * @interface
 * An interface representing PoolGetAllLifetimeStatisticsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolGetAllLifetimeStatisticsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolGetAllLifetimeStatisticsOptions}
     * [poolGetAllLifetimeStatisticsOptions] Additional parameters for the
     * operation
     */
    poolGetAllLifetimeStatisticsOptions?: PoolGetAllLifetimeStatisticsOptions;
}
/**
 * @interface
 * An interface representing PoolAddOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolAddOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolAddOptions} [poolAddOptions] Additional parameters for the
     * operation
     */
    poolAddOptions?: PoolAddOptions;
}
/**
 * @interface
 * An interface representing PoolListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolListOptions} [poolListOptions] Additional parameters for the
     * operation
     */
    poolListOptions?: PoolListOptions;
}
/**
 * @interface
 * An interface representing PoolDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolDeleteMethodOptions} [poolDeleteMethodOptions] Additional
     * parameters for the operation
     */
    poolDeleteMethodOptions?: PoolDeleteMethodOptions;
}
/**
 * @interface
 * An interface representing PoolExistsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolExistsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolExistsOptions} [poolExistsOptions] Additional parameters for
     * the operation
     */
    poolExistsOptions?: PoolExistsOptions;
}
/**
 * @interface
 * An interface representing PoolGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolGetOptions} [poolGetOptions] Additional parameters for the
     * operation
     */
    poolGetOptions?: PoolGetOptions;
}
/**
 * @interface
 * An interface representing PoolPatchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolPatchOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolPatchOptions} [poolPatchOptions] Additional parameters for
     * the operation
     */
    poolPatchOptions?: PoolPatchOptions;
}
/**
 * @interface
 * An interface representing PoolDisableAutoScaleOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolDisableAutoScaleOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolDisableAutoScaleOptions} [poolDisableAutoScaleOptions]
     * Additional parameters for the operation
     */
    poolDisableAutoScaleOptions?: PoolDisableAutoScaleOptions;
}
/**
 * @interface
 * An interface representing PoolEnableAutoScaleOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolEnableAutoScaleOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolEnableAutoScaleOptions} [poolEnableAutoScaleOptions]
     * Additional parameters for the operation
     */
    poolEnableAutoScaleOptions?: PoolEnableAutoScaleOptions;
}
/**
 * @interface
 * An interface representing PoolEvaluateAutoScaleOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolEvaluateAutoScaleOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolEvaluateAutoScaleOptions} [poolEvaluateAutoScaleOptions]
     * Additional parameters for the operation
     */
    poolEvaluateAutoScaleOptions?: PoolEvaluateAutoScaleOptions;
}
/**
 * @interface
 * An interface representing PoolResizeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolResizeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolResizeOptions} [poolResizeOptions] Additional parameters for
     * the operation
     */
    poolResizeOptions?: PoolResizeOptions;
}
/**
 * @interface
 * An interface representing PoolStopResizeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolStopResizeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolStopResizeOptions} [poolStopResizeOptions] Additional
     * parameters for the operation
     */
    poolStopResizeOptions?: PoolStopResizeOptions;
}
/**
 * @interface
 * An interface representing PoolUpdatePropertiesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolUpdatePropertiesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolUpdatePropertiesOptions} [poolUpdatePropertiesOptions]
     * Additional parameters for the operation
     */
    poolUpdatePropertiesOptions?: PoolUpdatePropertiesOptions;
}
/**
 * @interface
 * An interface representing PoolUpgradeOSOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolUpgradeOSOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolUpgradeOSOptions} [poolUpgradeOSOptions] Additional
     * parameters for the operation
     */
    poolUpgradeOSOptions?: PoolUpgradeOSOptions;
}
/**
 * @interface
 * An interface representing PoolRemoveNodesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolRemoveNodesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolRemoveNodesOptions} [poolRemoveNodesOptions] Additional
     * parameters for the operation
     */
    poolRemoveNodesOptions?: PoolRemoveNodesOptions;
}
/**
 * @interface
 * An interface representing PoolListUsageMetricsNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolListUsageMetricsNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolListUsageMetricsNextOptions}
     * [poolListUsageMetricsNextOptions] Additional parameters for the operation
     */
    poolListUsageMetricsNextOptions?: PoolListUsageMetricsNextOptions;
}
/**
 * @interface
 * An interface representing PoolListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PoolListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {PoolListNextOptions} [poolListNextOptions] Additional parameters
     * for the operation
     */
    poolListNextOptions?: PoolListNextOptions;
}
/**
 * @interface
 * An interface representing AccountListNodeAgentSkusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AccountListNodeAgentSkusOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {AccountListNodeAgentSkusOptions}
     * [accountListNodeAgentSkusOptions] Additional parameters for the operation
     */
    accountListNodeAgentSkusOptions?: AccountListNodeAgentSkusOptions;
}
/**
 * @interface
 * An interface representing AccountListPoolNodeCountsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AccountListPoolNodeCountsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {AccountListPoolNodeCountsOptions}
     * [accountListPoolNodeCountsOptions] Additional parameters for the operation
     */
    accountListPoolNodeCountsOptions?: AccountListPoolNodeCountsOptions;
}
/**
 * @interface
 * An interface representing AccountListNodeAgentSkusNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AccountListNodeAgentSkusNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {AccountListNodeAgentSkusNextOptions}
     * [accountListNodeAgentSkusNextOptions] Additional parameters for the
     * operation
     */
    accountListNodeAgentSkusNextOptions?: AccountListNodeAgentSkusNextOptions;
}
/**
 * @interface
 * An interface representing AccountListPoolNodeCountsNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AccountListPoolNodeCountsNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {AccountListPoolNodeCountsNextOptions}
     * [accountListPoolNodeCountsNextOptions] Additional parameters for the
     * operation
     */
    accountListPoolNodeCountsNextOptions?: AccountListPoolNodeCountsNextOptions;
}
/**
 * @interface
 * An interface representing JobGetAllLifetimeStatisticsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobGetAllLifetimeStatisticsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobGetAllLifetimeStatisticsOptions}
     * [jobGetAllLifetimeStatisticsOptions] Additional parameters for the
     * operation
     */
    jobGetAllLifetimeStatisticsOptions?: JobGetAllLifetimeStatisticsOptions;
}
/**
 * @interface
 * An interface representing JobDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobDeleteMethodOptions} [jobDeleteMethodOptions] Additional
     * parameters for the operation
     */
    jobDeleteMethodOptions?: JobDeleteMethodOptions;
}
/**
 * @interface
 * An interface representing JobGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobGetOptions} [jobGetOptions] Additional parameters for the
     * operation
     */
    jobGetOptions?: JobGetOptions;
}
/**
 * @interface
 * An interface representing JobPatchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobPatchOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobPatchOptions} [jobPatchOptions] Additional parameters for the
     * operation
     */
    jobPatchOptions?: JobPatchOptions;
}
/**
 * @interface
 * An interface representing JobUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobUpdateOptions} [jobUpdateOptions] Additional parameters for
     * the operation
     */
    jobUpdateOptions?: JobUpdateOptions;
}
/**
 * @interface
 * An interface representing JobDisableOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobDisableOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobDisableOptions} [jobDisableOptions] Additional parameters for
     * the operation
     */
    jobDisableOptions?: JobDisableOptions;
}
/**
 * @interface
 * An interface representing JobEnableOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobEnableOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobEnableOptions} [jobEnableOptions] Additional parameters for
     * the operation
     */
    jobEnableOptions?: JobEnableOptions;
}
/**
 * @interface
 * An interface representing JobTerminateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobTerminateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobTerminateParameter} [jobTerminateParameter] The parameters for
     * the request.
     */
    jobTerminateParameter?: JobTerminateParameter;
    /**
     * @member {JobTerminateOptions} [jobTerminateOptions] Additional parameters
     * for the operation
     */
    jobTerminateOptions?: JobTerminateOptions;
}
/**
 * @interface
 * An interface representing JobAddOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobAddOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobAddOptions} [jobAddOptions] Additional parameters for the
     * operation
     */
    jobAddOptions?: JobAddOptions;
}
/**
 * @interface
 * An interface representing JobListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListOptions} [jobListOptions] Additional parameters for the
     * operation
     */
    jobListOptions?: JobListOptions;
}
/**
 * @interface
 * An interface representing JobListFromJobScheduleOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListFromJobScheduleOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListFromJobScheduleOptions} [jobListFromJobScheduleOptions]
     * Additional parameters for the operation
     */
    jobListFromJobScheduleOptions?: JobListFromJobScheduleOptions;
}
/**
 * @interface
 * An interface representing JobListPreparationAndReleaseTaskStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListPreparationAndReleaseTaskStatusOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListPreparationAndReleaseTaskStatusOptions}
     * [jobListPreparationAndReleaseTaskStatusOptions] Additional parameters for
     * the operation
     */
    jobListPreparationAndReleaseTaskStatusOptions?: JobListPreparationAndReleaseTaskStatusOptions;
}
/**
 * @interface
 * An interface representing JobGetTaskCountsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobGetTaskCountsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobGetTaskCountsOptions} [jobGetTaskCountsOptions] Additional
     * parameters for the operation
     */
    jobGetTaskCountsOptions?: JobGetTaskCountsOptions;
}
/**
 * @interface
 * An interface representing JobListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListNextOptions} [jobListNextOptions] Additional parameters
     * for the operation
     */
    jobListNextOptions?: JobListNextOptions;
}
/**
 * @interface
 * An interface representing JobListFromJobScheduleNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListFromJobScheduleNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListFromJobScheduleNextOptions}
     * [jobListFromJobScheduleNextOptions] Additional parameters for the
     * operation
     */
    jobListFromJobScheduleNextOptions?: JobListFromJobScheduleNextOptions;
}
/**
 * @interface
 * An interface representing JobListPreparationAndReleaseTaskStatusNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobListPreparationAndReleaseTaskStatusNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobListPreparationAndReleaseTaskStatusNextOptions}
     * [jobListPreparationAndReleaseTaskStatusNextOptions] Additional parameters
     * for the operation
     */
    jobListPreparationAndReleaseTaskStatusNextOptions?: JobListPreparationAndReleaseTaskStatusNextOptions;
}
/**
 * @interface
 * An interface representing CertificateAddOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateAddOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateAddOptions} [certificateAddOptions] Additional
     * parameters for the operation
     */
    certificateAddOptions?: CertificateAddOptions;
}
/**
 * @interface
 * An interface representing CertificateListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateListOptions} [certificateListOptions] Additional
     * parameters for the operation
     */
    certificateListOptions?: CertificateListOptions;
}
/**
 * @interface
 * An interface representing CertificateCancelDeletionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateCancelDeletionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateCancelDeletionOptions}
     * [certificateCancelDeletionOptions] Additional parameters for the operation
     */
    certificateCancelDeletionOptions?: CertificateCancelDeletionOptions;
}
/**
 * @interface
 * An interface representing CertificateDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateDeleteMethodOptions} [certificateDeleteMethodOptions]
     * Additional parameters for the operation
     */
    certificateDeleteMethodOptions?: CertificateDeleteMethodOptions;
}
/**
 * @interface
 * An interface representing CertificateGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateGetOptions} [certificateGetOptions] Additional
     * parameters for the operation
     */
    certificateGetOptions?: CertificateGetOptions;
}
/**
 * @interface
 * An interface representing CertificateListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CertificateListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {CertificateListNextOptions} [certificateListNextOptions]
     * Additional parameters for the operation
     */
    certificateListNextOptions?: CertificateListNextOptions;
}
/**
 * @interface
 * An interface representing FileDeleteFromTaskOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileDeleteFromTaskOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {boolean} [recursive] Whether to delete children of a directory.
     * If the filePath parameter represents a directory instead of a file, you
     * can set recursive to true to delete the directory and all of the files and
     * subdirectories in it. If recursive is false then the directory must be
     * empty or deletion will fail.
     */
    recursive?: boolean;
    /**
     * @member {FileDeleteFromTaskOptions} [fileDeleteFromTaskOptions] Additional
     * parameters for the operation
     */
    fileDeleteFromTaskOptions?: FileDeleteFromTaskOptions;
}
/**
 * @interface
 * An interface representing FileGetFromTaskOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileGetFromTaskOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileGetFromTaskOptions} [fileGetFromTaskOptions] Additional
     * parameters for the operation
     */
    fileGetFromTaskOptions?: FileGetFromTaskOptions;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromTaskOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileGetPropertiesFromTaskOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileGetPropertiesFromTaskOptions}
     * [fileGetPropertiesFromTaskOptions] Additional parameters for the operation
     */
    fileGetPropertiesFromTaskOptions?: FileGetPropertiesFromTaskOptions;
}
/**
 * @interface
 * An interface representing FileDeleteFromComputeNodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileDeleteFromComputeNodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {boolean} [recursive] Whether to delete children of a directory.
     * If the filePath parameter represents a directory instead of a file, you
     * can set recursive to true to delete the directory and all of the files and
     * subdirectories in it. If recursive is false then the directory must be
     * empty or deletion will fail.
     */
    recursive?: boolean;
    /**
     * @member {FileDeleteFromComputeNodeOptions}
     * [fileDeleteFromComputeNodeOptions] Additional parameters for the operation
     */
    fileDeleteFromComputeNodeOptions?: FileDeleteFromComputeNodeOptions;
}
/**
 * @interface
 * An interface representing FileGetFromComputeNodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileGetFromComputeNodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileGetFromComputeNodeOptions} [fileGetFromComputeNodeOptions]
     * Additional parameters for the operation
     */
    fileGetFromComputeNodeOptions?: FileGetFromComputeNodeOptions;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromComputeNodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileGetPropertiesFromComputeNodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileGetPropertiesFromComputeNodeOptions}
     * [fileGetPropertiesFromComputeNodeOptions] Additional parameters for the
     * operation
     */
    fileGetPropertiesFromComputeNodeOptions?: FileGetPropertiesFromComputeNodeOptions;
}
/**
 * @interface
 * An interface representing FileListFromTaskOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileListFromTaskOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {boolean} [recursive] Whether to list children of the task
     * directory. This parameter can be used in combination with the filter
     * parameter to list specific type of files.
     */
    recursive?: boolean;
    /**
     * @member {FileListFromTaskOptions} [fileListFromTaskOptions] Additional
     * parameters for the operation
     */
    fileListFromTaskOptions?: FileListFromTaskOptions;
}
/**
 * @interface
 * An interface representing FileListFromComputeNodeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileListFromComputeNodeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {boolean} [recursive] Whether to list children of a directory.
     */
    recursive?: boolean;
    /**
     * @member {FileListFromComputeNodeOptions} [fileListFromComputeNodeOptions]
     * Additional parameters for the operation
     */
    fileListFromComputeNodeOptions?: FileListFromComputeNodeOptions;
}
/**
 * @interface
 * An interface representing FileListFromTaskNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileListFromTaskNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileListFromTaskNextOptions} [fileListFromTaskNextOptions]
     * Additional parameters for the operation
     */
    fileListFromTaskNextOptions?: FileListFromTaskNextOptions;
}
/**
 * @interface
 * An interface representing FileListFromComputeNodeNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface FileListFromComputeNodeNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {FileListFromComputeNodeNextOptions}
     * [fileListFromComputeNodeNextOptions] Additional parameters for the
     * operation
     */
    fileListFromComputeNodeNextOptions?: FileListFromComputeNodeNextOptions;
}
/**
 * @interface
 * An interface representing JobScheduleExistsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleExistsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleExistsOptions} [jobScheduleExistsOptions] Additional
     * parameters for the operation
     */
    jobScheduleExistsOptions?: JobScheduleExistsOptions;
}
/**
 * @interface
 * An interface representing JobScheduleDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleDeleteMethodOptions} [jobScheduleDeleteMethodOptions]
     * Additional parameters for the operation
     */
    jobScheduleDeleteMethodOptions?: JobScheduleDeleteMethodOptions;
}
/**
 * @interface
 * An interface representing JobScheduleGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleGetOptions} [jobScheduleGetOptions] Additional
     * parameters for the operation
     */
    jobScheduleGetOptions?: JobScheduleGetOptions;
}
/**
 * @interface
 * An interface representing JobSchedulePatchOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobSchedulePatchOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobSchedulePatchOptions} [jobSchedulePatchOptions] Additional
     * parameters for the operation
     */
    jobSchedulePatchOptions?: JobSchedulePatchOptions;
}
/**
 * @interface
 * An interface representing JobScheduleUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleUpdateOptions} [jobScheduleUpdateOptions] Additional
     * parameters for the operation
     */
    jobScheduleUpdateOptions?: JobScheduleUpdateOptions;
}
/**
 * @interface
 * An interface representing JobScheduleDisableOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleDisableOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleDisableOptions} [jobScheduleDisableOptions] Additional
     * parameters for the operation
     */
    jobScheduleDisableOptions?: JobScheduleDisableOptions;
}
/**
 * @interface
 * An interface representing JobScheduleEnableOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleEnableOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleEnableOptions} [jobScheduleEnableOptions] Additional
     * parameters for the operation
     */
    jobScheduleEnableOptions?: JobScheduleEnableOptions;
}
/**
 * @interface
 * An interface representing JobScheduleTerminateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleTerminateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleTerminateOptions} [jobScheduleTerminateOptions]
     * Additional parameters for the operation
     */
    jobScheduleTerminateOptions?: JobScheduleTerminateOptions;
}
/**
 * @interface
 * An interface representing JobScheduleAddOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleAddOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleAddOptions} [jobScheduleAddOptions] Additional
     * parameters for the operation
     */
    jobScheduleAddOptions?: JobScheduleAddOptions;
}
/**
 * @interface
 * An interface representing JobScheduleListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleListOptions} [jobScheduleListOptions] Additional
     * parameters for the operation
     */
    jobScheduleListOptions?: JobScheduleListOptions;
}
/**
 * @interface
 * An interface representing JobScheduleListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JobScheduleListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {JobScheduleListNextOptions} [jobScheduleListNextOptions]
     * Additional parameters for the operation
     */
    jobScheduleListNextOptions?: JobScheduleListNextOptions;
}
/**
 * @interface
 * An interface representing TaskAddOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskAddOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskAddOptions} [taskAddOptions] Additional parameters for the
     * operation
     */
    taskAddOptions?: TaskAddOptions;
}
/**
 * @interface
 * An interface representing TaskListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskListOptions} [taskListOptions] Additional parameters for the
     * operation
     */
    taskListOptions?: TaskListOptions;
}
/**
 * @interface
 * An interface representing TaskAddCollectionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskAddCollectionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskAddCollectionOptions} [taskAddCollectionOptions] Additional
     * parameters for the operation
     */
    taskAddCollectionOptions?: TaskAddCollectionOptions;
}
/**
 * @interface
 * An interface representing TaskDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskDeleteMethodOptions} [taskDeleteMethodOptions] Additional
     * parameters for the operation
     */
    taskDeleteMethodOptions?: TaskDeleteMethodOptions;
}
/**
 * @interface
 * An interface representing TaskGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskGetOptions} [taskGetOptions] Additional parameters for the
     * operation
     */
    taskGetOptions?: TaskGetOptions;
}
/**
 * @interface
 * An interface representing TaskUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskUpdateOptions} [taskUpdateOptions] Additional parameters for
     * the operation
     */
    taskUpdateOptions?: TaskUpdateOptions;
}
/**
 * @interface
 * An interface representing TaskListSubtasksOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskListSubtasksOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskListSubtasksOptions} [taskListSubtasksOptions] Additional
     * parameters for the operation
     */
    taskListSubtasksOptions?: TaskListSubtasksOptions;
}
/**
 * @interface
 * An interface representing TaskTerminateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskTerminateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskTerminateOptions} [taskTerminateOptions] Additional
     * parameters for the operation
     */
    taskTerminateOptions?: TaskTerminateOptions;
}
/**
 * @interface
 * An interface representing TaskReactivateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskReactivateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskReactivateOptions} [taskReactivateOptions] Additional
     * parameters for the operation
     */
    taskReactivateOptions?: TaskReactivateOptions;
}
/**
 * @interface
 * An interface representing TaskListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TaskListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {TaskListNextOptions} [taskListNextOptions] Additional parameters
     * for the operation
     */
    taskListNextOptions?: TaskListNextOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeAddUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeAddUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeAddUserOptions} [computeNodeAddUserOptions] Additional
     * parameters for the operation
     */
    computeNodeAddUserOptions?: ComputeNodeAddUserOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeDeleteUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeDeleteUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeDeleteUserOptions} [computeNodeDeleteUserOptions]
     * Additional parameters for the operation
     */
    computeNodeDeleteUserOptions?: ComputeNodeDeleteUserOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeUpdateUserOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeUpdateUserOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeUpdateUserOptions} [computeNodeUpdateUserOptions]
     * Additional parameters for the operation
     */
    computeNodeUpdateUserOptions?: ComputeNodeUpdateUserOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeGetOptions} [computeNodeGetOptions] Additional
     * parameters for the operation
     */
    computeNodeGetOptions?: ComputeNodeGetOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeRebootOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeRebootOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {NodeRebootParameter} [nodeRebootParameter] The parameters for the
     * request.
     */
    nodeRebootParameter?: NodeRebootParameter;
    /**
     * @member {ComputeNodeRebootOptions} [computeNodeRebootOptions] Additional
     * parameters for the operation
     */
    computeNodeRebootOptions?: ComputeNodeRebootOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeReimageOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeReimageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {NodeReimageParameter} [nodeReimageParameter] The parameters for
     * the request.
     */
    nodeReimageParameter?: NodeReimageParameter;
    /**
     * @member {ComputeNodeReimageOptions} [computeNodeReimageOptions] Additional
     * parameters for the operation
     */
    computeNodeReimageOptions?: ComputeNodeReimageOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeDisableSchedulingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeDisableSchedulingOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {NodeDisableSchedulingParameter} [nodeDisableSchedulingParameter]
     * The parameters for the request.
     */
    nodeDisableSchedulingParameter?: NodeDisableSchedulingParameter;
    /**
     * @member {ComputeNodeDisableSchedulingOptions}
     * [computeNodeDisableSchedulingOptions] Additional parameters for the
     * operation
     */
    computeNodeDisableSchedulingOptions?: ComputeNodeDisableSchedulingOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeEnableSchedulingOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeEnableSchedulingOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeEnableSchedulingOptions}
     * [computeNodeEnableSchedulingOptions] Additional parameters for the
     * operation
     */
    computeNodeEnableSchedulingOptions?: ComputeNodeEnableSchedulingOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteLoginSettingsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeGetRemoteLoginSettingsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeGetRemoteLoginSettingsOptions}
     * [computeNodeGetRemoteLoginSettingsOptions] Additional parameters for the
     * operation
     */
    computeNodeGetRemoteLoginSettingsOptions?: ComputeNodeGetRemoteLoginSettingsOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteDesktopOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeGetRemoteDesktopOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeGetRemoteDesktopOptions}
     * [computeNodeGetRemoteDesktopOptions] Additional parameters for the
     * operation
     */
    computeNodeGetRemoteDesktopOptions?: ComputeNodeGetRemoteDesktopOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeUploadBatchServiceLogsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeUploadBatchServiceLogsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeUploadBatchServiceLogsOptions}
     * [computeNodeUploadBatchServiceLogsOptions] Additional parameters for the
     * operation
     */
    computeNodeUploadBatchServiceLogsOptions?: ComputeNodeUploadBatchServiceLogsOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeListOptions} [computeNodeListOptions] Additional
     * parameters for the operation
     */
    computeNodeListOptions?: ComputeNodeListOptions;
}
/**
 * @interface
 * An interface representing ComputeNodeListNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ComputeNodeListNextOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {ComputeNodeListNextOptions} [computeNodeListNextOptions]
     * Additional parameters for the operation
     */
    computeNodeListNextOptions?: ComputeNodeListNextOptions;
}
/**
 * @interface
 * An interface representing ApplicationListHeaders.
 * Defines headers for List operation.
 *
 */
export interface ApplicationListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing ApplicationGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface ApplicationGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing PoolListUsageMetricsHeaders.
 * Defines headers for ListUsageMetrics operation.
 *
 */
export interface PoolListUsageMetricsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing AccountListNodeAgentSkusHeaders.
 * Defines headers for ListNodeAgentSkus operation.
 *
 */
export interface AccountListNodeAgentSkusHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing AccountListPoolNodeCountsHeaders.
 * Defines headers for ListPoolNodeCounts operation.
 *
 */
export interface AccountListPoolNodeCountsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing PoolGetAllLifetimeStatisticsHeaders.
 * Defines headers for GetAllLifetimeStatistics operation.
 *
 */
export interface PoolGetAllLifetimeStatisticsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobGetAllLifetimeStatisticsHeaders.
 * Defines headers for GetAllLifetimeStatistics operation.
 *
 */
export interface JobGetAllLifetimeStatisticsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing CertificateAddHeaders.
 * Defines headers for Add operation.
 *
 */
export interface CertificateAddHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing CertificateListHeaders.
 * Defines headers for List operation.
 *
 */
export interface CertificateListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing CertificateCancelDeletionHeaders.
 * Defines headers for CancelDeletion operation.
 *
 */
export interface CertificateCancelDeletionHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing CertificateDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface CertificateDeleteHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing CertificateGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface CertificateGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing FileDeleteFromTaskHeaders.
 * Defines headers for DeleteFromTask operation.
 *
 */
export interface FileDeleteFromTaskHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing FileGetFromTaskHeaders.
 * Defines headers for GetFromTask operation.
 *
 */
export interface FileGetFromTaskHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {Date} [ocpCreationTime] The file creation time.
     */
    ocpCreationTime?: Date;
    /**
     * @member {boolean} [ocpBatchFileIsdirectory] Whether the object represents
     * a directory.
     */
    ocpBatchFileIsdirectory?: boolean;
    /**
     * @member {string} [ocpBatchFileUrl] The URL of the file.
     */
    ocpBatchFileUrl?: string;
    /**
     * @member {string} [ocpBatchFileMode] The file mode attribute in octal
     * format.
     */
    ocpBatchFileMode?: string;
    /**
     * @member {string} [contentType] The content type of the file.
     */
    contentType?: string;
    /**
     * @member {number} [contentLength] The length of the file.
     */
    contentLength?: number;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromTaskHeaders.
 * Defines headers for GetPropertiesFromTask operation.
 *
 */
export interface FileGetPropertiesFromTaskHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {Date} [ocpCreationTime] The file creation time.
     */
    ocpCreationTime?: Date;
    /**
     * @member {boolean} [ocpBatchFileIsdirectory] Whether the object represents
     * a directory.
     */
    ocpBatchFileIsdirectory?: boolean;
    /**
     * @member {string} [ocpBatchFileUrl] The URL of the file.
     */
    ocpBatchFileUrl?: string;
    /**
     * @member {string} [ocpBatchFileMode] The file mode attribute in octal
     * format.
     */
    ocpBatchFileMode?: string;
    /**
     * @member {string} [contentType] The content type of the file.
     */
    contentType?: string;
    /**
     * @member {number} [contentLength] The length of the file.
     */
    contentLength?: number;
}
/**
 * @interface
 * An interface representing FileDeleteFromComputeNodeHeaders.
 * Defines headers for DeleteFromComputeNode operation.
 *
 */
export interface FileDeleteFromComputeNodeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing FileGetFromComputeNodeHeaders.
 * Defines headers for GetFromComputeNode operation.
 *
 */
export interface FileGetFromComputeNodeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {Date} [ocpCreationTime] The file creation time.
     */
    ocpCreationTime?: Date;
    /**
     * @member {boolean} [ocpBatchFileIsdirectory] Whether the object represents
     * a directory.
     */
    ocpBatchFileIsdirectory?: boolean;
    /**
     * @member {string} [ocpBatchFileUrl] The URL of the file.
     */
    ocpBatchFileUrl?: string;
    /**
     * @member {string} [ocpBatchFileMode] The file mode attribute in octal
     * format.
     */
    ocpBatchFileMode?: string;
    /**
     * @member {string} [contentType] The content type of the file.
     */
    contentType?: string;
    /**
     * @member {number} [contentLength] The length of the file.
     */
    contentLength?: number;
}
/**
 * @interface
 * An interface representing FileGetPropertiesFromComputeNodeHeaders.
 * Defines headers for GetPropertiesFromComputeNode operation.
 *
 */
export interface FileGetPropertiesFromComputeNodeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {Date} [ocpCreationTime] The file creation time.
     */
    ocpCreationTime?: Date;
    /**
     * @member {boolean} [ocpBatchFileIsdirectory] Whether the object represents
     * a directory.
     */
    ocpBatchFileIsdirectory?: boolean;
    /**
     * @member {string} [ocpBatchFileUrl] The URL of the file.
     */
    ocpBatchFileUrl?: string;
    /**
     * @member {string} [ocpBatchFileMode] The file mode attribute in octal
     * format.
     */
    ocpBatchFileMode?: string;
    /**
     * @member {string} [contentType] The content type of the file.
     */
    contentType?: string;
    /**
     * @member {number} [contentLength] The length of the file.
     */
    contentLength?: number;
}
/**
 * @interface
 * An interface representing FileListFromTaskHeaders.
 * Defines headers for ListFromTask operation.
 *
 */
export interface FileListFromTaskHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing FileListFromComputeNodeHeaders.
 * Defines headers for ListFromComputeNode operation.
 *
 */
export interface FileListFromComputeNodeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleExistsHeaders.
 * Defines headers for Exists operation.
 *
 */
export interface JobScheduleExistsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobScheduleDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface JobScheduleDeleteHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface JobScheduleGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobSchedulePatchHeaders.
 * Defines headers for Patch operation.
 *
 */
export interface JobSchedulePatchHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleUpdateHeaders.
 * Defines headers for Update operation.
 *
 */
export interface JobScheduleUpdateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleDisableHeaders.
 * Defines headers for Disable operation.
 *
 */
export interface JobScheduleDisableHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleEnableHeaders.
 * Defines headers for Enable operation.
 *
 */
export interface JobScheduleEnableHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleTerminateHeaders.
 * Defines headers for Terminate operation.
 *
 */
export interface JobScheduleTerminateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleAddHeaders.
 * Defines headers for Add operation.
 *
 */
export interface JobScheduleAddHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobScheduleListHeaders.
 * Defines headers for List operation.
 *
 */
export interface JobScheduleListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface JobDeleteHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing JobGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface JobGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobPatchHeaders.
 * Defines headers for Patch operation.
 *
 */
export interface JobPatchHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobUpdateHeaders.
 * Defines headers for Update operation.
 *
 */
export interface JobUpdateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobDisableHeaders.
 * Defines headers for Disable operation.
 *
 */
export interface JobDisableHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobEnableHeaders.
 * Defines headers for Enable operation.
 *
 */
export interface JobEnableHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobTerminateHeaders.
 * Defines headers for Terminate operation.
 *
 */
export interface JobTerminateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobAddHeaders.
 * Defines headers for Add operation.
 *
 */
export interface JobAddHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing JobListHeaders.
 * Defines headers for List operation.
 *
 */
export interface JobListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobListFromJobScheduleHeaders.
 * Defines headers for ListFromJobSchedule operation.
 *
 */
export interface JobListFromJobScheduleHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobListPreparationAndReleaseTaskStatusHeaders.
 * Defines headers for ListPreparationAndReleaseTaskStatus operation.
 *
 */
export interface JobListPreparationAndReleaseTaskStatusHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing JobGetTaskCountsHeaders.
 * Defines headers for GetTaskCounts operation.
 *
 */
export interface JobGetTaskCountsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing PoolAddHeaders.
 * Defines headers for Add operation.
 *
 */
export interface PoolAddHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolListHeaders.
 * Defines headers for List operation.
 *
 */
export interface PoolListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing PoolDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface PoolDeleteHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing PoolExistsHeaders.
 * Defines headers for Exists operation.
 *
 */
export interface PoolExistsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing PoolGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface PoolGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing PoolPatchHeaders.
 * Defines headers for Patch operation.
 *
 */
export interface PoolPatchHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolDisableAutoScaleHeaders.
 * Defines headers for DisableAutoScale operation.
 *
 */
export interface PoolDisableAutoScaleHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolEnableAutoScaleHeaders.
 * Defines headers for EnableAutoScale operation.
 *
 */
export interface PoolEnableAutoScaleHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolEvaluateAutoScaleHeaders.
 * Defines headers for EvaluateAutoScale operation.
 *
 */
export interface PoolEvaluateAutoScaleHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolResizeHeaders.
 * Defines headers for Resize operation.
 *
 */
export interface PoolResizeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolStopResizeHeaders.
 * Defines headers for StopResize operation.
 *
 */
export interface PoolStopResizeHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolUpdatePropertiesHeaders.
 * Defines headers for UpdateProperties operation.
 *
 */
export interface PoolUpdatePropertiesHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolUpgradeOSHeaders.
 * Defines headers for UpgradeOS operation.
 *
 */
export interface PoolUpgradeOSHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing PoolRemoveNodesHeaders.
 * Defines headers for RemoveNodes operation.
 *
 */
export interface PoolRemoveNodesHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing TaskAddHeaders.
 * Defines headers for Add operation.
 *
 */
export interface TaskAddHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing TaskListHeaders.
 * Defines headers for List operation.
 *
 */
export interface TaskListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing TaskAddCollectionHeaders.
 * Defines headers for AddCollection operation.
 *
 */
export interface TaskAddCollectionHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing TaskDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface TaskDeleteHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing TaskGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface TaskGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing TaskUpdateHeaders.
 * Defines headers for Update operation.
 *
 */
export interface TaskUpdateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing TaskListSubtasksHeaders.
 * Defines headers for ListSubtasks operation.
 *
 */
export interface TaskListSubtasksHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing TaskTerminateHeaders.
 * Defines headers for Terminate operation.
 *
 */
export interface TaskTerminateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing TaskReactivateHeaders.
 * Defines headers for Reactivate operation.
 *
 */
export interface TaskReactivateHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeAddUserHeaders.
 * Defines headers for AddUser operation.
 *
 */
export interface ComputeNodeAddUserHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeDeleteUserHeaders.
 * Defines headers for DeleteUser operation.
 *
 */
export interface ComputeNodeDeleteUserHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeUpdateUserHeaders.
 * Defines headers for UpdateUser operation.
 *
 */
export interface ComputeNodeUpdateUserHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeGetHeaders.
 * Defines headers for Get operation.
 *
 */
export interface ComputeNodeGetHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeRebootHeaders.
 * Defines headers for Reboot operation.
 *
 */
export interface ComputeNodeRebootHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeReimageHeaders.
 * Defines headers for Reimage operation.
 *
 */
export interface ComputeNodeReimageHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeDisableSchedulingHeaders.
 * Defines headers for DisableScheduling operation.
 *
 */
export interface ComputeNodeDisableSchedulingHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeEnableSchedulingHeaders.
 * Defines headers for EnableScheduling operation.
 *
 */
export interface ComputeNodeEnableSchedulingHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
    /**
     * @member {string} [dataServiceId] The OData ID of the resource to which the
     * request applied.
     */
    dataServiceId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteLoginSettingsHeaders.
 * Defines headers for GetRemoteLoginSettings operation.
 *
 */
export interface ComputeNodeGetRemoteLoginSettingsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeGetRemoteDesktopHeaders.
 * Defines headers for GetRemoteDesktop operation.
 *
 */
export interface ComputeNodeGetRemoteDesktopHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing ComputeNodeUploadBatchServiceLogsHeaders.
 * Defines headers for UploadBatchServiceLogs operation.
 *
 */
export interface ComputeNodeUploadBatchServiceLogsHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing ComputeNodeListHeaders.
 * Defines headers for List operation.
 *
 */
export interface ComputeNodeListHeaders {
    /**
     * @member {string} [clientRequestId] The client-request-id provided by the
     * client during the request. This will be returned only if the
     * return-client-request-id parameter was set to true.
     */
    clientRequestId?: string;
    /**
     * @member {string} [requestId] A unique identifier for the request that was
     * made to the Batch service. If a request is consistently failing and you
     * have verified that the request is properly formulated, you may use this
     * value to report the error to Microsoft. In your report, include the value
     * of this request ID, the approximate time that the request was made, the
     * Batch account against which the request was made, and the region that
     * account resides in.
     */
    requestId?: string;
    /**
     * @member {string} [eTag] The ETag HTTP response header. This is an opaque
     * string. You can use it to detect whether the resource has changed between
     * requests. In particular, you can pass the ETag to one of the
     * If-Modified-Since, If-Unmodified-Since, If-Match or If-None-Match headers.
     */
    eTag?: string;
    /**
     * @member {Date} [lastModified] The time at which the resource was last
     * modified.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing the ApplicationListResult.
 * @summary The result of listing the applications available in an account.
 *
 * @extends Array<ApplicationSummary>
 */
export interface ApplicationListResult extends Array<ApplicationSummary> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the PoolListUsageMetricsResult.
 * @summary The result of a listing the usage metrics for an account.
 *
 * @extends Array<PoolUsageMetrics>
 */
export interface PoolListUsageMetricsResult extends Array<PoolUsageMetrics> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CloudPoolListResult.
 * @summary The result of listing the pools in an account.
 *
 * @extends Array<CloudPool>
 */
export interface CloudPoolListResult extends Array<CloudPool> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the AccountListNodeAgentSkusResult.
 * @summary The result of listing the supported node agent SKUs.
 *
 * @extends Array<NodeAgentSku>
 */
export interface AccountListNodeAgentSkusResult extends Array<NodeAgentSku> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the PoolNodeCountsListResult.
 * @summary The result of listing the node counts in the account.
 *
 * @extends Array<PoolNodeCounts>
 */
export interface PoolNodeCountsListResult extends Array<PoolNodeCounts> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CloudJobListResult.
 * @summary The result of listing the jobs in an account.
 *
 * @extends Array<CloudJob>
 */
export interface CloudJobListResult extends Array<CloudJob> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CloudJobListPreparationAndReleaseTaskStatusResult.
 * @summary The result of listing the status of the Job Preparation and Job
 * Release tasks for a job.
 *
 * @extends Array<JobPreparationAndReleaseTaskExecutionInformation>
 */
export interface CloudJobListPreparationAndReleaseTaskStatusResult extends Array<JobPreparationAndReleaseTaskExecutionInformation> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CertificateListResult.
 * @summary The result of listing the certificates in the account.
 *
 * @extends Array<Certificate>
 */
export interface CertificateListResult extends Array<Certificate> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the NodeFileListResult.
 * @summary The result of listing the files on a compute node, or the files
 * associated with a task on a node.
 *
 * @extends Array<NodeFile>
 */
export interface NodeFileListResult extends Array<NodeFile> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CloudJobScheduleListResult.
 * @summary The result of listing the job schedules in an account.
 *
 * @extends Array<CloudJobSchedule>
 */
export interface CloudJobScheduleListResult extends Array<CloudJobSchedule> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the CloudTaskListResult.
 * @summary The result of listing the tasks in a job.
 *
 * @extends Array<CloudTask>
 */
export interface CloudTaskListResult extends Array<CloudTask> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * @interface
 * An interface representing the ComputeNodeListResult.
 * @summary The result of listing the compute nodes in a pool.
 *
 * @extends Array<ComputeNode>
 */
export interface ComputeNodeListResult extends Array<ComputeNode> {
    /**
     * @member {string} [odatanextLink]
     */
    odatanextLink?: string;
}
/**
 * Defines values for OSType.
 * Possible values include: 'linux', 'windows'
 * @readonly
 * @enum {string}
 */
export declare enum OSType {
    /**
     * The Linux operating system.
     */
    Linux = "linux",
    /**
     * The Windows operating system.
     */
    Windows = "windows",
}
/**
 * Defines values for AccessScope.
 * Possible values include: 'job'
 * @readonly
 * @enum {string}
 */
export declare enum AccessScope {
    /**
     * Grants access to perform all operations on the job containing the task.
     */
    Job = "job",
}
/**
 * Defines values for CertificateState.
 * Possible values include: 'active', 'deleting', 'deleteFailed'
 * @readonly
 * @enum {string}
 */
export declare enum CertificateState {
    /**
     * The certificate is available for use in pools.
     */
    Active = "active",
    /**
     * The user has requested that the certificate be deleted, but the delete
     * operation has not yet completed. You may not reference the certificate
     * when creating or updating pools.
     */
    Deleting = "deleting",
    /**
     * The user requested that the certificate be deleted, but there are pools
     * that still have references to the certificate, or it is still installed on
     * one or more compute nodes. (The latter can occur if the certificate has
     * been removed from the pool, but the node has not yet restarted. Nodes
     * refresh their certificates only when they restart.) You may use the cancel
     * certificate delete operation to cancel the delete, or the delete
     * certificate operation to retry the delete.
     */
    DeleteFailed = "deletefailed",
}
/**
 * Defines values for CertificateFormat.
 * Possible values include: 'pfx', 'cer'
 * @readonly
 * @enum {string}
 */
export declare enum CertificateFormat {
    /**
     * The certificate is a PFX (PKCS#12) formatted certificate or certificate
     * chain.
     */
    Pfx = "pfx",
    /**
     * The certificate is a base64-encoded X.509 certificate.
     */
    Cer = "cer",
}
/**
 * Defines values for JobAction.
 * Possible values include: 'none', 'disable', 'terminate'
 * @readonly
 * @enum {string}
 */
export declare enum JobAction {
    /**
     * Take no action.
     */
    None = "none",
    /**
     * Disable the job. This is equivalent to calling the disable job API, with a
     * disableTasks value of requeue.
     */
    Disable = "disable",
    /**
     * Terminate the job. The terminateReason in the job's executionInfo is set
     * to "TaskFailed".
     */
    Terminate = "terminate",
}
/**
 * Defines values for DependencyAction.
 * Possible values include: 'satisfy', 'block'
 * @readonly
 * @enum {string}
 */
export declare enum DependencyAction {
    /**
     * Satisfy the task's dependencies.
     */
    Satisfy = "satisfy",
    /**
     * Block the task's dependencies.
     */
    Block = "block",
}
/**
 * Defines values for AutoUserScope.
 * Possible values include: 'task', 'pool'
 * @readonly
 * @enum {string}
 */
export declare enum AutoUserScope {
    /**
     * Specifies that the service should create a new user for the task.
     */
    Task = "task",
    /**
     * Specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     */
    Pool = "pool",
}
/**
 * Defines values for ElevationLevel.
 * Possible values include: 'nonAdmin', 'admin'
 * @readonly
 * @enum {string}
 */
export declare enum ElevationLevel {
    /**
     * The user is a standard user without elevated access.
     */
    NonAdmin = "nonadmin",
    /**
     * The user is a user with elevated access and operates with full
     * Administrator permissions.
     */
    Admin = "admin",
}
/**
 * Defines values for OutputFileUploadCondition.
 * Possible values include: 'taskSuccess', 'taskFailure', 'taskCompletion'
 * @readonly
 * @enum {string}
 */
export declare enum OutputFileUploadCondition {
    /**
     * Upload the file(s) only after the task process exits with an exit code of
     * 0.
     */
    TaskSuccess = "tasksuccess",
    /**
     * Upload the file(s) only after the task process exits with a nonzero exit
     * code.
     */
    TaskFailure = "taskfailure",
    /**
     * Upload the file(s) after the task process exits, no matter what the exit
     * code was.
     */
    TaskCompletion = "taskcompletion",
}
/**
 * Defines values for ComputeNodeFillType.
 * Possible values include: 'spread', 'pack'
 * @readonly
 * @enum {string}
 */
export declare enum ComputeNodeFillType {
    /**
     * Tasks should be assigned evenly across all nodes in the pool.
     */
    Spread = "spread",
    /**
     * As many tasks as possible (maxTasksPerNode) should be assigned to each
     * node in the pool before any tasks are assigned to the next node in the
     * pool.
     */
    Pack = "pack",
}
/**
 * Defines values for CertificateStoreLocation.
 * Possible values include: 'currentUser', 'localMachine'
 * @readonly
 * @enum {string}
 */
export declare enum CertificateStoreLocation {
    /**
     * Certificates should be installed to the CurrentUser certificate store.
     */
    CurrentUser = "currentuser",
    /**
     * Certificates should be installed to the LocalMachine certificate store.
     */
    LocalMachine = "localmachine",
}
/**
 * Defines values for CertificateVisibility.
 * Possible values include: 'startTask', 'task', 'remoteUser'
 * @readonly
 * @enum {string}
 */
export declare enum CertificateVisibility {
    /**
     * The certificate should be visible to the user account under which the
     * start task is run.
     */
    StartTask = "starttask",
    /**
     * The certificate should be visibile to the user accounts under which job
     * tasks are run.
     */
    Task = "task",
    /**
     * The certificate should be visibile to the user accounts under which users
     * remotely access the node.
     */
    RemoteUser = "remoteuser",
}
/**
 * Defines values for CachingType.
 * Possible values include: 'none', 'readOnly', 'readWrite'
 * @readonly
 * @enum {string}
 */
export declare enum CachingType {
    /**
     * The caching mode for the disk is not enabled.
     */
    None = "none",
    /**
     * The caching mode for the disk is read only.
     */
    ReadOnly = "readonly",
    /**
     * The caching mode for the disk is read and write.
     */
    ReadWrite = "readwrite",
}
/**
 * Defines values for StorageAccountType.
 * Possible values include: 'StandardLRS', 'PremiumLRS'
 * @readonly
 * @enum {string}
 */
export declare enum StorageAccountType {
    /**
     * The data disk should use standard locally redundant storage.
     */
    StandardLRS = "standard_lrs",
    /**
     * The data disk should use premium locally redundant storage.
     */
    PremiumLRS = "premium_lrs",
}
/**
 * Defines values for InboundEndpointProtocol.
 * Possible values include: 'tcp', 'udp'
 * @readonly
 * @enum {string}
 */
export declare enum InboundEndpointProtocol {
    /**
     * Use TCP for the endpoint.
     */
    Tcp = "tcp",
    /**
     * Use UDP for the endpoint.
     */
    Udp = "udp",
}
/**
 * Defines values for NetworkSecurityGroupRuleAccess.
 * Possible values include: 'allow', 'deny'
 * @readonly
 * @enum {string}
 */
export declare enum NetworkSecurityGroupRuleAccess {
    /**
     * Allow access.
     */
    Allow = "allow",
    /**
     * Deny access.
     */
    Deny = "deny",
}
/**
 * Defines values for PoolLifetimeOption.
 * Possible values include: 'jobSchedule', 'job'
 * @readonly
 * @enum {string}
 */
export declare enum PoolLifetimeOption {
    /**
     * The pool exists for the lifetime of the job schedule. The Batch Service
     * creates the pool when it creates the first job on the schedule. You may
     * apply this option only to job schedules, not to jobs.
     */
    JobSchedule = "jobschedule",
    /**
     * The pool exists for the lifetime of the job to which it is dedicated. The
     * Batch service creates the pool when it creates the job. If the 'job'
     * option is applied to a job schedule, the Batch service creates a new auto
     * pool for every job created on the schedule.
     */
    Job = "job",
}
/**
 * Defines values for OnAllTasksComplete.
 * Possible values include: 'noAction', 'terminateJob'
 * @readonly
 * @enum {string}
 */
export declare enum OnAllTasksComplete {
    /**
     * Do nothing. The job remains active unless terminated or disabled by some
     * other means.
     */
    NoAction = "noaction",
    /**
     * Terminate the job. The job's terminateReason is set to 'AllTasksComplete'.
     */
    TerminateJob = "terminatejob",
}
/**
 * Defines values for OnTaskFailure.
 * Possible values include: 'noAction', 'performExitOptionsJobAction'
 * @readonly
 * @enum {string}
 */
export declare enum OnTaskFailure {
    /**
     * Do nothing. The job remains active unless terminated or disabled by some
     * other means.
     */
    NoAction = "noaction",
    /**
     * Take the action associated with the task exit condition in the task's
     * exitConditions collection. (This may still result in no action being
     * taken, if that is what the task specifies.)
     */
    PerformExitOptionsJobAction = "performexitoptionsjobaction",
}
/**
 * Defines values for JobScheduleState.
 * Possible values include: 'active', 'completed', 'disabled', 'terminating',
 * 'deleting'
 * @readonly
 * @enum {string}
 */
export declare enum JobScheduleState {
    /**
     * The job schedule is active and will create jobs as per its schedule.
     */
    Active = "active",
    /**
     * The schedule has terminated, either by reaching its end time or by the
     * user terminating it explicitly.
     */
    Completed = "completed",
    /**
     * The user has disabled the schedule. The scheduler will not initiate any
     * new jobs will on this schedule, but any existing active job will continue
     * to run.
     */
    Disabled = "disabled",
    /**
     * The schedule has no more work to do, or has been explicitly terminated by
     * the user, but the termination operation is still in progress. The
     * scheduler will not initiate any new jobs for this schedule, nor is any
     * existing job active.
     */
    Terminating = "terminating",
    /**
     * The user has requested that the schedule be deleted, but the delete
     * operation is still in progress. The scheduler will not initiate any new
     * jobs for this schedule, and will delete any existing jobs and tasks under
     * the schedule, including any active job. The schedule will be deleted when
     * all jobs and tasks under the schedule have been deleted.
     */
    Deleting = "deleting",
}
/**
 * Defines values for ErrorCategory.
 * Possible values include: 'userError', 'serverError'
 * @readonly
 * @enum {string}
 */
export declare enum ErrorCategory {
    /**
     * The error is due to a user issue, such as misconfiguration.
     */
    UserError = "usererror",
    /**
     * The error is due to an internal server issue.
     */
    ServerError = "servererror",
}
/**
 * Defines values for JobState.
 * Possible values include: 'active', 'disabling', 'disabled', 'enabling',
 * 'terminating', 'completed', 'deleting'
 * @readonly
 * @enum {string}
 */
export declare enum JobState {
    /**
     * The job is available to have tasks scheduled.
     */
    Active = "active",
    /**
     * A user has requested that the job be disabled, but the disable operation
     * is still in progress (for example, waiting for tasks to terminate).
     */
    Disabling = "disabling",
    /**
     * A user has disabled the job. No tasks are running, and no new tasks will
     * be scheduled.
     */
    Disabled = "disabled",
    /**
     * A user has requested that the job be enabled, but the enable operation is
     * still in progress.
     */
    Enabling = "enabling",
    /**
     * The job is about to complete, either because a Job Manager task has
     * completed or because the user has terminated the job, but the terminate
     * operation is still in progress (for example, because Job Release tasks are
     * running).
     */
    Terminating = "terminating",
    /**
     * All tasks have terminated, and the system will not accept any more tasks
     * or any further changes to the job.
     */
    Completed = "completed",
    /**
     * A user has requested that the job be deleted, but the delete operation is
     * still in progress (for example, because the system is still terminating
     * running tasks).
     */
    Deleting = "deleting",
}
/**
 * Defines values for JobPreparationTaskState.
 * Possible values include: 'running', 'completed'
 * @readonly
 * @enum {string}
 */
export declare enum JobPreparationTaskState {
    /**
     * The task is currently running (including retrying).
     */
    Running = "running",
    /**
     * The task has exited with exit code 0, or the task has exhausted its retry
     * limit, or the Batch service was unable to start the task due to task
     * preparation errors (such as resource file download failures).
     */
    Completed = "completed",
}
/**
 * Defines values for TaskExecutionResult.
 * Possible values include: 'success', 'failure'
 * @readonly
 * @enum {string}
 */
export declare enum TaskExecutionResult {
    /**
     * The task ran successfully.
     */
    Success = "success",
    /**
     * There was an error during processing of the task. The failure may have
     * occurred before the task process was launched, while the task process was
     * executing, or after the task process exited.
     */
    Failure = "failure",
}
/**
 * Defines values for JobReleaseTaskState.
 * Possible values include: 'running', 'completed'
 * @readonly
 * @enum {string}
 */
export declare enum JobReleaseTaskState {
    /**
     * The task is currently running (including retrying).
     */
    Running = "running",
    /**
     * The task has exited with exit code 0, or the task has exhausted its retry
     * limit, or the Batch service was unable to start the task due to task
     * preparation errors (such as resource file download failures).
     */
    Completed = "completed",
}
/**
 * Defines values for TaskCountValidationStatus.
 * Possible values include: 'validated', 'unvalidated'
 * @readonly
 * @enum {string}
 */
export declare enum TaskCountValidationStatus {
    /**
     * The Batch service has validated the state counts against the task states
     * as reported in the List Tasks API.
     */
    Validated = "validated",
    /**
     * The Batch service has not been able to check state counts against the task
     * states as reported in the List Tasks API. The validationStatus may be
     * unvalidated if the job contains more than 200,000 tasks.
     */
    Unvalidated = "unvalidated",
}
/**
 * Defines values for PoolState.
 * Possible values include: 'active', 'deleting', 'upgrading'
 * @readonly
 * @enum {string}
 */
export declare enum PoolState {
    /**
     * The pool is available to run tasks subject to the availability of compute
     * nodes.
     */
    Active = "active",
    /**
     * The user has requested that the pool be deleted, but the delete operation
     * has not yet completed.
     */
    Deleting = "deleting",
    /**
     * The user has requested that the operating system of the pool's nodes be
     * upgraded, but the upgrade operation has not yet completed (that is, some
     * nodes in the pool have not yet been upgraded). While upgrading, the pool
     * may be able to run tasks (with reduced capacity) but this is not
     * guaranteed.
     */
    Upgrading = "upgrading",
}
/**
 * Defines values for AllocationState.
 * Possible values include: 'steady', 'resizing', 'stopping'
 * @readonly
 * @enum {string}
 */
export declare enum AllocationState {
    /**
     * The pool is not resizing. There are no changes to the number of nodes in
     * the pool in progress. A pool enters this state when it is created and when
     * no operations are being performed on the pool to change the number of
     * nodes.
     */
    Steady = "steady",
    /**
     * The pool is resizing; that is, compute nodes are being added to or removed
     * from the pool.
     */
    Resizing = "resizing",
    /**
     * The pool was resizing, but the user has requested that the resize be
     * stopped, but the stop request has not yet been completed.
     */
    Stopping = "stopping",
}
/**
 * Defines values for TaskState.
 * Possible values include: 'active', 'preparing', 'running', 'completed'
 * @readonly
 * @enum {string}
 */
export declare enum TaskState {
    /**
     * The task is queued and able to run, but is not currently assigned to a
     * compute node. A task enters this state when it is created, when it is
     * enabled after being disabled, or when it is awaiting a retry after a
     * failed run.
     */
    Active = "active",
    /**
     * The task has been assigned to a compute node, but is waiting for a
     * required Job Preparation task to complete on the node. If the Job
     * Preparation task succeeds, the task will move to running. If the Job
     * Preparation task fails, the task will return to active and will be
     * eligible to be assigned to a different node.
     */
    Preparing = "preparing",
    /**
     * The task is running on a compute node. This includes task-level
     * preparation such as downloading resource files or deploying application
     * packages specified on the task - it does not necessarily mean that the
     * task command line has started executing.
     */
    Running = "running",
    /**
     * The task is no longer eligible to run, usually because the task has
     * finished successfully, or the task has finished unsuccessfully and has
     * exhausted its retry limit. A task is also marked as completed if an error
     * occurred launching the task, or when the task has been terminated.
     */
    Completed = "completed",
}
/**
 * Defines values for TaskAddStatus.
 * Possible values include: 'success', 'clientError', 'serverError'
 * @readonly
 * @enum {string}
 */
export declare enum TaskAddStatus {
    /**
     * The task was added successfully.
     */
    Success = "success",
    /**
     * The task failed to add due to a client error and should not be retried
     * without modifying the request as appropriate.
     */
    ClientError = "clienterror",
    /**
     * Task failed to add due to a server error and can be retried without
     * modification.
     */
    ServerError = "servererror",
}
/**
 * Defines values for SubtaskState.
 * Possible values include: 'preparing', 'running', 'completed'
 * @readonly
 * @enum {string}
 */
export declare enum SubtaskState {
    /**
     * The task has been assigned to a compute node, but is waiting for a
     * required Job Preparation task to complete on the node. If the Job
     * Preparation task succeeds, the task will move to running. If the Job
     * Preparation task fails, the task will return to active and will be
     * eligible to be assigned to a different node.
     */
    Preparing = "preparing",
    /**
     * The task is running on a compute node. This includes task-level
     * preparation such as downloading resource files or deploying application
     * packages specified on the task - it does not necessarily mean that the
     * task command line has started executing.
     */
    Running = "running",
    /**
     * The task is no longer eligible to run, usually because the task has
     * finished successfully, or the task has finished unsuccessfully and has
     * exhausted its retry limit. A task is also marked as completed if an error
     * occurred launching the task, or when the task has been terminated.
     */
    Completed = "completed",
}
/**
 * Defines values for StartTaskState.
 * Possible values include: 'running', 'completed'
 * @readonly
 * @enum {string}
 */
export declare enum StartTaskState {
    /**
     * The start task is currently running.
     */
    Running = "running",
    /**
     * The start task has exited with exit code 0, or the start task has failed
     * and the retry limit has reached, or the start task process did not run due
     * to task preparation errors (such as resource file download failures).
     */
    Completed = "completed",
}
/**
 * Defines values for ComputeNodeState.
 * Possible values include: 'idle', 'rebooting', 'reimaging', 'running',
 * 'unusable', 'creating', 'starting', 'waitingForStartTask',
 * 'startTaskFailed', 'unknown', 'leavingPool', 'offline', 'preempted'
 * @readonly
 * @enum {string}
 */
export declare enum ComputeNodeState {
    /**
     * The node is not currently running a task.
     */
    Idle = "idle",
    /**
     * The node is rebooting.
     */
    Rebooting = "rebooting",
    /**
     * The node is reimaging.
     */
    Reimaging = "reimaging",
    /**
     * The node is running one or more tasks (other than a start task).
     */
    Running = "running",
    /**
     * The node cannot be used for task execution due to errors.
     */
    Unusable = "unusable",
    /**
     * The Batch service has obtained the underlying virtual machine from Azure
     * Compute, but it has not yet started to join the pool.
     */
    Creating = "creating",
    /**
     * The Batch service is starting on the underlying virtual machine.
     */
    Starting = "starting",
    /**
     * The start task has started running on the compute node, but waitForSuccess
     * is set and the start task has not yet completed.
     */
    WaitingForStartTask = "waitingforstarttask",
    /**
     * The start task has failed on the compute node (and exhausted all retries),
     * and waitForSuccess is set. The node is not usable for running tasks.
     */
    StartTaskFailed = "starttaskfailed",
    /**
     * The Batch service has lost contact with the node, and does not know its
     * true state.
     */
    Unknown = "unknown",
    /**
     * The node is leaving the pool, either because the user explicitly removed
     * it or because the pool is resizing or autoscaling down.
     */
    LeavingPool = "leavingpool",
    /**
     * The node is not currently running a task, and scheduling of new tasks to
     * the node is disabled.
     */
    Offline = "offline",
    /**
     * The low-priority node has been preempted. Tasks which were running on the
     * node when it was pre-empted will be rescheduled when another node becomes
     * available.
     */
    Preempted = "preempted",
}
/**
 * Defines values for SchedulingState.
 * Possible values include: 'enabled', 'disabled'
 * @readonly
 * @enum {string}
 */
export declare enum SchedulingState {
    /**
     * Tasks can be scheduled on the node.
     */
    Enabled = "enabled",
    /**
     * No new tasks will be scheduled on the node. Tasks already running on the
     * node may still run to completion. All nodes start with scheduling enabled.
     */
    Disabled = "disabled",
}
/**
 * Defines values for DisableJobOption.
 * Possible values include: 'requeue', 'terminate', 'wait'
 * @readonly
 * @enum {string}
 */
export declare enum DisableJobOption {
    /**
     * Terminate running tasks and requeue them. The tasks will run again when
     * the job is enabled.
     */
    Requeue = "requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo
     * indicating that they were terminated, and will not run again.
     */
    Terminate = "terminate",
    /**
     * Allow currently running tasks to complete.
     */
    Wait = "wait",
}
/**
 * Defines values for ComputeNodeDeallocationOption.
 * Possible values include: 'requeue', 'terminate', 'taskCompletion',
 * 'retainedData'
 * @readonly
 * @enum {string}
 */
export declare enum ComputeNodeDeallocationOption {
    /**
     * Terminate running task processes and requeue the tasks. The tasks will run
     * again when a node is available. Remove nodes as soon as tasks have been
     * terminated.
     */
    Requeue = "requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo
     * indicating that they were terminated, and will not run again. Remove nodes
     * as soon as tasks have been terminated.
     */
    Terminate = "terminate",
    /**
     * Allow currently running tasks to complete. Schedule no new tasks while
     * waiting. Remove nodes when all tasks have completed.
     */
    TaskCompletion = "taskcompletion",
    /**
     * Allow currently running tasks to complete, then wait for all task data
     * retention periods to expire. Schedule no new tasks while waiting. Remove
     * nodes when all task retention periods have expired.
     */
    RetainedData = "retaineddata",
}
/**
 * Defines values for ComputeNodeRebootOption.
 * Possible values include: 'requeue', 'terminate', 'taskCompletion',
 * 'retainedData'
 * @readonly
 * @enum {string}
 */
export declare enum ComputeNodeRebootOption {
    /**
     * Terminate running task processes and requeue the tasks. The tasks will run
     * again when a node is available. Restart the node as soon as tasks have
     * been terminated.
     */
    Requeue = "requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo
     * indicating that they were terminated, and will not run again. Restart the
     * node as soon as tasks have been terminated.
     */
    Terminate = "terminate",
    /**
     * Allow currently running tasks to complete. Schedule no new tasks while
     * waiting. Restart the node when all tasks have completed.
     */
    TaskCompletion = "taskcompletion",
    /**
     * Allow currently running tasks to complete, then wait for all task data
     * retention periods to expire. Schedule no new tasks while waiting. Restart
     * the node when all task retention periods have expired.
     */
    RetainedData = "retaineddata",
}
/**
 * Defines values for ComputeNodeReimageOption.
 * Possible values include: 'requeue', 'terminate', 'taskCompletion',
 * 'retainedData'
 * @readonly
 * @enum {string}
 */
export declare enum ComputeNodeReimageOption {
    /**
     * Terminate running task processes and requeue the tasks. The tasks will run
     * again when a node is available. Reimage the node as soon as tasks have
     * been terminated.
     */
    Requeue = "requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo
     * indicating that they were terminated, and will not run again. Reimage the
     * node as soon as tasks have been terminated.
     */
    Terminate = "terminate",
    /**
     * Allow currently running tasks to complete. Schedule no new tasks while
     * waiting. Reimage the node when all tasks have completed.
     */
    TaskCompletion = "taskcompletion",
    /**
     * Allow currently running tasks to complete, then wait for all task data
     * retention periods to expire. Schedule no new tasks while waiting. Reimage
     * the node when all task retention periods have expired.
     */
    RetainedData = "retaineddata",
}
/**
 * Defines values for DisableComputeNodeSchedulingOption.
 * Possible values include: 'requeue', 'terminate', 'taskCompletion'
 * @readonly
 * @enum {string}
 */
export declare enum DisableComputeNodeSchedulingOption {
    /**
     * Terminate running task processes and requeue the tasks. The tasks may run
     * again on other compute nodes, or when task scheduling is re-enabled on
     * this node. Enter offline state as soon as tasks have been terminated.
     */
    Requeue = "requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo
     * indicating that they were terminated, and will not run again. Enter
     * offline state as soon as tasks have been terminated.
     */
    Terminate = "terminate",
    /**
     * Allow currently running tasks to complete. Schedule no new tasks while
     * waiting. Enter offline state when all tasks have completed.
     */
    TaskCompletion = "taskcompletion",
}
/**
 * Contains response data for the list operation.
 */
export interface ApplicationListResponse extends msRest.HttpOperationResponse<ApplicationListResult, ApplicationListHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface ApplicationGetResponse extends msRest.HttpOperationResponse<ApplicationSummary, ApplicationGetHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface ApplicationListResponse extends msRest.HttpOperationResponse<ApplicationListResult, ApplicationListHeaders> {
}
/**
 * Contains response data for the listUsageMetrics operation.
 */
export interface PoolListUsageMetricsResponse extends msRest.HttpOperationResponse<PoolListUsageMetricsResult, PoolListUsageMetricsHeaders> {
}
/**
 * Contains response data for the getAllLifetimeStatistics operation.
 */
export interface PoolGetAllLifetimeStatisticsResponse extends msRest.HttpOperationResponse<PoolStatistics, PoolGetAllLifetimeStatisticsHeaders> {
}
/**
 * Contains response data for the add operation.
 */
export interface PoolAddResponse extends msRest.HttpOperationResponse<void, PoolAddHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface PoolListResponse extends msRest.HttpOperationResponse<CloudPoolListResult, PoolListHeaders> {
}
/**
 * Contains response data for the deleteMethod operation.
 */
export interface PoolDeleteResponse extends msRest.HttpOperationResponse<void, PoolDeleteHeaders> {
}
/**
 * Contains response data for the exists operation.
 */
export interface PoolExistsResponse extends msRest.HttpOperationResponse<boolean, PoolExistsHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface PoolGetResponse extends msRest.HttpOperationResponse<CloudPool, PoolGetHeaders> {
}
/**
 * Contains response data for the patch operation.
 */
export interface PoolPatchResponse extends msRest.HttpOperationResponse<void, PoolPatchHeaders> {
}
/**
 * Contains response data for the disableAutoScale operation.
 */
export interface PoolDisableAutoScaleResponse extends msRest.HttpOperationResponse<void, PoolDisableAutoScaleHeaders> {
}
/**
 * Contains response data for the enableAutoScale operation.
 */
export interface PoolEnableAutoScaleResponse extends msRest.HttpOperationResponse<void, PoolEnableAutoScaleHeaders> {
}
/**
 * Contains response data for the evaluateAutoScale operation.
 */
export interface PoolEvaluateAutoScaleResponse extends msRest.HttpOperationResponse<AutoScaleRun, PoolEvaluateAutoScaleHeaders> {
}
/**
 * Contains response data for the resize operation.
 */
export interface PoolResizeResponse extends msRest.HttpOperationResponse<void, PoolResizeHeaders> {
}
/**
 * Contains response data for the stopResize operation.
 */
export interface PoolStopResizeResponse extends msRest.HttpOperationResponse<void, PoolStopResizeHeaders> {
}
/**
 * Contains response data for the updateProperties operation.
 */
export interface PoolUpdatePropertiesResponse extends msRest.HttpOperationResponse<void, PoolUpdatePropertiesHeaders> {
}
/**
 * Contains response data for the upgradeOS operation.
 */
export interface PoolUpgradeOSResponse extends msRest.HttpOperationResponse<void, PoolUpgradeOSHeaders> {
}
/**
 * Contains response data for the removeNodes operation.
 */
export interface PoolRemoveNodesResponse extends msRest.HttpOperationResponse<void, PoolRemoveNodesHeaders> {
}
/**
 * Contains response data for the listUsageMetricsNext operation.
 */
export interface PoolListUsageMetricsResponse extends msRest.HttpOperationResponse<PoolListUsageMetricsResult, PoolListUsageMetricsHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface PoolListResponse extends msRest.HttpOperationResponse<CloudPoolListResult, PoolListHeaders> {
}
/**
 * Contains response data for the listNodeAgentSkus operation.
 */
export interface AccountListNodeAgentSkusResponse extends msRest.HttpOperationResponse<AccountListNodeAgentSkusResult, AccountListNodeAgentSkusHeaders> {
}
/**
 * Contains response data for the listPoolNodeCounts operation.
 */
export interface AccountListPoolNodeCountsResponse extends msRest.HttpOperationResponse<PoolNodeCountsListResult, AccountListPoolNodeCountsHeaders> {
}
/**
 * Contains response data for the listNodeAgentSkusNext operation.
 */
export interface AccountListNodeAgentSkusResponse extends msRest.HttpOperationResponse<AccountListNodeAgentSkusResult, AccountListNodeAgentSkusHeaders> {
}
/**
 * Contains response data for the listPoolNodeCountsNext operation.
 */
export interface AccountListPoolNodeCountsResponse extends msRest.HttpOperationResponse<PoolNodeCountsListResult, AccountListPoolNodeCountsHeaders> {
}
/**
 * Contains response data for the getAllLifetimeStatistics operation.
 */
export interface JobGetAllLifetimeStatisticsResponse extends msRest.HttpOperationResponse<JobStatistics, JobGetAllLifetimeStatisticsHeaders> {
}
/**
 * Contains response data for the deleteMethod operation.
 */
export interface JobDeleteResponse extends msRest.HttpOperationResponse<void, JobDeleteHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface JobGetResponse extends msRest.HttpOperationResponse<CloudJob, JobGetHeaders> {
}
/**
 * Contains response data for the patch operation.
 */
export interface JobPatchResponse extends msRest.HttpOperationResponse<void, JobPatchHeaders> {
}
/**
 * Contains response data for the update operation.
 */
export interface JobUpdateResponse extends msRest.HttpOperationResponse<void, JobUpdateHeaders> {
}
/**
 * Contains response data for the disable operation.
 */
export interface JobDisableResponse extends msRest.HttpOperationResponse<void, JobDisableHeaders> {
}
/**
 * Contains response data for the enable operation.
 */
export interface JobEnableResponse extends msRest.HttpOperationResponse<void, JobEnableHeaders> {
}
/**
 * Contains response data for the terminate operation.
 */
export interface JobTerminateResponse extends msRest.HttpOperationResponse<void, JobTerminateHeaders> {
}
/**
 * Contains response data for the add operation.
 */
export interface JobAddResponse extends msRest.HttpOperationResponse<void, JobAddHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface JobListResponse extends msRest.HttpOperationResponse<CloudJobListResult, JobListHeaders> {
}
/**
 * Contains response data for the listFromJobSchedule operation.
 */
export interface JobListFromJobScheduleResponse extends msRest.HttpOperationResponse<CloudJobListResult, JobListFromJobScheduleHeaders> {
}
/**
 * Contains response data for the listPreparationAndReleaseTaskStatus
 * operation.
 */
export interface JobListPreparationAndReleaseTaskStatusResponse extends msRest.HttpOperationResponse<CloudJobListPreparationAndReleaseTaskStatusResult, JobListPreparationAndReleaseTaskStatusHeaders> {
}
/**
 * Contains response data for the getTaskCounts operation.
 */
export interface JobGetTaskCountsResponse extends msRest.HttpOperationResponse<TaskCounts, JobGetTaskCountsHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface JobListResponse extends msRest.HttpOperationResponse<CloudJobListResult, JobListHeaders> {
}
/**
 * Contains response data for the listFromJobScheduleNext operation.
 */
export interface JobListFromJobScheduleResponse extends msRest.HttpOperationResponse<CloudJobListResult, JobListFromJobScheduleHeaders> {
}
/**
 * Contains response data for the listPreparationAndReleaseTaskStatusNext
 * operation.
 */
export interface JobListPreparationAndReleaseTaskStatusResponse extends msRest.HttpOperationResponse<CloudJobListPreparationAndReleaseTaskStatusResult, JobListPreparationAndReleaseTaskStatusHeaders> {
}
/**
 * Contains response data for the add operation.
 */
export interface CertificateAddResponse extends msRest.HttpOperationResponse<void, CertificateAddHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface CertificateListResponse extends msRest.HttpOperationResponse<CertificateListResult, CertificateListHeaders> {
}
/**
 * Contains response data for the cancelDeletion operation.
 */
export interface CertificateCancelDeletionResponse extends msRest.HttpOperationResponse<void, CertificateCancelDeletionHeaders> {
}
/**
 * Contains response data for the deleteMethod operation.
 */
export interface CertificateDeleteResponse extends msRest.HttpOperationResponse<void, CertificateDeleteHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface CertificateGetResponse extends msRest.HttpOperationResponse<Certificate, CertificateGetHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface CertificateListResponse extends msRest.HttpOperationResponse<CertificateListResult, CertificateListHeaders> {
}
/**
 * Contains response data for the deleteFromTask operation.
 */
export interface FileDeleteFromTaskResponse extends msRest.HttpOperationResponse<void, FileDeleteFromTaskHeaders> {
}
/**
 * Contains response data for the getFromTask operation.
 */
export interface FileGetFromTaskResponse extends msRest.HttpOperationResponse<msRest.HttpRequestBody, FileGetFromTaskHeaders> {
}
/**
 * Contains response data for the getPropertiesFromTask operation.
 */
export interface FileGetPropertiesFromTaskResponse extends msRest.HttpOperationResponse<void, FileGetPropertiesFromTaskHeaders> {
}
/**
 * Contains response data for the deleteFromComputeNode operation.
 */
export interface FileDeleteFromComputeNodeResponse extends msRest.HttpOperationResponse<void, FileDeleteFromComputeNodeHeaders> {
}
/**
 * Contains response data for the getFromComputeNode operation.
 */
export interface FileGetFromComputeNodeResponse extends msRest.HttpOperationResponse<msRest.HttpRequestBody, FileGetFromComputeNodeHeaders> {
}
/**
 * Contains response data for the getPropertiesFromComputeNode operation.
 */
export interface FileGetPropertiesFromComputeNodeResponse extends msRest.HttpOperationResponse<void, FileGetPropertiesFromComputeNodeHeaders> {
}
/**
 * Contains response data for the listFromTask operation.
 */
export interface FileListFromTaskResponse extends msRest.HttpOperationResponse<NodeFileListResult, FileListFromTaskHeaders> {
}
/**
 * Contains response data for the listFromComputeNode operation.
 */
export interface FileListFromComputeNodeResponse extends msRest.HttpOperationResponse<NodeFileListResult, FileListFromComputeNodeHeaders> {
}
/**
 * Contains response data for the listFromTaskNext operation.
 */
export interface FileListFromTaskResponse extends msRest.HttpOperationResponse<NodeFileListResult, FileListFromTaskHeaders> {
}
/**
 * Contains response data for the listFromComputeNodeNext operation.
 */
export interface FileListFromComputeNodeResponse extends msRest.HttpOperationResponse<NodeFileListResult, FileListFromComputeNodeHeaders> {
}
/**
 * Contains response data for the exists operation.
 */
export interface JobScheduleExistsResponse extends msRest.HttpOperationResponse<boolean, JobScheduleExistsHeaders> {
}
/**
 * Contains response data for the deleteMethod operation.
 */
export interface JobScheduleDeleteResponse extends msRest.HttpOperationResponse<void, JobScheduleDeleteHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface JobScheduleGetResponse extends msRest.HttpOperationResponse<CloudJobSchedule, JobScheduleGetHeaders> {
}
/**
 * Contains response data for the patch operation.
 */
export interface JobSchedulePatchResponse extends msRest.HttpOperationResponse<void, JobSchedulePatchHeaders> {
}
/**
 * Contains response data for the update operation.
 */
export interface JobScheduleUpdateResponse extends msRest.HttpOperationResponse<void, JobScheduleUpdateHeaders> {
}
/**
 * Contains response data for the disable operation.
 */
export interface JobScheduleDisableResponse extends msRest.HttpOperationResponse<void, JobScheduleDisableHeaders> {
}
/**
 * Contains response data for the enable operation.
 */
export interface JobScheduleEnableResponse extends msRest.HttpOperationResponse<void, JobScheduleEnableHeaders> {
}
/**
 * Contains response data for the terminate operation.
 */
export interface JobScheduleTerminateResponse extends msRest.HttpOperationResponse<void, JobScheduleTerminateHeaders> {
}
/**
 * Contains response data for the add operation.
 */
export interface JobScheduleAddResponse extends msRest.HttpOperationResponse<void, JobScheduleAddHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface JobScheduleListResponse extends msRest.HttpOperationResponse<CloudJobScheduleListResult, JobScheduleListHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface JobScheduleListResponse extends msRest.HttpOperationResponse<CloudJobScheduleListResult, JobScheduleListHeaders> {
}
/**
 * Contains response data for the add operation.
 */
export interface TaskAddResponse extends msRest.HttpOperationResponse<void, TaskAddHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface TaskListResponse extends msRest.HttpOperationResponse<CloudTaskListResult, TaskListHeaders> {
}
/**
 * Contains response data for the addCollection operation.
 */
export interface TaskAddCollectionResponse extends msRest.HttpOperationResponse<TaskAddCollectionResult, TaskAddCollectionHeaders> {
}
/**
 * Contains response data for the deleteMethod operation.
 */
export interface TaskDeleteResponse extends msRest.HttpOperationResponse<void, TaskDeleteHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface TaskGetResponse extends msRest.HttpOperationResponse<CloudTask, TaskGetHeaders> {
}
/**
 * Contains response data for the update operation.
 */
export interface TaskUpdateResponse extends msRest.HttpOperationResponse<void, TaskUpdateHeaders> {
}
/**
 * Contains response data for the listSubtasks operation.
 */
export interface TaskListSubtasksResponse extends msRest.HttpOperationResponse<CloudTaskListSubtasksResult, TaskListSubtasksHeaders> {
}
/**
 * Contains response data for the terminate operation.
 */
export interface TaskTerminateResponse extends msRest.HttpOperationResponse<void, TaskTerminateHeaders> {
}
/**
 * Contains response data for the reactivate operation.
 */
export interface TaskReactivateResponse extends msRest.HttpOperationResponse<void, TaskReactivateHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface TaskListResponse extends msRest.HttpOperationResponse<CloudTaskListResult, TaskListHeaders> {
}
/**
 * Contains response data for the addUser operation.
 */
export interface ComputeNodeAddUserResponse extends msRest.HttpOperationResponse<void, ComputeNodeAddUserHeaders> {
}
/**
 * Contains response data for the deleteUser operation.
 */
export interface ComputeNodeDeleteUserResponse extends msRest.HttpOperationResponse<void, ComputeNodeDeleteUserHeaders> {
}
/**
 * Contains response data for the updateUser operation.
 */
export interface ComputeNodeUpdateUserResponse extends msRest.HttpOperationResponse<void, ComputeNodeUpdateUserHeaders> {
}
/**
 * Contains response data for the get operation.
 */
export interface ComputeNodeGetResponse extends msRest.HttpOperationResponse<ComputeNode, ComputeNodeGetHeaders> {
}
/**
 * Contains response data for the reboot operation.
 */
export interface ComputeNodeRebootResponse extends msRest.HttpOperationResponse<void, ComputeNodeRebootHeaders> {
}
/**
 * Contains response data for the reimage operation.
 */
export interface ComputeNodeReimageResponse extends msRest.HttpOperationResponse<void, ComputeNodeReimageHeaders> {
}
/**
 * Contains response data for the disableScheduling operation.
 */
export interface ComputeNodeDisableSchedulingResponse extends msRest.HttpOperationResponse<void, ComputeNodeDisableSchedulingHeaders> {
}
/**
 * Contains response data for the enableScheduling operation.
 */
export interface ComputeNodeEnableSchedulingResponse extends msRest.HttpOperationResponse<void, ComputeNodeEnableSchedulingHeaders> {
}
/**
 * Contains response data for the getRemoteLoginSettings operation.
 */
export interface ComputeNodeGetRemoteLoginSettingsResponse extends msRest.HttpOperationResponse<ComputeNodeGetRemoteLoginSettingsResult, ComputeNodeGetRemoteLoginSettingsHeaders> {
}
/**
 * Contains response data for the getRemoteDesktop operation.
 */
export interface ComputeNodeGetRemoteDesktopResponse extends msRest.HttpOperationResponse<msRest.HttpRequestBody, ComputeNodeGetRemoteDesktopHeaders> {
}
/**
 * Contains response data for the uploadBatchServiceLogs operation.
 */
export interface ComputeNodeUploadBatchServiceLogsResponse extends msRest.HttpOperationResponse<UploadBatchServiceLogsResult, ComputeNodeUploadBatchServiceLogsHeaders> {
}
/**
 * Contains response data for the list operation.
 */
export interface ComputeNodeListResponse extends msRest.HttpOperationResponse<ComputeNodeListResult, ComputeNodeListHeaders> {
}
/**
 * Contains response data for the listNext operation.
 */
export interface ComputeNodeListResponse extends msRest.HttpOperationResponse<ComputeNodeListResult, ComputeNodeListHeaders> {
}
