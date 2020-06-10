let openTab;
(() => {
    
    openTab = (evt, tabName, left = true) => {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = left ? 0 : 3; i < (left ? 3 : 5); i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");

        for (i = left ? 0 : 3; i < (left ? 3 : 5); i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";

        evt.currentTarget.className += " active";
    }

    let tablinks_Descriptiondocument = document.getElementById("tablinks-Description");
    tablinks_Descriptiondocument.addEventListener('click', (e) => {
        openTab(e, 'Description');
    })

    let tablinks_Solution = document.getElementById("tablinks-Solution");
    tablinks_Solution.addEventListener('click', (e) => {
        openTab(e, 'Solution');
        mySolutionCodeMirror.refresh();
    })

    let tablinks_Submissions = document.getElementById("tablinks-Submissions");
    tablinks_Submissions.addEventListener('click', (e) => {
        openTab(e, 'Submissions');
    })

    let tablinks_Editor = document.getElementById("tablinks-Editor");
    tablinks_Editor.addEventListener('click', (e) => {
        openTab(e, 'Editor', false);
    })

    let tablinks_TestCases = document.getElementById("tablinks-TestCases");
    tablinks_TestCases.addEventListener('click', (e) => {
        openTab(e, 'TestCases', false);
        myTestCaseCodeMirror.refresh();
    })

})();