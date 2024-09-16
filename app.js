function connectName(){
    const myfunction1 = document.getElementById('text1').value;
    const myfunction2 = document.getElementById('text2').value;
    const myfunction3 = document.getElementById('text3').value;

    const containsNumber = /\d/;

    if (containsNumber.test(myfunction1) || containsNumber.test(myfunction2) || containsNumber.test(myfunction3)) {
        alert("Names should not contain numbers. Please enter a valid name.");
        return;
    }

    if (myfunction1.trim() === '' || myfunction2.trim() === '') {
        alert("Please enter both first and last name");
        return;
    }

    document.getElementById('result').innerText = 'succesfull your all information '
}