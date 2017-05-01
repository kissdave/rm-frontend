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

import * as models from './models';

export interface RequestStatus {
    requestStatusID?: number;

    name?: string;

    description?: string;

    requests?: Array<models.Request>;

}
