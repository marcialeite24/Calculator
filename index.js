let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(action);

function action(button) {
    button.addEventListener('click', function(e){
        switch(e.target.innerText) {
            case 'C':
                display.innerHTML = '';
                break;
            case '←':
                display.innerHTML = display.innerText.slice(0,-1);
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerText);
                } catch (error) {
                    display.innerHTML = 'Error';
                    setTimeout(() => {  display.innerHTML = ''; }, 1000);                    
                }
                break;
            default:
                display.innerHTML += e.target.innerText;
        }

    });
} 