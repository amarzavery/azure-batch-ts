/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as operations from "./operations";

const packageName = "azure-batch-js";
const packageVersion = "0.1.0";

class BatchServiceClient extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;
  baseUri: string;

  // Operation groups
  application: operations.Application;
  pool: operations.Pool;
  account: operations.Account;
  job: operations.Job;
  certificate: operations.CertificateOperations;
  file: operations.File;
  jobSchedule: operations.JobSchedule;
  task: operations.Task;
  computeNode: operations.ComputeNodeOperations;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the BatchServiceClient class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.apiVersion = '2017-09-01.6.0';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'https://batch.core.windows.net';
    }
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.application = new operations.Application(this);
    this.pool = new operations.Pool(this);
    this.account = new operations.Account(this);
    this.job = new operations.Job(this);
    this.certificate = new operations.CertificateOperations(this);
    this.file = new operations.File(this);
    this.jobSchedule = new operations.JobSchedule(this);
    this.task = new operations.Task(this);
    this.computeNode = new operations.ComputeNodeOperations(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
}

export { BatchServiceClient, Models as BatchServiceModels, Mappers as BatchServiceMappers };
