/**
 *
 * 功能描述: Json 转换协议 识别JsonProperty装饰器
 *
 * @className JsonProtocol
 * @projectName papio
 * @author yanshaowen
 * @date 2018/12/30 17:48
 */
import "reflect-metadata";
import {MetaConstant} from "../constants/MetaConstant";
import {JSHelperUtil} from "../util/JSHelperUtil";
import {StringUtil} from "../util/StringUtil";
import {CommonConstant} from "../constants/CommonConstant";
import {IConverter} from "../converter/IConverter";

export class JsonProtocol {
    /**
     * 方法描述: bean 数组转json对象
     * @author  yanshaowen
     * @date 2018/12/30 17:50
     * @param beans 数组
     * @param beanGenericsMap
     * @param parentKey
     * @return JSON
     */
    public static toArray(beans: object[], beanGenericsMap: Map<string, new () => object>, parentKey: string): object[] {
        const result = [];
        if (JSHelperUtil.isNullOrUndefined(beans)) {
            return result;
        }
        // 检查泛型是否定义了
        if (JSHelperUtil.isNullOrUndefined(beanGenericsMap) || JSHelperUtil.isNullOrUndefined(beanGenericsMap.get(parentKey))) {
            return result;
        }
        for (const bean of beans) {
            let newBean;
            if (JSHelperUtil.isBaseType(beanGenericsMap.get(parentKey))) {
                // 基础类型的泛型 则直接赋值
                if (beanGenericsMap.get(parentKey) === Number) {
                    newBean = Number(bean);
                } else if (beanGenericsMap.get(parentKey) === String) {
                    newBean = String(bean);
                } else if (beanGenericsMap.get(parentKey) === Boolean) {
                    newBean = Boolean(bean);
                } else {
                    newBean = null;
                }
            } else {
                newBean = JsonProtocol.toJson(bean, beanGenericsMap, parentKey + "." + beanGenericsMap.get(parentKey).name);
            }
            result.push(newBean);

        }
        return result;
    }
    /**
     * 方法描述: bean 对象转json对象
     * @author  yanshaowen
     * @date 2018/12/30 17:50
     * @param bean 对象
     * @param beanGenericsMap   泛型字典
     * @param parentKey
     * @return JSON
     */
    public static toJson(bean: object, beanGenericsMap?: Map<string, new () => object>, parentKey?: string): object {
        const result = {};
        if (JSHelperUtil.isNullOrUndefined(bean)) {
            return result;
        }
        if (JSHelperUtil.isNullOrUndefined(parentKey)) {
            parentKey = bean.constructor.name;
        }
        const keysMap = Reflect.getOwnMetadata(MetaConstant.KEYS, bean.constructor.prototype) || new Set<string>();
        for (const key of keysMap) {
            let jsonKeyName = Reflect.getMetadata(MetaConstant.JSON_PROPERTY, bean, key);
            let typeName = Reflect.getMetadata(MetaConstant.DESIGN_TYPE, bean, key);
            // const GenericsKey = Reflect.getMetadata(MetaConstant.BEAN_GENERICS, bean, key);
            const genericsKey = parentKey + "." + key;
            if (StringUtil.isBank(jsonKeyName)) {
                jsonKeyName = key;
            }
            // 可能为泛型或者any
            if (typeName === Object) {
                // 判断是否有泛型字典
                if (JSHelperUtil.isNotNull(beanGenericsMap) && beanGenericsMap.has(genericsKey) && JSHelperUtil.isNotNull(beanGenericsMap.get(genericsKey))) {
                    typeName = beanGenericsMap.get(genericsKey);
                } else {
                    result[jsonKeyName] = null;
                    continue;
                }
            }
            if (JSHelperUtil.isClassType(typeName)) {
                result[jsonKeyName] = JsonProtocol.toJson(bean[key], beanGenericsMap, genericsKey + "." + typeName.name);
            } else if (JSHelperUtil.isArrayType(typeName) || JSHelperUtil.isSetType(typeName)) {
                result[jsonKeyName] = JsonProtocol.toArray(bean[key], beanGenericsMap, genericsKey + "." + (JSHelperUtil.isArrayType(typeName) ? "Array" : "Set"));
                // array set
            } else {
                if (bean[key] === undefined) { bean[key] = null; }
                result[jsonKeyName] = bean[key];
            }
        }
        return result;
    }
    /**
     * 方法描述: bean 对象转json字符串
     * @author  yanshaowen
     * @date 2018/12/30 17:50
     * @param bean 对象
     * @param beanGenericsMap   bean对象泛型字典
     * @param parentKey         父级key
     * @return JSON
     */
    public static toJSONString(bean: object, beanGenericsMap?: Map<string, new () => object>, parentKey?: string): string {
        return JSON.stringify(JsonProtocol.toJson(bean, beanGenericsMap, parentKey));
    }

    /**
     * 方法描述: JSON数组转bean集合
     * @author  yanshaowen
     * @date 2018/12/30 17:50
     * @param array  源jsonArray对象
     * @param Bean  目标bean对象
     * @param beanGenericsMap
     * @param parentKey
     * @return Bean[]
     */
    public static arrayToBeans<T>(array: object[], Bean: any, beanGenericsMap: Map<string, new () => object>, parentKey: string): T[] | Set<T> {
        let result;
        let isSet = true;
        if (JSHelperUtil.isArrayType(Bean)) {
            result = [];
            isSet = false;
        } else {
            result = new Set();
        }
        // 检查泛型是否定义了
        if (JSHelperUtil.isNullOrUndefined(beanGenericsMap) || JSHelperUtil.isNullOrUndefined(beanGenericsMap.get(parentKey))) {
            return result;
        }
        for (const bean of array) {
            let newBean;
            if (JSHelperUtil.isBaseType(beanGenericsMap.get(parentKey))) {
                // 基础类型的泛型 则直接赋值
                if (beanGenericsMap.get(parentKey) === Number) {
                    newBean = Number(bean);
                } else if (beanGenericsMap.get(parentKey) === String) {
                    newBean = String(bean);
                } else if (beanGenericsMap.get(parentKey) === Boolean) {
                    newBean = Boolean(bean);
                } else {
                    newBean = null;
                }
            } else {
                newBean = JsonProtocol.jsonToBean(bean, beanGenericsMap.get(parentKey), beanGenericsMap, parentKey + "." + beanGenericsMap.get(parentKey).name);
            }
            if (isSet) {
                result.add(newBean);
            } else {
                result.push(newBean);
            }
        }
        return result;
    }
    /**
     * 方法描述: JSON对象转bean对象
     * @author  yanshaowen
     * @date 2018/12/30 17:50
     * @param json  源json对象
     * @param Bean  目标bean对象
     * @param beanGenericsMap
     * @param parentKey
     * @return Bean
     */
    public static jsonToBean<T>(json: object, Bean: new () => T, beanGenericsMap: Map<string, new () => object>, parentKey?: string): T {
        if (JSHelperUtil.isNullOrUndefined(Bean)) {
            return null;
        }
        const result  = new Bean();
        if (JSHelperUtil.isNullOrUndefined(json)) {
            return result;
        }
        if (JSHelperUtil.isNullOrUndefined(parentKey)) {
            parentKey = Bean.name;
        }
        // 遍历bean所有的属性
        const keysMap = Reflect.getOwnMetadata(MetaConstant.KEYS, Bean.prototype) || new Set<string>();
        for (const key of keysMap) {
            let jsonKeyName = Reflect.getMetadata(MetaConstant.JSON_PROPERTY, Bean.prototype, key);
            let typeName = Reflect.getMetadata(MetaConstant.DESIGN_TYPE, Bean.prototype, key);
            // const GenericsIndex = Reflect.getMetadata(MetaConstant.BEAN_GENERICS, Bean.prototype, key);
            const genericsKey = parentKey + "." + key;
            if (JSHelperUtil.isNullOrUndefined(jsonKeyName)) {
                jsonKeyName = key;
            }
            // 可能为泛型或者any
            if (typeName === Object) {
                // 判断是否有泛型字典
                if (JSHelperUtil.isNotNull(beanGenericsMap) && beanGenericsMap.has(genericsKey) && JSHelperUtil.isNotNull(beanGenericsMap.get(genericsKey))) {
                    typeName = beanGenericsMap.get(genericsKey);
                } else {
                    result[key] = null;
                    continue;
                }
            }
            if (JSHelperUtil.isClassType(typeName)) {
                result[key] = JsonProtocol.jsonToBean(json[jsonKeyName], typeName,  beanGenericsMap, genericsKey + "." + typeName.name);
            } else if (JSHelperUtil.isArrayType(typeName) || JSHelperUtil.isSetType(typeName)) {
                // array set
                result[key] = JsonProtocol.arrayToBeans(json[jsonKeyName], typeName, beanGenericsMap, genericsKey + "." + (JSHelperUtil.isArrayType(typeName) ? "Array" : "Set"));
            } else {
                if (json[jsonKeyName] === undefined) { json[jsonKeyName] = null; }
                result[key] = json[jsonKeyName];
            }
        }
        return result;
    }
    /**
     * 方法功能描述: 根据返回值转换成bean对象
     * @author yanshaowen
     * @date 2019/2/19 10:18
     * @param value             转换的值
     * @param genericsProperty
     * @return
     */
    public static routerToBean(value: any, genericsProperty: Map<string, new () => object>): any {
        const genRoot = genericsProperty.get(CommonConstant.GENERICS_ROOT);
        if (JSHelperUtil.isNullOrUndefined(value)) {
            return null;
        } else if (JSHelperUtil.isBaseObject(value) && JSHelperUtil.isBaseType(genRoot)) {
            // 基础类型的泛型 则直接赋值
            if (genRoot === Number) {
                return Number(value);
            } else if (genRoot === String) {
                return String(value);
            } else if (genRoot === Boolean) {
                return Boolean(value);
            } else {
                return null;
            }
        } else if ((typeof value === "object" || typeof value === "string" ) && (JSHelperUtil.isClassType(genRoot) || Array === genRoot)) {
            let jsonParse;
            if (typeof value === "string") {
                try {
                    jsonParse = JSON.parse(value);
                } catch (e) {
                    throw new Error(`json parse error(${e.message},result(${value})`);
                }
            } else {
                jsonParse = value;
            }
            if (genRoot === Array) {
                return JsonProtocol.arrayToBeans(jsonParse, Array, genericsProperty, "Array");
            } else {
                return JsonProtocol.jsonToBean(jsonParse, genRoot, genericsProperty);
            }
        } else {
            throw new Error(`args ${value} error or genericsProperty error`);
        }
    }
    /**
     * 方法功能描述: 深拷贝bean对象
     * @author yanshaowen
     * @date 2019/2/22 9:25
     * @param sourceBean    源
     * @param targetBean    目标
     * @param converters    转换器
     * @return
     */
    public static copyProperties(sourceBean: object, targetBean: object, converters?: IConverter[]): void {
        if (!JSHelperUtil.isClassObject(sourceBean) || !JSHelperUtil.isClassObject(targetBean)) {
            throw new Error(`copy error,only support class to class.`);
        }
        // 加载converters
        const convertersMap = new Map<string, number>();
        if (converters) {
            converters.forEach((v, i) => {
                if (v.clazz && v.keys) {
                    v.keys.forEach((key) => {
                        convertersMap.set(key, i);
                    });
                }
            });
        }
        // source bean所有的属性
        const sourceKeys = Reflect.getOwnMetadata(MetaConstant.KEYS, sourceBean.constructor.prototype) || new Set<string>();
        // target bean所有的属性
        const targetKeys = Reflect.getOwnMetadata(MetaConstant.KEYS, targetBean.constructor.prototype) || new Set<string>();
        for (const key of sourceKeys) {
            if (targetKeys.has(key) ) {
                const sTypeName = Reflect.getMetadata(MetaConstant.DESIGN_TYPE, sourceBean.constructor.prototype, key);
                const tTypeName = Reflect.getMetadata(MetaConstant.DESIGN_TYPE, targetBean.constructor.prototype, key);
                // 先检查converter
                if (convertersMap.has(key)) {
                    const iConverter = converters[convertersMap.get(key)];
                    const clazz = iConverter.clazz;
                    if (clazz && clazz === sTypeName) {
                        targetBean[key] = iConverter.convert(key, sourceBean[key]);
                        continue;
                    }
                }
                if (JSHelperUtil.isBaseType(sTypeName)) {
                    if (sTypeName === tTypeName) {
                        targetBean[key] = sourceBean[key];
                    } else {
                        // 强制
                        try {
                            targetBean[key] = tTypeName(sourceBean[key]);
                        } catch (e) {

                        }
                    }
                }
            }
        }
    }
}
