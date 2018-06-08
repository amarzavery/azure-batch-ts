import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchServiceClientContext } from "../batchServiceClientContext";
/** Class representing a CertificateOperations. */
export declare class CertificateOperations {
    private readonly client;
    /**
     * Create a CertificateOperations.
     * @param {BatchServiceClientContext} client Reference to the service client.
     */
    constructor(client: BatchServiceClientContext);
    /**
     * @summary Adds a certificate to the specified account.
     *
     * @param {CertificateAddParameter} certificate The certificate to be added.
     *
     * @param {CertificateAddOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    addWithHttpOperationResponse(certificate: Models.CertificateAddParameter, options?: Models.CertificateAddOptionalParams): Promise<Models.CertificateAddResponse>;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {CertificateListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: Models.CertificateListOptionalParams): Promise<Models.CertificateListResponse>;
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
     * @param {CertificateCancelDeletionOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    cancelDeletionWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: Models.CertificateCancelDeletionOptionalParams): Promise<Models.CertificateCancelDeletionResponse>;
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
     * @param {CertificateDeleteMethodOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: Models.CertificateDeleteMethodOptionalParams): Promise<Models.CertificateDeleteResponse>;
    /**
     * Gets information about the specified certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to get.
     *
     * @param {CertificateGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(thumbprintAlgorithm: string, thumbprint: string, options?: Models.CertificateGetOptionalParams): Promise<Models.CertificateGetResponse>;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {CertificateListNextOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: Models.CertificateListNextOptionalParams): Promise<Models.CertificateListResponse>;
    /**
     * @summary Adds a certificate to the specified account.
     *
     * @param {CertificateAddParameter} certificate The certificate to be added.
     *
     * @param {CertificateAddOptionalParams} [options] Optional Parameters.
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
    add(certificate: Models.CertificateAddParameter): Promise<void>;
    add(certificate: Models.CertificateAddParameter, options: Models.CertificateAddOptionalParams): Promise<void>;
    add(certificate: Models.CertificateAddParameter, callback: msRest.ServiceCallback<void>): void;
    add(certificate: Models.CertificateAddParameter, options: Models.CertificateAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {CertificateListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CertificateListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CertificateListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.CertificateListResult>;
    list(options: Models.CertificateListOptionalParams): Promise<Models.CertificateListResult>;
    list(callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
    list(options: Models.CertificateListOptionalParams, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
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
     * @param {CertificateCancelDeletionOptionalParams} [options] Optional
     * Parameters.
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
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string): Promise<void>;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateCancelDeletionOptionalParams): Promise<void>;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<void>): void;
    cancelDeletion(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateCancelDeletionOptionalParams, callback: msRest.ServiceCallback<void>): void;
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
     * @param {CertificateDeleteMethodOptionalParams} [options] Optional
     * Parameters.
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
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string): Promise<void>;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified certificate.
     *
     * @param {string} thumbprintAlgorithm The algorithm used to derive the
     * thumbprint parameter. This must be sha1.
     *
     * @param {string} thumbprint The thumbprint of the certificate to get.
     *
     * @param {CertificateGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.Certificate} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Certificate} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(thumbprintAlgorithm: string, thumbprint: string): Promise<Models.Certificate>;
    get(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateGetOptionalParams): Promise<Models.Certificate>;
    get(thumbprintAlgorithm: string, thumbprint: string, callback: msRest.ServiceCallback<Models.Certificate>): void;
    get(thumbprintAlgorithm: string, thumbprint: string, options: Models.CertificateGetOptionalParams, callback: msRest.ServiceCallback<Models.Certificate>): void;
    /**
     * @summary Lists all of the certificates that have been added to the specified
     * account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {CertificateListNextOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.CertificateListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CertificateListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.CertificateListResult>;
    listNext(nextPageLink: string, options: Models.CertificateListNextOptionalParams): Promise<Models.CertificateListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
    listNext(nextPageLink: string, options: Models.CertificateListNextOptionalParams, callback: msRest.ServiceCallback<Models.CertificateListResult>): void;
}
