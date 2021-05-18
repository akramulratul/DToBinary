const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binary(e){
    e.preventDefault(e);

    const num = document.getElementById('number').value;

    if(num === ''){
        alert('Please Enter a Number');
    }
    else if(num < 0){
        alert('Please Enter a positive number');
    } else{
        result.style.visibility = 'visible';
    }

// Converting
binaryNumber = Number(num).toString(2);
result.innerText = binaryNumber;


    console.log('clicked');
}
submit.addEventListener('click',binary);