export declare const CloudError: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BaseResource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {};
    };
};
export declare const PoolUsageMetrics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmSize: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            totalCoreHours: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataIngressGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataEgressGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ImageReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publisher: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            offer: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            version: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualMachineImageId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeAgentSku: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            verifiedImageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const AuthenticationTokenSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            access: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            allowedValues: string[];
                        };
                    };
                };
            };
        };
    };
};
export declare const UsageStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dedicatedCoreTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            avgCPUPercentage: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            avgMemoryGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peakMemoryGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            avgDiskGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peakDiskGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            diskReadIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            diskWriteIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            diskReadGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            diskWriteGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkReadGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkWriteGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usageStats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceStats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            kernelCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            wallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numSucceededTasks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numFailedTasks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numTaskRetries: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NameValuePair: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeleteCertificateError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            values: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const Certificate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            thumbprint: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            thumbprintAlgorithm: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicData: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            deleteCertificateError: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ApplicationPackageReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            applicationId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            version: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationSummary: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            versions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const CertificateAddParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            thumbprint: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            thumbprintAlgorithm: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            data: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            certificateFormat: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            password: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            creationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentLength: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeFile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            isDirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            properties: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const Schedule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            doNotRunUntil: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            doNotRunAfter: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startWindow: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recurrenceInterval: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobConstraints: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxWallClockTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxTaskRetryCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ContainerRegistry: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            registryServer: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            password: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskContainerSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            containerRunOptions: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            imageName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            registry: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ResourceFile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            blobSource: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            filePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EnvironmentSetting: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExitOptions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobAction: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            dependencyAction: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ExitCodeMapping: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitOptions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ExitCodeRangeMapping: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            start: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            end: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitOptions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ExitConditions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            exitCodes: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            exitCodeRanges: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            preProcessingError: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            fileUploadError: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            default: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const AutoUserSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            scope: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            elevationLevel: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const UserIdentity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            userName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoUser: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const LinuxUserConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sshPrivateKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const UserAccount: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            password: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            elevationLevel: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            linuxUserConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskConstraints: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxWallClockTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxTaskRetryCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OutputFileBlobContainerDestination: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            path: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OutputFileDestination: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            container: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const OutputFileUploadOptions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uploadCondition: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const OutputFile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filePattern: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destination: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            uploadOptions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobManagerTask: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outputFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            killJobOnCompletion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            runExclusive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            authenticationTokenSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            allowLowPriorityNode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPreparationTask: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            waitForSuccess: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            rerunOnNodeRebootAfterSuccess: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobReleaseTask: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            maxWallClockTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskSchedulingPolicy: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeFillType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const StartTask: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            maxTaskRetryCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitForSuccess: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            thumbprint: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            thumbprintAlgorithm: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storeLocation: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            storeName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            visibility: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            allowedValues: string[];
                        };
                    };
                };
            };
        };
    };
};
export declare const MetadataItem: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudServiceConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osFamily: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetOSVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            currentOSVersion: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OSDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const WindowsConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            enableAutomaticUpdates: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DataDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lun: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageAccountType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ContainerConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            type: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            containerImageNames: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            containerRegistries: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VirtualMachineConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            imageReference: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            nodeAgentSKUId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            windowsConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDisks: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            licenseType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const NetworkSecurityGroupRule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            priority: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            sourceAddressPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InboundNATPool: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeStart: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeEnd: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkSecurityGroupRules: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PoolEndpointConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            inboundNATPools: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const NetworkConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            subnetId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endpointConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmSize: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cloudServiceConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            maxTasksPerNode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableInterNodeCommunication: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            userAccounts: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const AutoPoolSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            autoPoolIdPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            poolLifetimeOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            keepAlive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pool: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoPoolSpecification: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usesTaskDependencies: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            onAllTasksComplete: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            poolInfo: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const RecentJob: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nextRunTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recentJob: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            kernelCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            wallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numSucceededTasks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numFailedTasks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numTaskRetries: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobSchedule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            creationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            schedule: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobSpecification: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            executionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            stats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleAddParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            schedule: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobSpecification: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobSchedulingError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            category: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            poolId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            schedulingError: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            terminateReason: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJob: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usesTaskDependencies: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            creationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            poolInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            onAllTasksComplete: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            executionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobAddParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            poolInfo: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            onAllTasksComplete: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            usesTaskDependencies: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskContainerExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            containerId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskFailureInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            category: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobPreparationTaskExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            taskRootDirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            failureInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            retryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastRetryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const JobReleaseTaskExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            taskRootDirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            failureInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            result: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const JobPreparationAndReleaseTaskExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            jobPreparationTaskExecutionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTaskExecutionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskCounts: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            active: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            running: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            completed: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            succeeded: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failed: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            validationStatus: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const AutoScaleRunError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            values: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const AutoScaleRun: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timestamp: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            results: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ResizeError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            values: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const CloudPool: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            creationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allocationState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            allocationStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmSize: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cloudServiceConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resizeErrors: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            currentDedicatedNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            currentLowPriorityNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleRun: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableInterNodeCommunication: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            maxTasksPerNode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userAccounts: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            stats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolAddParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmSize: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cloudServiceConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableInterNodeCommunication: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            maxTasksPerNode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userAccounts: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const AffinityInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            affinityId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskExecutionInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            failureInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            retryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastRetryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requeueCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastRequeueTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ComputeNodeInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            affinityId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            poolId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const MultiInstanceSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            numberOfInstances: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            coordinationCommandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commonResourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TaskStatistics: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastUpdateTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            kernelCPUTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            wallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOps: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            readIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            writeIOGiB: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskIdRange: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            start: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            end: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskDependencies: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskIds: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            taskIdRanges: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const CloudTask: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            creationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitConditions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commandLine: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outputFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            affinityInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            executionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            nodeInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            multiInstanceSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dependsOn: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            authenticationTokenSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskAddParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            exitConditions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            outputFiles: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            environmentSettings: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            affinityInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userIdentity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            multiInstanceSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dependsOn: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            authenticationTokenSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                required: boolean;
                serializedName: string;
                constraints: {
                    MaxItems: number;
                };
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ErrorMessage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lang: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BatchErrorDetail: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            key: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BatchError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            values: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TaskAddResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            status: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            taskId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const SubtaskInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            failureInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const CloudTaskListSubtasksResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TaskInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            jobId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subtaskId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            executionInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const StartTaskInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            state: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            containerInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            failureInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            retryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastRetryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ComputeNodeError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            errorDetails: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const InboundEndpoint: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            publicIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicFQDN: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeEndpointConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            inboundEndpoints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const ComputeNode: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            schedulingState: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastBootTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allocationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            affinityId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmSize: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            totalTasksRun: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            runningTasksCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            totalTasksSucceeded: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recentTasks: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTaskInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            errors: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            isDedicated: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endpointConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUser: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            isAdmin: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expiryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            password: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sshPublicKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            remoteLoginIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteLoginPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobSchedulePatchParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            schedule: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobSpecification: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobScheduleUpdateParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            schedule: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobSpecification: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobDisableParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            disableTasks: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const JobTerminateParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            terminateReason: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPatchParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            onAllTasksComplete: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            poolInfo: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const JobUpdateParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            poolInfo: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            onAllTasksComplete: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const PoolEnableAutoScaleParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            autoScaleFormula: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            autoScaleFormula: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolResizeParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetDedicatedNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resizeTimeout: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeDeallocationOption: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const PoolUpdatePropertiesParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationPackageReferences: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            metadata: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const PoolUpgradeOSParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetOSVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolPatchParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTask: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            certificateReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationPackageReferences: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            metadata: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const TaskUpdateParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            constraints: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const NodeUpdateUserParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            password: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expiryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sshPublicKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeRebootParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeRebootOption: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const NodeReimageParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeReimageOption: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const NodeDisableSchedulingParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeDisableSchedulingOption: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const NodeRemoveParameter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeList: {
                required: boolean;
                serializedName: string;
                constraints: {
                    MaxItems: number;
                };
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            resizeTimeout: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeDeallocationOption: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const UploadBatchServiceLogsConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            containerUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const UploadBatchServiceLogsResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            virtualDirectoryName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numberOfFilesUploaded: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeCounts: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            creating: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            idle: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            offline: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            preempted: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rebooting: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            reimaging: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            running: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            starting: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTaskFailed: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            leavingPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            unknown: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            unusable: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitingForStartTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            total: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolNodeCounts: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dedicated: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            lowPriority: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ApplicationListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                type: {
                    name: string;
                };
            };
            endTime: {
                type: {
                    name: string;
                };
            };
            filter: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetAllLifetimeStatisticsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolAddOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDeleteMethodOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolExistsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolPatchOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDisableAutoScaleOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEnableAutoScaleOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolResizeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolStopResizeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpdatePropertiesOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpgradeOSOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolRemoveNodesOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListPoolNodeCountsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetAllLifetimeStatisticsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDeleteMethodOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPatchOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobUpdateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDisableOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobEnableOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobTerminateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobAddOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetTaskCountsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateAddOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateCancelDeletionOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateDeleteMethodOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromTaskOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromTaskOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ocpRange: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromTaskOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromComputeNodeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromComputeNodeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ocpRange: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromComputeNodeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleExistsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDeleteMethodOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobSchedulePatchOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleUpdateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDisableOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleEnableOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleTerminateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleAddOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskDeleteMethodOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            expand: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskUpdateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListSubtasksOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskTerminateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskReactivateOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
            ifMatch: {
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeAddUserOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDeleteUserOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUpdateUserOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeRebootOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeReimageOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDisableSchedulingOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeEnableSchedulingOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteDesktopOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUploadBatchServiceLogsOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                type: {
                    name: string;
                };
            };
            select: {
                type: {
                    name: string;
                };
            };
            maxResults: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListPoolNodeCountsNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListNextOptions: {
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            applicationListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ApplicationGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            applicationGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ApplicationListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            applicationListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolListUsageMetricsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolGetAllLifetimeStatisticsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolGetAllLifetimeStatisticsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolAddOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolAddOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolDeleteMethodOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolExistsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolExistsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolPatchOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolPatchOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolDisableAutoScaleOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolDisableAutoScaleOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolEnableAutoScaleOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolEnableAutoScaleOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolEvaluateAutoScaleOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolResizeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolResizeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolStopResizeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolStopResizeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolUpdatePropertiesOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolUpdatePropertiesOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolUpgradeOSOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolUpgradeOSOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolRemoveNodesOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolRemoveNodesOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolListUsageMetricsNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const PoolListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            poolListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accountListNodeAgentSkusOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const AccountListPoolNodeCountsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accountListPoolNodeCountsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accountListNodeAgentSkusNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const AccountListPoolNodeCountsNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accountListPoolNodeCountsNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobGetAllLifetimeStatisticsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobGetAllLifetimeStatisticsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobDeleteMethodOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobPatchOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobPatchOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobUpdateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobDisableOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobDisableOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobEnableOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobEnableOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobTerminateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobTerminateParameter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobTerminateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobAddOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobAddOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListFromJobScheduleOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListPreparationAndReleaseTaskStatusOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobGetTaskCountsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobGetTaskCountsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListFromJobScheduleNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobListPreparationAndReleaseTaskStatusNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateAddOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateAddOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateCancelDeletionOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateCancelDeletionOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateDeleteMethodOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const CertificateListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromTaskOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            recursive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileDeleteFromTaskOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileGetFromTaskOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileGetFromTaskOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromTaskOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileGetPropertiesFromTaskOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromComputeNodeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            recursive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileDeleteFromComputeNodeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileGetFromComputeNodeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileGetFromComputeNodeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromComputeNodeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileGetPropertiesFromComputeNodeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            recursive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileListFromTaskOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            recursive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileListFromComputeNodeOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileListFromTaskNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fileListFromComputeNodeNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleExistsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleExistsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleDeleteMethodOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobSchedulePatchOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobSchedulePatchOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleUpdateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleDisableOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleDisableOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleEnableOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleEnableOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleTerminateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleTerminateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleAddOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleAddOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const JobScheduleListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobScheduleListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskAddOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskAddOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskAddCollectionOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskDeleteMethodOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskUpdateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskListSubtasksOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskListSubtasksOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskTerminateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskTerminateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskReactivateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskReactivateOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TaskListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeAddUserOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeAddUserOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDeleteUserOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeDeleteUserOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUpdateUserOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeUpdateUserOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeGetOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeRebootOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeRebootParameter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            computeNodeRebootOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeReimageOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeReimageParameter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            computeNodeReimageOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDisableSchedulingOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeDisableSchedulingParameter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            computeNodeDisableSchedulingOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeEnableSchedulingOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeEnableSchedulingOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeGetRemoteLoginSettingsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteDesktopOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeGetRemoteDesktopOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUploadBatchServiceLogsOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeUploadBatchServiceLogsOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeListOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListNextOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computeNodeListNextOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ApplicationListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListPoolNodeCountsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetAllLifetimeStatisticsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetAllLifetimeStatisticsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateAddHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateCancelDeletionHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateDeleteHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromTaskHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromTaskHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpCreationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileIsdirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentLength: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromTaskHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpCreationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileIsdirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentLength: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromComputeNodeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromComputeNodeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpCreationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileIsdirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentLength: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromComputeNodeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpCreationTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileIsdirectory: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ocpBatchFileMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentLength: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleExistsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDeleteHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobSchedulePatchHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleUpdateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDisableHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleEnableHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleTerminateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleAddHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDeleteHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPatchHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobUpdateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDisableHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobEnableHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobTerminateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobAddHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetTaskCountsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolAddHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDeleteHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolExistsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolPatchHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDisableAutoScaleHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEnableAutoScaleHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolResizeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolStopResizeHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpdatePropertiesHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpgradeOSHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolRemoveNodesHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskDeleteHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskUpdateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListSubtasksHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskTerminateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskReactivateHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeAddUserHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDeleteUserHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUpdateUserHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeRebootHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeReimageHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDisableSchedulingHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeEnableSchedulingHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dataServiceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteDesktopHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUploadBatchServiceLogsHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListHeaders: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudPoolListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolNodeCountsListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobListPreparationAndReleaseTaskStatusResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeFileListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobScheduleListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudTaskListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            odatanextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
