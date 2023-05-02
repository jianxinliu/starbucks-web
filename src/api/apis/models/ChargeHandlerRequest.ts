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
 * @interface ChargeHandlerRequest
 */
export interface ChargeHandlerRequest {
    /**
     * 
     * @type {number}
     * @memberof ChargeHandlerRequest
     */
    amount: number;
}

/**
 * Check if a given object implements the ChargeHandlerRequest interface.
 */
export function instanceOfChargeHandlerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function ChargeHandlerRequestFromJSON(json: any): ChargeHandlerRequest {
    return ChargeHandlerRequestFromJSONTyped(json, false);
}

export function ChargeHandlerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeHandlerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
    };
}

export function ChargeHandlerRequestToJSON(value?: ChargeHandlerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
    };
}
