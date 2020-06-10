//CodeMirror is declared out of function scope so tab-script can refresh 
//editor when tab is switched to test case
//codemirror does not load properly otherwise
let myCodeMirror;
let myTestCaseCodeMirror;
let mySolutionCodeMirror;
(() => {

    let myTextArea = document.getElementById("Editor");

    myCodeMirror = CodeMirror(myTextArea, {
        value: codeDefualt,
        lineNumbers: true,
        mode:  "javascript",
        styleActiveLine: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        keyMap: "sublime",
        
      });

    // myCodeMirror.toggleComment();
    
    let myTestCaseArea = document.getElementById("TestCases");

    myTestCaseCodeMirror = CodeMirror(myTestCaseArea, {
        value: testCaseDefualt,
        lineNumbers: true,
        mode:  "javascript",
        styleActiveLine: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        keyMap: "sublime",
    });

    let mySolutionArea = document.getElementById("Solution");

    mySolutionCodeMirror = CodeMirror(mySolutionArea, {
        value: solutionDefualt,
        lineNumbers: true,
        readOnly: true,
        mode:  "javascript"
    });
    
    
    let submitButton = document.getElementById("submit"); 

    submitButton.addEventListener("click", (e) => {
        let codeText = myCodeMirror.getValue();
        let testCaseText = myTestCaseCodeMirror.getValue();
        console.time('someFunction')
        run(codeText, testCaseText, 10000);
        console.timeEnd('someFunction')
    }); 
    
})();