import {DateUtil} from "../../../src/util/DateUtil";
import {expect} from "chai";
import {DateFormatEnum} from "../../../src/enums/DateFormatEnum";

describe("测试 DateUtil.test", () => {
    it("fromToday", async () => {
        expect(DateUtil.fromToday(1).getDate()).to.equal(7);
    });
    it("format DATETIME", async () => {
        expect(DateUtil.format(new Date("2019-02-23 11:02:01"), DateFormatEnum.DATETIME)).to.equal("2019-02-23 11:02:01");
    });
    it("format DATETIME", async () => {
        expect(DateUtil.format(new Date("2019-02-23 11:02:01.45"), DateFormatEnum.DATETIME)).to.equal("2019-02-23 11:02:01.100");
    });
    it("parse DATETIMES", async () => {
        expect(DateUtil.format(DateUtil.parse("2019-01-02 00:10:20.0", DateFormatEnum.DATETIMES), DateFormatEnum.DATETIMES)).to.equal("2019-01-02 00:10:20.000");
    });
    it("parse DATETIME", async () => {
        expect(DateUtil.format(DateUtil.parse("2019-01-02 00:10:20.19", DateFormatEnum.DATETIME), DateFormatEnum.DATETIME)).to.equal("2019-01-02 00:10:20");
    });
})
