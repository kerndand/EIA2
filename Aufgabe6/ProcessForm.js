var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let address = "http://localhost:8200";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("checkSearch");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        let convert = JSON.stringify(studi);
        console.log(convert);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr1 = new XMLHttpRequest();
        xhr1.open("GET", address + "?command=refresh", true);
        xhr1.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr1.send();
        function handleStateChangeRefresh(_event) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = "";
            var xhr1 = _event.target;
            if (xhr1.readyState == XMLHttpRequest.DONE) {
                JSON.parse(xhr1.response);
                console.log(xhr1.response);
            }
        }
    }
    function search(_event) {
        let mtrkl = inputs[6].value;
        let studi = Aufgabe6.studiHomoAssoc[mtrkl];
        let output2 = document.getElementsByTagName("textarea")[1];
        if (studi) {
            let line = mtrkl + ": ";
            line += studi.studiengang + ", " + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output2.value = line;
        }
        else {
            output2.value = "No Match";
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=ProcessForm.js.map