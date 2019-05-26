"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const seconds = tl.getInput('seconds', true);
            if (seconds == '') {
                tl.setResult(tl.TaskResult.Failed, 'Seconds field is empty');
                return;
            }
            console.log('Stop execution for ', seconds, ' seconds');
            yield delay(Number(seconds));
            console.log('Continue execution');
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
function delay(seconds) {
    var ms = seconds * 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}
run();
