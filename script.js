const screen=document.querySelector('.screen');
const key=document.querySelectorAll('.key');
const bigKey=document.querySelectorAll('.big-key');
const circle=document.querySelectorAll('.circle');
const css = document.getElementsByTagName('link');
let operation = '';
let result = false;

circle.forEach(item => {
    item.addEventListener('click', () => {
        circle.forEach(item => {
            item.classList.remove('active-circle');
        })
        item.classList.add('active-circle');
        switch (item.id) {
            case '1stCircle':
                css[4].href = css[4].href.replace('theme2', 'theme1');
                css[4].href = css[4].href.replace('theme3', 'theme1');
                break
            case '2ndCircle':
                css[4].href = css[4].href.replace('theme1', 'theme2');
                css[4].href = css[4].href.replace('theme3', 'theme2');
                break
            case '3rdCircle':
                css[4].href = css[4].href.replace('theme1', 'theme3');
                css[4].href = css[4].href.replace('theme2', 'theme3');
                break
            default:
                null;
        };
    });
});

const del = () => {
    operation = screen.innerText.slice(0, -1);
    if (operation.length === 0) {
        operation = '';
        screen.innerText = '0';
    } else {
        screen.innerText = operation;
    };
};

const add = (displayValue) => {
    result = false;
    if (operation.length === 0) {
        operation = '';
    } else {
        switch (screen.innerText.charAt(screen.innerText.length-1)) {
            case '+' :
                screen.innerText = operation;
                break;
            case '-' :
                if (screen.innerText.charAt(screen.innerText.length-2) === 'x'
                    || screen.innerText.charAt(screen.innerText.length-2) === '/') {
                    screen.innerText = operation = screen.innerText.slice(0, -2) + '+';
                } else {
                    screen.innerText = operation = screen.innerText.slice(0, -1) + '+';
                }
                break;
            case 'x' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + '+';
                break;
            case '/' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + '+';
                break;
            default :
                screen.innerText = operation = operation + displayValue;
        };
    };
};

const remove = (displayValue) => {
    result = false;
    switch (screen.innerText.charAt(screen.innerText.length-1)) {
        case '+' :
            screen.innerText = operation = screen.innerText.slice(0, -1) + '-';
            break;
        case '-' :
            screen.innerText = operation;
            break;
        default :
            screen.innerText = operation = operation + displayValue;
    };
};

const multiplicate = (displayValue) => {
    result = false;
    if (operation.length === 0) {
        operation = '';
    } else {
        switch (screen.innerText.charAt(screen.innerText.length-1)) {
            case '+' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + 'x';
                break;
            case '-' :
                if (screen.innerText.charAt(screen.innerText.length-2) === 'x'
                    || screen.innerText.charAt(screen.innerText.length-2) === '/') {
                    screen.innerText = operation = screen.innerText.slice(0, -2) + 'x';
                } else {
                    screen.innerText = operation = screen.innerText.slice(0, -1) + 'x';
                }
                break;
            case 'x' :
                screen.innerText = operation;
                break;
            case '/' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + 'x';
                break;
            default :
                screen.innerText = operation = operation + displayValue;
        };
    };
};

const divide = (displayValue) => {
    result = false;
    if (operation.length === 0) {
        operation = '';
    } else {
        switch (screen.innerText.charAt(screen.innerText.length-1)) {
            case '+' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + '/';
                break;
            case '-' :
                if (screen.innerText.charAt(screen.innerText.length-2) === 'x'
                    || screen.innerText.charAt(screen.innerText.length-2) === '/') {
                    screen.innerText = operation = screen.innerText.slice(0, -2) + '/';
                } else {
                    screen.innerText = operation = screen.innerText.slice(0, -1) + '/';
                }
                break;
            case 'x' :
                screen.innerText = operation = screen.innerText.slice(0, -1) + '/';
                break;
            case '/' :
                screen.innerText = operation;
                break;
            default :
                screen.innerText = operation = operation + displayValue;
        };
    };
};

const zero = (displayValue) => {
    result = false;
    if (operation.length === 0) {
        operation = '';
    } else {
        screen.innerText = operation = operation + displayValue;
    };
};

const classicKey = (displayValue) => {
    if (result) {
        screen.innerText = operation = displayValue;
        result = false;
    } else {
        screen.innerText = operation = operation + displayValue;
    };
};

key.forEach(item => {
    item.addEventListener('click', () => {
        switch (item.innerText) {
            case 'DEL':
                del();
                break;
            case '+' :
                add(item.innerText);
                break;
            case '-' :
                remove(item.innerText);
                break;
            case 'x' :
                multiplicate(item.innerText);
                break;
            case '/' :
                divide(item.innerText);
                break;
            case '0' :
                zero(item.innerText);
                break;
            default:
                classicKey(item.innerText);
        };
    });
});

const reset = () => {
    screen.innerText = 0;
    operation = '';
};

const equal = () => {
    result = true;
    operation = operation.replaceAll('x', '*');
    operation = eval(operation);
    screen.innerText = operation;
}

bigKey.forEach(item => {
    item.addEventListener('click', () => {
        switch (item.innerText) {
            case 'RESET':
                reset();
                break;
            case '=':
                equal();
                break;
            default:
                null;
        };
    });
});

document.addEventListener('keydown', (event) => {
     switch (event.key) {
        case 'Delete':
        case 'Backspace':
            del();
            break;
        case 'Enter':
            equal();
            break;
        case 'Escape':
            reset();
            break;
        case '+' :
            add(event.key);
            break;
        case '-' :
            remove(event.key);
            break;
        case '*' :
            multiplicate('x');
            break;
        case '/' :
            divide(event.key);
            break;
        case '0' :
            zero(event.key);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            classicKey(event.key);
            break;
        default:
            null;
    }
})