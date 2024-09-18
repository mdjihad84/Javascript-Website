function showData(){
    const patientName = document.getElementById('name').value;
    const patientAge = document.getElementById('age').value;
    const patientNumber = document.getElementById('number').value;
    const patientAddress = document.getElementById('address').value;
    const patientProblem = document.getElementById('problem').value;
    const patientCost = document.getElementById('cost').value;

    const containsNumber = /\d/;

    if (containsNumber.test(patientName)){
        alert("Names should not contain numbers. Please enter a valid name.");
        return;
    }

    if (patientName.trim() === ' ' ) {
        alert("Please enter valid name");
        return;
    }

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <h1> Name: ${patientName} </h1>
        <h1>  Age: ${patientAge} </h1>
        <h1> Number: ${patientNumber} </h1>
        <h1> Address: ${patientAddress} </h1>
        <h1> Problem: ${patientProblem} </h1>
        <h1>Cost: ${patientCost}</h1>
    `;

}