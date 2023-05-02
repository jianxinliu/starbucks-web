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
 * @interface CreateOrderResponseAllOf
 */
export interface CreateOrderResponseAllOf {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderResponseAllOf
     */
    orderId: string;
}

/**
 * Check if a given object implements the CreateOrderResponseAllOf interface.
 */
export function instanceOfCreateOrderResponseAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderId" in value;

    return isInstance;
}

export function CreateOrderResponseAllOfFromJSON(json: any): CreateOrderResponseAllOf {
    return CreateOrderResponseAllOfFromJSONTyped(json, false);
}

export function CreateOrderResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrderResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': json['orderId'],
    };
}

export function CreateOrderResponseAllOfToJSON(value?: CreateOrderResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderId': value.orderId,
    };
}

