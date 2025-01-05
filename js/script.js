let string = "";
let inputField = document.querySelector('.input');

document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        switch (buttonText) {
            case '=':
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (error) {
                    inputField.value = "Error";
                }
                break;

            case 'C':
                string = "";
                inputField.value = string;
                break;

            case 'Del':
                string = string.slice(0, -1);
                inputField.value = string;
                break;

            case '%':
                try {
                    // If the last character is an operator, remove it before calculating percentage
                    const lastChar = string.charAt(string.length - 1);
                    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                        string = string.slice(0, -1);
                    }

                    string = (parseFloat(eval(string)) / 100).toString();
                    inputField.value = string;
                } catch (error) {
                    inputField.value = "Error";
                }
                break;

            default:
                string += buttonText;
                inputField.value = string;
                break;
        }
    });
});
