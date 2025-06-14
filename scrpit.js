function checkResult() {
    var name = document.getElementById("studentID").value;
    var output = document.getElementById("output");

    var data = {
        "001": { name: "Sadalu Nawamina", marks: 100, result: "A+" },
        "002": { name: "Nethuja Minhas", marks: 88, result: "A+" },
        "003": { name: "Ridmal Gamage", marks: 78, result: "A" },
        "004": { name: "Binuka Senuth", marks: 92, result: "A+" },
        "005": { name: "Nethula Sandil", marks: 98, result: "A+" },
        "006": { name: "Kulindu", marks: 72, result: "B" },
        "007": { name: "Vidusha Randima", marks: 86, result: "A+" }
    };

    if (data[name]) {
        output.innerHTML = `<strong>Name:</strong> ${data[name].name} <br> 
                            <strong>Marks:</strong> ${data[name].marks} <br> 
                            <strong>Result:</strong> ${data[name].result}`;
    } else {
        output.innerHTML = "<span style='color: red;'>Invalid ID. Try Again.</span>";
    }
}