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
        <h2> Name: ${patientName} </h2>
        <h2>  Age: ${patientAge} </h2>
        <h2> Number: ${patientNumber} </h2>
        <h2> Address: ${patientAddress} </h2>
        <h2> Problem: ${patientProblem} </h2>
        <h2>Cost: ${patientCost}</h2>
    `;

}