function connectName(){
    const myfunction1 = document.getElementById('text1').value;
    const myfunction2 = document.getElementById('text2').value;
    const myfunction3 = document.getElementById('text3').value;
    const myfunction4 = document.getElementById('text4').value;
    const myfunction5 = document.getElementById('text5').value;
    const myfunction6 = document.getElementById('text6').value;
    const myfunction7 = document.getElementById('text7').value;

    const containsNumber = /\d/;

    if (containsNumber.test(myfunction1) || containsNumber.test(myfunction2) || containsNumber.test(myfunction3)) {
        alert("Names should not contain numbers. Please enter a valid name.");
        return;
    }

    if (myfunction1.trim() === '' || myfunction2.trim() === '') {
        alert("Please enter both first and last name");
        return;
    }

    const sum = myfunction1 + ' ' + myfunction2 + ' ' + myfunction3 + ' ' + myfunction4 + ' ' + myfunction5 + ' ' + myfunction6 + ' ' + myfunction7;

    document.getElementById('result').innerText = 'User fullname is ' + sum
}