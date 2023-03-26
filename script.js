const buttons = document.querySelectorAll('.buttons button');
const screen = document.getElementById('screen');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id !== 'ce' && button.id !== 'del' && button.id !== 'equals' && button.id !== 'sqrt') {
            screen.value += button.textContent;
        }
    });
});

function validateInput(input) {
    const allowedChars = /^[0-9+\-*/().√]+$/;
    return allowedChars.test(input);
}

function calc() {
    if (!validateInput(screen.value)) {
        screen.value = "Invalid input";
        return;
    }
    try {
        const result = math.evaluate(screen.value);
        screen.value = result;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function sqrt() {
    const screen = document.getElementById('screen').value;
    document.getElementById('screen').value = math.sqrt(screen);
}


function deleteAll() {
    screen.value = '';

}
function deleteToken() {
    screen.value = screen.value.slice(0, -1);
}
