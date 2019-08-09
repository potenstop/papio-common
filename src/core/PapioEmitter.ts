/**
 *
 * 功能描述:
 *
 * @className PapioEmitter
 * @projectName papio-common
 * @author yanshaowen
 * @date 2019/8/9 15:14
 */
import {EventEmitter} from "events";

class PapioEmitter extends EventEmitter {

}
const papioEmitter = new PapioEmitter();
export class PapioEmitterDefault {
    public static getDefault() {
        return papioEmitter;
    }
}
