let lastSavedCode = localStorage.getItem("code-1-two-sum");
let lastSavedTestCase = localStorage.getItem("test-case-1-two-sum");

(() => {
    if (lastSavedCode)
        myCodeMirror.setValue(lastSavedCode);

    if (lastSavedTestCase)
        myTestCaseCodeMirror.setValue(lastSavedTestCase);

    let debounceCodeSave = _.debounce(() => {
        localStorage.setItem("code-1-two-sum", myCodeMirror.getValue())
    }, 3000); 

    myCodeMirror.on("change", (e) => {
        debounceCodeSave();
    });

    let debounceTestCaseSave = _.debounce(() => {
        localStorage.setItem("test-case-1-two-sum", myTestCaseCodeMirror.getValue())
    }, 3000); 

    myTestCaseCodeMirror.on("change", (e) => {
        debounceTestCaseSave();
    });
})();