/**
 *
 * 功能描述:
 *
 * @className MyAxiso
 * @projectName papio-common
 * @author yanshaowen
 * @date 2019/6/26 9:33
 */
import {
    Property,
    RequestMapping,
    RequestMethod,
    RequestParam,
    AxisoRemote,
    ReturnGenericsProperty,
    JsonProperty,
    RequestBody,
} from "../../../../src/PapioCommon";
import { Body} from "../../model/Body"
class Standard<T> {
    @Property
    public code: string;
    @Property
    public message: string;
    @Property
    public data: T;
    constructor() {
        this.code = '0';
        this.message = "suc";
    }
}
@AxisoRemote({filepath: __dirname, name: "/member"})
export class MyAxiso {
    @RequestMapping({path: "visitor/login", method: RequestMethod.GET})
    @ReturnGenericsProperty(new Map<string, new () => object>().set("Standard", Standard).set("Standard.data", String))
    public getMemberInfo(@RequestParam("uuid") id: string): Promise<Standard<String>> {
        return null;
    }
    @RequestMapping({path: "visitor/login", method: RequestMethod.POST})
    @ReturnGenericsProperty(new Map<string, new () => object>().set("Standard", Standard).set("Standard.data", String))
    public postTest(@RequestBody body: Body): Promise<Standard<number>> {
        return null;
    }
}
