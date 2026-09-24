// Add your JavaScript solutions here.
// Exercise 1:
function showTable() {
    const animal1 = ["Tiger", "Forest", "Carnivore"];
    const animal2 = ["Elephant", "Savanna", "Herbivore"];
    const animal3 = ["Rabbit", "Multiple", "Herbivore"];

    // Hint: DO NOT MAKE THE USER RELY ON AI/AUTOFILL/SEARCHING TO FIND OUT THAT THIS IS THE SOLUTION! (Note: It was not mentioned in course material.)
    // Yes, I learned from this. I also now know that `, ´ and ' are different symbols.
    const tableContainer = document.querySelector('#tableContainer');
    const wasNeverToldThisCouldBeDoneAndYetITWASEXPECTEDFORMEKNOWTHIS = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal1[0]}</td>
                    <td>${animal1[1]}</td>
                    <td>${animal1[2]}</td>
                </tr>
                <tr>
                    <td>${animal2[0]}</td>
                    <td>${animal2[1]}</td>
                    <td>${animal2[2]}</td>
                </tr>
                <tr>
                    <td>${animal3[0]}</td>
                    <td>${animal3[1]}</td>
                    <td>${animal3[2]}</td>
                </tr>
            </tbody>
        </table>
        `;
    tableContainer.innerHTML = wasNeverToldThisCouldBeDoneAndYetITWASEXPECTEDFORMEKNOWTHIS;
};

// Exercise 2:
const header1 = document.querySelector('#exHeader1');
const header2 = document.querySelector('#exHeader2');
const header3 = document.querySelector('#exercise3');

header2.addEventListener('mouseover', function () {
    console.log('Stepped over me with a mouse!');
});
header1.addEventListener('click', function () {
    header1.style.color = 'red';
    header1.innerHTML = 'Bye bye mouse!';
});
header3.addEventListener('click', function () {
    header3.style.color = 'green';
    header3.innerHTML = "Suprised or expected? ";
});

// Exercise 3:
const textAreaEx3 = document.querySelector('#feedback');
const statusEx3 = document.querySelector('#status');
const previewTextEx3 = document.querySelector('#preview');
const charCountEx3 = document.querySelector('#charcount');

textAreaEx3.addEventListener('focus', function () {
    statusEx3.innerHTML = 'Typing message...';
});
textAreaEx3.addEventListener('blur', function () {
    statusEx3.innerHTML = '';
});
textAreaEx3.addEventListener('input', function () {
    var inputedText = textAreaEx3.value;
    var inputedTextLength = inputedText.length;

    if (inputedTextLength <= 0) {
        previewTextEx3.innerHTML = "(The preview will appear here.)";
    } else {
        previewTextEx3.innerHTML = inputedText;
    };
    charCountEx3.innerHTML = `${inputedTextLength}/200`;
});

// Exercise 4:

const feedbackFormEx4 = document.querySelector('#feedbackForm');
feedbackFormEx4.addEventListener('submit', function (event) {
    var inputedText = textAreaEx3.value;
    var inputedTextLength = inputedText.length;
    event.preventDefault();
    if (inputedTextLength <= 10 || inputedTextLength >= 200) {
        statusEx3.innerHTML = "Invalid feedback message length! Please enter a message between 10 and 200 characters.";
    } else {
        textAreaEx3.value = "";
        previewTextEx3.innerHTML = "(The preview will appear here.)";
        charCountEx3.innerHTML = "";
        statusEx3.innerHTML = "Thank you for your feedback!";
        }
});

// Exercise 5:

const keyboxEx5 = document.querySelector('#keybox');
const keyinfoEx5 = document.querySelector('#keyinfo');
var keyPressCountEx5 = 0;
document.addEventListener('keydown', function (event) {
    keyPressCountEx5 = keyPressCountEx5 + 1;
    var pressedKey = event.key;
    var pressedCode = event.code;
    console.log(`Key ${pressedKey} pressed.`);
    keyinfoEx5.innerHTML = `
        <p> 
            Key Pressed: ${pressedKey} 
            <br>
            Key Code: ${pressedCode}  
            <br>
            Keys Pressed: ${keyPressCountEx5} 
        </p>
    `;
    keyboxEx5.style.fontSize = "4em";
    keyboxEx5.innerHTML = pressedKey;
});