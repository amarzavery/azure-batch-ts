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
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publisher: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            offer: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            version: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeAgentSku: {
    required: boolean;
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
            verifiedImageReferences: {
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
            osType: {
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
export declare const AuthenticationTokenSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
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
    };
};
export declare const UsageStatistics: {
    required: boolean;
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
    required: boolean;
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
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceStats: {
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
export declare const JobStatistics: {
    required: boolean;
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
    required: boolean;
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
export declare const DeleteCertificateError: {
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
            values: {
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
export declare const Certificate: {
    required: boolean;
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
            url: {
                required: boolean;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicData: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            deleteCertificateError: {
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
export declare const ApplicationPackageReference: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationSummary: {
    required: boolean;
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
                        required: boolean;
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
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
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
export declare const FileProperties: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            creationTime: {
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fileMode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeFile: {
    required: boolean;
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
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            isDirectory: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            properties: {
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
export declare const Schedule: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            doNotRunUntil: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            doNotRunAfter: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startWindow: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recurrenceInterval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobConstraints: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxWallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxTaskRetryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceFile: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EnvironmentSetting: {
    required: boolean;
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
export declare const ExitOptions: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            jobAction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            dependencyAction: {
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
export declare const ExitCodeMapping: {
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
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            exitCodes: {
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
            exitCodeRanges: {
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
            preProcessingError: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            fileUploadError: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            default: {
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
export declare const AutoUserSpecification: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            scope: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            elevationLevel: {
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
export declare const UserIdentity: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            userName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoUser: {
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
export declare const LinuxUserConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gid: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sshPrivateKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const UserAccount: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            linuxUserConfiguration: {
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
export declare const TaskConstraints: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxWallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxTaskRetryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OutputFileBlobContainerDestination: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            path: {
                required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            container: {
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
export declare const OutputFileUploadOptions: {
    required: boolean;
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
    required: boolean;
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
    required: boolean;
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
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceFiles: {
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
            outputFiles: {
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
            environmentSettings: {
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
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            killJobOnCompletion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            runExclusive: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationPackageReferences: {
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
            authenticationTokenSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            allowLowPriorityNode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPreparationTask: {
    required: boolean;
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
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceFiles: {
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
            environmentSettings: {
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
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            waitForSuccess: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            rerunOnNodeRebootAfterSuccess: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobReleaseTask: {
    required: boolean;
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
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceFiles: {
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
            environmentSettings: {
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
            maxWallClockTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            userIdentity: {
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
export declare const TaskSchedulingPolicy: {
    required: boolean;
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
    required: boolean;
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
            resourceFiles: {
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
            environmentSettings: {
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
            userIdentity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            maxTaskRetryCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            waitForSuccess: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateReference: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            storeName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            visibility: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
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
    };
};
export declare const MetadataItem: {
    required: boolean;
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
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            currentOSVersion: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OSDisk: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            imageUris: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            caching: {
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
export declare const WindowsConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            enableAutomaticUpdates: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineConfiguration: {
    required: boolean;
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
                required: boolean;
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
export declare const NetworkSecurityGroupRule: {
    required: boolean;
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
    required: boolean;
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
export declare const PoolEndpointConfiguration: {
    required: boolean;
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
export declare const NetworkConfiguration: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            subnetId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endpointConfiguration: {
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
export declare const PoolSpecification: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            displayName: {
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
            cloudServiceConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            maxTasksPerNode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableInterNodeCommunication: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                required: boolean;
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
                        required: boolean;
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
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            userAccounts: {
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
            metadata: {
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
export declare const AutoPoolSpecification: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            autoPoolIdPrefix: {
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pool: {
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
export declare const PoolInformation: {
    required: boolean;
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
            autoPoolSpecification: {
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
export declare const JobSpecification: {
    required: boolean;
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
            displayName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usesTaskDependencies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            onAllTasksComplete: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
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
            poolInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
export declare const RecentJob: {
    required: boolean;
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
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleExecutionInformation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nextRunTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recentJob: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            endTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleStatistics: {
    required: boolean;
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
    required: boolean;
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
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                required: boolean;
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
            creationTime: {
                required: boolean;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                required: boolean;
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
                type: {
                    name: string;
                    className: string;
                };
            };
            executionInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
            stats: {
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
export declare const JobScheduleAddParameter: {
    required: boolean;
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
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
export declare const JobSchedulingError: {
    required: boolean;
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
export declare const JobExecutionInformation: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            poolId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            schedulingError: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            terminateReason: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJob: {
    required: boolean;
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
            usesTaskDependencies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                required: boolean;
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
            creationTime: {
                required: boolean;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
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
            poolInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            onAllTasksComplete: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            metadata: {
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
            executionInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
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
export declare const JobAddParameter: {
    required: boolean;
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
            priority: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobManagerTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobPreparationTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            commonEnvironmentSettings: {
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
            poolInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            onAllTasksComplete: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            onTaskFailure: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            metadata: {
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
            usesTaskDependencies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskFailureInformation: {
    required: boolean;
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
export declare const JobPreparationTaskExecutionInformation: {
    required: boolean;
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
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failureInfo: {
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
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
export declare const JobReleaseTaskExecutionInformation: {
    required: boolean;
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
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failureInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            result: {
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
export declare const JobPreparationAndReleaseTaskExecutionInformation: {
    required: boolean;
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
            nodeId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            jobPreparationTaskExecutionInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            jobReleaseTaskExecutionInfo: {
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
export declare const TaskCounts: {
    required: boolean;
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
            values: {
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
export declare const AutoScaleRun: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
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
export declare const ResizeError: {
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
            values: {
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
export declare const CloudPool: {
    required: boolean;
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
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                required: boolean;
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
            creationTime: {
                required: boolean;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allocationState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            allocationStateTransitionTime: {
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
            cloudServiceConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resizeErrors: {
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
            currentDedicatedNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            currentLowPriorityNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleRun: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableInterNodeCommunication: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                required: boolean;
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
                        required: boolean;
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
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            maxTasksPerNode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userAccounts: {
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
            metadata: {
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
            stats: {
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
export declare const PoolAddParameter: {
    required: boolean;
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
            vmSize: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            cloudServiceConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resizeTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetDedicatedNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutoScale: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleFormula: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoScaleEvaluationInterval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableInterNodeCommunication: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkConfiguration: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTask: {
                required: boolean;
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
                        required: boolean;
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
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            applicationLicenses: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            maxTasksPerNode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskSchedulingPolicy: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userAccounts: {
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
            metadata: {
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
export declare const AffinityInformation: {
    required: boolean;
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
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failureInfo: {
                required: boolean;
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
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
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
export declare const ComputeNodeInformation: {
    required: boolean;
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
            nodeUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            poolId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectory: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskRootDirectoryUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const MultiInstanceSettings: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            numberOfInstances: {
                required: boolean;
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
export declare const TaskStatistics: {
    required: boolean;
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
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskIds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            taskIdRanges: {
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
export declare const CloudTask: {
    required: boolean;
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
            url: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            eTag: {
                required: boolean;
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
            creationTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitConditions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                required: boolean;
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
            resourceFiles: {
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
            outputFiles: {
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
            environmentSettings: {
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
            affinityInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userIdentity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            executionInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            nodeInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            multiInstanceSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dependsOn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationPackageReferences: {
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
            authenticationTokenSettings: {
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
export declare const TaskAddParameter: {
    required: boolean;
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
            commandLine: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitConditions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceFiles: {
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
            outputFiles: {
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
            environmentSettings: {
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
            affinityInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            userIdentity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            multiInstanceSettings: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dependsOn: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationPackageReferences: {
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
            authenticationTokenSettings: {
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
export declare const TaskAddCollectionParameter: {
    required: boolean;
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
export declare const ErrorMessage: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lang: {
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
export declare const BatchErrorDetail: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            key: {
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
export declare const BatchError: {
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
                    className: string;
                };
            };
            values: {
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
export declare const TaskAddResult: {
    required: boolean;
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
                required: boolean;
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
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
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
export declare const TaskAddCollectionResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
export declare const SubtaskInformation: {
    required: boolean;
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
            nodeInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
            exitCode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failureInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            previousState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            previousStateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
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
export declare const CloudTaskListSubtasksResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
export declare const TaskInformation: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            taskUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            jobId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            taskId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            subtaskId: {
                required: boolean;
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
export declare const StartTaskInformation: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exitCode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failureInfo: {
                required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            result: {
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
export declare const ComputeNodeError: {
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
            errorDetails: {
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
export declare const InboundEndpoint: {
    required: boolean;
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
    required: boolean;
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
export declare const ComputeNode: {
    required: boolean;
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
            url: {
                required: boolean;
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
            schedulingState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            stateTransitionTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastBootTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allocationTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            affinityId: {
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
            totalTasksRun: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            runningTasksCount: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            totalTasksSucceeded: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recentTasks: {
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
            startTask: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            startTaskInfo: {
                required: boolean;
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
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            errors: {
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
            isDedicated: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endpointConfiguration: {
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
export declare const ComputeNodeUser: {
    required: boolean;
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expiryTime: {
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
            sshPublicKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsResult: {
    required: boolean;
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
    required: boolean;
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
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
export declare const JobScheduleUpdateParameter: {
    required: boolean;
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
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
export declare const JobDisableParameter: {
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            terminateReason: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPatchParameter: {
    required: boolean;
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
            onAllTasksComplete: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            poolInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
export declare const JobUpdateParameter: {
    required: boolean;
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
            constraints: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            poolInfo: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            metadata: {
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
            onAllTasksComplete: {
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
export declare const PoolEnableAutoScaleParameter: {
    required: boolean;
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
            autoScaleEvaluationInterval: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleParameter: {
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetDedicatedNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetLowPriorityNodes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resizeTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeDeallocationOption: {
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
export declare const PoolUpdatePropertiesParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTask: {
                required: boolean;
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
                        required: boolean;
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
                        required: boolean;
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
export declare const PoolUpgradeOSParameter: {
    required: boolean;
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
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTask: {
                required: boolean;
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
                        required: boolean;
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
                        required: boolean;
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
export declare const TaskUpdateParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            constraints: {
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
export declare const NodeUpdateUserParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            password: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expiryTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sshPublicKey: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeRebootParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeRebootOption: {
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
export declare const NodeReimageParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeReimageOption: {
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
export declare const NodeDisableSchedulingParameter: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nodeDisableSchedulingOption: {
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
export declare const NodeRemoveParameter: {
    required: boolean;
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
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            resizeTimeout: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nodeDeallocationOption: {
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
export declare const ApplicationListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            endTime: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetAllLifetimeStatisticsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolAddOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDeleteMethodOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolExistsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolPatchOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolDisableAutoScaleOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEnableAutoScaleOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolEvaluateAutoScaleOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolResizeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolStopResizeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpdatePropertiesOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolUpgradeOSOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolRemoveNodesOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetAllLifetimeStatisticsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDeleteMethodOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobPatchOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobUpdateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobDisableOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobEnableOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobTerminateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobAddOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobGetTaskCountsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateAddOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateCancelDeletionOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateDeleteMethodOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromTaskOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromTaskOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ocpRange: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromTaskOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileDeleteFromComputeNodeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetFromComputeNodeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ocpRange: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileGetPropertiesFromComputeNodeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleExistsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDeleteMethodOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobSchedulePatchOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleUpdateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleDisableOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleEnableOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleTerminateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleAddOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskAddCollectionOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskDeleteMethodOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            expand: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskUpdateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListSubtasksOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskTerminateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskReactivateOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifModifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            ifUnmodifiedSince: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeAddUserOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDeleteUserOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeUpdateUserOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeRebootOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeReimageOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeDisableSchedulingOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeEnableSchedulingOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteLoginSettingsOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeGetRemoteDesktopOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            select: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            maxResults: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeout: {
                required: boolean;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListFromJobScheduleNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobListPreparationAndReleaseTaskStatusNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromTaskNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FileListFromComputeNodeNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const JobScheduleListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TaskListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListNextOptions: {
    required: boolean;
    type: {
        name: string;
        className: string;
        modelProperties: {
            clientRequestId: {
                required: boolean;
                type: {
                    name: string;
                };
            };
            returnClientRequestId: {
                required: boolean;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            ocpDate: {
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PoolListUsageMetricsResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudPoolListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccountListNodeAgentSkusResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobListPreparationAndReleaseTaskStatusResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CertificateListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NodeFileListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudJobScheduleListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CloudTaskListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ComputeNodeListResult: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            odatanextLink: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
