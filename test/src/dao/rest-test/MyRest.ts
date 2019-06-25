/**
 *
 * 功能描述:
 *
 * @className MyRest
 * @projectName papio
 * @author yanshaowen
 * @date 2019/2/14 10:27
 */
import {
    Property,
    RequestMapping,
    RequestMethod,
    RequestParam,
    RestRemote,
    ReturnGenericsProperty
} from "../../../../src/PapioCommon";
class Standard<T> {
    @Property
    public code: number;
    @Property
    public message: string;
    @Property
    public data: T;
    constructor() {
        this.code = 0;
        this.message = "suc";
    }
}
@RestRemote({filepath: __dirname, name: "/member"})
export class MyRest {
    @RequestMapping({path: "visitor/login", method: RequestMethod.GET})
    @ReturnGenericsProperty(new Map<string, new () => object>().set("Standard", Standard).set("Standard.data", String))
    public getMemberInfo(@RequestParam id: number): Promise<Standard<number>> {
        return null;
    }
}
