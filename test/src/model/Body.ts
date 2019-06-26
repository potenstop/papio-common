import {JsonProperty} from "../../../src/annotation/bean/JsonProperty";

/**
 *
 * 功能描述:
 *
 * @className Body
 * @projectName papio-common
 * @author yanshaowen
 * @date 2019/6/26 10:48
 */
export class Body {
    @JsonProperty("id")
    private id: number;

    @JsonProperty("member_name")
    private memberName: string;

    public setId(id: number) {
        this.id = id;
    }
    public getId(): number {
        return this.id;
    }

    public setMemberName(memberName: string) {
        this.memberName = memberName;
    }
    public getMemberName(id: number): string {
        return this.memberName;
    }
}
