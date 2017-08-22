import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchServiceClient } from '../batchServiceClient';
/** Class representing a CertificateOperations. */
export declare class CertificateOperations {
    private readonly client;
    /**
     * Create a CertificateOperations.
     * @param {BatchServiceClient} client Reference to the service client.
     */
    constructor(client: BatchServiceClient);
    /**
     * @summary Adds a certificate to the specified account.
     *
     * @param {object} certificate The certificate to be added.
     *
     * @param {string} certificate.thumbprint The X.509 thumbprint of the
     * certificate. This is a sequence of up to 40 hex digits (it may include
     * spaces but these are removed).
     *
     * @param {string} certificate.thumbprintAlgorithm The algorithm used to derive
     * the thumbprint. This must be sha1.
     *
     * @param {string} certificate.data The base64-encoded contents of the
     * certificate. The maximum size is 10KB.
     *
     * @param {string} [certificate.certificateFormat] The format of the
     * certificate data. Possible values include: 'pfx', 'cer'
     *
     * @param {string} [certificate.password] The password to access the
     * certificate's private key. This is required if the certificate format is
     * pfx. It should be omitted if the certificate format is cer.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateAddOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.certificateAddOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateAddOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateAddOptions.ocpDate] The time the request
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
    addWithHttpOperationResponse(certificate: Models.CertificateAddParameter, options?: {
        certificateAddOptions?: Models.CertificateAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.certificateListOptions.filter] An OData $filter
     * clause.
     *
     * @param {string} [options.certificateListOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.certificateListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 certificates
     * can be returned.
     *
     * @param {number} [options.certificateListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateListOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CertificateListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        certificateListOptions?: Models.CertificateListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Cancels a failed deletion of a certificate from the specified
     * account.
     *
     * If you try to delete a certificate that is being used by a pool or compute
     * node, the status of the certificate changes to deleteFailed. If you decide
     * that you want to continue using the certificate, you can use this operation
     * to set the status of the certificate back to active. If you intend to delete
     * the certificate, you do not need to run this operation after the deletion
     * failed. You must make sure that the certificate is not being used by any
     * resources, and then you can try again to delete the certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate being deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateCancelDeletionOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.certificateCancelDeletionOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.certificateCancelDeletionOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.certificateCancelDeletionOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateCancelDeletionOptions.ocpDate] The time
     * the request was issued. Client libraries typically set this to the current
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
    cancelDeletionWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: {
        certificateCancelDeletionOptions?: Models.CertificateCancelDeletionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Deletes a certificate from the specified account.
     *
     * You cannot delete a certificate if a resource (pool or compute node) is
     * using it. Before you can delete a certificate, you must therefore make sure
     * that the certificate is not associated with any existing pools, the
     * certificate is not installed on any compute nodes (even if you remove a
     * certificate from a pool, it is not removed from existing compute nodes in
     * that pool until they restart), and no running tasks depend on the
     * certificate. If you try to delete a certificate that is in use, the deletion
     * fails. The certificate status changes to deleteFailed. You can use Cancel
     * Delete Certificate to set the status back to active if you decide that you
     * want to continue using the certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to be deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateDeleteMethodOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.certificateDeleteMethodOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.certificateDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.certificateDeleteMethodOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateDeleteMethodOptions.ocpDate] The time the
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
    deleteMethodWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: {
        certificateDeleteMethodOptions?: Models.CertificateDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.certificateGetOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.certificateGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateGetOptions.ocpDate] The time the request
     * was issued. Client libraries typically set this to the current system clock
     * time; set it explicitly if you are calling the REST API directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Certificate>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: {
        certificateGetOptions?: Models.CertificateGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.certificateListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateListNextOptions.ocpDate] The time the
     * request was issued. Client libraries typically set this to the current
     * system clock time; set it explicitly if you are calling the REST API
     * directly.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CertificateListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        certificateListNextOptions?: Models.CertificateListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Adds a certificate to the specified account.
     *
     * @param {object} certificate The certificate to be added.
     *
     * @param {string} certificate.thumbprint The X.509 thumbprint of the
     * certificate. This is a sequence of up to 40 hex digits (it may include
     * spaces but these are removed).
     *
     * @param {string} certificate.thumbprintAlgorithm The algorithm used to derive
     * the thumbprint. This must be sha1.
     *
     * @param {string} certificate.data The base64-encoded contents of the
     * certificate. The maximum size is 10KB.
     *
     * @param {string} [certificate.certificateFormat] The format of the
     * certificate data. Possible values include: 'pfx', 'cer'
     *
     * @param {string} [certificate.password] The password to access the
     * certificate's private key. This is required if the certificate format is
     * pfx. It should be omitted if the certificate format is cer.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateAddOptions] Additional parameters for
     * the operation
     *
     * @param {number} [options.certificateAddOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateAddOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateAddOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateAddOptions.ocpDate] The time the request
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
    add(certificate: Models.CertificateAddParameter): Promise<void>;
    add(certificate: Models.CertificateAddParameter, options: {
        certificateAddOptions?: Models.CertificateAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    add(certificate: Models.CertificateAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(certificate: Models.CertificateAddParameter, options: {
        certificateAddOptions?: Models.CertificateAddOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateListOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.certificateListOptions.filter] An OData $filter
     * clause.
     *
     * @param {string} [options.certificateListOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.certificateListOptions.maxResults] The maximum
     * number of items to return in the response. A maximum of 1000 certificates
     * can be returned.
     *
     * @param {number} [options.certificateListOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateListOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateListOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateListOptions.ocpDate] The time the request
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
     *                      {CertificateListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CertificateListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CertificateListResult>;
    list(options: {
        certificateListOptions?: Models.CertificateListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CertificateListResult>;
    list(callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
    list(options: {
        certificateListOptions?: Models.CertificateListOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
    /**
     * @summary Cancels a failed deletion of a certificate from the specified
     * account.
     *
     * If you try to delete a certificate that is being used by a pool or compute
     * node, the status of the certificate changes to deleteFailed. If you decide
     * that you want to continue using the certificate, you can use this operation
     * to set the status of the certificate back to active. If you intend to delete
     * the certificate, you do not need to run this operation after the deletion
     * failed. You must make sure that the certificate is not being used by any
     * resources, and then you can try again to delete the certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate being deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateCancelDeletionOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.certificateCancelDeletionOptions.timeout] The
     * maximum time that the server can spend processing the request, in seconds.
     * The default is 30 seconds.
     *
     * @param {string} [options.certificateCancelDeletionOptions.clientRequestId]
     * The caller-generated request identity, in the form of a GUID with no
     * decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.certificateCancelDeletionOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateCancelDeletionOptions.ocpDate] The time
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
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string): Promise<void>;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateCancelDeletionOptions?: Models.CertificateCancelDeletionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<void>): void;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateCancelDeletionOptions?: Models.CertificateCancelDeletionOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Deletes a certificate from the specified account.
     *
     * You cannot delete a certificate if a resource (pool or compute node) is
     * using it. Before you can delete a certificate, you must therefore make sure
     * that the certificate is not associated with any existing pools, the
     * certificate is not installed on any compute nodes (even if you remove a
     * certificate from a pool, it is not removed from existing compute nodes in
     * that pool until they restart), and no running tasks depend on the
     * certificate. If you try to delete a certificate that is in use, the deletion
     * fails. The certificate status changes to deleteFailed. You can use Cancel
     * Delete Certificate to set the status back to active if you decide that you
     * want to continue using the certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to be deleted.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateDeleteMethodOptions] Additional
     * parameters for the operation
     *
     * @param {number} [options.certificateDeleteMethodOptions.timeout] The maximum
     * time that the server can spend processing the request, in seconds. The
     * default is 30 seconds.
     *
     * @param {string} [options.certificateDeleteMethodOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean}
     * [options.certificateDeleteMethodOptions.returnClientRequestId] Whether the
     * server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateDeleteMethodOptions.ocpDate] The time the
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
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string): Promise<void>;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateDeleteMethodOptions?: Models.CertificateDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateDeleteMethodOptions?: Models.CertificateDeleteMethodOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to get.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateGetOptions] Additional parameters for
     * the operation
     *
     * @param {string} [options.certificateGetOptions.select] An OData $select
     * clause.
     *
     * @param {number} [options.certificateGetOptions.timeout] The maximum time
     * that the server can spend processing the request, in seconds. The default is
     * 30 seconds.
     *
     * @param {string} [options.certificateGetOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateGetOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateGetOptions.ocpDate] The time the request
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
     *                      {Certificate} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Certificate} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(thumbprintAlgorithm: string, thumbprint: string): Promise<Models.Certificate>;
    get(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateGetOptions?: Models.CertificateGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.Certificate>;
    get(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<Models.Certificate>): void;
    get(thumbprintAlgorithm: string, thumbprint: string, options: {
        certificateGetOptions?: Models.CertificateGetOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.Certificate>): void;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.certificateListNextOptions] Additional parameters
     * for the operation
     *
     * @param {string} [options.certificateListNextOptions.clientRequestId] The
     * caller-generated request identity, in the form of a GUID with no decoration
     * such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     *
     * @param {boolean} [options.certificateListNextOptions.returnClientRequestId]
     * Whether the server should return the client-request-id in the response.
     *
     * @param {date} [options.certificateListNextOptions.ocpDate] The time the
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
     *                      {CertificateListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CertificateListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CertificateListResult>;
    listNext(nextPageLink: string, options: {
        certificateListNextOptions?: Models.CertificateListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CertificateListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
    listNext(nextPageLink: string, options: {
        certificateListNextOptions?: Models.CertificateListNextOptions;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
}
