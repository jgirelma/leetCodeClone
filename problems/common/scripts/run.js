function run(code, testcase, timeout = 0) {
    let myWorker = new Worker("problems/common/scripts/worker.js");

    let timer = undefined;
    
    myWorker.onmessage = (e) => {
        clearTimeout(timer);
        const codeLength = (code.match(/\n/g) || '').length + 1;
        submissionHandler({...e.data, 'codeLength': codeLength});
    }

    myWorker.onerror = (e) => {
        console.log(e)
        clearTimeout(timer);
        const codeLength = (code.match(/\n/g) || '').length + 1;
        submissionHandler({err : e, 'codeLength': codeLength});
    }

    timer = setTimeout(() => {
        myWorker.terminate();
        myWorker = null;
        submissionHandler({'err': {'errmsg': 'tle'}});
    }, timeout)

    myWorker.postMessage({code: code, testcase: testcase});
}

function submissionHandler(e) {
    let submissonTabContentDiv = document.getElementById("Submissions")
    let tablinks_Submissions = document.getElementById("tablinks-Submissions");
    tablinks_Submissions.click();
    
    if (e.err) {
        let realLine = translateLineNumber(e.err.lineno,  e.codeLength);
        let msg = "<div><p>" + realLine <= e.codeLength ?  'Editor: ' : 'Test Cases: ';
        msg += `Line ${realLine}, ${e.err.message}`;
        submissonTabContentDiv.innerHTML = msg;
    } else {
        submissonTabContentDiv.innerHTML = "<p>All Tests Passed!</p>";
    }
}

function translateLineNumber(line, codeLength) {
    line -= 2; // I don't know why line numbers are += 2 where they are in codemirror?
    if (line <= codeLength)
        return line;
    else
        return line - codeLength;
}