/**
 * Resource Manager API
 * The API of Resource Manager web application
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class ResourceFaultApi {
    protected basePath = 'http://localhost:8080/resource-manager-backend';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Creates a resource fault
     * Creates a resource fault in the database
     * @param body
     */
    public resourcefaultPost(body: models.ResourceFault, extraHttpRequestParams?: any): Observable<number> {
        return this.resourcefaultPostWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete a resource fault
     * Delete a resource fault by resourcefaultID
     * @param resourcefaultID The identifier of the resource fault to delete
     */
    public resourcefaultResourcefaultIDDelete(resourcefaultID: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.resourcefaultResourcefaultIDDeleteWithHttpInfo(resourcefaultID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single resource fault
     * Get a single resource fault
     * @param resourcefaultID
     */
    public resourcefaultResourcefaultIDGet(resourcefaultID: number, extraHttpRequestParams?: any): Observable<models.ResourceFault> {
        return this.resourcefaultResourcefaultIDGetWithHttpInfo(resourcefaultID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Edit a resource fault
     * Modify a resource fault by handling all the fields and the identifier
     * @param resourcefaultID The identifier of the resource fault to modify
     * @param body
     */
    public resourcefaultResourcefaultIDPut(resourcefaultID: number, body: models.ResourceFault, extraHttpRequestParams?: any): Observable<number> {
        return this.resourcefaultResourcefaultIDPutWithHttpInfo(resourcefaultID, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get all resource faults
     * Get all resource faults
     */
    public resourcefaultsGet(extraHttpRequestParams?: any): Observable<Array<models.ResourceFault>> {
        return this.resourcefaultsGetWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Creates a resource fault
     * Creates a resource fault in the database
     * @param body
     */
    public resourcefaultPostWithHttpInfo(body: models.ResourceFault, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourcefault';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling resourcefaultPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OauthSecurity) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete a resource fault
     * Delete a resource fault by resourcefaultID
     * @param resourcefaultID The identifier of the resource fault to delete
     */
    public resourcefaultResourcefaultIDDeleteWithHttpInfo(resourcefaultID: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourcefault/${resourcefaultID}'
                    .replace('${' + 'resourcefaultID' + '}', String(resourcefaultID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'resourcefaultID' is not null or undefined
        if (resourcefaultID === null || resourcefaultID === undefined) {
            throw new Error('Required parameter resourcefaultID was null or undefined when calling resourcefaultResourcefaultIDDelete.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OauthSecurity) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a single resource fault
     * Get a single resource fault
     * @param resourcefaultID
     */
    public resourcefaultResourcefaultIDGetWithHttpInfo(resourcefaultID: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourcefault/${resourcefaultID}'
                    .replace('${' + 'resourcefaultID' + '}', String(resourcefaultID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'resourcefaultID' is not null or undefined
        if (resourcefaultID === null || resourcefaultID === undefined) {
            throw new Error('Required parameter resourcefaultID was null or undefined when calling resourcefaultResourcefaultIDGet.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OauthSecurity) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Edit a resource fault
     * Modify a resource fault by handling all the fields and the identifier
     * @param resourcefaultID The identifier of the resource fault to modify
     * @param body
     */
    public resourcefaultResourcefaultIDPutWithHttpInfo(resourcefaultID: number, body: models.ResourceFault, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourcefault/${resourcefaultID}'
                    .replace('${' + 'resourcefaultID' + '}', String(resourcefaultID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'resourcefaultID' is not null or undefined
        if (resourcefaultID === null || resourcefaultID === undefined) {
            throw new Error('Required parameter resourcefaultID was null or undefined when calling resourcefaultResourcefaultIDPut.');
        }
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling resourcefaultResourcefaultIDPut.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OauthSecurity) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get all resource faults
     * Get all resource faults
     */
    public resourcefaultsGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourcefaults';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OauthSecurity) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
