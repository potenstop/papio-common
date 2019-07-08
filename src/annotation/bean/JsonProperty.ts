/**
 *
 * 功能描述: json的名称
 *
 * @className JsonProperty
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/30 17:29
 */
import "reflect-metadata";
import {MetaConstant} from "../../constants/MetaConstant";
import {Property} from "./Property";
export function JsonProperty(target: object, propertyKey: string): void;
export function JsonProperty(value: string): CallableFunction;
export function JsonProperty(value: string | object, propertyKey?: string): CallableFunction {
    if (typeof value === 'string') {
        return (target: (new () => object), propertyKey: string) => {
            Property(target, propertyKey);
            Reflect.defineMetadata(MetaConstant.JSON_PROPERTY, value, target, propertyKey);
        };
    } else {
        Property(value, propertyKey);
    }


}
