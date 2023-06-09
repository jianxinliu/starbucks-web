/* tslint:disable */
/* eslint-disable */
/**
 * starbuck api
 * starbucks api
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddProductGroupHandlerRequest
 */
export interface AddProductGroupHandlerRequest {
    /**
     * 
     * @type {string}
     * @memberof AddProductGroupHandlerRequest
     */
    desc: string;
    /**
     * 
     * @type {string}
     * @memberof AddProductGroupHandlerRequest
     */
    name: string;
}

/**
 * Check if a given object implements the AddProductGroupHandlerRequest interface.
 */
export function instanceOfAddProductGroupHandlerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "desc" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AddProductGroupHandlerRequestFromJSON(json: any): AddProductGroupHandlerRequest {
    return AddProductGroupHandlerRequestFromJSONTyped(json, false);
}

export function AddProductGroupHandlerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddProductGroupHandlerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'desc': json['desc'],
        'name': json['name'],
    };
}

export function AddProductGroupHandlerRequestToJSON(value?: AddProductGroupHandlerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'desc': value.desc,
        'name': value.name,
    };
}

