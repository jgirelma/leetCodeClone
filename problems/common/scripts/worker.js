onmessage = (e) => {
    let fnString = `${e.data.code}\n${e.data.testcase}`;

    let fn = new Function(fnString);
    console.log(fn);
    fn();

    postMessage({status : 'complete'});
}