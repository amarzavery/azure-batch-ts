import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a Pool. */
export declare class Pool {
    private readonly client;
    /**
     * Create a Pool.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListUsageMetricsOptions] Additional parameters
     * for the operation
     *
     * @param {date} [options.poolListUsageMetricsOptions.startTime] The earliest
     * time from which to include metrics. This must be at least two and a half
     * hours before the current time. If not specified this defaults to the start
     * time of the last aggregation interval currently available.
     *
     * @param {date} [options.poolListUsageMetricsOptions.endTime] The latest time
     * from which to include metrics. This must be at least two hours before the
     * current time. If not specified this defaults to the end time of the last
     * aggregation interval currently available.
     *
     * @param {string} [options.poolListUsageMetricsOptions.filter] An OData
     * $filter clause. If this is not specified the response includes all pools
     * that existed in the account in the time range of the returned aggregation
     * intervals.
     *
     * @param {number} [options.poolListUsageMetricsOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 results will be
     * returned.
     *
     * @param {number} [options.poolListUsageMetricsOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolListUsageMetricsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListUsageMetricsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListUsageMetricsOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<PoolListUsageMetricsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listUsageMetricsWithHttpOperationResponse(options?: {
        poolListUsageMetricsOptions?: Models.PoolListUsageMetricsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets lifetime summary statistics for all of the pools in the
     * specified account.
     *
     * Statistics are aggregated across all pools that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolGetAllLifetimeStatisticsOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.poolGetAllLifetimeStatisticsOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string}
     * [options.poolGetAllLifetimeStatisticsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolGetAllLifetimeStatisticsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolGetAllLifetimeStatisticsOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<PoolStatistics>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getAllLifetimeStatisticsWithHttpOperationResponse(options?: {
        poolGetAllLifetimeStatisticsOptions?: Models.PoolGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a pool to the specified account.
     *
     * When naming pools, avoid including sensitive information such as user names
     * or secret project names. This information may appear in telemetry logs
     * accessible to Microsoft Support engineers.
     *
     * @param {object} pool The pool to be added.
     *
     * @param {string} pool.id A string that uniquely identifies the pool within
     * the account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two pool IDs within an account that differ only by case).
     *
     * @param {string} [pool.displayName] The display name for the pool. The
     * display name need not be unique and can contain any Unicode characters up to
     * a maximum length of 1024.
     *
     * @param {string} pool.vmSize The size of virtual machines in the pool. All
     * virtual machines in a pool are the same size. For information about
     * available sizes of virtual machines for Cloud Services pools (pools created
     * with cloudServiceConfiguration), see Sizes for Cloud Services
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
     * @param {object} [pool.cloudServiceConfiguration] The cloud service
     * configuration for the pool. This property and virtualMachineConfiguration
     * are mutually exclusive and one of the properties must be specified. This
     * property cannot be specified if the Batch account was created with its
     * poolAllocationMode property set to 'UserSubscription'.
     *
     * @param {string} pool.cloudServiceConfiguration.osFamily The Azure Guest OS
     * family to be installed on the virtual machines in the pool. Possible values
     * are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS
     * Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to
     * Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016.
     * For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string} [pool.cloudServiceConfiguration.targetOSVersion] The Azure
     * Guest OS version to be installed on the virtual machines in the pool. The
     * default value is * which specifies the latest operating system version for
     * the specified OS family.
     *
     * @param {string} [pool.cloudServiceConfiguration.currentOSVersion] The Azure
     * Guest OS Version currently installed on the virtual machines in the pool.
     * This may differ from targetOSVersion if the pool state is Upgrading. In this
     * case some virtual machines may be on the targetOSVersion and some may be on
     * the currentOSVersion during the upgrade process. Once all virtual machines
     * have upgraded, currentOSVersion is updated to be the same as
     * targetOSVersion.
     *
     * @param {object} [pool.virtualMachineConfiguration] The virtual machine
     * configuration for the pool. This property and cloudServiceConfiguration are
     * mutually exclusive and one of the properties must be specified.
     *
     * @param {object} [pool.virtualMachineConfiguration.imageReference] A
     * reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.offer The
     * offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.sku The SKU
     * of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or
     * 2012-R2-Datacenter.
     *
     * @param {string} [pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object} [pool.virtualMachineConfiguration.osDisk] A reference to the
     * OS disk image to use. This property can be specified only if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array} pool.virtualMachineConfiguration.osDisk.imageUris The
     * collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be identical
     * and must reside in an Azure Storage account within the same subscription and
     * same region as the Batch account. For best performance, it is recommended
     * that each VHD resides in a separate Azure Storage account. Each VHD can
     * serve upto 20 Windows compute nodes or 40 Linux compute nodes. You must
     * supply enough VHD URIs to satisfy the 'targetDedicated' property of the
     * pool. If you do not supply enough VHD URIs, the pool will partially allocate
     * compute nodes, and a resize error will occur.
     *
     * @param {string} [pool.virtualMachineConfiguration.osDisk.caching] The type
     * of caching to enable for the OS disk. Values are:
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
     * @param {string} pool.virtualMachineConfiguration.nodeAgentSKUId The SKU of
     * the Batch node agent to be provisioned on compute nodes in the pool. The
     * Batch node agent is a program that runs on each node in the pool, and
     * provides the command-and-control interface between the node and the Batch
     * service. There are different implementations of the node agent, known as
     * SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object} [pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {moment.duration} [pool.resizeTimeout] The timeout for allocation of
     * compute nodes to the pool. This timeout applies only to manual scaling; it
     * has no effect when enableAutoScale is set to true. The default value is 15
     * minutes. The minimum value is 5 minutes. If you specify a value less than 5
     * minutes, the Batch service returns an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {number} [pool.targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to true. If enableAutoScale is set to false, then you
     * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     *
     * @param {number} [pool.targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool. This property must not be specified
     * if enableAutoScale is set to true. If enableAutoScale is set to false, then
     * you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     *
     * @param {boolean} [pool.enableAutoScale] Whether the pool size should
     * automatically adjust over time. If false, at least one of
     * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
     * the autoScaleFormula property is required and the pool automatically resizes
     * according to the formula. The default value is false.
     *
     * @param {string} [pool.autoScaleFormula] A formula for the desired number of
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to false. It is required if enableAutoScale is set to
     * true. The formula is checked for validity before the pool is created. If the
     * formula is not valid, the Batch service rejects the request with detailed
     * error information. For more information about specifying this formula, see
     * 'Automatically scale compute nodes in an Azure Batch pool'
     * (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
     *
     * @param {moment.duration} [pool.autoScaleEvaluationInterval] The time
     * interval at which to automatically adjust the pool size according to the
     * autoscale formula. The default value is 15 minutes. The minimum and maximum
     * value are 5 minutes and 168 hours respectively. If you specify a value less
     * than 5 minutes or greater than 168 hours, the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request).
     *
     * @param {boolean} [pool.enableInterNodeCommunication] Whether the pool
     * permits direct communication between nodes. Enabling inter-node
     * communication limits the maximum size of the pool due to deployment
     * restrictions on the nodes of the pool. This may result in the pool not
     * reaching its desired size. The default value is false.
     *
     * @param {object} [pool.networkConfiguration] The network configuration for
     * the pool.
     *
     * @param {string} [pool.networkConfiguration.subnetId] The ARM resource
     * identifier of the virtual network subnet which the compute nodes of the pool
     * will join. This is of the form
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
     * @param {object} [pool.networkConfiguration.endpointConfiguration] The
     * configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * pool.networkConfiguration.endpointConfiguration.inboundNATPools A list of
     * inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object} [pool.startTask] A task specified to run on each compute
     * node as it joins the pool. The task runs when the node is added to the pool
     * or when the node is restarted.
     *
     * @param {string} pool.startTask.commandLine The command line of the start
     * task. The command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in the
     * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
     * MyCommand" in Linux.
     *
     * @param {array} [pool.startTask.resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working directory.
     *
     * @param {array} [pool.startTask.environmentSettings] A list of environment
     * variable settings for the start task.
     *
     * @param {object} [pool.startTask.userIdentity] The user identity under which
     * the start task runs. If omitted, the task runs as a non-administrative user
     * unique to the task.
     *
     * @param {string} [pool.startTask.userIdentity.userName] The name of the user
     * identity under which the task is run. The userName and autoUser properties
     * are mutually exclusive; you must specify one but not both.
     *
     * @param {object} [pool.startTask.userIdentity.autoUser] The auto user under
     * which the task is run. The userName and autoUser properties are mutually
     * exclusive; you must specify one but not both.
     *
     * @param {string} [pool.startTask.userIdentity.autoUser.scope] The scope for
     * the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string} [pool.startTask.userIdentity.autoUser.elevationLevel] The
     * elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [pool.startTask.maxTaskRetryCount] The maximum number of
     * times the task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try the task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [pool.startTask.waitForSuccess] Whether the Batch service
     * should wait for the start task to complete successfully (that is, to exit
     * with exit code 0) before scheduling any tasks on the compute node. If true
     * and the start task fails on a compute node, the Batch service retries the
     * start task up to its maximum retry count (maxTaskRetryCount). If the task
     * has still not completed successfully after all retries, then the Batch
     * service marks the compute node unusable, and will not schedule tasks to it.
     * This condition can be detected via the node state and failure info details.
     * If false, the Batch service will not wait for the start task to complete. In
     * this case, other tasks can start executing on the compute node while the
     * start task is still running; and even if the start task fails, new tasks
     * will continue to be scheduled on the node. The default is false.
     *
     * @param {array} [pool.certificateReferences] The list of certificates to be
     * installed on each compute node in the pool. For Windows compute nodes, the
     * Batch service installs the certificates to the specified certificate store
     * and location. For Linux compute nodes, the certificates are stored in a
     * directory inside the task working directory and an environment variable
     * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
     * location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array} [pool.applicationPackageReferences] The list of application
     * packages to be installed on each compute node in the pool.
     *
     * @param {array} [pool.applicationLicenses] The list of application licenses
     * the Batch service will make available on each compute node in the pool. The
     * list of application licenses must be a subset of available Batch service
     * application licenses. If a license is requested which is not supported, pool
     * creation will fail.
     *
     * @param {number} [pool.maxTasksPerNode] The maximum number of tasks that can
     * run concurrently on a single compute node in the pool. The default value is
     * 1. The maximum value of this setting depends on the size of the compute
     * nodes in the pool (the vmSize setting).
     *
     * @param {object} [pool.taskSchedulingPolicy] How tasks are distributed across
     * compute nodes in a pool.
     *
     * @param {string} pool.taskSchedulingPolicy.nodeFillType How tasks are
     * distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {array} [pool.userAccounts] The list of user accounts to be created
     * on each node in the pool.
     *
     * @param {array} [pool.metadata] A list of name-value pairs associated with
     * the pool as metadata. The Batch service does not assign any meaning to
     * metadata; it is solely for the use of user code.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolAddOptions.ocpDate] The time the request was
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
    addWithHttpOperationResponse(pool: Models.PoolAddParameter, options?: {
        poolAddOptions?: Models.PoolAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.poolListOptions.select] An OData $select clause.
     *
     * @param {string} [options.poolListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.poolListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 pools can be returned.
     *
     * @param {number} [options.poolListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudPoolListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        poolListOptions?: Models.PoolListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes a pool from the specified account.
     *
     * When you request that a pool be deleted, the following actions occur: the
     * pool state is set to deleting; any ongoing resize operation on the pool are
     * stopped; the Batch service starts resizing the pool to zero nodes; any tasks
     * running on existing nodes are terminated and requeued (as if a resize pool
     * operation had been requested with the default requeue option); finally, the
     * pool is removed from the system. Because running tasks are requeued, the
     * user can rerun these tasks by updating their job to target a different pool.
     * The tasks can then run on the new pool. If you want to override the requeue
     * behavior, then you should call resize pool explicitly to shrink the pool to
     * zero size before deleting the pool. If you call an Update, Patch or Delete
     * API on a pool in the deleting state, it will fail with HTTP status code 409
     * with error code PoolBeingDeleted.
     *
     * @param {string} poolId The ID of the pool to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethodWithHttpOperationResponse(poolId: string, options?: {
        poolDeleteMethodOptions?: Models.PoolDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets basic properties of a pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolExistsOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolExistsOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolExistsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolExistsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolExistsOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolExistsOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolExistsOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolExistsOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolExistsOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
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
    existsWithHttpOperationResponse(poolId: string, options?: {
        poolExistsOptions?: Models.PoolExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.poolGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.poolGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolGetOptions.ifUnmodifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has not been
     * modified since the specified time.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudPool>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(poolId: string, options?: {
        poolGetOptions?: Models.PoolGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This only replaces the pool properties specified in the request. For
     * example, if the pool has a start task associated with it, and a request does
     * not specify a start task element, then the pool keeps the existing start
     * task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {object} poolPatchParameter The parameters for the request.
     *
     * @param {object} [poolPatchParameter.startTask] A task to run on each compute
     * node as it joins the pool. The task runs when the node is added to the pool
     * or when the node is restarted. If this element is present, it overwrites any
     * existing start task. If omitted, any existing start task is left unchanged.
     *
     * @param {string} poolPatchParameter.startTask.commandLine The command line of
     * the start task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [poolPatchParameter.startTask.resourceFiles] A list of files
     * that the Batch service will download to the compute node before running the
     * command line. Files listed under this element are located in the task's
     * working directory.
     *
     * @param {array} [poolPatchParameter.startTask.environmentSettings] A list of
     * environment variable settings for the start task.
     *
     * @param {object} [poolPatchParameter.startTask.userIdentity] The user
     * identity under which the start task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {string} [poolPatchParameter.startTask.userIdentity.userName] The
     * name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object} [poolPatchParameter.startTask.userIdentity.autoUser] The
     * auto user under which the task is run. The userName and autoUser properties
     * are mutually exclusive; you must specify one but not both.
     *
     * @param {string} [poolPatchParameter.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [poolPatchParameter.startTask.userIdentity.autoUser.elevationLevel] The
     * elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [poolPatchParameter.startTask.maxTaskRetryCount] The maximum
     * number of times the task may be retried. The Batch service retries a task if
     * its exit code is nonzero. Note that this value specifically controls the
     * number of retries. The Batch service will try the task once, and may then
     * retry up to this limit. For example, if the maximum retry count is 3, Batch
     * tries the task up to 4 times (one initial try and 3 retries). If the maximum
     * retry count is 0, the Batch service does not retry the task. If the maximum
     * retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [poolPatchParameter.startTask.waitForSuccess] Whether the
     * Batch service should wait for the start task to complete successfully (that
     * is, to exit with exit code 0) before scheduling any tasks on the compute
     * node. If true and the start task fails on a compute node, the Batch service
     * retries the start task up to its maximum retry count (maxTaskRetryCount). If
     * the task has still not completed successfully after all retries, then the
     * Batch service marks the compute node unusable, and will not schedule tasks
     * to it. This condition can be detected via the node state and failure info
     * details. If false, the Batch service will not wait for the start task to
     * complete. In this case, other tasks can start executing on the compute node
     * while the start task is still running; and even if the start task fails, new
     * tasks will continue to be scheduled on the node. The default is false.
     *
     * @param {array} [poolPatchParameter.certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. If this
     * element is present, it replaces any existing certificate references
     * configured on the pool. If omitted, any existing certificate references are
     * left unchanged. For Windows compute nodes, the Batch service installs the
     * certificates to the specified certificate store and location. For Linux
     * compute nodes, the certificates are stored in a directory inside the task
     * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
     * supplied to the task to query for this location. For certificates with
     * visibility of 'remoteUser', a 'certs' directory is created in the user's
     * home directory (e.g., /home/{user-name}/certs) and certificates are placed
     * in that directory.
     *
     * @param {array} [poolPatchParameter.applicationPackageReferences] A list of
     * application packages to be installed on each compute node in the pool.
     * Changes to application package references affect all new compute nodes
     * joining the pool, but do not affect compute nodes that are already in the
     * pool until they are rebooted or reimaged. If this element is present, it
     * replaces any existing application package references. If you specify an
     * empty collection, then all application package references are removed from
     * the pool. If omitted, any existing application package references are left
     * unchanged.
     *
     * @param {array} [poolPatchParameter.metadata] A list of name-value pairs
     * associated with the pool as metadata. If this element is present, it
     * replaces any existing metadata configured on the pool. If you specify an
     * empty collection, any metadata is removed from the pool. If omitted, any
     * existing metadata is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolPatchOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolPatchOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolPatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolPatchOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolPatchOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolPatchOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolPatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolPatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolPatchOptions.ifUnmodifiedSince] A timestamp
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
    patchWithHttpOperationResponse(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options?: {
        poolPatchOptions?: Models.PoolPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Disables automatic scaling for a pool.
     *
     * @param {string} poolId The ID of the pool on which to disable automatic
     * scaling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolDisableAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolDisableAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolDisableAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolDisableAutoScaleOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolDisableAutoScaleOptions.ocpDate] The time the
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
    disableAutoScaleWithHttpOperationResponse(poolId: string, options?: {
        poolDisableAutoScaleOptions?: Models.PoolDisableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Enables automatic scaling for a pool.
     *
     * You cannot enable automatic scaling on a pool if a resize operation is in
     * progress on the pool. If automatic scaling of the pool is currently
     * disabled, you must specify a valid autoscale formula as part of the request.
     * If automatic scaling of the pool is already enabled, you may specify a new
     * autoscale formula and/or a new evaluation interval. You cannot call this API
     * for the same pool more than once every 30 seconds.
     *
     * @param {string} poolId The ID of the pool on which to enable automatic
     * scaling.
     *
     * @param {object} poolEnableAutoScaleParameter The parameters for the request.
     *
     * @param {string} [poolEnableAutoScaleParameter.autoScaleFormula] The formula
     * for the desired number of compute nodes in the pool. The formula is checked
     * for validity before it is applied to the pool. If the formula is not valid,
     * the Batch service rejects the request with detailed error information. For
     * more information about specifying this formula, see Automatically scale
     * compute nodes in an Azure Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {moment.duration}
     * [poolEnableAutoScaleParameter.autoScaleEvaluationInterval] The time interval
     * at which to automatically adjust the pool size according to the autoscale
     * formula. The default value is 15 minutes. The minimum and maximum value are
     * 5 minutes and 168 hours respectively. If you specify a value less than 5
     * minutes or greater than 168 hours, the Batch service rejects the request
     * with an invalid property value error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request). If you specify a new
     * interval, then the existing autoscale evaluation schedule will be stopped
     * and a new autoscale evaluation schedule will be started, with its starting
     * time being the time when this request was issued.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolEnableAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolEnableAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolEnableAutoScaleOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ifUnmodifiedSince] A
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
    enableAutoScaleWithHttpOperationResponse(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options?: {
        poolEnableAutoScaleOptions?: Models.PoolEnableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets the result of evaluating an automatic scaling formula on the
     * pool.
     *
     * This API is primarily for validating an autoscale formula, as it simply
     * returns the result without applying the formula to the pool. The pool must
     * have auto scaling enabled in order to evaluate a formula.
     *
     * @param {string} poolId The ID of the pool on which to evaluate the automatic
     * scaling formula.
     *
     * @param {string} autoScaleFormula The formula for the desired number of
     * compute nodes in the pool. The formula is validated and its results
     * calculated, but it is not applied to the pool. To apply the formula to the
     * pool, 'Enable automatic scaling on a pool'. For more information about
     * specifying this formula, see Automatically scale compute nodes in an Azure
     * Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolEvaluateAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolEvaluateAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolEvaluateAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolEvaluateAutoScaleOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolEvaluateAutoScaleOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutoScaleRun>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    evaluateAutoScaleWithHttpOperationResponse(poolId: string, autoScaleFormula: string, options?: {
        poolEvaluateAutoScaleOptions?: Models.PoolEvaluateAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Changes the number of compute nodes that are assigned to a pool.
     *
     * You can only resize a pool when its allocation state is steady. If the pool
     * is already resizing, the request fails with status code 409. When you resize
     * a pool, the pool's allocation state changes from steady to resizing. You
     * cannot resize pools which are configured for automatic scaling. If you try
     * to do this, the Batch service returns an error 409. If you resize a pool
     * downwards, the Batch service chooses which nodes to remove. To remove
     * specific nodes, use the pool remove nodes API instead.
     *
     * @param {string} poolId The ID of the pool to resize.
     *
     * @param {object} poolResizeParameter The parameters for the request.
     *
     * @param {number} [poolResizeParameter.targetDedicatedNodes] The desired
     * number of dedicated compute nodes in the pool.
     *
     * @param {number} [poolResizeParameter.targetLowPriorityNodes] The desired
     * number of low-priority compute nodes in the pool.
     *
     * @param {moment.duration} [poolResizeParameter.resizeTimeout] The timeout for
     * allocation of compute nodes to the pool or removal of compute nodes from the
     * pool. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service returns an error;
     * if you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {string} [poolResizeParameter.nodeDeallocationOption] Determines what
     * to do with a node and its running task(s) if the pool size is decreasing.
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolResizeOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolResizeOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolResizeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolResizeOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolResizeOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolResizeOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolResizeOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolResizeOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolResizeOptions.ifUnmodifiedSince] A timestamp
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
    resizeWithHttpOperationResponse(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options?: {
        poolResizeOptions?: Models.PoolResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Stops an ongoing resize operation on the pool.
     *
     * This does not restore the pool to its previous state before the resize
     * operation: it only stops any further changes being made, and the pool
     * maintains its current state. After stopping, the pool stabilizes at the
     * number of nodes it was at when the stop operation was done. During the stop
     * operation, the pool allocation state changes first to stopping and then to
     * steady. A resize operation need not be an explicit resize pool request; this
     * API can also be used to halt the initial sizing of the pool when it is
     * created.
     *
     * @param {string} poolId The ID of the pool whose resizing you want to stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolStopResizeOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolStopResizeOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolStopResizeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolStopResizeOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolStopResizeOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolStopResizeOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolStopResizeOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolStopResizeOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolStopResizeOptions.ifUnmodifiedSince] A timestamp
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
    stopResizeWithHttpOperationResponse(poolId: string, options?: {
        poolStopResizeOptions?: Models.PoolStopResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This fully replaces all the updateable properties of the pool. For example,
     * if the pool has a start task associated with it and if start task is not
     * specified with this request, then the Batch service will remove the existing
     * start task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {object} poolUpdatePropertiesParameter The parameters for the
     * request.
     *
     * @param {object} [poolUpdatePropertiesParameter.startTask] A task to run on
     * each compute node as it joins the pool. The task runs when the node is added
     * to the pool or when the node is restarted. If this element is present, it
     * overwrites any existing start task. If omitted, any existing start task is
     * removed from the pool.
     *
     * @param {string} poolUpdatePropertiesParameter.startTask.commandLine The
     * command line of the start task. The command line does not run under a shell,
     * and therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [poolUpdatePropertiesParameter.startTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array} [poolUpdatePropertiesParameter.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object} [poolUpdatePropertiesParameter.startTask.userIdentity] The
     * user identity under which the start task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.userName] The name of
     * the user identity under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {object}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser] The auto
     * user under which the task is run. The userName and autoUser properties are
     * mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser.scope] The
     * scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [poolUpdatePropertiesParameter.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean} [poolUpdatePropertiesParameter.startTask.waitForSuccess]
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
     * @param {array} poolUpdatePropertiesParameter.certificateReferences A list of
     * certificates to be installed on each compute node in the pool. This list
     * replaces any existing certificate references configured on the pool. If you
     * specify an empty collection, any existing certificate references are removed
     * from the pool. For Windows compute nodes, the Batch service installs the
     * certificates to the specified certificate store and location. For Linux
     * compute nodes, the certificates are stored in a directory inside the task
     * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
     * supplied to the task to query for this location. For certificates with
     * visibility of 'remoteUser', a 'certs' directory is created in the user's
     * home directory (e.g., /home/{user-name}/certs) and certificates are placed
     * in that directory.
     *
     * @param {array} poolUpdatePropertiesParameter.applicationPackageReferences A
     * list of application packages to be installed on each compute node in the
     * pool. The list replaces any existing application package references on the
     * pool. Changes to application package references affect all new compute nodes
     * joining the pool, but do not affect compute nodes that are already in the
     * pool until they are rebooted or reimaged. If omitted, or if you specify an
     * empty collection, any existing application packages references are removed
     * from the pool.
     *
     * @param {array} poolUpdatePropertiesParameter.metadata A list of name-value
     * pairs associated with the pool as metadata. This list replaces any existing
     * metadata configured on the pool. If omitted, or if you specify an empty
     * collection, any existing metadata is removed from the pool.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolUpdatePropertiesOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolUpdatePropertiesOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolUpdatePropertiesOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolUpdatePropertiesOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolUpdatePropertiesOptions.ocpDate] The time the
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
    updatePropertiesWithHttpOperationResponse(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options?: {
        poolUpdatePropertiesOptions?: Models.PoolUpdatePropertiesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Upgrades the operating system of the specified pool.
     *
     * During an upgrade, the Batch service upgrades each compute node in the pool.
     * When a compute node is chosen for upgrade, any tasks running on that node
     * are removed from the node and returned to the queue to be rerun later (or on
     * a different compute node). The node will be unavailable until the upgrade is
     * complete. This operation results in temporarily reduced pool capacity as
     * nodes are taken out of service to be upgraded. Although the Batch service
     * tries to avoid upgrading all compute nodes at the same time, it does not
     * guarantee to do this (particularly on small pools); therefore, the pool may
     * be temporarily unavailable to run tasks. When this operation runs, the pool
     * state changes to upgrading. When all compute nodes have finished upgrading,
     * the pool state returns to active. While the upgrade is in progress, the
     * pool's currentOSVersion reflects the OS version that nodes are upgrading
     * from, and targetOSVersion reflects the OS version that nodes are upgrading
     * to. Once the upgrade is complete, currentOSVersion is updated to reflect the
     * OS version now running on all nodes. This operation can only be invoked on
     * pools created with the cloudServiceConfiguration property.
     *
     * @param {string} poolId The ID of the pool to upgrade.
     *
     * @param {string} targetOSVersion The Azure Guest OS version to be installed
     * on the virtual machines in the pool.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolUpgradeOSOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolUpgradeOSOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolUpgradeOSOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolUpgradeOSOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolUpgradeOSOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolUpgradeOSOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolUpgradeOSOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolUpgradeOSOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolUpgradeOSOptions.ifUnmodifiedSince] A timestamp
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
    upgradeOSWithHttpOperationResponse(poolId: string, targetOSVersion: string, options?: {
        poolUpgradeOSOptions?: Models.PoolUpgradeOSOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Removes compute nodes from the specified pool.
     *
     * This operation can only run when the allocation state of the pool is steady.
     * When this operation runs, the allocation state changes from steady to
     * resizing.
     *
     * @param {string} poolId The ID of the pool from which you want to remove
     * nodes.
     *
     * @param {object} nodeRemoveParameter The parameters for the request.
     *
     * @param {array} nodeRemoveParameter.nodeList A list containing the IDs of the
     * compute nodes to be removed from the specified pool.
     *
     * @param {moment.duration} [nodeRemoveParameter.resizeTimeout] The timeout for
     * removal of compute nodes to the pool. The default value is 15 minutes. The
     * minimum value is 5 minutes. If you specify a value less than 5 minutes, the
     * Batch service returns an error; if you are calling the REST API directly,
     * the HTTP status code is 400 (Bad Request).
     *
     * @param {string} [nodeRemoveParameter.nodeDeallocationOption] Determines what
     * to do with a node and its running task(s) after it has been selected for
     * deallocation. The default value is requeue. Possible values include:
     * 'requeue', 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolRemoveNodesOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolRemoveNodesOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolRemoveNodesOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolRemoveNodesOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolRemoveNodesOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolRemoveNodesOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolRemoveNodesOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolRemoveNodesOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolRemoveNodesOptions.ifUnmodifiedSince] A timestamp
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
    removeNodesWithHttpOperationResponse(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options?: {
        poolRemoveNodesOptions?: Models.PoolRemoveNodesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListUsageMetricsNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.poolListUsageMetricsNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolListUsageMetricsNextOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListUsageMetricsNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<PoolListUsageMetricsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listUsageMetricsNextWithHttpOperationResponse(nextPageLink: string, options?: {
        poolListUsageMetricsNextOptions?: Models.PoolListUsageMetricsNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListNextOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CloudPoolListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        poolListNextOptions?: Models.PoolListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListUsageMetricsOptions] Additional parameters
     * for the operation
     *
     * @param {date} [options.poolListUsageMetricsOptions.startTime] The earliest
     * time from which to include metrics. This must be at least two and a half
     * hours before the current time. If not specified this defaults to the start
     * time of the last aggregation interval currently available.
     *
     * @param {date} [options.poolListUsageMetricsOptions.endTime] The latest time
     * from which to include metrics. This must be at least two hours before the
     * current time. If not specified this defaults to the end time of the last
     * aggregation interval currently available.
     *
     * @param {string} [options.poolListUsageMetricsOptions.filter] An OData
     * $filter clause. If this is not specified the response includes all pools
     * that existed in the account in the time range of the returned aggregation
     * intervals.
     *
     * @param {number} [options.poolListUsageMetricsOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 results will be
     * returned.
     *
     * @param {number} [options.poolListUsageMetricsOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolListUsageMetricsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListUsageMetricsOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListUsageMetricsOptions.ocpDate] The time the
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
     *                      {PoolListUsageMetricsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link PoolListUsageMetricsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsageMetrics(): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetrics(options: {
        poolListUsageMetricsOptions?: Models.PoolListUsageMetricsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetrics(callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    listUsageMetrics(options: {
        poolListUsageMetricsOptions?: Models.PoolListUsageMetricsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    /**
     * @summary Gets lifetime summary statistics for all of the pools in the
     * specified account.
     *
     * Statistics are aggregated across all pools that have ever existed in the
     * account, from account creation to the last update time of the statistics.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolGetAllLifetimeStatisticsOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.poolGetAllLifetimeStatisticsOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string}
     * [options.poolGetAllLifetimeStatisticsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolGetAllLifetimeStatisticsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolGetAllLifetimeStatisticsOptions.ocpDate] The time
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
     *                      {PoolStatistics} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link PoolStatistics} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getAllLifetimeStatistics(): Promise<Models.PoolStatistics>;
    getAllLifetimeStatistics(options: {
        poolGetAllLifetimeStatisticsOptions?: Models.PoolGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.PoolStatistics>;
    getAllLifetimeStatistics(callback: msRest.ServiceCallback<Models.PoolStatistics>): void;
    getAllLifetimeStatistics(options: {
        poolGetAllLifetimeStatisticsOptions?: Models.PoolGetAllLifetimeStatisticsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.PoolStatistics>): void;
    /**
     * @summary Adds a pool to the specified account.
     *
     * When naming pools, avoid including sensitive information such as user names
     * or secret project names. This information may appear in telemetry logs
     * accessible to Microsoft Support engineers.
     *
     * @param {object} pool The pool to be added.
     *
     * @param {string} pool.id A string that uniquely identifies the pool within
     * the account. The ID can contain any combination of alphanumeric characters
     * including hyphens and underscores, and cannot contain more than 64
     * characters. The ID is case-preserving and case-insensitive (that is, you may
     * not have two pool IDs within an account that differ only by case).
     *
     * @param {string} [pool.displayName] The display name for the pool. The
     * display name need not be unique and can contain any Unicode characters up to
     * a maximum length of 1024.
     *
     * @param {string} pool.vmSize The size of virtual machines in the pool. All
     * virtual machines in a pool are the same size. For information about
     * available sizes of virtual machines for Cloud Services pools (pools created
     * with cloudServiceConfiguration), see Sizes for Cloud Services
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
     * @param {object} [pool.cloudServiceConfiguration] The cloud service
     * configuration for the pool. This property and virtualMachineConfiguration
     * are mutually exclusive and one of the properties must be specified. This
     * property cannot be specified if the Batch account was created with its
     * poolAllocationMode property set to 'UserSubscription'.
     *
     * @param {string} pool.cloudServiceConfiguration.osFamily The Azure Guest OS
     * family to be installed on the virtual machines in the pool. Possible values
     * are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS
     * Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to
     * Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016.
     * For more information, see Azure Guest OS Releases
     * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
     *
     * @param {string} [pool.cloudServiceConfiguration.targetOSVersion] The Azure
     * Guest OS version to be installed on the virtual machines in the pool. The
     * default value is * which specifies the latest operating system version for
     * the specified OS family.
     *
     * @param {string} [pool.cloudServiceConfiguration.currentOSVersion] The Azure
     * Guest OS Version currently installed on the virtual machines in the pool.
     * This may differ from targetOSVersion if the pool state is Upgrading. In this
     * case some virtual machines may be on the targetOSVersion and some may be on
     * the currentOSVersion during the upgrade process. Once all virtual machines
     * have upgraded, currentOSVersion is updated to be the same as
     * targetOSVersion.
     *
     * @param {object} [pool.virtualMachineConfiguration] The virtual machine
     * configuration for the pool. This property and cloudServiceConfiguration are
     * mutually exclusive and one of the properties must be specified.
     *
     * @param {object} [pool.virtualMachineConfiguration.imageReference] A
     * reference to the Azure Virtual Machines Marketplace image to use. This
     * property and osDisk are mutually exclusive and one of the properties must be
     * specified.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.publisher
     * The publisher of the Azure Virtual Machines Marketplace image. For example,
     * Canonical or MicrosoftWindowsServer.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.offer The
     * offer type of the Azure Virtual Machines Marketplace image. For example,
     * UbuntuServer or WindowsServer.
     *
     * @param {string} pool.virtualMachineConfiguration.imageReference.sku The SKU
     * of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or
     * 2012-R2-Datacenter.
     *
     * @param {string} [pool.virtualMachineConfiguration.imageReference.version]
     * The version of the Azure Virtual Machines Marketplace image. A value of
     * 'latest' can be specified to select the latest version of an image. If
     * omitted, the default is 'latest'.
     *
     * @param {object} [pool.virtualMachineConfiguration.osDisk] A reference to the
     * OS disk image to use. This property can be specified only if the Batch
     * account was created with its poolAllocationMode property set to
     * 'UserSubscription'. This property and imageReference are mutually exclusive
     * and one of the properties must be specified.
     *
     * @param {array} pool.virtualMachineConfiguration.osDisk.imageUris The
     * collection of Virtual Hard Disk (VHD) URIs. All the VHDs must be identical
     * and must reside in an Azure Storage account within the same subscription and
     * same region as the Batch account. For best performance, it is recommended
     * that each VHD resides in a separate Azure Storage account. Each VHD can
     * serve upto 20 Windows compute nodes or 40 Linux compute nodes. You must
     * supply enough VHD URIs to satisfy the 'targetDedicated' property of the
     * pool. If you do not supply enough VHD URIs, the pool will partially allocate
     * compute nodes, and a resize error will occur.
     *
     * @param {string} [pool.virtualMachineConfiguration.osDisk.caching] The type
     * of caching to enable for the OS disk. Values are:
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
     * @param {string} pool.virtualMachineConfiguration.nodeAgentSKUId The SKU of
     * the Batch node agent to be provisioned on compute nodes in the pool. The
     * Batch node agent is a program that runs on each node in the pool, and
     * provides the command-and-control interface between the node and the Batch
     * service. There are different implementations of the node agent, known as
     * SKUs, for different operating systems. You must specify a node agent SKU
     * which matches the selected image reference. To get the list of supported
     * node agent SKUs along with their list of verified image references, see the
     * 'List supported node agent SKUs' operation.
     *
     * @param {object} [pool.virtualMachineConfiguration.windowsConfiguration]
     * Windows operating system settings on the virtual machine. This property must
     * not be specified if the imageReference or osDisk property specifies a Linux
     * OS image.
     *
     * @param {boolean}
     * [pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
     * Whether automatic updates are enabled on the virtual machine. If omitted,
     * the default value is true.
     *
     * @param {moment.duration} [pool.resizeTimeout] The timeout for allocation of
     * compute nodes to the pool. This timeout applies only to manual scaling; it
     * has no effect when enableAutoScale is set to true. The default value is 15
     * minutes. The minimum value is 5 minutes. If you specify a value less than 5
     * minutes, the Batch service returns an error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request).
     *
     * @param {number} [pool.targetDedicatedNodes] The desired number of dedicated
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to true. If enableAutoScale is set to false, then you
     * must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     *
     * @param {number} [pool.targetLowPriorityNodes] The desired number of
     * low-priority compute nodes in the pool. This property must not be specified
     * if enableAutoScale is set to true. If enableAutoScale is set to false, then
     * you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
     *
     * @param {boolean} [pool.enableAutoScale] Whether the pool size should
     * automatically adjust over time. If false, at least one of
     * targetDedicateNodes and targetLowPriorityNodes must be specified. If true,
     * the autoScaleFormula property is required and the pool automatically resizes
     * according to the formula. The default value is false.
     *
     * @param {string} [pool.autoScaleFormula] A formula for the desired number of
     * compute nodes in the pool. This property must not be specified if
     * enableAutoScale is set to false. It is required if enableAutoScale is set to
     * true. The formula is checked for validity before the pool is created. If the
     * formula is not valid, the Batch service rejects the request with detailed
     * error information. For more information about specifying this formula, see
     * 'Automatically scale compute nodes in an Azure Batch pool'
     * (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/).
     *
     * @param {moment.duration} [pool.autoScaleEvaluationInterval] The time
     * interval at which to automatically adjust the pool size according to the
     * autoscale formula. The default value is 15 minutes. The minimum and maximum
     * value are 5 minutes and 168 hours respectively. If you specify a value less
     * than 5 minutes or greater than 168 hours, the Batch service returns an
     * error; if you are calling the REST API directly, the HTTP status code is 400
     * (Bad Request).
     *
     * @param {boolean} [pool.enableInterNodeCommunication] Whether the pool
     * permits direct communication between nodes. Enabling inter-node
     * communication limits the maximum size of the pool due to deployment
     * restrictions on the nodes of the pool. This may result in the pool not
     * reaching its desired size. The default value is false.
     *
     * @param {object} [pool.networkConfiguration] The network configuration for
     * the pool.
     *
     * @param {string} [pool.networkConfiguration.subnetId] The ARM resource
     * identifier of the virtual network subnet which the compute nodes of the pool
     * will join. This is of the form
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
     * @param {object} [pool.networkConfiguration.endpointConfiguration] The
     * configuration for endpoints on compute nodes in the Batch pool. Pool
     * endpoint configuration is only supported on pools with the
     * virtualMachineConfiguration property.
     *
     * @param {array}
     * pool.networkConfiguration.endpointConfiguration.inboundNATPools A list of
     * inbound NAT pools that can be used to address specific ports on an
     * individual compute node externally. The maximum number of inbound NAT pools
     * per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded
     * the request fails with HTTP status code 400.
     *
     * @param {object} [pool.startTask] A task specified to run on each compute
     * node as it joins the pool. The task runs when the node is added to the pool
     * or when the node is restarted.
     *
     * @param {string} pool.startTask.commandLine The command line of the start
     * task. The command line does not run under a shell, and therefore cannot take
     * advantage of shell features such as environment variable expansion. If you
     * want to take advantage of such features, you should invoke the shell in the
     * command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
     * MyCommand" in Linux.
     *
     * @param {array} [pool.startTask.resourceFiles] A list of files that the Batch
     * service will download to the compute node before running the command line.
     * Files listed under this element are located in the task's working directory.
     *
     * @param {array} [pool.startTask.environmentSettings] A list of environment
     * variable settings for the start task.
     *
     * @param {object} [pool.startTask.userIdentity] The user identity under which
     * the start task runs. If omitted, the task runs as a non-administrative user
     * unique to the task.
     *
     * @param {string} [pool.startTask.userIdentity.userName] The name of the user
     * identity under which the task is run. The userName and autoUser properties
     * are mutually exclusive; you must specify one but not both.
     *
     * @param {object} [pool.startTask.userIdentity.autoUser] The auto user under
     * which the task is run. The userName and autoUser properties are mutually
     * exclusive; you must specify one but not both.
     *
     * @param {string} [pool.startTask.userIdentity.autoUser.scope] The scope for
     * the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string} [pool.startTask.userIdentity.autoUser.elevationLevel] The
     * elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [pool.startTask.maxTaskRetryCount] The maximum number of
     * times the task may be retried. The Batch service retries a task if its exit
     * code is nonzero. Note that this value specifically controls the number of
     * retries. The Batch service will try the task once, and may then retry up to
     * this limit. For example, if the maximum retry count is 3, Batch tries the
     * task up to 4 times (one initial try and 3 retries). If the maximum retry
     * count is 0, the Batch service does not retry the task. If the maximum retry
     * count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [pool.startTask.waitForSuccess] Whether the Batch service
     * should wait for the start task to complete successfully (that is, to exit
     * with exit code 0) before scheduling any tasks on the compute node. If true
     * and the start task fails on a compute node, the Batch service retries the
     * start task up to its maximum retry count (maxTaskRetryCount). If the task
     * has still not completed successfully after all retries, then the Batch
     * service marks the compute node unusable, and will not schedule tasks to it.
     * This condition can be detected via the node state and failure info details.
     * If false, the Batch service will not wait for the start task to complete. In
     * this case, other tasks can start executing on the compute node while the
     * start task is still running; and even if the start task fails, new tasks
     * will continue to be scheduled on the node. The default is false.
     *
     * @param {array} [pool.certificateReferences] The list of certificates to be
     * installed on each compute node in the pool. For Windows compute nodes, the
     * Batch service installs the certificates to the specified certificate store
     * and location. For Linux compute nodes, the certificates are stored in a
     * directory inside the task working directory and an environment variable
     * AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this
     * location. For certificates with visibility of 'remoteUser', a 'certs'
     * directory is created in the user's home directory (e.g.,
     * /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * @param {array} [pool.applicationPackageReferences] The list of application
     * packages to be installed on each compute node in the pool.
     *
     * @param {array} [pool.applicationLicenses] The list of application licenses
     * the Batch service will make available on each compute node in the pool. The
     * list of application licenses must be a subset of available Batch service
     * application licenses. If a license is requested which is not supported, pool
     * creation will fail.
     *
     * @param {number} [pool.maxTasksPerNode] The maximum number of tasks that can
     * run concurrently on a single compute node in the pool. The default value is
     * 1. The maximum value of this setting depends on the size of the compute
     * nodes in the pool (the vmSize setting).
     *
     * @param {object} [pool.taskSchedulingPolicy] How tasks are distributed across
     * compute nodes in a pool.
     *
     * @param {string} pool.taskSchedulingPolicy.nodeFillType How tasks are
     * distributed across compute nodes in a pool. Values are:
     *
     * pack - As many tasks as possible (maxTasksPerNode) should be assigned to
     * each node in the pool before any tasks are assigned to the next node in the
     * pool.
     * spread - Tasks should be assigned evenly across all nodes in the pool.
     * Possible values include: 'spread', 'pack'
     *
     * @param {array} [pool.userAccounts] The list of user accounts to be created
     * on each node in the pool.
     *
     * @param {array} [pool.metadata] A list of name-value pairs associated with
     * the pool as metadata. The Batch service does not assign any meaning to
     * metadata; it is solely for the use of user code.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolAddOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolAddOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolAddOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolAddOptions.ocpDate] The time the request was
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
    add(pool: Models.PoolAddParameter): Promise<void>;
    add(pool: Models.PoolAddParameter, options: {
        poolAddOptions?: Models.PoolAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    add(pool: Models.PoolAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(pool: Models.PoolAddParameter, options: {
        poolAddOptions?: Models.PoolAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolListOptions.filter] An OData $filter clause.
     *
     * @param {string} [options.poolListOptions.select] An OData $select clause.
     *
     * @param {string} [options.poolListOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.poolListOptions.maxResults] The maximum number of
     * items to return in the response. A maximum of 1000 pools can be returned.
     *
     * @param {number} [options.poolListOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListOptions.ocpDate] The time the request was
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
     *                      {CloudPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudPoolListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CloudPoolListResult>;
    list(options: {
        poolListOptions?: Models.PoolListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudPoolListResult>;
    list(callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    list(options: {
        poolListOptions?: Models.PoolListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    /**
     * @summary Deletes a pool from the specified account.
     *
     * When you request that a pool be deleted, the following actions occur: the
     * pool state is set to deleting; any ongoing resize operation on the pool are
     * stopped; the Batch service starts resizing the pool to zero nodes; any tasks
     * running on existing nodes are terminated and requeued (as if a resize pool
     * operation had been requested with the default requeue option); finally, the
     * pool is removed from the system. Because running tasks are requeued, the
     * user can rerun these tasks by updating their job to target a different pool.
     * The tasks can then run on the new pool. If you want to override the requeue
     * behavior, then you should call resize pool explicitly to shrink the pool to
     * zero size before deleting the pool. If you call an Update, Patch or Delete
     * API on a pool in the deleting state, it will fail with HTTP status code 409
     * with error code PoolBeingDeleted.
     *
     * @param {string} poolId The ID of the pool to delete.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolDeleteMethodOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolDeleteMethodOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolDeleteMethodOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolDeleteMethodOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolDeleteMethodOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolDeleteMethodOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolDeleteMethodOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolDeleteMethodOptions.ifUnmodifiedSince] A
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
    deleteMethod(poolId: string): Promise<void>;
    deleteMethod(poolId: string, options: {
        poolDeleteMethodOptions?: Models.PoolDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(poolId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(poolId: string, options: {
        poolDeleteMethodOptions?: Models.PoolDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets basic properties of a pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolExistsOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolExistsOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolExistsOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolExistsOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolExistsOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolExistsOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolExistsOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolExistsOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolExistsOptions.ifUnmodifiedSince] A timestamp
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
     *                      {boolean} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    exists(poolId: string): Promise<boolean>;
    exists(poolId: string, options: {
        poolExistsOptions?: Models.PoolExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<boolean>;
    exists(poolId: string, callback: msRest.ServiceCallback<boolean>): void;
    exists(poolId: string, options: {
        poolExistsOptions?: Models.PoolExistsOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * Gets information about the specified pool.
     *
     * @param {string} poolId The ID of the pool to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolGetOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolGetOptions.select] An OData $select clause.
     *
     * @param {string} [options.poolGetOptions.expand] An OData $expand clause.
     *
     * @param {number} [options.poolGetOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolGetOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolGetOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolGetOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolGetOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolGetOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolGetOptions.ifUnmodifiedSince] A timestamp
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
     *                      {CloudPool} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudPool} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(poolId: string): Promise<Models.CloudPool>;
    get(poolId: string, options: {
        poolGetOptions?: Models.PoolGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudPool>;
    get(poolId: string, callback: msRest.ServiceCallback<Models.CloudPool>): void;
    get(poolId: string, options: {
        poolGetOptions?: Models.PoolGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudPool>): void;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This only replaces the pool properties specified in the request. For
     * example, if the pool has a start task associated with it, and a request does
     * not specify a start task element, then the pool keeps the existing start
     * task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {object} poolPatchParameter The parameters for the request.
     *
     * @param {object} [poolPatchParameter.startTask] A task to run on each compute
     * node as it joins the pool. The task runs when the node is added to the pool
     * or when the node is restarted. If this element is present, it overwrites any
     * existing start task. If omitted, any existing start task is left unchanged.
     *
     * @param {string} poolPatchParameter.startTask.commandLine The command line of
     * the start task. The command line does not run under a shell, and therefore
     * cannot take advantage of shell features such as environment variable
     * expansion. If you want to take advantage of such features, you should invoke
     * the shell in the command line, for example using "cmd /c MyCommand" in
     * Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [poolPatchParameter.startTask.resourceFiles] A list of files
     * that the Batch service will download to the compute node before running the
     * command line. Files listed under this element are located in the task's
     * working directory.
     *
     * @param {array} [poolPatchParameter.startTask.environmentSettings] A list of
     * environment variable settings for the start task.
     *
     * @param {object} [poolPatchParameter.startTask.userIdentity] The user
     * identity under which the start task runs. If omitted, the task runs as a
     * non-administrative user unique to the task.
     *
     * @param {string} [poolPatchParameter.startTask.userIdentity.userName] The
     * name of the user identity under which the task is run. The userName and
     * autoUser properties are mutually exclusive; you must specify one but not
     * both.
     *
     * @param {object} [poolPatchParameter.startTask.userIdentity.autoUser] The
     * auto user under which the task is run. The userName and autoUser properties
     * are mutually exclusive; you must specify one but not both.
     *
     * @param {string} [poolPatchParameter.startTask.userIdentity.autoUser.scope]
     * The scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [poolPatchParameter.startTask.userIdentity.autoUser.elevationLevel] The
     * elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [poolPatchParameter.startTask.maxTaskRetryCount] The maximum
     * number of times the task may be retried. The Batch service retries a task if
     * its exit code is nonzero. Note that this value specifically controls the
     * number of retries. The Batch service will try the task once, and may then
     * retry up to this limit. For example, if the maximum retry count is 3, Batch
     * tries the task up to 4 times (one initial try and 3 retries). If the maximum
     * retry count is 0, the Batch service does not retry the task. If the maximum
     * retry count is -1, the Batch service retries the task without limit.
     *
     * @param {boolean} [poolPatchParameter.startTask.waitForSuccess] Whether the
     * Batch service should wait for the start task to complete successfully (that
     * is, to exit with exit code 0) before scheduling any tasks on the compute
     * node. If true and the start task fails on a compute node, the Batch service
     * retries the start task up to its maximum retry count (maxTaskRetryCount). If
     * the task has still not completed successfully after all retries, then the
     * Batch service marks the compute node unusable, and will not schedule tasks
     * to it. This condition can be detected via the node state and failure info
     * details. If false, the Batch service will not wait for the start task to
     * complete. In this case, other tasks can start executing on the compute node
     * while the start task is still running; and even if the start task fails, new
     * tasks will continue to be scheduled on the node. The default is false.
     *
     * @param {array} [poolPatchParameter.certificateReferences] A list of
     * certificates to be installed on each compute node in the pool. If this
     * element is present, it replaces any existing certificate references
     * configured on the pool. If omitted, any existing certificate references are
     * left unchanged. For Windows compute nodes, the Batch service installs the
     * certificates to the specified certificate store and location. For Linux
     * compute nodes, the certificates are stored in a directory inside the task
     * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
     * supplied to the task to query for this location. For certificates with
     * visibility of 'remoteUser', a 'certs' directory is created in the user's
     * home directory (e.g., /home/{user-name}/certs) and certificates are placed
     * in that directory.
     *
     * @param {array} [poolPatchParameter.applicationPackageReferences] A list of
     * application packages to be installed on each compute node in the pool.
     * Changes to application package references affect all new compute nodes
     * joining the pool, but do not affect compute nodes that are already in the
     * pool until they are rebooted or reimaged. If this element is present, it
     * replaces any existing application package references. If you specify an
     * empty collection, then all application package references are removed from
     * the pool. If omitted, any existing application package references are left
     * unchanged.
     *
     * @param {array} [poolPatchParameter.metadata] A list of name-value pairs
     * associated with the pool as metadata. If this element is present, it
     * replaces any existing metadata configured on the pool. If you specify an
     * empty collection, any metadata is removed from the pool. If omitted, any
     * existing metadata is left unchanged.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolPatchOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolPatchOptions.timeout] The maximum time that the
     * server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolPatchOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolPatchOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolPatchOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolPatchOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolPatchOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolPatchOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolPatchOptions.ifUnmodifiedSince] A timestamp
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
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter): Promise<void>;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options: {
        poolPatchOptions?: Models.PoolPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, callback: msRest.ServiceCallback<void>): void;
    patch(poolId: string, poolPatchParameter: Models.PoolPatchParameter, options: {
        poolPatchOptions?: Models.PoolPatchOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Disables automatic scaling for a pool.
     *
     * @param {string} poolId The ID of the pool on which to disable automatic
     * scaling.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolDisableAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolDisableAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolDisableAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolDisableAutoScaleOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolDisableAutoScaleOptions.ocpDate] The time the
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
    disableAutoScale(poolId: string): Promise<void>;
    disableAutoScale(poolId: string, options: {
        poolDisableAutoScaleOptions?: Models.PoolDisableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    disableAutoScale(poolId: string, callback: msRest.ServiceCallback<void>): void;
    disableAutoScale(poolId: string, options: {
        poolDisableAutoScaleOptions?: Models.PoolDisableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Enables automatic scaling for a pool.
     *
     * You cannot enable automatic scaling on a pool if a resize operation is in
     * progress on the pool. If automatic scaling of the pool is currently
     * disabled, you must specify a valid autoscale formula as part of the request.
     * If automatic scaling of the pool is already enabled, you may specify a new
     * autoscale formula and/or a new evaluation interval. You cannot call this API
     * for the same pool more than once every 30 seconds.
     *
     * @param {string} poolId The ID of the pool on which to enable automatic
     * scaling.
     *
     * @param {object} poolEnableAutoScaleParameter The parameters for the request.
     *
     * @param {string} [poolEnableAutoScaleParameter.autoScaleFormula] The formula
     * for the desired number of compute nodes in the pool. The formula is checked
     * for validity before it is applied to the pool. If the formula is not valid,
     * the Batch service rejects the request with detailed error information. For
     * more information about specifying this formula, see Automatically scale
     * compute nodes in an Azure Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {moment.duration}
     * [poolEnableAutoScaleParameter.autoScaleEvaluationInterval] The time interval
     * at which to automatically adjust the pool size according to the autoscale
     * formula. The default value is 15 minutes. The minimum and maximum value are
     * 5 minutes and 168 hours respectively. If you specify a value less than 5
     * minutes or greater than 168 hours, the Batch service rejects the request
     * with an invalid property value error; if you are calling the REST API
     * directly, the HTTP status code is 400 (Bad Request). If you specify a new
     * interval, then the existing autoscale evaluation schedule will be stopped
     * and a new autoscale evaluation schedule will be started, with its starting
     * time being the time when this request was issued.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolEnableAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolEnableAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolEnableAutoScaleOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolEnableAutoScaleOptions.ifNoneMatch] An ETag
     * value associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ifModifiedSince] A
     * timestamp indicating the last modified time of the resource known to the
     * client. The operation will be performed only if the resource on the service
     * has been modified since the specified time.
     *
     * @param {date} [options.poolEnableAutoScaleOptions.ifUnmodifiedSince] A
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
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter): Promise<void>;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options: {
        poolEnableAutoScaleOptions?: Models.PoolEnableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, callback: msRest.ServiceCallback<void>): void;
    enableAutoScale(poolId: string, poolEnableAutoScaleParameter: Models.PoolEnableAutoScaleParameter, options: {
        poolEnableAutoScaleOptions?: Models.PoolEnableAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Gets the result of evaluating an automatic scaling formula on the
     * pool.
     *
     * This API is primarily for validating an autoscale formula, as it simply
     * returns the result without applying the formula to the pool. The pool must
     * have auto scaling enabled in order to evaluate a formula.
     *
     * @param {string} poolId The ID of the pool on which to evaluate the automatic
     * scaling formula.
     *
     * @param {string} autoScaleFormula The formula for the desired number of
     * compute nodes in the pool. The formula is validated and its results
     * calculated, but it is not applied to the pool. To apply the formula to the
     * pool, 'Enable automatic scaling on a pool'. For more information about
     * specifying this formula, see Automatically scale compute nodes in an Azure
     * Batch pool
     * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolEvaluateAutoScaleOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolEvaluateAutoScaleOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolEvaluateAutoScaleOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolEvaluateAutoScaleOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolEvaluateAutoScaleOptions.ocpDate] The time the
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
     *                      {AutoScaleRun} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutoScaleRun} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    evaluateAutoScale(poolId: string, autoScaleFormula: string): Promise<Models.AutoScaleRun>;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, options: {
        poolEvaluateAutoScaleOptions?: Models.PoolEvaluateAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.AutoScaleRun>;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, callback: msRest.ServiceCallback<Models.AutoScaleRun>): void;
    evaluateAutoScale(poolId: string, autoScaleFormula: string, options: {
        poolEvaluateAutoScaleOptions?: Models.PoolEvaluateAutoScaleOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.AutoScaleRun>): void;
    /**
     * @summary Changes the number of compute nodes that are assigned to a pool.
     *
     * You can only resize a pool when its allocation state is steady. If the pool
     * is already resizing, the request fails with status code 409. When you resize
     * a pool, the pool's allocation state changes from steady to resizing. You
     * cannot resize pools which are configured for automatic scaling. If you try
     * to do this, the Batch service returns an error 409. If you resize a pool
     * downwards, the Batch service chooses which nodes to remove. To remove
     * specific nodes, use the pool remove nodes API instead.
     *
     * @param {string} poolId The ID of the pool to resize.
     *
     * @param {object} poolResizeParameter The parameters for the request.
     *
     * @param {number} [poolResizeParameter.targetDedicatedNodes] The desired
     * number of dedicated compute nodes in the pool.
     *
     * @param {number} [poolResizeParameter.targetLowPriorityNodes] The desired
     * number of low-priority compute nodes in the pool.
     *
     * @param {moment.duration} [poolResizeParameter.resizeTimeout] The timeout for
     * allocation of compute nodes to the pool or removal of compute nodes from the
     * pool. The default value is 15 minutes. The minimum value is 5 minutes. If
     * you specify a value less than 5 minutes, the Batch service returns an error;
     * if you are calling the REST API directly, the HTTP status code is 400 (Bad
     * Request).
     *
     * @param {string} [poolResizeParameter.nodeDeallocationOption] Determines what
     * to do with a node and its running task(s) if the pool size is decreasing.
     * The default value is requeue. Possible values include: 'requeue',
     * 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolResizeOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolResizeOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolResizeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolResizeOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolResizeOptions.ocpDate] The time the request was
     * issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolResizeOptions.ifMatch] An ETag value associated
     * with the version of the resource known to the client. The operation will be
     * performed only if the resource's current ETag on the service exactly matches
     * the value specified by the client.
     *
     * @param {string} [options.poolResizeOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolResizeOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolResizeOptions.ifUnmodifiedSince] A timestamp
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
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter): Promise<void>;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options: {
        poolResizeOptions?: Models.PoolResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, callback: msRest.ServiceCallback<void>): void;
    resize(poolId: string, poolResizeParameter: Models.PoolResizeParameter, options: {
        poolResizeOptions?: Models.PoolResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Stops an ongoing resize operation on the pool.
     *
     * This does not restore the pool to its previous state before the resize
     * operation: it only stops any further changes being made, and the pool
     * maintains its current state. After stopping, the pool stabilizes at the
     * number of nodes it was at when the stop operation was done. During the stop
     * operation, the pool allocation state changes first to stopping and then to
     * steady. A resize operation need not be an explicit resize pool request; this
     * API can also be used to halt the initial sizing of the pool when it is
     * created.
     *
     * @param {string} poolId The ID of the pool whose resizing you want to stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolStopResizeOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolStopResizeOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolStopResizeOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolStopResizeOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolStopResizeOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolStopResizeOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolStopResizeOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolStopResizeOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolStopResizeOptions.ifUnmodifiedSince] A timestamp
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
    stopResize(poolId: string): Promise<void>;
    stopResize(poolId: string, options: {
        poolStopResizeOptions?: Models.PoolStopResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    stopResize(poolId: string, callback: msRest.ServiceCallback<void>): void;
    stopResize(poolId: string, options: {
        poolStopResizeOptions?: Models.PoolStopResizeOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates the properties of the specified pool.
     *
     * This fully replaces all the updateable properties of the pool. For example,
     * if the pool has a start task associated with it and if start task is not
     * specified with this request, then the Batch service will remove the existing
     * start task.
     *
     * @param {string} poolId The ID of the pool to update.
     *
     * @param {object} poolUpdatePropertiesParameter The parameters for the
     * request.
     *
     * @param {object} [poolUpdatePropertiesParameter.startTask] A task to run on
     * each compute node as it joins the pool. The task runs when the node is added
     * to the pool or when the node is restarted. If this element is present, it
     * overwrites any existing start task. If omitted, any existing start task is
     * removed from the pool.
     *
     * @param {string} poolUpdatePropertiesParameter.startTask.commandLine The
     * command line of the start task. The command line does not run under a shell,
     * and therefore cannot take advantage of shell features such as environment
     * variable expansion. If you want to take advantage of such features, you
     * should invoke the shell in the command line, for example using "cmd /c
     * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
     *
     * @param {array} [poolUpdatePropertiesParameter.startTask.resourceFiles] A
     * list of files that the Batch service will download to the compute node
     * before running the command line. Files listed under this element are located
     * in the task's working directory.
     *
     * @param {array} [poolUpdatePropertiesParameter.startTask.environmentSettings]
     * A list of environment variable settings for the start task.
     *
     * @param {object} [poolUpdatePropertiesParameter.startTask.userIdentity] The
     * user identity under which the start task runs. If omitted, the task runs as
     * a non-administrative user unique to the task.
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.userName] The name of
     * the user identity under which the task is run. The userName and autoUser
     * properties are mutually exclusive; you must specify one but not both.
     *
     * @param {object}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser] The auto
     * user under which the task is run. The userName and autoUser properties are
     * mutually exclusive; you must specify one but not both.
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser.scope] The
     * scope for the auto user Values are:
     *
     * pool - specifies that the task runs as the common auto user account which is
     * created on every node in a pool.
     * task - specifies that the service should create a new user for the task.
     * The default value is task. Possible values include: 'task', 'pool'
     *
     * @param {string}
     * [poolUpdatePropertiesParameter.startTask.userIdentity.autoUser.elevationLevel]
     * The elevation level of the auto user. nonAdmin - The auto user is a standard
     * user without elevated access. admin - The auto user is a user with elevated
     * access and operates with full Administrator permissions. The default value
     * is nonAdmin. Possible values include: 'nonAdmin', 'admin'
     *
     * @param {number} [poolUpdatePropertiesParameter.startTask.maxTaskRetryCount]
     * The maximum number of times the task may be retried. The Batch service
     * retries a task if its exit code is nonzero. Note that this value
     * specifically controls the number of retries. The Batch service will try the
     * task once, and may then retry up to this limit. For example, if the maximum
     * retry count is 3, Batch tries the task up to 4 times (one initial try and 3
     * retries). If the maximum retry count is 0, the Batch service does not retry
     * the task. If the maximum retry count is -1, the Batch service retries the
     * task without limit.
     *
     * @param {boolean} [poolUpdatePropertiesParameter.startTask.waitForSuccess]
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
     * @param {array} poolUpdatePropertiesParameter.certificateReferences A list of
     * certificates to be installed on each compute node in the pool. This list
     * replaces any existing certificate references configured on the pool. If you
     * specify an empty collection, any existing certificate references are removed
     * from the pool. For Windows compute nodes, the Batch service installs the
     * certificates to the specified certificate store and location. For Linux
     * compute nodes, the certificates are stored in a directory inside the task
     * working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is
     * supplied to the task to query for this location. For certificates with
     * visibility of 'remoteUser', a 'certs' directory is created in the user's
     * home directory (e.g., /home/{user-name}/certs) and certificates are placed
     * in that directory.
     *
     * @param {array} poolUpdatePropertiesParameter.applicationPackageReferences A
     * list of application packages to be installed on each compute node in the
     * pool. The list replaces any existing application package references on the
     * pool. Changes to application package references affect all new compute nodes
     * joining the pool, but do not affect compute nodes that are already in the
     * pool until they are rebooted or reimaged. If omitted, or if you specify an
     * empty collection, any existing application packages references are removed
     * from the pool.
     *
     * @param {array} poolUpdatePropertiesParameter.metadata A list of name-value
     * pairs associated with the pool as metadata. This list replaces any existing
     * metadata configured on the pool. If omitted, or if you specify an empty
     * collection, any existing metadata is removed from the pool.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolUpdatePropertiesOptions] Additional parameters
     * for the operation
     *
     * @param {number} [options.poolUpdatePropertiesOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.poolUpdatePropertiesOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolUpdatePropertiesOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolUpdatePropertiesOptions.ocpDate] The time the
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
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter): Promise<void>;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options: {
        poolUpdatePropertiesOptions?: Models.PoolUpdatePropertiesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, callback: msRest.ServiceCallback<void>): void;
    updateProperties(poolId: string, poolUpdatePropertiesParameter: Models.PoolUpdatePropertiesParameter, options: {
        poolUpdatePropertiesOptions?: Models.PoolUpdatePropertiesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Upgrades the operating system of the specified pool.
     *
     * During an upgrade, the Batch service upgrades each compute node in the pool.
     * When a compute node is chosen for upgrade, any tasks running on that node
     * are removed from the node and returned to the queue to be rerun later (or on
     * a different compute node). The node will be unavailable until the upgrade is
     * complete. This operation results in temporarily reduced pool capacity as
     * nodes are taken out of service to be upgraded. Although the Batch service
     * tries to avoid upgrading all compute nodes at the same time, it does not
     * guarantee to do this (particularly on small pools); therefore, the pool may
     * be temporarily unavailable to run tasks. When this operation runs, the pool
     * state changes to upgrading. When all compute nodes have finished upgrading,
     * the pool state returns to active. While the upgrade is in progress, the
     * pool's currentOSVersion reflects the OS version that nodes are upgrading
     * from, and targetOSVersion reflects the OS version that nodes are upgrading
     * to. Once the upgrade is complete, currentOSVersion is updated to reflect the
     * OS version now running on all nodes. This operation can only be invoked on
     * pools created with the cloudServiceConfiguration property.
     *
     * @param {string} poolId The ID of the pool to upgrade.
     *
     * @param {string} targetOSVersion The Azure Guest OS version to be installed
     * on the virtual machines in the pool.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolUpgradeOSOptions] Additional parameters for the
     * operation
     *
     * @param {number} [options.poolUpgradeOSOptions.timeout] The maximum time that
     * the server can spend processing the request, in seconds. The default is 30
     * seconds.
     *
     * @param {string} [options.poolUpgradeOSOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolUpgradeOSOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolUpgradeOSOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolUpgradeOSOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolUpgradeOSOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolUpgradeOSOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolUpgradeOSOptions.ifUnmodifiedSince] A timestamp
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
    upgradeOS(poolId: string, targetOSVersion: string): Promise<void>;
    upgradeOS(poolId: string, targetOSVersion: string, options: {
        poolUpgradeOSOptions?: Models.PoolUpgradeOSOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    upgradeOS(poolId: string, targetOSVersion: string, callback: msRest.ServiceCallback<void>): void;
    upgradeOS(poolId: string, targetOSVersion: string, options: {
        poolUpgradeOSOptions?: Models.PoolUpgradeOSOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Removes compute nodes from the specified pool.
     *
     * This operation can only run when the allocation state of the pool is steady.
     * When this operation runs, the allocation state changes from steady to
     * resizing.
     *
     * @param {string} poolId The ID of the pool from which you want to remove
     * nodes.
     *
     * @param {object} nodeRemoveParameter The parameters for the request.
     *
     * @param {array} nodeRemoveParameter.nodeList A list containing the IDs of the
     * compute nodes to be removed from the specified pool.
     *
     * @param {moment.duration} [nodeRemoveParameter.resizeTimeout] The timeout for
     * removal of compute nodes to the pool. The default value is 15 minutes. The
     * minimum value is 5 minutes. If you specify a value less than 5 minutes, the
     * Batch service returns an error; if you are calling the REST API directly,
     * the HTTP status code is 400 (Bad Request).
     *
     * @param {string} [nodeRemoveParameter.nodeDeallocationOption] Determines what
     * to do with a node and its running task(s) after it has been selected for
     * deallocation. The default value is requeue. Possible values include:
     * 'requeue', 'terminate', 'taskCompletion', 'retainedData'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolRemoveNodesOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.poolRemoveNodesOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.poolRemoveNodesOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolRemoveNodesOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolRemoveNodesOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {string} [options.poolRemoveNodesOptions.ifMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service exactly matches the value specified by the client.
     *
     * @param {string} [options.poolRemoveNodesOptions.ifNoneMatch] An ETag value
     * associated with the version of the resource known to the client. The
     * operation will be performed only if the resource's current ETag on the
     * service does not match the value specified by the client.
     *
     * @param {date} [options.poolRemoveNodesOptions.ifModifiedSince] A timestamp
     * indicating the last modified time of the resource known to the client. The
     * operation will be performed only if the resource on the service has been
     * modified since the specified time.
     *
     * @param {date} [options.poolRemoveNodesOptions.ifUnmodifiedSince] A timestamp
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
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter): Promise<void>;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options: {
        poolRemoveNodesOptions?: Models.PoolRemoveNodesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, callback: msRest.ServiceCallback<void>): void;
    removeNodes(poolId: string, nodeRemoveParameter: Models.NodeRemoveParameter, options: {
        poolRemoveNodesOptions?: Models.PoolRemoveNodesOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists the usage metrics, aggregated by pool across individual time
     * intervals, for the specified account.
     *
     * If you do not specify a $filter clause including a poolId, the response
     * includes all pools that existed in the account in the time range of the
     * returned aggregation intervals. If you do not specify a $filter clause
     * including a startTime or endTime these filters default to the start and end
     * times of the last aggregation interval currently available; that is, only
     * the last aggregation interval is returned.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListUsageMetricsNextOptions] Additional
     * parameters for the operation
     *
     * @param {string} [options.poolListUsageMetricsNextOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.poolListUsageMetricsNextOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListUsageMetricsNextOptions.ocpDate] The time the
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
     *                      {PoolListUsageMetricsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link PoolListUsageMetricsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsageMetricsNext(nextPageLink: string): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetricsNext(nextPageLink: string, options: {
        poolListUsageMetricsNextOptions?: Models.PoolListUsageMetricsNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.PoolListUsageMetricsResult>;
    listUsageMetricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    listUsageMetricsNext(nextPageLink: string, options: {
        poolListUsageMetricsNextOptions?: Models.PoolListUsageMetricsNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.PoolListUsageMetricsResult>): void;
    /**
     * @summary Lists all of the pools in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.poolListNextOptions] Additional parameters for the
     * operation
     *
     * @param {string} [options.poolListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.poolListNextOptions.returnClientRequestId] Whether
     * the server should return the client-request-id in the response.
     *
     * @param {date} [options.poolListNextOptions.ocpDate] The time the request was
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
     *                      {CloudPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CloudPoolListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CloudPoolListResult>;
    listNext(nextPageLink: string, options: {
        poolListNextOptions?: Models.PoolListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CloudPoolListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
    listNext(nextPageLink: string, options: {
        poolListNextOptions?: Models.PoolListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CloudPoolListResult>): void;
}
