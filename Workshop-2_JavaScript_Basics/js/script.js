
// Test 1: Basic Log test
console.log("Hello, World!");
alert("Welcome to the Workshop 2.");

//Test 2: Values or whatever.
const userName = "Johnny Doe";
const userAge = 20;
const userFavoriteColor = "Green";
const userFavoriteAnimal = "Bunny";

console.log("Name: " + userName + "\nAge: " + userAge + "\nFavorite Color: " + userFavoriteColor  + "\nFavorite Animal: " + userFavoriteAnimal );

//Test 3: Printing prompts.
const userPrompt = prompt("What is your name?");
console.log("Username logged: " + userPrompt);
alert("Welcome, " + userPrompt);

//Test 4: Basic Ifs & Elses. Note: Automatic assitance filled out my work. LAAAAME, but helpfull.
const userAgePrompt = prompt("How old are you?");
console.log("The automated system did my work for me. What a shame but there was nothing to be learnt anyway.");
if (userAgePrompt >= 18) {
    console.log("User is " + userAgePrompt + " years old. \nUser is considered an adult.");
    alert("You are an adult.");
} else {
    console.log("User is " + userAgePrompt + " years old. \nUser is not considered an adult.");
    alert("You are under 18.");
}

//Test 5: Function Test. A MEAN Function test.
// Notes: Forgot that Variable And Constant are two seperate things that behave differently.
//        Variable can be reused and changed, Constants cannot be changed in anyway once assigned. 
function whatsThePaternOfErrors(valuePatern, userName) {
    var loopCount = 0;
    console.log("Started.")
    if (valuePatern == 0) {
        alert("Value cannot be 0.");
        return false;
    }
    console.log("Starting the loop. Duration: " + ((((valuePatern / 3)* 10) - (((valuePatern / 3)* 10 ) % 1)) + 1) + " loops.");
    while (loopCount < (valuePatern / 3)* 10) {
        if ((loopCount % valuePatern) == 0) 
            {
            alert("HelIo " + userName + "!");
        } 
        else {
            alert("Hello " + userName + "!");
        }
        loopCount = loopCount + 1;
    };
    console.log("Ending the loop. Loop count: " + loopCount);
    var returnValue = prompt("Whats the patern of errors?");
    if (returnValue == valuePatern) {
        console.log("User has entered the correct value. Returning true.");
        return true;
    }
    else {
        console.log("User has entered the incorrect value. Returning false.");
        return false;
    }
}
while (true) {
    if (whatsThePaternOfErrors(7, userPrompt) == true)
        {
            alert("Correct.");
            break;
    }else {
            alert("BAAM! YOU ARE WRONG! BACK IN TO ZE LOOP.");
    }
};

//Test 6: Le Button.
function buttonClick() {
    alert("Basic Javascript test complete.");
    console.log("Button Pressed.");
}