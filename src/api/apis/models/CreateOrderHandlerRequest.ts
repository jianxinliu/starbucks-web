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
 * @interface CreateOrderHandlerRequest
 */
export interface CreateOrderHandlerRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderHandlerRequest
     */
    orderType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderHandlerRequest
     */
    productId: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOrderHandlerRequest
     */
    quantity: number;
}

/**
 * Check if a given object implements the CreateOrderHandlerRequest interface.
 */
export function instanceOfCreateOrderHandlerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderType" in value;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function CreateOrderHandlerRequestFromJSON(json: any): CreateOrderHandlerRequest {
    return CreateOrderHandlerRequestFromJSONTyped(json, false);
}

export function CreateOrderHandlerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrderHandlerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderType': json['orderType'],
        'productId': json['productId'],
        'quantity': json['quantity'],
    };
}

export function CreateOrderHandlerRequestToJSON(value?: CreateOrderHandlerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderType': value.orderType,
        'productId': value.productId,
        'quantity': value.quantity,
    };
}

