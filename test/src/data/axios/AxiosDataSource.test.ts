/**
 *
 * 功能描述:
 *
 * @className AxiosDataSource.test.ts
 * @projectName papio-common
 * @author yanshaowen
 * @date 2019/6/25 9:55
 */
import {Property} from "../../../../src/annotation/bean/Property";

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
class Member{
    @Property
    private memberId: number;
}
import "../../config/TestHttpConfiguration";
import { MyAxiso } from "../../dao/axiso/MyAxiso";
import {Body} from "../../model/Body";
describe("http request", () => {
    it("suc", async () => {
        let myAxiso = new MyAxiso();
        const result = await myAxiso.getMemberInfo("123456");
        console.log(result.data, typeof result.data)
        let body = new Body();
        body.setId(1)
        body.setMemberName("11")
        const result1 = await myAxiso.postTest(body);
        console.log(result)
    })

})
