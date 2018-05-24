namespace Aufgabe6 {
    window.addEventListener("load", init);
    let address: string = "http://localhost:8200";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkSearch");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: document.getElementsByTagName("select").item(0).value
        };
        let convert: string = JSON.stringify(studi);
        console.log(convert);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }

    function handleStateChangeInsert(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }


    function refresh(_event: Event): void {
        let xhr1: XMLHttpRequest = new XMLHttpRequest();
        xhr1.open("GET", address + "?command=refresh", true);
        xhr1.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr1.send();
    }    
    
    function handleStateChangeRefresh(_event: ProgressEvent): void {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = "";
            var xhr1: XMLHttpRequest = (<XMLHttpRequest>_event.target);
            if (xhr1.readyState == XMLHttpRequest.DONE) {
                let data: string = xhr1.response.toString();
                output.value += "Studi" + data + "\n";
            }
        }
}