import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const seconds: string = tl.getInput('seconds', true);
        if (seconds == '') {
            tl.setResult(tl.TaskResult.Failed, 'Seconds field is empty');
            return;
        }
        console.log('Stop execution for ', seconds, ' seconds');
        await delay(Number(seconds));
        console.log('Continue execution');
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

function delay(seconds:number){
    var ms = seconds * 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}

run();