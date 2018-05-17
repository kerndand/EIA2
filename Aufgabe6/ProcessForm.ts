namespace L04_Interfaces {
    window.addEventListener("load", init);
 
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

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.studiengang + ", " + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    
   function search(_event: Event): void {
        let mtrkl: string = inputs[6].value;
        let studi: Studi = studiHomoAssoc[mtrkl];
        let output2: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        if (studi) {
            let line: string = mtrkl + ": ";
            line += studi.studiengang + ", " + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
                
            output2.value = line;
        } else {
            output2.value = "No Match";
        }
         
    }

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
   
}