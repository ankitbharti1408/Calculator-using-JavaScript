let output = document.getElementById('output');
buttons = document.querySelectorAll('button');
let outputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            outputValue += buttonText;
            output.value = outputValue;
        }
        else if (buttonText == 'AC') {
            outputValue = "";
            output.value = outputValue;
        }
        else if (buttonText == '=') {
            output.value = eval(outputValue);
        }
        else {
            outputValue += buttonText;
            output.value = outputValue;
        }

    })
}

