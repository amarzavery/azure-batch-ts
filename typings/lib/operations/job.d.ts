import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a Job. */
export declare class Job {
    private readonly client;
    /**
     * Create a Job.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Gets lifetime summary statistics for all of the jobs in the
     * specified account.
     *
     * Statistics are aggregated across all jobs that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetAllLifetimeStatisticsOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.jobGetAllLifetimeStatisticsOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.jobGetAllLifetimeStatisticsOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobGetAllLifetimeStatisticsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetAllLifetimeStatisticsOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<JobStatistics>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getAllLifetimeStatisticsWithHttpOperationResponse(options?: {
        jobGetAllLifetimeStatisticsOptions?: Models.JobGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobDeleteMethodOptions.ifUnmodifiedSince] A timestamp
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
    deleteMethodWithHttpOperationResponse(jobId: string, options?: {
        jobDeleteMethodOptions?: Models.JobDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets information about the specified job.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.jobGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.jobGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobGetOptions.clientRequestId] The caller-generated
     * request identity, in the form of a GUID with no decoration such as curly
     * braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobGetOptions.ifNoneMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service does not match
     * the value specified by the client.
     *
     * @param {date} [options.jobGetOptions.ifModifiedSince] A timestamp indicating
     * the last modified time of the resource known to the client. The operation
     * will be performed only if the resource on the service has been modified
     * since the specified time.
     *
     * @param {date} [options.jobGetOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJob>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(jobId: string, options?: {
        jobGetOptions?: Models.JobGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This replaces only the job properties specified in the request. For example,
     * if the job has constraints, and a request does not specify the constraints
     * element, then the job keeps the existing constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {object} jobPatchParameter The parameters for the request.
     *
     * @param {number} [jobPatchParameter.priority] The priority of the job.
     * Priority values can range from -1000 to 1000, with -1000 being the lowest
     * priority and 1000 being the highest priority. If omitted, the priority of
     * the job is left unchanged.
     *
     * @param {string} [jobPatchParameter.onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state. If
     * omitted, the completion behavior is left unchanged. You may not change the
     * value from terminateJob to noAction - that is, once you have engaged
     * automatic job termination, you cannot turn it off again. If you try to do
     * this, the request fails with an 'invalid property value' error response; if
     * you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request). Possible values include: 'noAction', 'terminateJob'
     *
     * @param {object} [jobPatchParameter.constraints] The execution constraints
     * for the job. If omitted, the existing execution constraints are left
     * unchanged.
     *
     * @param {moment.duration} [jobPatchParameter.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number} [jobPatchParameter.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} [jobPatchParameter.poolInfo] The pool on which the Batch
     * service runs the job's tasks. You may change the pool for a job only when
     * the job is disabled. The Patch Job call will fail if you include the
     * poolInfo element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job. If omitted, the job continues to run on its
     * current pool.
     *
     * @param {string} [jobPatchParameter.poolInfo.poolId] The ID of an existing
     * pool. All the tasks of the job will run on the specified pool. You must
     * ensure that the pool referenced by this property exists. If the pool does
     * not exist at the time the Batch service tries to schedule a job, no tasks
     * for the job will run until you create a pool with that id. Note that the
     * Batch service will not reject the job request; it will simply not run tasks
     * until the pool exists. You must specify either the pool ID or the auto pool
     * specification, but not both.
     *
     * @param {object} [jobPatchParameter.poolInfo.autoPoolSpecification]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A prefix
     * to be added to the unique identifier when a pool is automatically created.
     * The Batch service assigns each auto pool a unique identifier on creation. To
     * distinguish between pools created for different purposes, you can specify
     * this element to add a prefix to the ID that is assigned. The prefix can be
     * up to 20 characters long.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.keepAlive] Whether to keep
     * an auto pool alive after its lifetime expires. If false, the Batch service
     * deletes the pool once its lifetime (as determined by the poolLifetimeOption
     * setting) expires; that is, when the job or job schedule completes. If true,
     * the Batch service does not delete the pool automatically. It is up to the
     * user to delete auto pools created with this option.
     *
     * @param {object} [jobPatchParameter.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string} jobPatchParameter.poolInfo.autoPoolSpecification.pool.vmSize
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
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
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
     * maximum number of tasks that can run concurrently on a single compute node
     * in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.resizeTimeout] The
     * timeout for allocation of compute nodes to the pool. This timeout applies
     * only to manual scaling; it has no effect when enableAutoScale is set to
     * true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.autoScaleFormula] The
     * formula for the desired number of compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to false. It is required if
     * enableAutoScale is set to true. The formula is checked for validity before
     * the pool is created. If the formula is not valid, the Batch service rejects
     * the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask] A task to
     * run on each compute node as it joins the pool. The task runs when the node
     * is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.certificateReferences]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {array} [jobPatchParameter.metadata] A list of name-value pairs
     * associated with the job as metadata. If omitted, the existing job metadata
     * is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobPatchOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobPatchOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobPatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobPatchOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobPatchOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobPatchOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobPatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobPatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobPatchOptions.ifUnmodifiedSince] A timestamp
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
    patchWithHttpOperationResponse(jobId: string, jobPatchParameter: Models.JobPatchParameter, options?: {
        jobPatchOptions?: Models.JobPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} jobUpdateParameter The parameters for the request.
     *
     * @param {number} [jobUpdateParameter.priority] The priority of the job.
     * Priority values can range from -1000 to 1000, with -1000 being the lowest
     * priority and 1000 being the highest priority. If omitted, it is set to the
     * default value 0.
     *
     * @param {object} [jobUpdateParameter.constraints] The execution constraints
     * for the job. If omitted, the constraints are cleared.
     *
     * @param {moment.duration} [jobUpdateParameter.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number} [jobUpdateParameter.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} jobUpdateParameter.poolInfo The pool on which the Batch
     * service runs the job's tasks. You may change the pool for a job only when
     * the job is disabled. The Update Job call will fail if you include the
     * poolInfo element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job.
     *
     * @param {string} [jobUpdateParameter.poolInfo.poolId] The ID of an existing
     * pool. All the tasks of the job will run on the specified pool. You must
     * ensure that the pool referenced by this property exists. If the pool does
     * not exist at the time the Batch service tries to schedule a job, no tasks
     * for the job will run until you create a pool with that id. Note that the
     * Batch service will not reject the job request; it will simply not run tasks
     * until the pool exists. You must specify either the pool ID or the auto pool
     * specification, but not both.
     *
     * @param {object} [jobUpdateParameter.poolInfo.autoPoolSpecification]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A
     * prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.keepAlive] Whether to
     * keep an auto pool alive after its lifetime expires. If false, the Batch
     * service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object} [jobUpdateParameter.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.vmSize The size of
     * the virtual machines in the pool. All virtual machines in a pool are the
     * same size. For information about available sizes of virtual machines for
     * Cloud Services pools (pools created with cloudServiceConfiguration), see
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
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
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
     * maximum number of tasks that can run concurrently on a single compute node
     * in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.resizeTimeout] The
     * timeout for allocation of compute nodes to the pool. This timeout applies
     * only to manual scaling; it has no effect when enableAutoScale is set to
     * true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask] A task to
     * run on each compute node as it joins the pool. The task runs when the node
     * is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.certificateReferences]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {array} [jobUpdateParameter.metadata] A list of name-value pairs
     * associated with the job as metadata. If omitted, it takes the default value
     * of an empty list; in effect, any existing metadata is deleted.
     *
     * @param {string} [jobUpdateParameter.onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state. If
     * omitted, the completion behavior is set to noAction. If the current value is
     * terminateJob, this is an error because a job's completion behavior may not
     * be changed from terminateJob to noAction. You may not change the value from
     * terminatejob to noaction - that is, once you have engaged automatic job
     * termination, you cannot turn it off again. If you try to do this, the
     * request fails and Batch returns status code 400 (Bad Request) and an
     * 'invalid property value' error response. If you do not specify this element
     * in a PUT request, it is equivalent to passing noaction. This is an error if
     * the current value is terminatejob. Possible values include: 'noAction',
     * 'terminateJob'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobUpdateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobUpdateOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobUpdateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobUpdateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobUpdateOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobUpdateOptions.ifUnmodifiedSince] A timestamp
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
    updateWithHttpOperationResponse(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options?: {
        jobUpdateOptions?: Models.JobUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {string} disableTasks What to do with active tasks associated with
     * the job. Values are:
     *
     * requeue - Terminate running tasks and requeue them. The tasks will run again
     * when the job is enabled.
     * terminate - Terminate running tasks. The tasks will not run again.
     * wait - Allow currently running tasks to complete. Possible values include:
     * 'requeue', 'terminate', 'wait'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobDisableOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobDisableOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobDisableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobDisableOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobDisableOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobDisableOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobDisableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobDisableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobDisableOptions.ifUnmodifiedSince] A timestamp
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
    disableWithHttpOperationResponse(jobId: string, disableTasks: string, options?: {
        jobDisableOptions?: Models.JobDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobEnableOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobEnableOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobEnableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobEnableOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobEnableOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobEnableOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobEnableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobEnableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobEnableOptions.ifUnmodifiedSince] A timestamp
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
    enableWithHttpOperationResponse(jobId: string, options?: {
        jobEnableOptions?: Models.JobEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Terminates the specified job, marking it as completed.
     *
     * When a Terminate Job request is received, the Batch service sets the job to
     * the terminating state. The Batch service then terminates any active or
     * running tasks associated with the job, and runs any required Job Release
     * tasks. The job then moves into the completed state.
     *
     * @param {string} jobId The ID of the job to terminate.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.terminateReason] The text you want to appear as the
     * job's TerminateReason. The default is 'UserTerminate'.
     *
     * @param {object} [options.jobTerminateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobTerminateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobTerminateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobTerminateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobTerminateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobTerminateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobTerminateOptions.ifUnmodifiedSince] A timestamp
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
    terminateWithHttpOperationResponse(jobId: string, options?: {
        terminateReason?: string;
        jobTerminateOptions?: Models.JobTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} job The job to be added.
     *
     * @param {string} job.id A string that uniquely identifies the job within the
     * account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two IDs within an account that differ only by case).
     *
     * @param {string} [job.displayName] The display name for the job. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     *
     * @param {number} [job.priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. The default value is 0.
     *
     * @param {object} [job.constraints] The execution constraints for the job.
     *
     * @param {moment.duration} [job.constraints.maxWallClockTime] The maximum
     * elapsed time that the job may run, measured from the time the job is
     * created. If the job does not complete within the time limit, the Batch
     * service terminates it and any tasks that are still running. In this case,
     * the termination reason will be MaxWallClockTimeExpiry. If this property is
     * not specified, there is no time limit on how long the job may run.
     *
     * @param {number} [job.constraints.maxTaskRetryCount] The maximum number of
     * times each task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try each task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries a task
     * up to 4 times (one initial try and 3 retries). If the maximum retry count is
     * 0, the Batch service does not retry tasks. If the maximum retry count is -1,
     * the Batch service retries tasks without limit. The default value is 0 (no
     * retries).
     *
     * @param {object} [job.jobManagerTask] Details of a Job Manager task to be
     * launched when the job is started. If the job does not specify a Job Manager
     * task, the user must explicitly add tasks to the job. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job. The Job Manager task's typical purpose is
     * to control and/or monitor job execution, for example by deciding what
     * additional tasks to run, determining when the work is complete, etc.
     * (However, a Job Manager task is not restricted to these activities - it is a
     * fully-fledged task in the system and perform whatever actions are required
     * for the job.) For example, a Job Manager task might download a file
     * specified as a parameter, analyze the contents of that file and submit
     * additional tasks based on those contents.
     *
     * @param {string} job.jobManagerTask.id A string that uniquely identifies the
     * Job Manager task within the job. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores and cannot contain
     * more than 64 characters.
     *
     * @param {string} [job.jobManagerTask.displayName] The display name of the Job
     * Manager task. It need not be unique and can contain any Unicode characters
     * up to a maximum length of 1024.
     *
     * @param {string} job.jobManagerTask.commandLine The command line of the Job
     * Manager task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobManagerTask.resourceFiles] A list of files that the
     * Batch service will download to the compute node before running the command
     * line. Files listed under this element are located in the task's working
     * directory.
     *
     * @param {array} [job.jobManagerTask.outputFiles] A list of files that the
     * Batch service will upload from the compute node after running the command
     * line. For multi-instance tasks, the files will only be uploaded from the
     * compute node on which the primary task is executed.
     *
     * @param {array} [job.jobManagerTask.environmentSettings] A list of
     * environment variable settings for the Job Manager task.
     *
     * @param {object} [job.jobManagerTask.constraints] Constraints that apply to
     * the Job Manager task.
     *
     * @param {boolean} [job.jobManagerTask.killJobOnCompletion] Whether completion
     * of the Job Manager task signifies completion of the entire job. If true,
     * when the Job Manager task completes, the Batch service marks the job as
     * complete. If any tasks are still running at this time (other than Job
     * Release), those tasks are terminated. If false, the completion of the Job
     * Manager task does not affect the job status. In this case, you should either
     * use the onAllTasksComplete attribute to terminate the job, or have a client
     * or user terminate the job explicitly. An example of this is if the Job
     * Manager creates a set of tasks but then takes no further role in their
     * execution. The default value is true. If you are using the
     * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
     * using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object} [job.jobManagerTask.userIdentity] The user identity under
     * which the Job Manager task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {boolean} [job.jobManagerTask.runExclusive] Whether the Job Manager
     * task requires exclusive use of the compute node where it runs. If true, no
     * other tasks will run on the same compute node for as long as the Job Manager
     * is running. If false, other tasks can run simultaneously with the Job
     * Manager on a compute node. The Job Manager task counts normally against the
     * node's concurrent task limit, so this is only relevant if the node allows
     * multiple concurrent tasks. The default value is true.
     *
     * @param {array} [job.jobManagerTask.applicationPackageReferences] A list of
     * application packages that the Batch service will deploy to the compute node
     * before running the command line. Application packages are downloaded and
     * deployed to a shared directory, not the task working directory. Therefore,
     * if a referenced package is already on the compute node, and is up to date,
     * then it is not re-downloaded; the existing copy on the compute node is used.
     * If a referenced application package cannot be installed, for example because
     * the package has been deleted or because download failed, the task fails.
     *
     * @param {object} [job.jobManagerTask.authenticationTokenSettings] The
     * settings for an authentication token that the task can use to perform Batch
     * service operations. If this property is set, the Batch service provides the
     * task with an authentication token which can be used to authenticate Batch
     * service operations without requiring an account access key. The token is
     * provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The
     * operations that the task can carry out using the token depend on the
     * settings. For example, a task can request job permissions in order to add
     * other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array} [job.jobManagerTask.authenticationTokenSettings.access] The
     * Batch resources to which the token grants access. The authentication token
     * grants access to a limited set of Batch service operations. Currently the
     * only supported value for the access property is 'job', which grants access
     * to all operations related to the job which contains the task.
     *
     * @param {boolean} [job.jobManagerTask.allowLowPriorityNode] Whether the Job
     * Manager task may run on a low-priority compute node. The default value is
     * false.
     *
     * @param {object} [job.jobPreparationTask] The Job Preparation task. If a job
     * has a Job Preparation task, the Batch service will run the Job Preparation
     * task on a compute node before starting any tasks of that job on that compute
     * node.
     *
     * @param {string} [job.jobPreparationTask.id] A string that uniquely
     * identifies the Job Preparation task within the job. The ID can contain any
     * combination of alphanumeric characters including hyphens and underscores and
     * cannot contain more than 64 characters. If you do not specify this property,
     * the Batch service assigns a default value of 'jobpreparation'. No other task
     * in the job can have the same ID as the Job Preparation task. If you try to
     * submit a task with the same id, the Batch service rejects the request with
     * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
     * directly, the HTTP status code is 409 (Conflict).
     *
     * @param {string} job.jobPreparationTask.commandLine The command line of the
     * Job Preparation task. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobPreparationTask.resourceFiles] A list of files that
     * the Batch service will download to the compute node before running the
     * command line. Files listed under this element are located in the task's
     * working directory.
     *
     * @param {array} [job.jobPreparationTask.environmentSettings] A list of
     * environment variable settings for the Job Preparation task.
     *
     * @param {object} [job.jobPreparationTask.constraints] Constraints that apply
     * to the Job Preparation task.
     *
     * @param {moment.duration}
     * [job.jobPreparationTask.constraints.maxWallClockTime] The maximum elapsed
     * time that the task may run, measured from the time the task starts. If the
     * task does not complete within the time limit, the Batch service terminates
     * it. If this is not specified, there is no time limit on how long the task
     * may run.
     *
     * @param {moment.duration} [job.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number} [job.jobPreparationTask.constraints.maxTaskRetryCount] The
     * maximum number of times the task may be retried. The Batch service retries a
     * task if its exit code is nonzero. Note that this value specifically controls
     * the number of retries. The Batch service will try the task once, and may
     * then retry up to this limit. For example, if the maximum retry count is 3,
     * Batch tries the task up to 4 times (one initial try and 3 retries). If the
     * maximum retry count is 0, the Batch service does not retry the task. If the
     * maximum retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [job.jobPreparationTask.waitForSuccess] Whether the Batch
     * service should wait for the Job Preparation task to complete successfully
     * before scheduling any other tasks of the job on the compute node. A Job
     * Preparation task has completed successfully if it exits with exit code 0. If
     * true and the Job Preparation task fails on a compute node, the Batch service
     * retries the Job Preparation task up to its maximum retry count (as specified
     * in the constraints element). If the task has still not completed
     * successfully after all retries, then the Batch service will not schedule
     * tasks of the job to the compute node. The compute node remains active and
     * eligible to run tasks of other jobs. If false, the Batch service will not
     * wait for the Job Preparation task to complete. In this case, other tasks of
     * the job can start executing on the compute node while the Job Preparation
     * task is still running; and even if the Job Preparation task fails, new tasks
     * will continue to be scheduled on the node. The default value is true.
     *
     * @param {object} [job.jobPreparationTask.userIdentity] The user identity
     * under which the Job Preparation task runs. If omitted, the task runs as a
     * non-administrative user unique to the task on Windows nodes, or a a
     * non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean} [job.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [job.jobReleaseTask] The Job Release task. A Job Release
     * task cannot be specified without also specifying a Job Preparation task for
     * the job. The Batch service runs the Job Release task on the compute nodes
     * that have run the Job Preparation task. The primary purpose of the Job
     * Release task is to undo changes to compute nodes made by the Job Preparation
     * task. Example activities include deleting local files, or shutting down
     * services that were started as part of job preparation.
     *
     * @param {string} [job.jobReleaseTask.id] A string that uniquely identifies
     * the Job Release task within the job. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores and cannot contain
     * more than 64 characters. If you do not specify this property, the Batch
     * service assigns a default value of 'jobrelease'. No other task in the job
     * can have the same ID as the Job Release task. If you try to submit a task
     * with the same id, the Batch service rejects the request with error code
     * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
     * HTTP status code is 409 (Conflict).
     *
     * @param {string} job.jobReleaseTask.commandLine The command line of the Job
     * Release task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobReleaseTask.resourceFiles] A list of files that the
     * Batch service will download to the compute node before running the command
     * line. Files listed under this element are located in the task's working
     * directory.
     *
     * @param {array} [job.jobReleaseTask.environmentSettings] A list of
     * environment variable settings for the Job Release task.
     *
     * @param {moment.duration} [job.jobReleaseTask.maxWallClockTime] The maximum
     * elapsed time that the Job Release task may run on a given compute node,
     * measured from the time the task starts. If the task does not complete within
     * the time limit, the Batch service terminates it. The default value is 15
     * minutes. You may not specify a timeout longer than 15 minutes. If you do,
     * the Batch service rejects it with an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration} [job.jobReleaseTask.retentionTime] The minimum time
     * to retain the task directory for the Job Release task on the compute node.
     * After this time, the Batch service may delete the task directory and all its
     * contents. The default is infinite, i.e. the task directory will be retained
     * until the compute node is removed or reimaged.
     *
     * @param {object} [job.jobReleaseTask.userIdentity] The user identity under
     * which the Job Release task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {array} [job.commonEnvironmentSettings] The list of common
     * environment variable settings. These environment variables are set for all
     * tasks in the job (including the Job Manager, Job Preparation and Job Release
     * tasks). Individual tasks can override an environment setting specified here
     * by specifying the same setting name with a different value.
     *
     * @param {object} job.poolInfo The pool on which the Batch service runs the
     * job's tasks.
     *
     * @param {string} [job.poolInfo.poolId] The ID of an existing pool. All the
     * tasks of the job will run on the specified pool. You must ensure that the
     * pool referenced by this property exists. If the pool does not exist at the
     * time the Batch service tries to schedule a job, no tasks for the job will
     * run until you create a pool with that id. Note that the Batch service will
     * not reject the job request; it will simply not run tasks until the pool
     * exists. You must specify either the pool ID or the auto pool specification,
     * but not both.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification] Characteristics for a
     * temporary 'auto pool'. The Batch service will create this auto pool when the
     * job is submitted. If auto pool creation fails, the Batch service moves the
     * job to a completed state, and the pool creation error is set in the job's
     * scheduling error property. The Batch service manages the lifetime (both
     * creation and, unless keepAlive is specified, deletion) of the auto pool. Any
     * user actions that affect the lifetime of the auto pool while the job is
     * active will result in unexpected behavior. You must specify either the pool
     * ID or the auto pool specification, but not both.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A
     * prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string} job.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean} [job.poolInfo.autoPoolSpecification.keepAlive] Whether to
     * keep an auto pool alive after its lifetime expires. If false, the Batch
     * service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification.pool] The pool
     * specification for the auto pool.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string} job.poolInfo.autoPoolSpecification.pool.vmSize The size of
     * the virtual machines in the pool. All virtual machines in a pool are the
     * same size. For information about available sizes of virtual machines for
     * Cloud Services pools (pools created with cloudServiceConfiguration), see
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
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] The
     * cloud service configuration for the pool. This property must be specified if
     * the pool needs to be created with Azure PaaS VMs. This property and
     * virtualMachineConfiguration are mutually exclusive and one of the properties
     * must be specified. If neither is specified then the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request). This property cannot be specified if the Batch account was
     * created with its poolAllocationMode property set to 'UserSubscription'.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] The
     * virtual machine configuration for the pool. This property must be specified
     * if the pool needs to be created with Azure IaaS VMs. This property and
     * cloudServiceConfiguration are mutually exclusive and one of the properties
     * must be specified. If neither is specified then the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request).
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number} [job.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy] How tasks are
     * distributed across compute nodes in a pool.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [job.poolInfo.autoPoolSpecification.pool.resizeTimeout] The timeout for
     * allocation of compute nodes to the pool. This timeout applies only to manual
     * scaling; it has no effect when enableAutoScale is set to true. The default
     * value is 15 minutes. The minimum value is 5 minutes. If you specify a value
     * less than 5 minutes, the Batch service rejects the request with an error; if
     * you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes] The desired
     * number of dedicated compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] The desired
     * number of low-priority compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean} [job.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [job.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
     * time interval at which to automatically adjust the pool size according to
     * the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration] The network
     * configuration for the pool.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
     * ARM resource identifier of the virtual network subnet which the compute
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
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * job.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification.pool.startTask] A task
     * to run on each compute node as it joins the pool. The task runs when the
     * node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.startTask.commandLine The command
     * line of the start task. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings] A
     * list of environment variable settings for the start task.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity] The user
     * identity under which the start task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The
     * maximum number of times the task may be retried. The Batch service retries a
     * task if its exit code is nonzero. Note that this value specifically controls
     * the number of retries. The Batch service will try the task once, and may
     * then retry up to this limit. For example, if the maximum retry count is 3,
     * Batch tries the task up to 4 times (one initial try and 3 retries). If the
     * maximum retry count is 0, the Batch service does not retry the task. If the
     * maximum retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] Whether
     * the Batch service should wait for the start task to complete successfully
     * (that is, to exit with exit code 0) before scheduling any tasks on the
     * compute node. If true and the start task fails on a compute node, the Batch
     * service retries the start task up to its maximum retry count
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
     * [job.poolInfo.autoPoolSpecification.pool.certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. For Windows
     * compute nodes, the Batch service installs the certificates to the specified
     * certificate store and location. For Linux compute nodes, the certificates
     * are stored in a directory inside the task working directory and an
     * environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.applicationPackageReferences] The
     * list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {string} [job.onAllTasksComplete] The action the Batch service should
     * take when all tasks in the job are in the completed state. Note that if a
     * job contains no tasks, then all tasks are considered complete. This option
     * is therefore most commonly used with a Job Manager task; if you want to use
     * automatic job termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks.
     * Permitted values are: noAction - do nothing. The job remains active unless
     * terminated or disabled by some other means. terminateJob - terminate the
     * job. The job's terminateReason is set to 'AllTasksComplete'. The default is
     * noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [job.onTaskFailure] The action the Batch service should take
     * when any task in the job fails. A task is considered to have failed if has a
     * failureInfo. A failureInfo is set if the task completes with a non-zero exit
     * code after exhausting its retry count, or if there was an error starting the
     * task, for example due to a resource file download error. noAction - do
     * nothing. performExitOptionsJobAction - take the action associated with the
     * task exit condition in the task's exitConditions collection. (This may still
     * result in no action being taken, if that is what the task specifies.) The
     * default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {array} [job.metadata] A list of name-value pairs associated with the
     * job as metadata. The Batch service does not assign any meaning to metadata;
     * it is solely for the use of user code.
     *
     * @param {boolean} [job.usesTaskDependencies] Whether tasks in the job can
     * define dependencies on each other. The default is false.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobAddOptions.clientRequestId] The caller-generated
     * request identity, in the form of a GUID with no decoration such as curly
     * braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobAddOptions.ocpDate] The time the request was
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
    addWithHttpOperationResponse(job: Models.JobAddParameter, options?: {
        jobAddOptions?: Models.JobAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.jobListOptions.select] An OData $select clause.
     *
     * @param {string} [options.jobListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.jobListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 jobs can be returned.
     *
     * @param {number} [options.jobListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        jobListOptions?: Models.JobListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule from which you want
     * to get a list of jobs.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListFromJobScheduleOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.jobListFromJobScheduleOptions.filter] An OData
     * $filter clause.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.select] An OData
     * $select clause.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.expand] An OData
     * $expand clause.
     *
     * @param {number} [options.jobListFromJobScheduleOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 jobs
     * can be returned.
     *
     * @param {number} [options.jobListFromJobScheduleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListFromJobScheduleOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListFromJobScheduleOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromJobScheduleWithHttpOperationResponse(jobScheduleId: string, options?: {
        jobListFromJobScheduleOptions?: Models.JobListFromJobScheduleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListPreparationAndReleaseTaskStatusOptions]
     * Additional parameters for the operation
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.filter] An OData
     * $filter clause. To get the status of the Job Preparation and Job Release
     * tasks on a specific compute node, use "nodeId eq '{desired-node-id}'"
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.select] An OData
     * $select clause.
     *
     * @param {number}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 tasks
     * can be returned.
     *
     * @param {number}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListPreparationAndReleaseTaskStatusResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPreparationAndReleaseTaskStatusWithHttpOperationResponse(jobId: string, options?: {
        jobListPreparationAndReleaseTaskStatusOptions?: Models.JobListPreparationAndReleaseTaskStatusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetTaskCountsOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobGetTaskCountsOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobGetTaskCountsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobGetTaskCountsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetTaskCountsOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<TaskCounts>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getTaskCountsWithHttpOperationResponse(jobId: string, options?: {
        jobGetTaskCountsOptions?: Models.JobGetTaskCountsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListNextOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        jobListNextOptions?: Models.JobListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListFromJobScheduleNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.jobListFromJobScheduleNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListFromJobScheduleNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListFromJobScheduleNextOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listFromJobScheduleNextWithHttpOperationResponse(nextPageLink: string, options?: {
        jobListFromJobScheduleNextOptions?: Models.JobListFromJobScheduleNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListPreparationAndReleaseTaskStatusNextOptions]
     * Additional parameters for the operation
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudJobListPreparationAndReleaseTaskStatusResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPreparationAndReleaseTaskStatusNextWithHttpOperationResponse(nextPageLink: string, options?: {
        jobListPreparationAndReleaseTaskStatusNextOptions?: Models.JobListPreparationAndReleaseTaskStatusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets lifetime summary statistics for all of the jobs in the
     * specified account.
     *
     * Statistics are aggregated across all jobs that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetAllLifetimeStatisticsOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.jobGetAllLifetimeStatisticsOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.jobGetAllLifetimeStatisticsOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobGetAllLifetimeStatisticsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetAllLifetimeStatisticsOptions.ocpDate] The time
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
     *                      {JobStatistics} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link JobStatistics} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getAllLifetimeStatistics(): Promise<Models.JobStatistics>;
    getAllLifetimeStatistics(options: {
        jobGetAllLifetimeStatisticsOptions?: Models.JobGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.JobStatistics>;
    getAllLifetimeStatistics(callback: msRest.ServiceCallback<Models.JobStatistics>): void;
    getAllLifetimeStatistics(options: {
        jobGetAllLifetimeStatisticsOptions?: Models.JobGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.JobStatistics>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobDeleteMethodOptions.ifUnmodifiedSince] A timestamp
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
    deleteMethod(jobId: string): Promise<void>;
    deleteMethod(jobId: string, options: {
        jobDeleteMethodOptions?: Models.JobDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(jobId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(jobId: string, options: {
        jobDeleteMethodOptions?: Models.JobDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets information about the specified job.
     *
     * @param {string} jobId The ID of the job.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.jobGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.jobGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobGetOptions.clientRequestId] The caller-generated
     * request identity, in the form of a GUID with no decoration such as curly
     * braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobGetOptions.ifNoneMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service does not match
     * the value specified by the client.
     *
     * @param {date} [options.jobGetOptions.ifModifiedSince] A timestamp indicating
     * the last modified time of the resource known to the client. The operation
     * will be performed only if the resource on the service has been modified
     * since the specified time.
     *
     * @param {date} [options.jobGetOptions.ifUnmodifiedSince] A timestamp
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
     *                      {CloudJob} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJob} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(jobId: string): Promise<Models.CloudJob>;
    get(jobId: string, options: {
        jobGetOptions?: Models.JobGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJob>;
    get(jobId: string, callback: msRest.ServiceCallback<Models.CloudJob>): void;
    get(jobId: string, options: {
        jobGetOptions?: Models.JobGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJob>): void;
    /**
     * @summary Updates the properties of the specified job.
     *
     * This replaces only the job properties specified in the request. For example,
     * if the job has constraints, and a request does not specify the constraints
     * element, then the job keeps the existing constraints.
     *
     * @param {string} jobId The ID of the job whose properties you want to update.
     *
     * @param {object} jobPatchParameter The parameters for the request.
     *
     * @param {number} [jobPatchParameter.priority] The priority of the job.
     * Priority values can range from -1000 to 1000, with -1000 being the lowest
     * priority and 1000 being the highest priority. If omitted, the priority of
     * the job is left unchanged.
     *
     * @param {string} [jobPatchParameter.onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state. If
     * omitted, the completion behavior is left unchanged. You may not change the
     * value from terminateJob to noAction - that is, once you have engaged
     * automatic job termination, you cannot turn it off again. If you try to do
     * this, the request fails with an 'invalid property value' error response; if
     * you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request). Possible values include: 'noAction', 'terminateJob'
     *
     * @param {object} [jobPatchParameter.constraints] The execution constraints
     * for the job. If omitted, the existing execution constraints are left
     * unchanged.
     *
     * @param {moment.duration} [jobPatchParameter.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number} [jobPatchParameter.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} [jobPatchParameter.poolInfo] The pool on which the Batch
     * service runs the job's tasks. You may change the pool for a job only when
     * the job is disabled. The Patch Job call will fail if you include the
     * poolInfo element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job. If omitted, the job continues to run on its
     * current pool.
     *
     * @param {string} [jobPatchParameter.poolInfo.poolId] The ID of an existing
     * pool. All the tasks of the job will run on the specified pool. You must
     * ensure that the pool referenced by this property exists. If the pool does
     * not exist at the time the Batch service tries to schedule a job, no tasks
     * for the job will run until you create a pool with that id. Note that the
     * Batch service will not reject the job request; it will simply not run tasks
     * until the pool exists. You must specify either the pool ID or the auto pool
     * specification, but not both.
     *
     * @param {object} [jobPatchParameter.poolInfo.autoPoolSpecification]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A prefix
     * to be added to the unique identifier when a pool is automatically created.
     * The Batch service assigns each auto pool a unique identifier on creation. To
     * distinguish between pools created for different purposes, you can specify
     * this element to add a prefix to the ID that is assigned. The prefix can be
     * up to 20 characters long.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.keepAlive] Whether to keep
     * an auto pool alive after its lifetime expires. If false, the Batch service
     * deletes the pool once its lifetime (as determined by the poolLifetimeOption
     * setting) expires; that is, when the job or job schedule completes. If true,
     * the Batch service does not delete the pool automatically. It is up to the
     * user to delete auto pools created with this option.
     *
     * @param {object} [jobPatchParameter.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string} jobPatchParameter.poolInfo.autoPoolSpecification.pool.vmSize
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
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
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
     * maximum number of tasks that can run concurrently on a single compute node
     * in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.resizeTimeout] The
     * timeout for allocation of compute nodes to the pool. This timeout applies
     * only to manual scaling; it has no effect when enableAutoScale is set to
     * true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.autoScaleFormula] The
     * formula for the desired number of compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to false. It is required if
     * enableAutoScale is set to true. The formula is checked for validity before
     * the pool is created. If the formula is not valid, the Batch service rejects
     * the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask] A task to
     * run on each compute node as it joins the pool. The task runs when the node
     * is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.certificateReferences]
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
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobPatchParameter.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {array} [jobPatchParameter.metadata] A list of name-value pairs
     * associated with the job as metadata. If omitted, the existing job metadata
     * is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobPatchOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobPatchOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobPatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobPatchOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobPatchOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobPatchOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobPatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobPatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobPatchOptions.ifUnmodifiedSince] A timestamp
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
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter): Promise<void>;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options: {
        jobPatchOptions?: Models.JobPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options: {
        jobPatchOptions?: Models.JobPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} jobUpdateParameter The parameters for the request.
     *
     * @param {number} [jobUpdateParameter.priority] The priority of the job.
     * Priority values can range from -1000 to 1000, with -1000 being the lowest
     * priority and 1000 being the highest priority. If omitted, it is set to the
     * default value 0.
     *
     * @param {object} [jobUpdateParameter.constraints] The execution constraints
     * for the job. If omitted, the constraints are cleared.
     *
     * @param {moment.duration} [jobUpdateParameter.constraints.maxWallClockTime]
     * The maximum elapsed time that the job may run, measured from the time the
     * job is created. If the job does not complete within the time limit, the
     * Batch service terminates it and any tasks that are still running. In this
     * case, the termination reason will be MaxWallClockTimeExpiry. If this
     * property is not specified, there is no time limit on how long the job may
     * run.
     *
     * @param {number} [jobUpdateParameter.constraints.maxTaskRetryCount] The
     * maximum number of times each task may be retried. The Batch service retries
     * a task if its exit code is nonzero. Note that this value specifically
     * controls the number of retries. The Batch service will try each task once,
     * and may then retry up to this limit. For example, if the maximum retry count
     * is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If
     * the maximum retry count is 0, the Batch service does not retry tasks. If the
     * maximum retry count is -1, the Batch service retries tasks without limit.
     * The default value is 0 (no retries).
     *
     * @param {object} jobUpdateParameter.poolInfo The pool on which the Batch
     * service runs the job's tasks. You may change the pool for a job only when
     * the job is disabled. The Update Job call will fail if you include the
     * poolInfo element and the job is not disabled. If you specify an
     * autoPoolSpecification specification in the poolInfo, only the keepAlive
     * property can be updated, and then only if the auto pool has a
     * poolLifetimeOption of job.
     *
     * @param {string} [jobUpdateParameter.poolInfo.poolId] The ID of an existing
     * pool. All the tasks of the job will run on the specified pool. You must
     * ensure that the pool referenced by this property exists. If the pool does
     * not exist at the time the Batch service tries to schedule a job, no tasks
     * for the job will run until you create a pool with that id. Note that the
     * Batch service will not reject the job request; it will simply not run tasks
     * until the pool exists. You must specify either the pool ID or the auto pool
     * specification, but not both.
     *
     * @param {object} [jobUpdateParameter.poolInfo.autoPoolSpecification]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A
     * prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.keepAlive] Whether to
     * keep an auto pool alive after its lifetime expires. If false, the Batch
     * service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object} [jobUpdateParameter.poolInfo.autoPoolSpecification.pool] The
     * pool specification for the auto pool.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.vmSize The size of
     * the virtual machines in the pool. All virtual machines in a pool are the
     * same size. For information about available sizes of virtual machines for
     * Cloud Services pools (pools created with cloudServiceConfiguration), see
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration]
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
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration]
     * The virtual machine configuration for the pool. This property must be
     * specified if the pool needs to be created with Azure IaaS VMs. This property
     * and cloudServiceConfiguration are mutually exclusive and one of the
     * properties must be specified. If neither is specified then the Batch service
     * returns an error; if you are calling the REST API directly, the HTTP status
     * code is 400 (Bad Request).
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.maxTasksPerNode] The
     * maximum number of tasks that can run concurrently on a single compute node
     * in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy]
     * How tasks are distributed across compute nodes in a pool.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.resizeTimeout] The
     * timeout for allocation of compute nodes to the pool. This timeout applies
     * only to manual scaling; it has no effect when enableAutoScale is set to
     * true. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service rejects the
     * request with an error; if you are calling the REST API directly, the HTTP
     * status code is 400 (Bad Request).
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes]
     * The desired number of dedicated compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes]
     * The desired number of low-priority compute nodes in the pool. This property
     * must not be specified if enableAutoScale is set to true. If enableAutoScale
     * is set to false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval]
     * The time interval at which to automatically adjust the pool size according
     * to the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration]
     * The network configuration for the pool.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask] A task to
     * run on each compute node as it joins the pool. The task runs when the node
     * is added to the pool or when the node is restarted.
     *
     * @param {string}
     * jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.commandLine
     * The command line of the start task. The command line does not run under a
     * shell, and therefore cannot take advantage of shell features such as
     * environment variable expansion. If you want to take advantage of such
     * features, you should invoke the shell in the command line, for example using
     * "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles]
     * A list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity]
     * The user identity under which the start task runs. If omitted, the task runs
     * as a non-administrative user unique to the task.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.certificateReferences]
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
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.applicationPackageReferences]
     * The list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array}
     * [jobUpdateParameter.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {array} [jobUpdateParameter.metadata] A list of name-value pairs
     * associated with the job as metadata. If omitted, it takes the default value
     * of an empty list; in effect, any existing metadata is deleted.
     *
     * @param {string} [jobUpdateParameter.onAllTasksComplete] The action the Batch
     * service should take when all tasks in the job are in the completed state. If
     * omitted, the completion behavior is set to noAction. If the current value is
     * terminateJob, this is an error because a job's completion behavior may not
     * be changed from terminateJob to noAction. You may not change the value from
     * terminatejob to noaction - that is, once you have engaged automatic job
     * termination, you cannot turn it off again. If you try to do this, the
     * request fails and Batch returns status code 400 (Bad Request) and an
     * 'invalid property value' error response. If you do not specify this element
     * in a PUT request, it is equivalent to passing noaction. This is an error if
     * the current value is terminatejob. Possible values include: 'noAction',
     * 'terminateJob'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobUpdateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobUpdateOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobUpdateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobUpdateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobUpdateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobUpdateOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobUpdateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobUpdateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobUpdateOptions.ifUnmodifiedSince] A timestamp
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
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter): Promise<void>;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options: {
        jobUpdateOptions?: Models.JobUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, callback: msRest.ServiceCallback<void>): void;
    update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options: {
        jobUpdateOptions?: Models.JobUpdateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {string} disableTasks What to do with active tasks associated with
     * the job. Values are:
     *
     * requeue - Terminate running tasks and requeue them. The tasks will run again
     * when the job is enabled.
     * terminate - Terminate running tasks. The tasks will not run again.
     * wait - Allow currently running tasks to complete. Possible values include:
     * 'requeue', 'terminate', 'wait'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobDisableOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobDisableOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobDisableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobDisableOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobDisableOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobDisableOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobDisableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobDisableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobDisableOptions.ifUnmodifiedSince] A timestamp
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
    disable(jobId: string, disableTasks: string): Promise<void>;
    disable(jobId: string, disableTasks: string, options: {
        jobDisableOptions?: Models.JobDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    disable(jobId: string, disableTasks: string, callback: msRest.ServiceCallback<void>): void;
    disable(jobId: string, disableTasks: string, options: {
        jobDisableOptions?: Models.JobDisableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobEnableOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobEnableOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobEnableOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobEnableOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobEnableOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobEnableOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.jobEnableOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobEnableOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobEnableOptions.ifUnmodifiedSince] A timestamp
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
    enable(jobId: string): Promise<void>;
    enable(jobId: string, options: {
        jobEnableOptions?: Models.JobEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    enable(jobId: string, callback: msRest.ServiceCallback<void>): void;
    enable(jobId: string, options: {
        jobEnableOptions?: Models.JobEnableOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Terminates the specified job, marking it as completed.
     *
     * When a Terminate Job request is received, the Batch service sets the job to
     * the terminating state. The Batch service then terminates any active or
     * running tasks associated with the job, and runs any required Job Release
     * tasks. The job then moves into the completed state.
     *
     * @param {string} jobId The ID of the job to terminate.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.terminateReason] The text you want to appear as the
     * job's TerminateReason. The default is 'UserTerminate'.
     *
     * @param {object} [options.jobTerminateOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobTerminateOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobTerminateOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobTerminateOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobTerminateOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.jobTerminateOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.jobTerminateOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.jobTerminateOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.jobTerminateOptions.ifUnmodifiedSince] A timestamp
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
    terminate(jobId: string): Promise<void>;
    terminate(jobId: string, options: {
        terminateReason?: string;
        jobTerminateOptions?: Models.JobTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    terminate(jobId: string, callback: msRest.ServiceCallback<void>): void;
    terminate(jobId: string, options: {
        terminateReason?: string;
        jobTerminateOptions?: Models.JobTerminateOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
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
     * @param {object} job The job to be added.
     *
     * @param {string} job.id A string that uniquely identifies the job within the
     * account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two IDs within an account that differ only by case).
     *
     * @param {string} [job.displayName] The display name for the job. The display
     * name need not be unique and can contain any Unicode characters up to a
     * maximum length of 1024.
     *
     * @param {number} [job.priority] The priority of the job. Priority values can
     * range from -1000 to 1000, with -1000 being the lowest priority and 1000
     * being the highest priority. The default value is 0.
     *
     * @param {object} [job.constraints] The execution constraints for the job.
     *
     * @param {moment.duration} [job.constraints.maxWallClockTime] The maximum
     * elapsed time that the job may run, measured from the time the job is
     * created. If the job does not complete within the time limit, the Batch
     * service terminates it and any tasks that are still running. In this case,
     * the termination reason will be MaxWallClockTimeExpiry. If this property is
     * not specified, there is no time limit on how long the job may run.
     *
     * @param {number} [job.constraints.maxTaskRetryCount] The maximum number of
     * times each task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try each task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries a task
     * up to 4 times (one initial try and 3 retries). If the maximum retry count is
     * 0, the Batch service does not retry tasks. If the maximum retry count is -1,
     * the Batch service retries tasks without limit. The default value is 0 (no
     * retries).
     *
     * @param {object} [job.jobManagerTask] Details of a Job Manager task to be
     * launched when the job is started. If the job does not specify a Job Manager
     * task, the user must explicitly add tasks to the job. If the job does specify
     * a Job Manager task, the Batch service creates the Job Manager task when the
     * job is created, and will try to schedule the Job Manager task before
     * scheduling other tasks in the job. The Job Manager task's typical purpose is
     * to control and/or monitor job execution, for example by deciding what
     * additional tasks to run, determining when the work is complete, etc.
     * (However, a Job Manager task is not restricted to these activities - it is a
     * fully-fledged task in the system and perform whatever actions are required
     * for the job.) For example, a Job Manager task might download a file
     * specified as a parameter, analyze the contents of that file and submit
     * additional tasks based on those contents.
     *
     * @param {string} job.jobManagerTask.id A string that uniquely identifies the
     * Job Manager task within the job. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores and cannot contain
     * more than 64 characters.
     *
     * @param {string} [job.jobManagerTask.displayName] The display name of the Job
     * Manager task. It need not be unique and can contain any Unicode characters
     * up to a maximum length of 1024.
     *
     * @param {string} job.jobManagerTask.commandLine The command line of the Job
     * Manager task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobManagerTask.resourceFiles] A list of files that the
     * Batch service will download to the compute node before running the command
     * line. Files listed under this element are located in the task's working
     * directory.
     *
     * @param {array} [job.jobManagerTask.outputFiles] A list of files that the
     * Batch service will upload from the compute node after running the command
     * line. For multi-instance tasks, the files will only be uploaded from the
     * compute node on which the primary task is executed.
     *
     * @param {array} [job.jobManagerTask.environmentSettings] A list of
     * environment variable settings for the Job Manager task.
     *
     * @param {object} [job.jobManagerTask.constraints] Constraints that apply to
     * the Job Manager task.
     *
     * @param {boolean} [job.jobManagerTask.killJobOnCompletion] Whether completion
     * of the Job Manager task signifies completion of the entire job. If true,
     * when the Job Manager task completes, the Batch service marks the job as
     * complete. If any tasks are still running at this time (other than Job
     * Release), those tasks are terminated. If false, the completion of the Job
     * Manager task does not affect the job status. In this case, you should either
     * use the onAllTasksComplete attribute to terminate the job, or have a client
     * or user terminate the job explicitly. An example of this is if the Job
     * Manager creates a set of tasks but then takes no further role in their
     * execution. The default value is true. If you are using the
     * onAllTasksComplete and onTaskFailure attributes to control job lifetime, and
     * using the Job Manager task only to create the tasks for the job (not to
     * monitor progress), then it is important to set killJobOnCompletion to false.
     *
     * @param {object} [job.jobManagerTask.userIdentity] The user identity under
     * which the Job Manager task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {boolean} [job.jobManagerTask.runExclusive] Whether the Job Manager
     * task requires exclusive use of the compute node where it runs. If true, no
     * other tasks will run on the same compute node for as long as the Job Manager
     * is running. If false, other tasks can run simultaneously with the Job
     * Manager on a compute node. The Job Manager task counts normally against the
     * node's concurrent task limit, so this is only relevant if the node allows
     * multiple concurrent tasks. The default value is true.
     *
     * @param {array} [job.jobManagerTask.applicationPackageReferences] A list of
     * application packages that the Batch service will deploy to the compute node
     * before running the command line. Application packages are downloaded and
     * deployed to a shared directory, not the task working directory. Therefore,
     * if a referenced package is already on the compute node, and is up to date,
     * then it is not re-downloaded; the existing copy on the compute node is used.
     * If a referenced application package cannot be installed, for example because
     * the package has been deleted or because download failed, the task fails.
     *
     * @param {object} [job.jobManagerTask.authenticationTokenSettings] The
     * settings for an authentication token that the task can use to perform Batch
     * service operations. If this property is set, the Batch service provides the
     * task with an authentication token which can be used to authenticate Batch
     * service operations without requiring an account access key. The token is
     * provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The
     * operations that the task can carry out using the token depend on the
     * settings. For example, a task can request job permissions in order to add
     * other tasks to the job, or check the status of the job or of other tasks
     * under the job.
     *
     * @param {array} [job.jobManagerTask.authenticationTokenSettings.access] The
     * Batch resources to which the token grants access. The authentication token
     * grants access to a limited set of Batch service operations. Currently the
     * only supported value for the access property is 'job', which grants access
     * to all operations related to the job which contains the task.
     *
     * @param {boolean} [job.jobManagerTask.allowLowPriorityNode] Whether the Job
     * Manager task may run on a low-priority compute node. The default value is
     * false.
     *
     * @param {object} [job.jobPreparationTask] The Job Preparation task. If a job
     * has a Job Preparation task, the Batch service will run the Job Preparation
     * task on a compute node before starting any tasks of that job on that compute
     * node.
     *
     * @param {string} [job.jobPreparationTask.id] A string that uniquely
     * identifies the Job Preparation task within the job. The ID can contain any
     * combination of alphanumeric characters including hyphens and underscores and
     * cannot contain more than 64 characters. If you do not specify this property,
     * the Batch service assigns a default value of 'jobpreparation'. No other task
     * in the job can have the same ID as the Job Preparation task. If you try to
     * submit a task with the same id, the Batch service rejects the request with
     * error code TaskIdSameAsJobPreparationTask; if you are calling the REST API
     * directly, the HTTP status code is 409 (Conflict).
     *
     * @param {string} job.jobPreparationTask.commandLine The command line of the
     * Job Preparation task. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobPreparationTask.resourceFiles] A list of files that
     * the Batch service will download to the compute node before running the
     * command line. Files listed under this element are located in the task's
     * working directory.
     *
     * @param {array} [job.jobPreparationTask.environmentSettings] A list of
     * environment variable settings for the Job Preparation task.
     *
     * @param {object} [job.jobPreparationTask.constraints] Constraints that apply
     * to the Job Preparation task.
     *
     * @param {moment.duration}
     * [job.jobPreparationTask.constraints.maxWallClockTime] The maximum elapsed
     * time that the task may run, measured from the time the task starts. If the
     * task does not complete within the time limit, the Batch service terminates
     * it. If this is not specified, there is no time limit on how long the task
     * may run.
     *
     * @param {moment.duration} [job.jobPreparationTask.constraints.retentionTime]
     * The minimum time to retain the task directory on the compute node where it
     * ran, from the time it completes execution. After this time, the Batch
     * service may delete the task directory and all its contents. The default is
     * infinite, i.e. the task directory will be retained until the compute node is
     * removed or reimaged.
     *
     * @param {number} [job.jobPreparationTask.constraints.maxTaskRetryCount] The
     * maximum number of times the task may be retried. The Batch service retries a
     * task if its exit code is nonzero. Note that this value specifically controls
     * the number of retries. The Batch service will try the task once, and may
     * then retry up to this limit. For example, if the maximum retry count is 3,
     * Batch tries the task up to 4 times (one initial try and 3 retries). If the
     * maximum retry count is 0, the Batch service does not retry the task. If the
     * maximum retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [job.jobPreparationTask.waitForSuccess] Whether the Batch
     * service should wait for the Job Preparation task to complete successfully
     * before scheduling any other tasks of the job on the compute node. A Job
     * Preparation task has completed successfully if it exits with exit code 0. If
     * true and the Job Preparation task fails on a compute node, the Batch service
     * retries the Job Preparation task up to its maximum retry count (as specified
     * in the constraints element). If the task has still not completed
     * successfully after all retries, then the Batch service will not schedule
     * tasks of the job to the compute node. The compute node remains active and
     * eligible to run tasks of other jobs. If false, the Batch service will not
     * wait for the Job Preparation task to complete. In this case, other tasks of
     * the job can start executing on the compute node while the Job Preparation
     * task is still running; and even if the Job Preparation task fails, new tasks
     * will continue to be scheduled on the node. The default value is true.
     *
     * @param {object} [job.jobPreparationTask.userIdentity] The user identity
     * under which the Job Preparation task runs. If omitted, the task runs as a
     * non-administrative user unique to the task on Windows nodes, or a a
     * non-administrative user unique to the pool on Linux nodes.
     *
     * @param {boolean} [job.jobPreparationTask.rerunOnNodeRebootAfterSuccess]
     * Whether the Batch service should rerun the Job Preparation task after a
     * compute node reboots. The Job Preparation task is always rerun if a compute
     * node is reimaged, or if the Job Preparation task did not complete (e.g.
     * because the reboot occurred while the task was running). Therefore, you
     * should always write a Job Preparation task to be idempotent and to behave
     * correctly if run multiple times. The default value is true.
     *
     * @param {object} [job.jobReleaseTask] The Job Release task. A Job Release
     * task cannot be specified without also specifying a Job Preparation task for
     * the job. The Batch service runs the Job Release task on the compute nodes
     * that have run the Job Preparation task. The primary purpose of the Job
     * Release task is to undo changes to compute nodes made by the Job Preparation
     * task. Example activities include deleting local files, or shutting down
     * services that were started as part of job preparation.
     *
     * @param {string} [job.jobReleaseTask.id] A string that uniquely identifies
     * the Job Release task within the job. The ID can contain any combination of
     * alphanumeric characters including hyphens and underscores and cannot contain
     * more than 64 characters. If you do not specify this property, the Batch
     * service assigns a default value of 'jobrelease'. No other task in the job
     * can have the same ID as the Job Release task. If you try to submit a task
     * with the same id, the Batch service rejects the request with error code
     * TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the
     * HTTP status code is 409 (Conflict).
     *
     * @param {string} job.jobReleaseTask.commandLine The command line of the Job
     * Release task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [job.jobReleaseTask.resourceFiles] A list of files that the
     * Batch service will download to the compute node before running the command
     * line. Files listed under this element are located in the task's working
     * directory.
     *
     * @param {array} [job.jobReleaseTask.environmentSettings] A list of
     * environment variable settings for the Job Release task.
     *
     * @param {moment.duration} [job.jobReleaseTask.maxWallClockTime] The maximum
     * elapsed time that the Job Release task may run on a given compute node,
     * measured from the time the task starts. If the task does not complete within
     * the time limit, the Batch service terminates it. The default value is 15
     * minutes. You may not specify a timeout longer than 15 minutes. If you do,
     * the Batch service rejects it with an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {moment.duration} [job.jobReleaseTask.retentionTime] The minimum time
     * to retain the task directory for the Job Release task on the compute node.
     * After this time, the Batch service may delete the task directory and all its
     * contents. The default is infinite, i.e. the task directory will be retained
     * until the compute node is removed or reimaged.
     *
     * @param {object} [job.jobReleaseTask.userIdentity] The user identity under
     * which the Job Release task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {array} [job.commonEnvironmentSettings] The list of common
     * environment variable settings. These environment variables are set for all
     * tasks in the job (including the Job Manager, Job Preparation and Job Release
     * tasks). Individual tasks can override an environment setting specified here
     * by specifying the same setting name with a different value.
     *
     * @param {object} job.poolInfo The pool on which the Batch service runs the
     * job's tasks.
     *
     * @param {string} [job.poolInfo.poolId] The ID of an existing pool. All the
     * tasks of the job will run on the specified pool. You must ensure that the
     * pool referenced by this property exists. If the pool does not exist at the
     * time the Batch service tries to schedule a job, no tasks for the job will
     * run until you create a pool with that id. Note that the Batch service will
     * not reject the job request; it will simply not run tasks until the pool
     * exists. You must specify either the pool ID or the auto pool specification,
     * but not both.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification] Characteristics for a
     * temporary 'auto pool'. The Batch service will create this auto pool when the
     * job is submitted. If auto pool creation fails, the Batch service moves the
     * job to a completed state, and the pool creation error is set in the job's
     * scheduling error property. The Batch service manages the lifetime (both
     * creation and, unless keepAlive is specified, deletion) of the auto pool. Any
     * user actions that affect the lifetime of the auto pool while the job is
     * active will result in unexpected behavior. You must specify either the pool
     * ID or the auto pool specification, but not both.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.autoPoolIdPrefix] A
     * prefix to be added to the unique identifier when a pool is automatically
     * created. The Batch service assigns each auto pool a unique identifier on
     * creation. To distinguish between pools created for different purposes, you
     * can specify this element to add a prefix to the ID that is assigned. The
     * prefix can be up to 20 characters long.
     *
     * @param {string} job.poolInfo.autoPoolSpecification.poolLifetimeOption The
     * minimum lifetime of created auto pools, and how multiple jobs on a schedule
     * are assigned to pools. When the pool lifetime is jobSchedule the pool exists
     * for the lifetime of the job schedule. The Batch Service creates the pool
     * when it creates the first job on the schedule. You may apply this option
     * only to job schedules, not to jobs. When the pool lifetime is job the pool
     * exists for the lifetime of the job to which it is dedicated. The Batch
     * service creates the pool when it creates the job. If the 'job' option is
     * applied to a job schedule, the Batch service creates a new auto pool for
     * every job created on the schedule. Possible values include: 'jobSchedule',
     * 'job'
     *
     * @param {boolean} [job.poolInfo.autoPoolSpecification.keepAlive] Whether to
     * keep an auto pool alive after its lifetime expires. If false, the Batch
     * service deletes the pool once its lifetime (as determined by the
     * poolLifetimeOption setting) expires; that is, when the job or job schedule
     * completes. If true, the Batch service does not delete the pool
     * automatically. It is up to the user to delete auto pools created with this
     * option.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification.pool] The pool
     * specification for the auto pool.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.pool.displayName] The
     * display name for the pool. The display name need not be unique and can
     * contain any Unicode characters up to a maximum length of 1024.
     *
     * @param {string} job.poolInfo.autoPoolSpecification.pool.vmSize The size of
     * the virtual machines in the pool. All virtual machines in a pool are the
     * same size. For information about available sizes of virtual machines for
     * Cloud Services pools (pools created with cloudServiceConfiguration), see
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
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] The
     * cloud service configuration for the pool. This property must be specified if
     * the pool needs to be created with Azure PaaS VMs. This property and
     * virtualMachineConfiguration are mutually exclusive and one of the properties
     * must be specified. If neither is specified then the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request). This property cannot be specified if the Batch account was
     * created with its poolAllocationMode property set to 'UserSubscription'.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily
     * The Azure Guest OS family to be installed on the virtual machines in the
     * pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server
     * 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS
     * Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent
     * to Windows Server 2016. For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
     * The Azure Guest OS version to be installed on the virtual machines in the
     * pool. The default value is * which specifies the latest operating system
     * version for the specified OS family.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
     * The Azure Guest OS Version currently installed on the virtual machines in
     * the pool. This may differ from targetOSVersion if the pool state is
     * Upgrading. In this case some virtual machines may be on the targetOSVersion
     * and some may be on the currentOSVersion during the upgrade process. Once all
     * virtual machines have upgraded, currentOSVersion is updated to be the same
     * as targetOSVersion.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] The
     * virtual machine configuration for the pool. This property must be specified
     * if the pool needs to be created with Azure IaaS VMs. This property and
     * cloudServiceConfiguration are mutually exclusive and one of the properties
     * must be specified. If neither is specified then the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request).
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
     * A reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer
     * The offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku
     * The SKU of the Azure Virtual Machines Marketplace image. For example,
     * 14.04.0-LTS or 2012-R2-Datacenter.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk]
     * A reference to the OS disk image to use. This property can be specified only
     * if the Batch account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array}
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.imageUris
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
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.osDisk.caching]
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
     * job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId
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
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {number} [job.poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
     * The maximum number of tasks that can run concurrently on a single compute
     * node in the pool. The default value is 1. The maximum value of this setting
     * depends on the size of the compute nodes in the pool (the vmSize setting).
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy] How tasks are
     * distributed across compute nodes in a pool.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType
     * How tasks are distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {moment.duration}
     * [job.poolInfo.autoPoolSpecification.pool.resizeTimeout] The timeout for
     * allocation of compute nodes to the pool. This timeout applies only to manual
     * scaling; it has no effect when enableAutoScale is set to true. The default
     * value is 15 minutes. The minimum value is 5 minutes. If you specify a value
     * less than 5 minutes, the Batch service rejects the request with an error; if
     * you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.targetDedicatedNodes] The desired
     * number of dedicated compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] The desired
     * number of low-priority compute nodes in the pool. This property must not be
     * specified if enableAutoScale is set to true. If enableAutoScale is set to
     * false, then you must set either targetDedicatedNodes,
     * targetLowPriorityNodes, or both.
     *
     * @param {boolean} [job.poolInfo.autoPoolSpecification.pool.enableAutoScale]
     * Whether the pool size should automatically adjust over time. If false, at
     * least one of targetDedicateNodes and targetLowPriorityNodes must be
     * specified. If true, the autoScaleFormula element is required. The pool
     * automatically resizes according to the formula. The default value is false.
     *
     * @param {string} [job.poolInfo.autoPoolSpecification.pool.autoScaleFormula]
     * The formula for the desired number of compute nodes in the pool. This
     * property must not be specified if enableAutoScale is set to false. It is
     * required if enableAutoScale is set to true. The formula is checked for
     * validity before the pool is created. If the formula is not valid, the Batch
     * service rejects the request with detailed error information.
     *
     * @param {moment.duration}
     * [job.poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
     * time interval at which to automatically adjust the pool size according to
     * the autoscale formula. The default value is 15 minutes. The minimum and
     * maximum value are 5 minutes and 168 hours respectively. If you specify a
     * value less than 5 minutes or greater than 168 hours, the Batch service
     * rejects the request with an invalid property value error; if you are calling
     * the REST API directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
     * Whether the pool permits direct communication between nodes. Enabling
     * inter-node communication limits the maximum size of the pool due to
     * deployment restrictions on the nodes of the pool. This may result in the
     * pool not reaching its desired size. The default value is false.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration] The network
     * configuration for the pool.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
     * ARM resource identifier of the virtual network subnet which the compute
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
     * [job.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
     * The configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * job.poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools
     * A list of inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object} [job.poolInfo.autoPoolSpecification.pool.startTask] A task
     * to run on each compute node as it joins the pool. The task runs when the
     * node is added to the pool or when the node is restarted.
     *
     * @param {string}
     * job.poolInfo.autoPoolSpecification.pool.startTask.commandLine The command
     * line of the start task. The command line does not run under a shell, and
     * therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] A list of
     * files that the Batch service will download to the compute node before
     * running the command line. Files listed under this element are located in the
     * task's working directory.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.environmentSettings] A
     * list of environment variable settings for the start task.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity] The user
     * identity under which the start task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName]
     * The name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser]
     * The auto user under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The
     * maximum number of times the task may be retried. The Batch service retries a
     * task if its exit code is nonzero. Note that this value specifically controls
     * the number of retries. The Batch service will try the task once, and may
     * then retry up to this limit. For example, if the maximum retry count is 3,
     * Batch tries the task up to 4 times (one initial try and 3 retries). If the
     * maximum retry count is 0, the Batch service does not retry the task. If the
     * maximum retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean}
     * [job.poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] Whether
     * the Batch service should wait for the start task to complete successfully
     * (that is, to exit with exit code 0) before scheduling any tasks on the
     * compute node. If true and the start task fails on a compute node, the Batch
     * service retries the start task up to its maximum retry count
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
     * [job.poolInfo.autoPoolSpecification.pool.certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. For Windows
     * compute nodes, the Batch service installs the certificates to the specified
     * certificate store and location. For Linux compute nodes, the certificates
     * are stored in a directory inside the task working directory and an
     * environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to
     * query for this location. For certificates with visibility of 'remoteUser', a
     * 'certs' directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array}
     * [job.poolInfo.autoPoolSpecification.pool.applicationPackageReferences] The
     * list of application packages to be installed on each compute node in the
     * pool.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.applicationLicenses]
     * The list of application licenses the Batch service will make available on
     * each compute node in the pool. The list of application licenses must be a
     * subset of available Batch service application licenses. If a license is
     * requested which is not supported, pool creation will fail.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.userAccounts] The
     * list of user accounts to be created on each node in the pool.
     *
     * @param {array} [job.poolInfo.autoPoolSpecification.pool.metadata] A list of
     * name-value pairs associated with the pool as metadata. The Batch service
     * does not assign any meaning to metadata; it is solely for the use of user
     * code.
     *
     * @param {string} [job.onAllTasksComplete] The action the Batch service should
     * take when all tasks in the job are in the completed state. Note that if a
     * job contains no tasks, then all tasks are considered complete. This option
     * is therefore most commonly used with a Job Manager task; if you want to use
     * automatic job termination without a Job Manager, you should initially set
     * onAllTasksComplete to noAction and update the job properties to set
     * onAllTasksComplete to terminateJob once you have finished adding tasks.
     * Permitted values are: noAction - do nothing. The job remains active unless
     * terminated or disabled by some other means. terminateJob - terminate the
     * job. The job's terminateReason is set to 'AllTasksComplete'. The default is
     * noAction. Possible values include: 'noAction', 'terminateJob'
     *
     * @param {string} [job.onTaskFailure] The action the Batch service should take
     * when any task in the job fails. A task is considered to have failed if has a
     * failureInfo. A failureInfo is set if the task completes with a non-zero exit
     * code after exhausting its retry count, or if there was an error starting the
     * task, for example due to a resource file download error. noAction - do
     * nothing. performExitOptionsJobAction - take the action associated with the
     * task exit condition in the task's exitConditions collection. (This may still
     * result in no action being taken, if that is what the task specifies.) The
     * default is noAction. Possible values include: 'noAction',
     * 'performExitOptionsJobAction'
     *
     * @param {array} [job.metadata] A list of name-value pairs associated with the
     * job as metadata. The Batch service does not assign any meaning to metadata;
     * it is solely for the use of user code.
     *
     * @param {boolean} [job.usesTaskDependencies] Whether tasks in the job can
     * define dependencies on each other. The default is false.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.jobAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobAddOptions.clientRequestId] The caller-generated
     * request identity, in the form of a GUID with no decoration such as curly
     * braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobAddOptions.ocpDate] The time the request was
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
    add(job: Models.JobAddParameter): Promise<void>;
    add(job: Models.JobAddParameter, options: {
        jobAddOptions?: Models.JobAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    add(job: Models.JobAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(job: Models.JobAddParameter, options: {
        jobAddOptions?: Models.JobAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.jobListOptions.select] An OData $select clause.
     *
     * @param {string} [options.jobListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.jobListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 jobs can be returned.
     *
     * @param {number} [options.jobListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.jobListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListOptions.ocpDate] The time the request was
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
     *                      {CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudJobListResult>;
    list(options: {
        jobListOptions?: Models.JobListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    list(options: {
        jobListOptions?: Models.JobListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} jobScheduleId The ID of the job schedule from which you want
     * to get a list of jobs.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListFromJobScheduleOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.jobListFromJobScheduleOptions.filter] An OData
     * $filter clause.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.select] An OData
     * $select clause.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.expand] An OData
     * $expand clause.
     *
     * @param {number} [options.jobListFromJobScheduleOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 jobs
     * can be returned.
     *
     * @param {number} [options.jobListFromJobScheduleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.jobListFromJobScheduleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListFromJobScheduleOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListFromJobScheduleOptions.ocpDate] The time the
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
     *                      {CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromJobSchedule(jobScheduleId: string): Promise<Models.CloudJobListResult>;
    listFromJobSchedule(jobScheduleId: string, options: {
        jobListFromJobScheduleOptions?: Models.JobListFromJobScheduleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListResult>;
    listFromJobSchedule(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listFromJobSchedule(jobScheduleId: string, options: {
        jobListFromJobScheduleOptions?: Models.JobListFromJobScheduleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListPreparationAndReleaseTaskStatusOptions]
     * Additional parameters for the operation
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.filter] An OData
     * $filter clause. To get the status of the Job Preparation and Job Release
     * tasks on a specific compute node, use "nodeId eq '{desired-node-id}'"
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.select] An OData
     * $select clause.
     *
     * @param {number}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.maxResults] The
     * maximum number of items to return in the response. A maximum of 1000 tasks
     * can be returned.
     *
     * @param {number}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date}
     * [options.jobListPreparationAndReleaseTaskStatusOptions.ocpDate] The time the
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
     *                      {CloudJobListPreparationAndReleaseTaskStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      CloudJobListPreparationAndReleaseTaskStatusResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listPreparationAndReleaseTaskStatus(jobId: string): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatus(jobId: string, options: {
        jobListPreparationAndReleaseTaskStatusOptions?: Models.JobListPreparationAndReleaseTaskStatusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatus(jobId: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
    listPreparationAndReleaseTaskStatus(jobId: string, options: {
        jobListPreparationAndReleaseTaskStatusOptions?: Models.JobListPreparationAndReleaseTaskStatusOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobGetTaskCountsOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.jobGetTaskCountsOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.jobGetTaskCountsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobGetTaskCountsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobGetTaskCountsOptions.ocpDate] The time the request
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
     *                      {TaskCounts} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link TaskCounts} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getTaskCounts(jobId: string): Promise<Models.TaskCounts>;
    getTaskCounts(jobId: string, options: {
        jobGetTaskCountsOptions?: Models.JobGetTaskCountsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.TaskCounts>;
    getTaskCounts(jobId: string, callback: msRest.ServiceCallback<Models.TaskCounts>): void;
    getTaskCounts(jobId: string, options: {
        jobGetTaskCountsOptions?: Models.JobGetTaskCountsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.TaskCounts>): void;
    /**
     * @summary Lists all of the jobs in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.jobListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.jobListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListNextOptions.ocpDate] The time the request was
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
     *                      {CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudJobListResult>;
    listNext(nextPageLink: string, options: {
        jobListNextOptions?: Models.JobListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listNext(nextPageLink: string, options: {
        jobListNextOptions?: Models.JobListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    /**
     * @summary Lists the jobs that have been created under the specified job
     * schedule.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListFromJobScheduleNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.jobListFromJobScheduleNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListFromJobScheduleNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.jobListFromJobScheduleNextOptions.ocpDate] The time
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
     *                      {CloudJobListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudJobListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listFromJobScheduleNext(nextPageLink: string): Promise<Models.CloudJobListResult>;
    listFromJobScheduleNext(nextPageLink: string, options: {
        jobListFromJobScheduleNextOptions?: Models.JobListFromJobScheduleNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListResult>;
    listFromJobScheduleNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
    listFromJobScheduleNext(nextPageLink: string, options: {
        jobListFromJobScheduleNextOptions?: Models.JobListFromJobScheduleNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.jobListPreparationAndReleaseTaskStatusNextOptions]
     * Additional parameters for the operation
     *
     * @param {string}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date}
     * [options.jobListPreparationAndReleaseTaskStatusNextOptions.ocpDate] The time
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
     *                      {CloudJobListPreparationAndReleaseTaskStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link
     *                      CloudJobListPreparationAndReleaseTaskStatusResult} for
     *                      more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options: {
        jobListPreparationAndReleaseTaskStatusNextOptions?: Models.JobListPreparationAndReleaseTaskStatusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudJobListPreparationAndReleaseTaskStatusResult>;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
    listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options: {
        jobListPreparationAndReleaseTaskStatusNextOptions?: Models.JobListPreparationAndReleaseTaskStatusNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
}
