/**
 *
 * 功能描述:
 *
 * @className AxiosDataSource.test.ts
 * @projectName papio-common
 * @author yanshaowen
 * @date 2019/6/25 9:55
 */
import {AxiosDataSource} from "../../../../src/data/axios/AxiosDataSource";
import {AxiosConnection} from "../../../../src/data/axios/AxiosConnection";
import {Property} from "../../../../src/annotation/bean/Property";
import {RequestMethod} from "../../../../src/enums/RequestMethod";
import {HttpData} from "../../../../src/annotation/data/HttpData";
import {RequestMapping} from "../../../../src/annotation/mapping/RequestMapping";
import {IDataSource} from "type-interface";
import {Configuration} from "../../../../src/annotation/component/Configuration";
import {MapperScan} from "../../../../src/annotation/component/MapperScan";
import {Bean} from "../../../../src/annotation/initialize/Bean";

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
describe("http request", () => {
    it("error", async () => {

    })

})
